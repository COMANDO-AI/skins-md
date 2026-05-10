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

  const encoded = encodeURIComponent(family) + ":wght@300;400;600;700;900";
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

  // typography depth
  set("--letter-spacing", skin.typography.letter_spacing);
  set("--text-transform-display", skin.typography.text_transform);
  set("--weight-display", skin.typography.weight_display);

  // layout
  set("--radius", skin.layout.radius);
  set("--spacing-unit", skin.layout.spacing_unit);
  set("--max-width", skin.layout.max_width);
  set("--sidebar-width", skin.layout.sidebar_width);

  // granular radii — fall back to master radius if unset
  set("--radius-message", skin.layout.radius_message || skin.layout.radius);
  set("--radius-input",   skin.layout.radius_input   || skin.layout.radius);
  set("--radius-ui",      skin.layout.radius_ui      || skin.layout.radius);
  set("--border-style",   skin.layout.border_style);

  // atmosphere blur
  set("--blur", skin.atmosphere.blur === "none" ? "0px" : skin.atmosphere.blur);

  // gradient — always set so .atmosphere-gradient can use it
  set(
    "--bg-gradient",
    skin.atmosphere.bg_gradient ||
      `linear-gradient(135deg, ${skin.palette.bg} 0%, ${skin.palette.surface} 50%, ${skin.palette.bg} 100%)`
  );

  // texture opacity
  const opacityMap = { subtle: "0.03", medium: "0.07", heavy: "0.15" };
  set("--texture-opacity", opacityMap[skin.atmosphere.texture_intensity]);

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

  // body classes — remove all managed classes first
  const body = document.body;
  body.classList.remove(
    // atmosphere
    "atmosphere-gradient", "atmosphere-noise", "atmosphere-particles", "atmosphere-scanlines",
    // animation speed
    "anim-slow", "anim-normal", "anim-fast", "anim-none",
    // message shape
    "shape-pill", "shape-sharp", "shape-asymmetric",
    // texture
    "texture-grain", "texture-paper", "texture-fabric",
    "texture-metal", "texture-glass", "texture-halftone",
    // surface
    "surface-flat", "surface-frosted", "surface-raised", "surface-inset",
    // motion
    "motion-fade", "motion-slide", "motion-snap", "motion-glitch",
    "motion-bloom", "motion-typewriter", "motion-none",
    // thinking
    "thinking-pulse", "thinking-dots", "thinking-blink", "thinking-ellipsis",
  );

  // atmosphere effect
  if (skin.atmosphere.bg_effect !== "none") {
    body.classList.add(`atmosphere-${skin.atmosphere.bg_effect}`);
  }

  // animation speed
  body.classList.add(`anim-${skin.atmosphere.animation_speed}`);

  // message shape
  if (skin.layout.message_shape !== "default") {
    body.classList.add(`shape-${skin.layout.message_shape}`);
  }

  // texture overlay
  if (skin.atmosphere.texture_overlay !== "none") {
    body.classList.add(`texture-${skin.atmosphere.texture_overlay}`);
  }

  // surface style
  body.classList.add(`surface-${skin.atmosphere.surface_style}`);

  // motion style
  body.classList.add(`motion-${skin.atmosphere.motion_style}`);

  // thinking style
  body.classList.add(`thinking-${skin.atmosphere.thinking_style}`);

  // Section 9 — inline CSS escape hatch
  const prev = document.getElementById("skin-custom");
  if (prev) prev.remove();
  if (skin.custom?.css) {
    const style = document.createElement("style");
    style.id = "skin-custom";
    style.textContent = skin.custom.css;
    document.head.appendChild(style);
  }
}
