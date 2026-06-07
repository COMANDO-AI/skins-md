import type { Skin, SkinSections, ValidationResult, VisualConfig } from './types';

const SECTION_ALIASES: Record<string, keyof SkinSections> = {
  metadata: 'metadata',
  palette: 'palette',
  typography: 'typography',
  layout: 'layout',
  voice: 'voice',
  atmosphere: 'atmosphere',
  components: 'components',
  assets: 'assets',
  custom: 'custom',
  persona: 'persona',
  visual: 'visual',
};

export const REQUIRED_SECTIONS: (keyof SkinSections)[] = [
  'metadata', 'palette', 'typography', 'layout', 'voice', 'atmosphere'
];

const REQUIRED_FIELDS: Record<string, string[]> = {
  metadata: ['name', 'author', 'version', 'tags', 'description', 'preview_url', 'license'],
  palette: ['bg', 'fg', 'accent', 'muted', 'surface', 'border', 'error', 'success'],
  typography: ['font_sans', 'font_mono', 'font_display', 'size_base', 'weight_base', 'line_height'],
  layout: ['radius', 'spacing_unit', 'max_width', 'sidebar_width'],
  voice: ['send_label', 'placeholder', 'empty_state', 'thinking_label', 'clear_label'],
  atmosphere: ['bg_effect', 'animation_speed', 'blur'],
};

const COLOR_FIELDS = new Set(['bg','fg','accent','muted','surface','border','error','success','message_user_bg','message_user_fg','message_assistant_bg','message_assistant_fg','input_bg','input_fg','input_border']);

const VISUAL_ALLOWED_FIELDS = new Set(['engine', 'preset', 'intensity', 'speed', 'density', 'hud', 'particles', 'text_reveal', 'transitions', 'parallax']);
const VISUAL_ENUMS: Record<string, Set<string>> = {
  engine: new Set(['subtle', 'webgl', 'css', 'none']),
  preset: new Set(['stars', 'code-rain', 'aurora', 'embers', 'fireflies', 'executive-grid', 'sparkle-pop', 'rune-orbit']),
  hud: new Set(['none', 'minimal', 'soft', 'tactical', 'playful', 'compass']),
  particles: new Set(['none', 'stars', 'code', 'embers', 'fireflies', 'nodes', 'sparkles', 'motes']),
  text_reveal: new Set(['none', 'instant', 'fade', 'fade-up', 'typewriter', 'pop', 'parchment']),
  transitions: new Set(['none', 'fade', 'dissolve', 'snap', 'bounce', 'page-turn', 'slide']),
  parallax: new Set(['none', 'subtle', 'gentle', 'medium', 'deep']),
};

function normalizeSectionTitle(line: string): keyof SkinSections | null {
  const clean = line.replace(/^#+\s*/, '').toLowerCase();
  if (/^section\s+visual\b/.test(clean)) return 'visual';
  const sectionMatch = clean.match(/section\s+\d+\s*[·:-]?\s*([a-z_ -]+)/);
  const name = (sectionMatch?.[1] ?? clean).trim().split(/\s+/)[0].replace(/[^a-z_]/g, '');
  return SECTION_ALIASES[name] ?? null;
}

export function parseSkin(raw: string, id = 'custom'): Skin {
  const sections: Partial<SkinSections> = {};
  let current: keyof SkinSections | null = null;
  let customLines: string[] = [];
  const lines = raw.replace(/\r\n/g, '\n').split('\n');

  for (const line of lines) {
    if (/^#{2,}\s+/.test(line)) {
      if (current === 'custom' && customLines.length) {
        sections.custom = { ...(sections.custom ?? {}), css: customLines.join('\n').trim() };
        customLines = [];
      }
      current = normalizeSectionTitle(line);
      if (current && !sections[current]) sections[current] = {} as Record<string, string>;
      continue;
    }
    if (!current) continue;
    if (current === 'custom' && (line.trim().startsWith('.') || line.trim().startsWith(':') || line.trim().startsWith('@') || line.includes('{') || customLines.length)) {
      customLines.push(line);
      continue;
    }
    const match = line.match(/^([a-zA-Z0-9_\-]+)\s*:\s*(.*)$/);
    if (match) {
      (sections[current] as Record<string, string>)[match[1].trim()] = match[2].trim();
    }
  }
  if (current === 'custom' && customLines.length) {
    sections.custom = { ...(sections.custom ?? {}), css: customLines.join('\n').trim() };
  }

  return {
    id,
    raw,
    metadata: sections.metadata ?? {},
    palette: sections.palette ?? {},
    typography: sections.typography ?? {},
    layout: sections.layout ?? {},
    voice: sections.voice ?? {},
    atmosphere: sections.atmosphere ?? {},
    components: sections.components,
    assets: sections.assets,
    custom: sections.custom,
    persona: sections.persona,
    visual: sections.visual as VisualConfig | undefined,
  };
}

export function isCssColor(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  if (v === 'none' || v.startsWith('var(')) return true;
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(v)) return true;
  if (/^(rgb|rgba|hsl|hsla|oklch|color)\(/i.test(v)) return true;
  if (/^[a-zA-Z]+$/.test(v)) return true;
  return false;
}

function validateNumberRange(value: string, min: number, max: number) {
  const n = Number(value);
  return Number.isFinite(n) && n >= min && n <= max;
}

function validateVisualSection(visual: VisualConfig | undefined) {
  const errors: string[] = [];
  if (!visual) return errors;

  for (const [key, value] of Object.entries(visual)) {
    if (!VISUAL_ALLOWED_FIELDS.has(key)) {
      errors.push(`Unsupported visual.${key}; Section visual is preset-only and does not allow arbitrary code fields`);
      continue;
    }
    const trimmed = value.trim();
    if (/[{}<>;]/.test(trimmed) || /(?:script|shader|function|eval|import|url\()/i.test(trimmed)) {
      errors.push(`Unsafe value for visual.${key}: Section visual accepts tokens/numbers only`);
      continue;
    }
    const allowed = VISUAL_ENUMS[key];
    if (allowed && !allowed.has(trimmed)) errors.push(`Invalid visual.${key}: ${trimmed}`);
  }

  if (visual.intensity && !validateNumberRange(visual.intensity, 0, 1.2)) errors.push(`Invalid visual.intensity: ${visual.intensity}`);
  if (visual.speed && !validateNumberRange(visual.speed, 0, 2)) errors.push(`Invalid visual.speed: ${visual.speed}`);
  if (visual.density && !validateNumberRange(visual.density, 20, 260)) errors.push(`Invalid visual.density: ${visual.density}`);

  return errors;
}

export function validateSkin(raw: string, id = 'custom'): ValidationResult {
  const skin = parseSkin(raw, id);
  const errors: string[] = [];

  for (const section of REQUIRED_SECTIONS) {
    const data = skin[section] as Record<string, string>;
    if (!data || Object.keys(data).length === 0) {
      errors.push(`Missing required Section ${REQUIRED_SECTIONS.indexOf(section) + 1} · ${section}`);
      continue;
    }
    for (const field of REQUIRED_FIELDS[section] ?? []) {
      if (!data[field]) errors.push(`Missing required field ${section}.${field}`);
    }
  }

  for (const group of [skin.palette, skin.components ?? {}]) {
    for (const [key, value] of Object.entries(group)) {
      if (COLOR_FIELDS.has(key) && !isCssColor(value)) errors.push(`Invalid CSS color for ${key}: ${value}`);
    }
  }

  errors.push(...validateVisualSection(skin.visual));

  return errors.length ? { ok: false, errors } : { ok: true, skin };
}

export function skinToMarkdown(skin: Skin): string {
  return skin.raw;
}
