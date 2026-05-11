"use client";

import ModelSelector from "./ModelSelector";
import type { SkinConfig } from "@/lib/skin-parser";
import { exportConversation } from "@/lib/storage";
import type { ChatMessage } from "@/lib/openrouter";

interface Props {
  activeSkin: SkinConfig | null;
  model: string;
  onModelChange: (m: string) => void;
  onNewConversation: () => void;
  onOpenSkinPicker: () => void;
  onClearApiKey: () => void;
  messages: ChatMessage[];
  hasApiKey: boolean;
}

const NAV_ITEMS = [
  { icon: "+", label: "New session", action: "new" },
  { icon: "∿", label: "Routines", action: "none" },
  { icon: "≡", label: "Notes", action: "none" },
  { icon: "◈", label: "Artifacts", action: "none" },
  { icon: "⬡", label: "Databases", action: "none" },
  { icon: "✦", label: "Customize", action: "skin" },
  { icon: "···", label: "More", action: "none" },
];

const PERSONA_NAV_ITEMS = [
  { icon: "∿", label: "Routines", chevron: "›", action: "none" },
  { icon: "✦", label: "Customize", chevron: "›", action: "skin" },
  { icon: "···", label: "More", chevron: "∨", action: "none" },
];

function PersonaSidebar({
  activeSkin,
  model,
  onModelChange,
  onNewConversation,
  onOpenSkinPicker,
  messages,
}: Omit<Props, "onClearApiKey" | "hasApiKey">) {
  const persona = activeSkin?.persona;
  const xp = parseInt(persona?.user_xp ?? "0", 10);
  const xpMax = parseInt(persona?.user_xp_max ?? "2000", 10);
  const xpPct = Math.min(100, Math.round((xp / xpMax) * 100));

  const activeConversation =
    messages.length > 0
      ? (messages[0].content.slice(0, 28) + (messages[0].content.length > 28 ? "…" : ""))
      : null;

  const RECENTS_PLACEHOLDER = [
    persona?.nav_recent_1 ?? "Merge branch & push TestFlight",
    persona?.nav_recent_2 ?? "API authentication refactor",
    persona?.nav_recent_3 ?? "Add dark mode to mobile app",
    persona?.nav_recent_4 ?? "Optimize database queries",
  ];

  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "240px",
        minWidth: "240px",
        maxWidth: "240px",
        background: "linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)",
        borderRight: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
        boxShadow: "6px 0 40px color-mix(in srgb, var(--accent) 20%, transparent)",
        flexShrink: 0,
        overflow: "hidden",
        fontFamily: "var(--font-sans)",
        position: "relative",
      }}
    >
      {/* Top accent stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 70%, transparent), color-mix(in srgb, var(--accent) 40%, transparent), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: "16px 16px 14px",
          borderBottom: "1px solid color-mix(in srgb, var(--accent) 12%, transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "var(--border)",
              border: "2px solid color-mix(in srgb, var(--border) 50%, transparent)",
              boxShadow: "0 0 14px color-mix(in srgb, var(--border) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              flexShrink: 0,
            }}
          >
            {persona?.sidebar_icon ?? "🚢"}
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--accent)",
              textShadow: "0 0 20px color-mix(in srgb, var(--accent) 50%, transparent)",
              lineHeight: 1,
            }}
          >
            {persona?.sidebar_name ?? "DEEPNET"}
          </span>
        </div>
        {persona?.sidebar_tagline && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "8px",
              letterSpacing: "0.18em",
              color: "color-mix(in srgb, var(--accent) 40%, transparent)",
              textTransform: "uppercase",
              paddingLeft: "58px",
            }}
          >
            {persona.sidebar_tagline}
          </div>
        )}
      </div>

      {/* Nav tabs */}
      <div
        style={{
          display: "flex",
          padding: "10px 8px 0",
          gap: "4px",
          borderBottom: "1px solid color-mix(in srgb, var(--accent) 12%, transparent)",
        }}
      >
        {["CHAT", "COWORK", "CODE"].map((tab) => (
          <button
            key={tab}
            style={{
              flex: 1,
              padding: "7px 4px",
              borderRadius: "4px 4px 0 0",
              border: tab === "CHAT" ? "none" : `1px solid color-mix(in srgb, var(--fg) 18%, transparent)`,
              borderBottom: "none",
              background: tab === "CHAT" ? "var(--border)" : "transparent",
              color: tab === "CHAT" ? "#ffffff" : "color-mix(in srgb, var(--fg) 28%, transparent)",
              fontFamily: "var(--font-display)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.10em",
              cursor: tab === "CHAT" ? "default" : "not-allowed",
              boxShadow: tab === "CHAT" ? "0 2px 10px color-mix(in srgb, var(--border) 45%, transparent)" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* NEW SESSION — prominent CTA */}
      <div style={{ padding: "10px 8px 4px" }}>
        <button
          onClick={onNewConversation}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "10px 14px",
            borderRadius: "6px",
            border: "none",
            background: "var(--border)",
            color: "#ffffff",
            fontFamily: "var(--font-display)",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            cursor: "pointer",
            boxShadow: "0 2px 14px color-mix(in srgb, var(--border) 45%, transparent), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.filter = "none";
          }}
        >
          <span>+ NEW SESSION</span>
          <span style={{ fontSize: "16px", opacity: 0.9 }}>›</span>
        </button>
      </div>

      {/* Nav items */}
      <div style={{ padding: "4px 8px 0", display: "flex", flexDirection: "column", gap: "1px" }}>
        {PERSONA_NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={
              item.action === "skin"
                ? onOpenSkinPicker
                : undefined
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "8px 10px",
              borderRadius: "6px",
              border: "none",
              background: "transparent",
              color: "color-mix(in srgb, var(--fg) 65%, transparent)",
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              cursor: item.action !== "none" ? "pointer" : "default",
              textAlign: "left",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              if (item.action !== "none") {
                (e.currentTarget as HTMLButtonElement).style.background = "color-mix(in srgb, var(--accent) 8%, transparent)";
                (e.currentTarget as HTMLButtonElement).style.color = "color-mix(in srgb, var(--accent) 90%, transparent)";
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "color-mix(in srgb, var(--fg) 65%, transparent)";
            }}
          >
            <span style={{ fontSize: "13px", width: "16px", textAlign: "center", opacity: 0.75 }}>
              {item.icon}
            </span>
            <span style={{ flex: 1 }}>{item.label}</span>
            <span style={{ fontSize: "12px", opacity: 0.45 }}>{item.chevron}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: "1px", margin: "8px 10px 0", background: "color-mix(in srgb, var(--accent) 12%, transparent)" }} />

      {/* PINNED */}
      <div style={{ padding: "10px 18px 6px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "color-mix(in srgb, var(--accent) 35%, transparent)",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          PINNED
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "color-mix(in srgb, var(--fg) 35%, transparent)",
            fontSize: "12px",
            fontStyle: "italic",
          }}
        >
          <span style={{ fontSize: "10px" }}>✦</span>
          Drag to pin
        </div>
      </div>

      {/* RECENTS */}
      <div style={{ padding: "10px 18px 8px", flex: 1, overflow: "hidden" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "color-mix(in srgb, var(--accent) 35%, transparent)",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          RECENTS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {activeConversation && (
            <div
              style={{
                padding: "6px 8px",
                borderRadius: "6px",
                background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                borderLeft: "2px solid color-mix(in srgb, var(--accent) 60%, transparent)",
                color: "color-mix(in srgb, var(--fg) 90%, transparent)",
                fontSize: "12px",
                cursor: "default",
              }}
            >
              {activeConversation}
            </div>
          )}
          {RECENTS_PLACEHOLDER.map((title, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 8px",
                borderRadius: "6px",
                color: "color-mix(in srgb, var(--fg) 45%, transparent)",
                fontSize: "12px",
                cursor: "default",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "color-mix(in srgb, var(--accent) 50%, transparent)",
                  flexShrink: 0,
                }}
              />
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {title}
              </span>
              <span style={{ fontSize: "10px", opacity: 0.35 }}>···</span>
            </div>
          ))}
          <button
            style={{
              width: "100%",
              padding: "6px 8px",
              marginTop: "6px",
              borderRadius: "4px",
              border: "1px solid color-mix(in srgb, var(--accent) 18%, transparent)",
              background: "transparent",
              color: "color-mix(in srgb, var(--accent) 40%, transparent)",
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              textAlign: "center" as const,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "color-mix(in srgb, var(--accent) 40%, transparent)";
              (e.currentTarget as HTMLButtonElement).style.color = "color-mix(in srgb, var(--accent) 70%, transparent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "color-mix(in srgb, var(--accent) 18%, transparent)";
              (e.currentTarget as HTMLButtonElement).style.color = "color-mix(in srgb, var(--accent) 40%, transparent)";
            }}
          >
            VIEW ALL RECENTS
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div
        style={{
          padding: "10px 10px 8px",
          borderTop: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Model selector */}
        <ModelSelector model={model} onChange={onModelChange} />

        {/* User profile row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 8px 6px",
            borderTop: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)",
            marginTop: "2px",
          }}
        >
          {/* Avatar + PROFILE label */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "6px",
                letterSpacing: "0.12em",
                color: "color-mix(in srgb, var(--accent) 35%, transparent)",
                textTransform: "uppercase",
              }}
            >
              PROFILE
            </div>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, var(--bg)), var(--bg))",
                border: "1.5px solid color-mix(in srgb, var(--accent) 40%, transparent)",
                boxShadow: "0 0 12px color-mix(in srgb, var(--accent) 18%, transparent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "15px",
                flexShrink: 0,
              }}
            >
              {persona?.sidebar_icon ?? "✦"}
            </div>
          </div>

          {/* Name + role + XP */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--fg)",
                textTransform: "uppercase",
                lineHeight: 1.1,
              }}
            >
              {persona?.user_name ?? "YOU"}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "8px",
                color: "color-mix(in srgb, var(--accent) 45%, transparent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              {persona?.user_role ?? "EXPLORER"}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px", marginBottom: "3px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "7px", color: "rgba(0,229,255,0.45)", letterSpacing: "0.08em" }}>
                {persona?.user_level ?? "LVL 1"}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "7px", color: "rgba(0,229,255,0.35)" }}>
                {xp}/{xpMax} XP
              </span>
            </div>
            <div
              style={{
                height: "6px",
                background: "rgba(0,229,255,0.08)",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.40)",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${xpPct}%`,
                  background: "linear-gradient(90deg, #00e5ff, #3b82f6)",
                  borderRadius: "4px",
                  boxShadow: "0 0 8px rgba(0,229,255,0.55)",
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>

          {/* Status indicator */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                color: "color-mix(in srgb, var(--accent) 70%, transparent)",
                lineHeight: 1,
              }}
            >
              ⊛
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "7px",
                letterSpacing: "0.10em",
                color: "var(--success)",
                textTransform: "uppercase",
                textShadow: "0 0 8px var(--success)",
              }}
            >
              ONLINE
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function DefaultSidebar({
  activeSkin,
  model,
  onModelChange,
  onNewConversation,
  onOpenSkinPicker,
  onClearApiKey,
  messages,
  hasApiKey,
}: Props) {
  return (
    <aside
      className="surface-card flex flex-col h-full border-r"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "var(--sidebar-width)",
        minWidth: "200px",
        maxWidth: "260px",
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        fontFamily: "var(--font-sans)",
        flexShrink: 0,
      }}
    >
      <div className="px-4 py-5 border-b" style={{ borderColor: "var(--border)" }}>
        <span
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
        >
          SKINS.MD
        </span>
      </div>

      <div className="px-3 py-3">
        <button
          onClick={onNewConversation}
          className="w-full py-2 px-3 rounded-[var(--radius)] text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          {activeSkin?.voice.clear_label ?? "New chat"}
        </button>
      </div>

      <div className="flex-1" />

      <div className="px-3 py-4 space-y-3 border-t" style={{ borderColor: "var(--border)" }}>
        <button
          onClick={onOpenSkinPicker}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-[var(--radius)] text-xs transition-opacity hover:opacity-80"
          style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
        >
          <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
          <span className="truncate">{activeSkin?.metadata.name ?? "Minimal"}</span>
          <span className="ml-auto" style={{ color: "var(--muted)" }}>▾</span>
        </button>

        <ModelSelector model={model} onChange={onModelChange} />

        {messages.length > 0 && (
          <button
            onClick={() => exportConversation(messages, model)}
            className="w-full text-xs py-2 rounded-[var(--radius)] transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
          >
            Export conversation
          </button>
        )}

        {hasApiKey && (
          <button
            onClick={onClearApiKey}
            className="w-full text-xs py-1 transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)" }}
          >
            Key set · reset
          </button>
        )}
      </div>
    </aside>
  );
}

export default function Sidebar(props: Props) {
  if (props.activeSkin?.persona?.sidebar_name) {
    return <PersonaSidebar {...props} />;
  }
  return <DefaultSidebar {...props} />;
}
