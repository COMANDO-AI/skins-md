"use client";

import { useRef } from "react";
import type { SkinConfig } from "@/lib/skin-parser";
import { parseSkin } from "@/lib/skin-parser";
import { injectSkin } from "@/lib/skin-injector";
import { saveCustomSkin } from "@/lib/storage";

interface SkinEntry {
  slug: string;
  config: SkinConfig;
}

interface Props {
  skins: SkinEntry[];
  activeSkin: string;
  onSelect: (slug: string, config: SkinConfig) => void;
  onClose: () => void;
  onCustomSkinAdded: (slug: string, raw: string, config: SkinConfig) => void;
}

export default function SkinPicker({ skins, activeSkin, onSelect, onClose, onCustomSkinAdded }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  let previewTimeout: ReturnType<typeof setTimeout>;

  function handleMouseEnter(config: SkinConfig) {
    clearTimeout(previewTimeout);
    injectSkin(config);
  }

  function handleMouseLeave(activeConfig: SkinConfig) {
    clearTimeout(previewTimeout);
    previewTimeout = setTimeout(() => injectSkin(activeConfig), 200);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const raw = ev.target?.result as string;
      const slug = file.name.replace(/\.md$/i, "").toLowerCase().replace(/\s+/g, "-");
      const config = parseSkin(raw, slug);
      if (!config) {
        alert("Invalid SKIN.md — missing required sections 1–6.");
        return;
      }
      saveCustomSkin(slug, raw);
      onCustomSkinAdded(slug, raw, config);
      onSelect(slug, config);
      onClose();
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  const activeConfig = skins.find((s) => s.slug === activeSkin)?.config;

  return (
    <div
      className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-2xl rounded-[var(--radius)] border p-6 space-y-4 max-h-[80vh] overflow-y-auto"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg)" }}
          >
            Skins
          </h2>
          <button
            onClick={onClose}
            className="text-sm px-3 py-1 rounded-[var(--radius)]"
            style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skins.map(({ slug, config }) => (
            <button
              key={slug}
              onClick={() => { onSelect(slug, config); onClose(); }}
              onMouseEnter={() => handleMouseEnter(config)}
              onMouseLeave={() => activeConfig && handleMouseLeave(activeConfig)}
              className="text-left p-3 rounded-[var(--radius)] border transition-all"
              style={{
                background: config.palette.bg,
                borderColor: slug === activeSkin ? config.palette.accent : config.palette.border,
                borderWidth: slug === activeSkin ? "2px" : "1px",
              }}
            >
              <div className="flex gap-1.5 mb-2">
                {[config.palette.bg, config.palette.accent, config.palette.fg, config.palette.surface].map((c, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border"
                    style={{ background: c, borderColor: config.palette.border }}
                  />
                ))}
              </div>
              <div
                className="text-xs font-bold truncate"
                style={{ color: config.palette.fg, fontFamily: config.typography.font_display }}
              >
                {config.metadata.name}
              </div>
              <div
                className="text-xs mt-0.5 truncate"
                style={{ color: config.palette.muted, fontFamily: config.typography.font_sans }}
              >
                {config.metadata.description}
              </div>
            </button>
          ))}
        </div>

        <div className="pt-2 border-t" style={{ borderColor: "var(--border)" }}>
          <input ref={fileInputRef} type="file" accept=".md" className="hidden" onChange={handleImport} />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-sm px-4 py-2 rounded-[var(--radius)]"
            style={{ color: "var(--accent)", border: "1px solid var(--accent)" }}
          >
            + Import SKIN.md
          </button>
        </div>
      </div>
    </div>
  );
}
