### Section 1 · metadata
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
