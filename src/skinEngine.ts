import type { Skin } from './types';

const cssVarMap: Record<string, string> = {
  bg: '--bg', fg: '--fg', accent: '--accent', muted: '--muted', surface: '--surface', border: '--border', error: '--error', success: '--success',
  font_sans: '--font-sans', font_mono: '--font-mono', font_display: '--font-display', size_base: '--size-base', weight_base: '--weight-base', line_height: '--line-height', letter_spacing: '--letter-spacing', text_transform: '--text-transform', weight_display: '--weight-display',
  radius: '--radius', spacing_unit: '--spacing', max_width: '--max-width', sidebar_width: '--sidebar-width', radius_message: '--radius-message', radius_input: '--radius-input', radius_ui: '--radius-ui', border_style: '--border-style',
  message_user_bg: '--message-user-bg', message_user_fg: '--message-user-fg', message_assistant_bg: '--message-assistant-bg', message_assistant_fg: '--message-assistant-fg', input_bg: '--input-bg', input_fg: '--input-fg', input_border: '--input-border',
  bg_gradient: '--bg-gradient', blur: '--skin-blur', texture_intensity: '--texture-intensity'
};

export function applySkin(skin: Skin) {
  const root = document.documentElement;
  const groups = [skin.palette, skin.typography, skin.layout, skin.components ?? {}, skin.atmosphere];
  for (const group of groups) {
    for (const [key, value] of Object.entries(group)) {
      const varName = cssVarMap[key];
      if (varName && value) root.style.setProperty(varName, normalizeFontValue(key, value));
    }
  }
  root.style.setProperty('--visual-intensity', skin.visual?.intensity ?? '0.3');
  document.body.dataset.skin = skin.id;
  document.body.dataset.bgEffect = skin.atmosphere.bg_effect ?? 'none';
  document.body.dataset.motion = skin.atmosphere.motion_style ?? 'fade';
  document.body.dataset.surface = skin.atmosphere.surface_style ?? 'flat';
  document.body.dataset.shape = skin.layout.message_shape ?? 'default';
  document.body.dataset.texture = skin.atmosphere.texture_overlay ?? 'none';
  injectFonts(skin);
  injectCustomCss(skin);
}

function normalizeFontValue(key: string, value: string) {
  if (!key.startsWith('font_')) return value;
  if (value.includes(',') || value.includes('system') || value.includes('serif') || value.includes('mono')) return value;
  return `'${value}', ${key === 'font_mono' ? 'monospace' : 'system-ui, sans-serif'}`;
}

function injectFonts(skin: Skin) {
  const fonts = [skin.typography.font_sans, skin.typography.font_mono, skin.typography.font_display]
    .filter(Boolean)
    .filter((font) => !font.includes(',') && !font.toLowerCase().includes('system'));
  const family = [...new Set(fonts)].map((font) => `family=${font.trim().replace(/\s+/g, '+')}:wght@400;500;600;700;800`).join('&');
  const id = 'skin-fonts';
  document.getElementById(id)?.remove();
  if (!family) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?${family}&display=swap`;
  document.head.appendChild(link);
}

function injectCustomCss(skin: Skin) {
  const id = 'skin-custom';
  document.getElementById(id)?.remove();
  if (!skin.custom?.css) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = skin.custom.css;
  document.head.appendChild(style);
}
