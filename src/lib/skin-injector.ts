import type { SkinConfig } from "./skin-parser";

const GOOGLE_FONTS_LOADED = new Set<string>();

function loadGoogleFont(family: string) {
  if (typeof document === "undefined") return;
  if (GOOGLE_FONTS_LOADED.has(family)) return;
  const systemFonts = [
    "system-ui", "sans-serif", "serif", "monospace",
    "Arial", "Georgia", "Courier New", "Times New Roman",
  ];
  if (systemFonts.some((f) => family.toLowerCase().includes(f.toLowerCase()))) return;

  const encoded = encodeURIComponent(family) + ":wght@300;400;600;700";
  const href = `https://fonts.googleapis.com/css2?family=${encoded}&display=swap`;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
  GOOGLE_FONTS_LOADED.add(family);
}

export function injectSkin(skin: SkinConfig) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const set = (key: string, value: string) =>
    root.style.setProperty(key, value);

  // palette
  set("--bg", skin.palette.bg);
  set("--fg", skin.palette.fg);
  set("--accent", skin.palette.accent);
  set("--muted", skin.palette.muted);
  set("--surface", skin.palette.surface);
  set("--border", skin.palette.border);
  set("--error", skin.palette.error);
  set("--success", skin.palette.success);

  // typography
  set("--font-sans", `"${skin.typography.font_sans}"`);
  set("--font-mono", `"${skin.typography.font_mono}"`);
  set("--font-display", `"${skin.typography.font_display}"`);
  set("--size-base", skin.typography.size_base);
  set("--weight-base", skin.typography.weight_base);
  set("--line-height", skin.typography.line_height);

  // layout
  set("--radius", skin.layout.radius);
  set("--spacing-unit", skin.layout.spacing_unit);
  set("--max-width", skin.layout.max_width);
  set("--sidebar-width", skin.layout.sidebar_width);

  // atmosphere blur
  set("--blur", skin.atmosphere.blur === "none" ? "0px" : skin.atmosphere.blur);

  // component overrides
  if (skin.components) {
    const c = skin.components;
    if (c.message_user_bg) set("--msg-user-bg", c.message_user_bg);
    else set("--msg-user-bg", skin.palette.accent);
    if (c.message_user_fg) set("--msg-user-fg", c.message_user_fg);
    else set("--msg-user-fg", skin.palette.bg);
    if (c.message_assistant_bg) set("--msg-assistant-bg", c.message_assistant_bg);
    else set("--msg-assistant-bg", skin.palette.surface);
    if (c.message_assistant_fg) set("--msg-assistant-fg", c.message_assistant_fg);
    else set("--msg-assistant-fg", skin.palette.fg);
    if (c.input_bg) set("--input-bg", c.input_bg);
    else set("--input-bg", skin.palette.surface);
    if (c.input_fg) set("--input-fg", c.input_fg);
    else set("--input-fg", skin.palette.fg);
    if (c.input_border) set("--input-border", c.input_border);
    else set("--input-border", skin.palette.border);
  } else {
    set("--msg-user-bg", skin.palette.accent);
    set("--msg-user-fg", skin.palette.bg);
    set("--msg-assistant-bg", skin.palette.surface);
    set("--msg-assistant-fg", skin.palette.fg);
    set("--input-bg", skin.palette.surface);
    set("--input-fg", skin.palette.fg);
    set("--input-border", skin.palette.border);
  }

  // load fonts
  loadGoogleFont(skin.typography.font_sans);
  loadGoogleFont(skin.typography.font_mono);
  if (skin.typography.font_display !== skin.typography.font_sans) {
    loadGoogleFont(skin.typography.font_display);
  }

  // atmosphere class
  const body = document.body;
  body.classList.remove(
    "atmosphere-gradient",
    "atmosphere-noise",
    "atmosphere-particles",
    "atmosphere-scanlines"
  );
  if (skin.atmosphere.bg_effect !== "none") {
    body.classList.add(`atmosphere-${skin.atmosphere.bg_effect}`);
  }

  // animation speed
  body.classList.remove("anim-slow", "anim-normal", "anim-fast", "anim-none");
  body.classList.add(`anim-${skin.atmosphere.animation_speed}`);
}
