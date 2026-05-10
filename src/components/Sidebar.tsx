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

export default function Sidebar({
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
      {/* Logo */}
      <div className="px-4 py-5 border-b" style={{ borderColor: "var(--border)" }}>
        <span
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
        >
          SKINS.MD
        </span>
      </div>

      {/* New conversation */}
      <div className="px-3 py-3">
        <button
          onClick={onNewConversation}
          className="w-full py-2 px-3 rounded-[var(--radius)] text-sm font-medium transition-opacity hover:opacity-80"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          {activeSkin?.voice.clear_label ?? "New chat"}
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom controls */}
      <div className="px-3 py-4 space-y-3 border-t" style={{ borderColor: "var(--border)" }}>
        {/* Active skin */}
        <button
          onClick={onOpenSkinPicker}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-[var(--radius)] text-xs transition-opacity hover:opacity-80"
          style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
        >
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span className="truncate">{activeSkin?.metadata.name ?? "Minimal"}</span>
          <span className="ml-auto" style={{ color: "var(--muted)" }}>▾</span>
        </button>

        {/* Model selector */}
        <ModelSelector model={model} onChange={onModelChange} />

        {/* Export */}
        {messages.length > 0 && (
          <button
            onClick={() => exportConversation(messages, model)}
            className="w-full text-xs py-2 rounded-[var(--radius)] transition-opacity hover:opacity-70"
            style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
          >
            Export conversation
          </button>
        )}

        {/* API key indicator */}
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
