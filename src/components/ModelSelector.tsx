"use client";

import { MODELS } from "@/lib/openrouter";

interface Props {
  model: string;
  onChange: (model: string) => void;
}

export default function ModelSelector({ model, onChange }: Props) {
  return (
    <select
      value={model}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-[var(--radius)] text-xs outline-none cursor-pointer"
      style={{
        background: "var(--surface)",
        color: "var(--fg)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {MODELS.map((m) => (
        <option key={m.id} value={m.id}>
          {m.label}
        </option>
      ))}
    </select>
  );
}
