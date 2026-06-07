import { describe, expect, it } from 'vitest';
import { parseSkin, validateSkin } from './skinParser';

const minimal = `### Section 1 · metadata
name: Minimal
author: COMANDO
version: 1.0.0
tags: minimal, dark
description: Nothing in the way.
preview_url: none
license: MIT

### Section 2 · palette
bg: #0a0a0a
fg: #e8e8e8
accent: #ffffff
muted: #555555
surface: #111111
border: #1f1f1f
error: #cc2222
success: #22aa44

### Section 3 · typography
font_sans: Inter
font_mono: JetBrains Mono
font_display: Inter
size_base: 15px
weight_base: 400
line_height: 1.65

### Section 4 · layout
radius: 6px
spacing_unit: 8px
max_width: 700px
sidebar_width: 240px
message_shape: pill

### Section 5 · voice
send_label: Send
placeholder: Message
empty_state: Start a conversation.
thinking_label: ...
clear_label: Clear

### Section 6 · atmosphere
bg_effect: none
animation_speed: none
blur: none
texture_overlay: paper
surface_style: raised
`;

describe('SKIN.md parser', () => {
  it('parses required sections, key values, and v2 fields', () => {
    const skin = parseSkin(minimal, 'minimal');
    expect(skin.id).toBe('minimal');
    expect(skin.metadata.name).toBe('Minimal');
    expect(skin.palette.bg).toBe('#0a0a0a');
    expect(skin.layout.message_shape).toBe('pill');
    expect(skin.atmosphere.texture_overlay).toBe('paper');
  });

  it('validates a complete skin', () => {
    const result = validateSkin(minimal, 'minimal');
    expect(result.ok).toBe(true);
  });

  it('reports missing required sections and fields clearly', () => {
    const result = validateSkin('### Section 1 · metadata\nname: Broken\n');
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.join(' ')).toContain('Section 2');
      expect(result.errors.join(' ')).toContain('metadata.author');
    }
  });

  it('keeps Section visual preset-only and rejects arbitrary code', () => {
    const unsafe = `${minimal}\n### Section visual\nengine: webgl\npreset: stars\nshader: void main() { gl_FragColor = vec4(1.0); }\nintensity: 4\ntransitions: <script>alert(1)</script>\n`;
    const result = validateSkin(unsafe, 'unsafe');
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.join(' ')).toContain('Unsupported visual.shader');
      expect(result.errors.join(' ')).toContain('Invalid visual.intensity');
      expect(result.errors.join(' ')).toContain('Unsafe value for visual.transitions');
    }
  });
});
