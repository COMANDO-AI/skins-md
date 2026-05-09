"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ApiKeyModal from "./ApiKeyModal";
import Sidebar from "./Sidebar";
import Message from "./Message";
import SkinPicker from "./SkinPicker";
import { parseSkin, type SkinConfig } from "@/lib/skin-parser";
import { injectSkin } from "@/lib/skin-injector";
import { streamChat, type ChatMessage } from "@/lib/openrouter";
import {
  getApiKey,
  setActiveSkin,
  getActiveSkin,
  getActiveModel,
  setActiveModel,
  getConversation,
  setConversation,
  clearConversation,
  clearApiKey,
  getCustomSkins,
} from "@/lib/storage";

// Bundled skin raw content — imported at build time
import nbaRaw from "../../skins/nba.md";
import starWarsRaw from "../../skins/star-wars.md";
import underTheSeaRaw from "../../skins/under-the-sea.md";
import woodRaw from "../../skins/wood.md";
import minimalRaw from "../../skins/minimal.md";
import brutalistRaw from "../../skins/brutalist.md";
import zenRaw from "../../skins/zen.md";

const BUILT_IN_SKINS = [
  { slug: "minimal", raw: minimalRaw as string },
  { slug: "nba", raw: nbaRaw as string },
  { slug: "star-wars", raw: starWarsRaw as string },
  { slug: "under-the-sea", raw: underTheSeaRaw as string },
  { slug: "wood", raw: woodRaw as string },
  { slug: "brutalist", raw: brutalistRaw as string },
  { slug: "zen", raw: zenRaw as string },
];

function buildSkinEntries(customRaws: Record<string, string>) {
  const entries = BUILT_IN_SKINS.map(({ slug, raw }) => {
    const config = parseSkin(raw, slug);
    return config ? { slug, config } : null;
  }).filter((e): e is { slug: string; config: SkinConfig } => e !== null);

  for (const [slug, raw] of Object.entries(customRaws)) {
    const config = parseSkin(raw, slug);
    if (config) entries.push({ slug, config });
  }
  return entries;
}

export default function ChatInterface() {
  const [apiKey, setApiKeyState] = useState<string | null>(null);
  const [skinEntries, setSkinEntries] = useState<{ slug: string; config: SkinConfig }[]>([]);
  const [activeSkinSlug, setActiveSkinSlug] = useState("minimal");
  const [activeSkinConfig, setActiveSkinConfig] = useState<SkinConfig | null>(null);
  const [model, setModelState] = useState("anthropic/claude-sonnet-4-6");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [showSkinPicker, setShowSkinPicker] = useState(false);
  const [showApiModal, setShowApiModal] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Boot
  useEffect(() => {
    const key = getApiKey();
    setApiKeyState(key);
    if (!key) setShowApiModal(true);

    const slug = getActiveSkin();
    const mdl = getActiveModel();
    const msgs = getConversation();
    const customRaws = getCustomSkins();

    setActiveSkinSlug(slug);
    setModelState(mdl);
    setMessages(msgs);

    const entries = buildSkinEntries(customRaws);
    setSkinEntries(entries);

    const found = entries.find((e) => e.slug === slug) ?? entries[0];
    if (found) {
      setActiveSkinConfig(found.config);
      injectSkin(found.config);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  const applySkin = useCallback((slug: string, config: SkinConfig) => {
    setActiveSkinSlug(slug);
    setActiveSkinConfig(config);
    setActiveSkin(slug);
    injectSkin(config);
  }, []);

  async function sendMessage() {
    if (!input.trim() || streaming || !apiKey) return;

    const userMsg: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setConversation(updated);
    setInput("");

    setStreaming(true);
    const assistantMsg: ChatMessage = { role: "assistant", content: "", model, timestamp: Date.now() };
    const withAssistant = [...updated, assistantMsg];
    setMessages(withAssistant);

    try {
      let accumulated = "";
      for await (const chunk of streamChat(updated, model, apiKey)) {
        accumulated += chunk;
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { ...assistantMsg, content: accumulated };
          return next;
        });
      }
      const final = [...updated, { ...assistantMsg, content: accumulated }];
      setConversation(final);
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Unknown error";
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { ...assistantMsg, content: `Error: ${errMsg}` };
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function handleNewConversation() {
    setMessages([]);
    clearConversation();
  }

  function handleClearApiKey() {
    clearApiKey();
    setApiKeyState(null);
    setShowApiModal(true);
  }

  function handleApiKeySet() {
    const key = getApiKey();
    setApiKeyState(key);
    setShowApiModal(false);
  }

  const voice = activeSkinConfig?.voice;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--bg)", color: "var(--fg)" }}>
      {showApiModal && <ApiKeyModal onKeySet={handleApiKeySet} />}

      {showSkinPicker && (
        <SkinPicker
          skins={skinEntries}
          activeSkin={activeSkinSlug}
          onSelect={applySkin}
          onClose={() => setShowSkinPicker(false)}
          onCustomSkinAdded={(slug, raw, config) => {
            setSkinEntries((prev) => {
              const filtered = prev.filter((e) => e.slug !== slug);
              return [...filtered, { slug, config }];
            });
          }}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activeSkin={activeSkinConfig}
        model={model}
        onModelChange={(m) => { setModelState(m); setActiveModel(m); }}
        onNewConversation={handleNewConversation}
        onOpenSkinPicker={() => setShowSkinPicker(true)}
        onClearApiKey={handleClearApiKey}
        messages={messages}
        hasApiKey={!!apiKey}
      />

      {/* Main chat area */}
      <main className="flex flex-col flex-1 min-w-0">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mx-auto" style={{ maxWidth: "var(--max-width)" }}>
            {messages.length === 0 ? (
              <div
                className="flex items-center justify-center h-full min-h-[60vh] text-center"
                style={{ color: "var(--muted)", fontFamily: "var(--font-display)", fontSize: "1.1em" }}
              >
                {voice?.empty_state ?? "Start a conversation."}
              </div>
            ) : (
              messages.map((msg, i) => <Message key={i} message={msg} />)
            )}
            {streaming && (
              <div className="text-sm mb-4" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
                {voice?.thinking_label ?? "Thinking..."}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t px-4 py-4" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="mx-auto flex gap-3 items-end" style={{ maxWidth: "var(--max-width)" }}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={voice?.placeholder ?? "Message"}
              rows={1}
              disabled={streaming || !apiKey}
              className="flex-1 resize-none rounded-[var(--radius)] px-4 py-3 text-sm outline-none transition-all"
              style={{
                background: "var(--input-bg)",
                color: "var(--input-fg)",
                border: "1px solid var(--input-border)",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--size-base)",
                lineHeight: "var(--line-height)",
                minHeight: "48px",
                maxHeight: "200px",
              }}
              onInput={(e) => {
                const t = e.currentTarget;
                t.style.height = "auto";
                t.style.height = `${Math.min(t.scrollHeight, 200)}px`;
              }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || streaming || !apiKey}
              className="px-5 py-3 rounded-[var(--radius)] font-semibold text-sm transition-opacity disabled:opacity-40 hover:opacity-80 flex-shrink-0"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                fontFamily: "var(--font-display)",
                minHeight: "48px",
              }}
            >
              {voice?.send_label ?? "Send"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
