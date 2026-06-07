export type Role = 'user' | 'assistant' | 'system';

export type ChatMessage = {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
  model?: string;
};

export type VisualConfig = {
  engine?: 'subtle' | 'webgl' | 'css' | 'none';
  preset?: 'stars' | 'code-rain' | 'aurora' | 'embers' | 'fireflies' | 'executive-grid' | 'sparkle-pop' | 'rune-orbit';
  intensity?: string;
  speed?: string;
  density?: string;
  hud?: 'none' | 'minimal' | 'soft' | 'tactical' | 'playful' | 'compass';
  particles?: 'none' | 'stars' | 'code' | 'embers' | 'fireflies' | 'nodes' | 'sparkles' | 'motes';
  text_reveal?: 'none' | 'instant' | 'fade' | 'fade-up' | 'typewriter' | 'pop' | 'parchment';
  transitions?: 'none' | 'fade' | 'dissolve' | 'snap' | 'bounce' | 'page-turn' | 'slide';
  parallax?: 'none' | 'subtle' | 'gentle' | 'medium' | 'deep';
};

export type SkinSections = {
  metadata: Record<string, string>;
  palette: Record<string, string>;
  typography: Record<string, string>;
  layout: Record<string, string>;
  voice: Record<string, string>;
  atmosphere: Record<string, string>;
  components?: Record<string, string>;
  assets?: Record<string, string>;
  custom?: Record<string, string> & { css?: string };
  persona?: Record<string, string>;
  visual?: VisualConfig;
};

export type Skin = SkinSections & {
  id: string;
  raw: string;
};

export type ValidationResult =
  | { ok: true; skin: Skin }
  | { ok: false; errors: string[] };
