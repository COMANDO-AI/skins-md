### Section 1 · metadata
name: Matrix
author: COMANDO
version: 1.0.0
tags: matrix, digital-rain, cyberpunk, green-code, cinematic
description: Classic green digital rain behind a black operator console, always falling like the film.
preview_url: none
license: MIT

### Section 2 · palette
bg: #000000
fg: #d9ffe2
accent: #00ff41
muted: #4f8f5f
surface: rgba(0, 12, 4, .86)
border: #00ff41
error: #ff2e57
success: #00ff41

### Section 3 · typography
font_sans: IBM Plex Mono
font_mono: JetBrains Mono
font_display: Share Tech Mono
size_base: 15px
weight_base: 400
line_height: 1.7
letter_spacing: 0.04em
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
send_label: ENTER
placeholder: follow the white rabbit
empty_state: wake up. the matrix has you.
thinking_label: tracing signal
clear_label: RESET MATRIX

### Section 6 · atmosphere
bg_effect: scanlines
animation_speed: fast
blur: none
bg_gradient: linear-gradient(180deg, #000000, #001604 55%, #000000)
texture_overlay: scanlines
texture_intensity: 0.30
surface_style: inset
motion_style: glitch
thinking_style: blink

### Section 7 · components
message_user_bg: #00ff41
message_user_fg: #001604
message_assistant_bg: rgba(0, 18, 6, .88)
message_assistant_fg: #d9ffe2
input_bg: #000000
input_fg: #d9ffe2
input_border: #00ff41

### Section 9 · custom
body[data-skin="matrix"] .app-shell::before { content: ""; position: fixed; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, rgba(0,255,65,.12) 0 1px, transparent 1px 4px); mix-blend-mode: screen; opacity: .42; z-index: 3; }
body[data-skin="matrix"] .message.assistant { box-shadow: inset 3px 0 0 var(--accent), 0 0 34px rgba(0,255,65,.16); }

### Section 10 · persona
sidebar_name: MATRIX
avatar: 01
status: follow the white rabbit

### Section visual
engine: webgl
preset: code-rain
intensity: 1.05
speed: 1.35
density: 220
particles: code
text_reveal: typewriter
transitions: dissolve
parallax: deep
