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
          padding: "18px 16px 12px",
          borderBottom: "1px solid color-mix(in srgb, var(--accent) 12%, transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "22px" }}>{persona?.sidebar_icon ?? "🚢"}</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "var(--accent)",
              textShadow: "0 0 16px color-mix(in srgb, var(--accent) 50%, transparent)",
            }}
          >
            {persona?.sidebar_name ?? "DEEPNET"}
          </span>
        </div>
        {persona?.sidebar_tagline && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.16em",
              color: "color-mix(in srgb, var(--accent) 50%, transparent)",
              textTransform: "uppercase",
              paddingLeft: "32px",
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
          padding: "10px 10px 0",
          gap: "4px",
          borderBottom: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)",
        }}
      >
        {["CHAT", "COWORK", "CODE"].map((tab) => (
          <button
            key={tab}
            style={{
              flex: 1,
              padding: "6px 4px",
              borderRadius: "6px 6px 0 0",
              border: "none",
              background: tab === "CHAT" ? "color-mix(in srgb, var(--accent) 14%, transparent)" : "transparent",
              color: tab === "CHAT" ? "var(--accent)" : "color-mix(in srgb, var(--fg) 35%, transparent)",
              fontFamily: "var(--font-display)",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              cursor: tab === "CHAT" ? "default" : "not-allowed",
              borderBottom: tab === "CHAT" ? "2px solid color-mix(in srgb, var(--accent) 60%, transparent)" : "2px solid transparent",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Nav items */}
      <div style={{ padding: "8px 8px 0", display: "flex", flexDirection: "column", gap: "2px" }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={
              item.action === "new"
                ? onNewConversation
                : item.action === "skin"
                ? onOpenSkinPicker
                : undefined
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "7px 10px",
              borderRadius: "7px",
              border: "none",
              background: "transparent",
              color: "color-mix(in srgb, var(--fg) 70%, transparent)",
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
              (e.currentTarget as HTMLButtonElement).style.color = "color-mix(in srgb, var(--fg) 70%, transparent)";
            }}
          >
            <span style={{ fontSize: "13px", width: "16px", textAlign: "center", opacity: 0.8 }}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* PINNED */}
      <div style={{ padding: "14px 18px 6px" }}>
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
                padding: "5px 8px",
                borderRadius: "6px",
                color: "color-mix(in srgb, var(--fg) 45%, transparent)",
                fontSize: "12px",
                cursor: "default",
              }}
            >
              {title}
            </div>
          ))}
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

        {/* User avatar row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 8px 4px",
            borderTop: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)",
            marginTop: "2px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--surface), var(--bg))",
              border: "2px solid color-mix(in srgb, var(--accent) 35%, transparent)",
              boxShadow: "0 0 10px color-mix(in srgb, var(--accent) 20%, transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              flexShrink: 0,
            }}
          >
            🧑‍🚀
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.10em",
                color: "var(--fg)",
                textTransform: "uppercase",
              }}
            >
              {persona?.user_name ?? "YOU"}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "color-mix(in srgb, var(--accent) 45%, transparent)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              {persona?.user_role ?? "OCEAN EXPLORER"} LVL {persona?.user_level ?? "1"}
            </div>
            <div
              style={{
                height: "4px",
                background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${xpPct}%`,
                  background: "color-mix(in srgb, var(--accent) 70%, transparent)",
                  borderRadius: "2px",
                  boxShadow: "0 0 6px color-mix(in srgb, var(--accent) 50%, transparent)",
                  transition: "width 1s ease",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "8px",
                color: "color-mix(in srgb, var(--accent) 35%, transparent)",
                marginTop: "2px",
              }}
            >
              {xp} / {xpMax} XP
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
