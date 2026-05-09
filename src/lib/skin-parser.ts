export interface SkinMetadata {
  name: string;
  author: string;
  version: string;
  tags: string[];
  description: string;
  preview_url: string;
  license: string;
}

export interface SkinPalette {
  bg: string;
  fg: string;
  accent: string;
  muted: string;
  surface: string;
  border: string;
  error: string;
  success: string;
}

export interface SkinTypography {
  font_sans: string;
  font_mono: string;
  font_display: string;
  size_base: string;
  weight_base: string;
  line_height: string;
}

export interface SkinLayout {
  radius: string;
  spacing_unit: string;
  max_width: string;
  sidebar_width: string;
}

export interface SkinVoice {
  send_label: string;
  placeholder: string;
  empty_state: string;
  thinking_label: string;
  clear_label: string;
}

export interface SkinAtmosphere {
  bg_effect: "none" | "gradient" | "noise" | "particles" | "scanlines";
  animation_speed: "slow" | "normal" | "fast" | "none";
  blur: string;
}

export interface SkinComponents {
  message_user_bg?: string;
  message_user_fg?: string;
  message_assistant_bg?: string;
  message_assistant_fg?: string;
  input_bg?: string;
  input_fg?: string;
  input_border?: string;
}

export interface SkinAssets {
  background_image?: string;
  icon_set?: string;
  custom_css_url?: string;
}

export interface SkinConfig {
  slug: string;
  metadata: SkinMetadata;
  palette: SkinPalette;
  typography: SkinTypography;
  layout: SkinLayout;
  voice: SkinVoice;
  atmosphere: SkinAtmosphere;
  components?: SkinComponents;
  assets?: SkinAssets;
}

function parseSection(raw: string): Record<string, string> {
  const result: Record<string, string> = {};
  const lines = raw.split("\n");
  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (key && value) result[key] = value;
  }
  return result;
}

function extractSection(content: string, sectionName: string): string {
  const pattern = new RegExp(
    `###\\s*Section\\s*\\d+\\s*·\\s*${sectionName}([\\s\\S]*?)(?=###|$)`,
    "i"
  );
  const match = content.match(pattern);
  return match ? match[1] : "";
}

export function parseSkin(raw: string, slug: string): SkinConfig | null {
  try {
    const metaRaw = parseSection(extractSection(raw, "metadata"));
    const paletteRaw = parseSection(extractSection(raw, "palette"));
    const typoRaw = parseSection(extractSection(raw, "typography"));
    const layoutRaw = parseSection(extractSection(raw, "layout"));
    const voiceRaw = parseSection(extractSection(raw, "voice"));
    const atmosRaw = parseSection(extractSection(raw, "atmosphere"));
    const compRaw = parseSection(extractSection(raw, "components"));
    const assetsRaw = parseSection(extractSection(raw, "assets"));

    const required = [metaRaw, paletteRaw, typoRaw, layoutRaw, voiceRaw, atmosRaw];
    if (required.some((s) => Object.keys(s).length === 0)) return null;

    return {
      slug,
      metadata: {
        name: metaRaw.name ?? slug,
        author: metaRaw.author ?? "",
        version: metaRaw.version ?? "1.0.0",
        tags: (metaRaw.tags ?? "").split(",").map((t) => t.trim()).filter(Boolean),
        description: metaRaw.description ?? "",
        preview_url: metaRaw.preview_url ?? "none",
        license: metaRaw.license ?? "MIT",
      },
      palette: {
        bg: paletteRaw.bg ?? "#000000",
        fg: paletteRaw.fg ?? "#ffffff",
        accent: paletteRaw.accent ?? "#0066ff",
        muted: paletteRaw.muted ?? "#888888",
        surface: paletteRaw.surface ?? "#111111",
        border: paletteRaw.border ?? "#333333",
        error: paletteRaw.error ?? "#ff3333",
        success: paletteRaw.success ?? "#00cc44",
      },
      typography: {
        font_sans: typoRaw.font_sans ?? "Inter",
        font_mono: typoRaw.font_mono ?? "JetBrains Mono",
        font_display: typoRaw.font_display ?? "Inter",
        size_base: typoRaw.size_base ?? "15px",
        weight_base: typoRaw.weight_base ?? "400",
        line_height: typoRaw.line_height ?? "1.6",
      },
      layout: {
        radius: layoutRaw.radius ?? "6px",
        spacing_unit: layoutRaw.spacing_unit ?? "8px",
        max_width: layoutRaw.max_width ?? "720px",
        sidebar_width: layoutRaw.sidebar_width ?? "260px",
      },
      voice: {
        send_label: voiceRaw.send_label ?? "Send",
        placeholder: voiceRaw.placeholder ?? "Message",
        empty_state: voiceRaw.empty_state ?? "Start a conversation.",
        thinking_label: voiceRaw.thinking_label ?? "Thinking...",
        clear_label: voiceRaw.clear_label ?? "Clear",
      },
      atmosphere: {
        bg_effect: (atmosRaw.bg_effect as SkinAtmosphere["bg_effect"]) ?? "none",
        animation_speed: (atmosRaw.animation_speed as SkinAtmosphere["animation_speed"]) ?? "normal",
        blur: atmosRaw.blur ?? "none",
      },
      components: Object.keys(compRaw).length > 0 ? compRaw as SkinComponents : undefined,
      assets: Object.keys(assetsRaw).length > 0 ? assetsRaw as SkinAssets : undefined,
    };
  } catch {
    return null;
  }
}
