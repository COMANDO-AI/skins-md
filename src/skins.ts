import type { Skin } from './types';
import { parseSkin } from './skinParser';

export const minimalRaw = `### Section 1 · metadata
name: Minimal
author: COMANDO
version: 1.0.0
tags: minimal, clean, professional, dark, default
description: Nothing in the way. Just thinking.
preview_url: none
license: MIT

### Section 2 · palette
bg: #0a0a0a
fg: #e8e8e8
accent: #ffffff
muted: #737373
surface: #111111
border: #242424
error: #ff4d4d
success: #4ade80

### Section 3 · typography
font_sans: Inter
font_mono: JetBrains Mono
font_display: Inter
size_base: 15px
weight_base: 400
line_height: 1.65
letter_spacing: 0em
text_transform: none
weight_display: 700

### Section 4 · layout
radius: 8px
spacing_unit: 8px
max_width: 760px
sidebar_width: 280px
radius_message: 14px
radius_input: 16px
radius_ui: 10px
message_shape: default
border_style: solid

### Section 5 · voice
send_label: Send
placeholder: Message
empty_state: Start a conversation.
thinking_label: Thinking
clear_label: Clear

### Section 6 · atmosphere
bg_effect: none
animation_speed: none
blur: none
bg_gradient: radial-gradient(circle at 50% 0%, rgba(255,255,255,.08), transparent 32%), #0a0a0a
texture_overlay: grain
texture_intensity: 0.08
surface_style: flat
motion_style: fade
thinking_style: dots

### Section 7 · components
message_user_bg: #f5f5f5
message_user_fg: #050505
message_assistant_bg: #151515
message_assistant_fg: #eeeeee
input_bg: #101010
input_fg: #ffffff
input_border: #2b2b2b

### Section 10 · persona
sidebar_name: SKINS.MD
avatar: ○
status: local key · no server memory

### Section visual
engine: subtle
preset: stars
intensity: 0.18
speed: 0.2
density: 34
`;

export const terminalRaw = `### Section 1 · metadata
name: Terminal Oracle
author: COMANDO
version: 1.0.0
tags: terminal, cyberpunk, hacker, dark, v2
description: A living command line with scanlines, green phosphor, and a machine-room pulse.
preview_url: none
license: MIT

### Section 2 · palette
bg: #020403
fg: #ccffd9
accent: #39ff88
muted: #5d8f6b
surface: #061109
border: #1dff72
error: #ff3158
success: #39ff88

### Section 3 · typography
font_sans: IBM Plex Mono
font_mono: JetBrains Mono
font_display: Share Tech Mono
size_base: 15px
weight_base: 400
line_height: 1.7
letter_spacing: 0.03em
text_transform: none
weight_display: 400

### Section 4 · layout
radius: 0px
spacing_unit: 8px
max_width: 820px
sidebar_width: 300px
radius_message: 0px
radius_input: 0px
radius_ui: 0px
message_shape: sharp
border_style: solid

### Section 5 · voice
send_label: EXEC
placeholder: write command / ask oracle
empty_state: boot complete. awaiting signal.
thinking_label: compiling signal
clear_label: WIPE BUFFER

### Section 6 · atmosphere
bg_effect: scanlines
animation_speed: fast
blur: none
bg_gradient: radial-gradient(circle at 20% 10%, rgba(57,255,136,.20), transparent 25%), linear-gradient(135deg, #020403, #07180b 52%, #020403)
texture_overlay: halftone
texture_intensity: 0.22
surface_style: inset
motion_style: glitch
thinking_style: blink

### Section 7 · components
message_user_bg: #39ff88
message_user_fg: #001b08
message_assistant_bg: rgba(4, 18, 8, .88)
message_assistant_fg: #ccffd9
input_bg: #000000
input_fg: #ccffd9
input_border: #39ff88

### Section 9 · custom
.app-shell::before { content: ""; position: fixed; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(57,255,136,.08) 0 1px, transparent 1px 4px); mix-blend-mode: screen; opacity: .35; z-index: 3; }
.message.assistant { box-shadow: inset 3px 0 0 var(--accent), 0 0 30px rgba(57,255,136,.10); }

### Section 10 · persona
sidebar_name: ORACLE TTY
avatar: >_
status: signal stable · no cloud memory

### Section visual
engine: webgl
preset: code-rain
intensity: 0.85
speed: 1.1
density: 140
`;

export const vaporwaveRaw = `### Section 1 · metadata
name: Vaporwave Mirage
author: COMANDO
version: 1.0.0
tags: vaporwave, dreamy, glass, neon, v2
description: A chrome sunset hallucination for soft-focus thinking.
preview_url: none
license: MIT

### Section 2 · palette
bg: #17002b
fg: #fff1ff
accent: #ff71ce
muted: #b8a4d9
surface: rgba(255,255,255,.12)
border: rgba(255,255,255,.28)
error: #ff3864
success: #01cdfe

### Section 3 · typography
font_sans: Space Grotesk
font_mono: JetBrains Mono
font_display: Bungee Shade
size_base: 16px
weight_base: 400
line_height: 1.62
letter_spacing: 0.01em
text_transform: none
weight_display: 400

### Section 4 · layout
radius: 24px
spacing_unit: 10px
max_width: 840px
sidebar_width: 320px
radius_message: 28px
radius_input: 999px
radius_ui: 22px
message_shape: pill
border_style: solid

### Section 5 · voice
send_label: Drift
placeholder: drop a thought into the mirage
empty_state: The horizon is listening.
thinking_label: shimmering
clear_label: Dissolve

### Section 6 · atmosphere
bg_effect: gradient
animation_speed: slow
blur: 18px
bg_gradient: radial-gradient(circle at 20% 15%, rgba(255,113,206,.38), transparent 30%), radial-gradient(circle at 80% 10%, rgba(1,205,254,.30), transparent 28%), linear-gradient(160deg, #17002b, #39106d 46%, #ff71ce)
texture_overlay: glass
texture_intensity: 0.18
surface_style: frosted
motion_style: bloom
thinking_style: pulse

### Section 7 · components
message_user_bg: linear-gradient(135deg, #ff71ce, #01cdfe)
message_user_fg: #17002b
message_assistant_bg: rgba(255,255,255,.14)
message_assistant_fg: #fff1ff
input_bg: rgba(255,255,255,.16)
input_fg: #ffffff
input_border: rgba(255,255,255,.38)

### Section 10 · persona
sidebar_name: MIRAGE
avatar: ◇
status: dream bandwidth open

### Section visual
engine: webgl
preset: aurora
intensity: 0.92
speed: 0.42
density: 80
`;

export const gothicRaw = `### Section 1 · metadata
name: Gothic Librarian
author: COMANDO
version: 1.0.0
tags: gothic, librarian, paper, research, v2
description: Candlelit research, marginalia, and a patient archivist behind the desk.
preview_url: none
license: MIT

### Section 2 · palette
bg: #120d0a
fg: #f4e8d2
accent: #c99a48
muted: #9c8668
surface: #21160f
border: #5b4228
error: #b94b4b
success: #7c9f62

### Section 3 · typography
font_sans: Cormorant Garamond
font_mono: IBM Plex Mono
font_display: Cinzel
size_base: 18px
weight_base: 500
line_height: 1.62
letter_spacing: 0.01em
text_transform: none
weight_display: 700

### Section 4 · layout
radius: 3px
spacing_unit: 9px
max_width: 780px
sidebar_width: 310px
radius_message: 4px 18px 4px 18px
radius_input: 4px
radius_ui: 3px
message_shape: asymmetric
border_style: double

### Section 5 · voice
send_label: Inscribe
placeholder: Ask the archive
empty_state: The archive opens when you speak.
thinking_label: consulting the stacks
clear_label: Close volume

### Section 6 · atmosphere
bg_effect: particles
animation_speed: slow
blur: none
bg_gradient: radial-gradient(circle at 50% 0%, rgba(201,154,72,.20), transparent 30%), linear-gradient(180deg, #120d0a, #050302)
texture_overlay: paper
texture_intensity: 0.28
surface_style: raised
motion_style: typewriter
thinking_style: ellipsis

### Section 7 · components
message_user_bg: #c99a48
message_user_fg: #160e08
message_assistant_bg: #21160f
message_assistant_fg: #f4e8d2
input_bg: #160f0a
input_fg: #f4e8d2
input_border: #6f5132

### Section 10 · persona
sidebar_name: THE ARCHIVE
avatar: ◐
status: candle index: lit

### Section visual
engine: webgl
preset: embers
intensity: 0.55
speed: 0.28
density: 70
`;

export const bundledSkins: Skin[] = [
  parseSkin(minimalRaw, 'minimal'),
  parseSkin(terminalRaw, 'terminal-oracle'),
  parseSkin(vaporwaveRaw, 'vaporwave-mirage'),
  parseSkin(gothicRaw, 'gothic-librarian'),
];
