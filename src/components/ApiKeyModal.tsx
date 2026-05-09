"use client";

import { useState } from "react";
import { setApiKey } from "@/lib/storage";

interface Props {
  onKeySet: () => void;
}

export default function ApiKeyModal({ onKeySet }: Props) {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = key.trim();
    if (!trimmed.startsWith("sk-or-")) {
      setError("Key should start with sk-or- — get yours at openrouter.ai/keys");
      return;
    }
    setApiKey(trimmed);
    onKeySet();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-md rounded-[var(--radius)] border p-8 space-y-6"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <div className="space-y-1">
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}>
            Enter your OpenRouter key
          </h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Your key stays in your browser. We never see it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e) => { setKey(e.target.value); setError(""); }}
            placeholder="sk-or-v1-..."
            autoFocus
            className="w-full px-4 py-3 rounded-[var(--radius)] text-sm outline-none"
            style={{
              background: "var(--input-bg)",
              color: "var(--input-fg)",
              border: "1px solid var(--input-border)",
              fontFamily: "var(--font-mono)",
            }}
          />
          {error && (
            <p className="text-xs" style={{ color: "var(--error)" }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={!key.trim()}
            className="w-full py-3 rounded-[var(--radius)] font-semibold text-sm transition-opacity disabled:opacity-40"
            style={{ background: "var(--accent)", color: "var(--bg)", fontFamily: "var(--font-display)" }}
          >
            Start chatting
          </button>
        </form>

        <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
          Don&apos;t have a key?{" "}
          <a
            href="https://openrouter.ai/keys"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
          >
            Get one free at openrouter.ai
          </a>
        </p>
      </div>
    </div>
  );
}
