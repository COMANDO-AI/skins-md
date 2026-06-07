export type Role = 'user' | 'assistant' | 'system';

export type ChatMessage = {
  id: string;
  role: Role;
  content: string;
  timestamp: string;
  model?: string;
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
  visual?: Record<string, string>;
};

export type Skin = SkinSections & {
  id: string;
  raw: string;
};

export type ValidationResult =
  | { ok: true; skin: Skin }
  | { ok: false; errors: string[] };
