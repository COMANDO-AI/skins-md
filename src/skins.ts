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

export const matrixRaw = `### Section 1 · metadata
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
`;

export const windows95Raw = `### Section 1 · metadata
name: Windows 95 Assistant
author: COMANDO
version: 1.0.0
tags: windows95, winamp, desktop, retro, consumer
description: A grey plastic desktop companion with beveled panels, blue title bars, Start-button microcopy, and tiny Winamp-era pixels.
preview_url: none
license: MIT

### Section 2 · palette
bg: #008080
fg: #000000
accent: #000080
muted: #404040
surface: #c0c0c0
border: #808080
error: #800000
success: #008000

### Section 3 · typography
font_sans: MS Sans Serif, Tahoma, Arial, system-ui, sans-serif
font_mono: Lucida Console, Monaco, monospace
font_display: MS Sans Serif, Tahoma, Arial, system-ui, sans-serif
size_base: 14px
weight_base: 400
line_height: 1.48
letter_spacing: 0em
text_transform: none
weight_display: 700

### Section 4 · layout
radius: 0px
spacing_unit: 8px
max_width: 820px
sidebar_width: 310px
radius_message: 0px
radius_input: 0px
radius_ui: 0px
message_shape: sharp
border_style: solid

### Section 5 · voice
send_label: Send »
placeholder: type here like it's 1995
empty_state: Double-click a thought to begin.
thinking_label: loading assistant.exe
clear_label: Close window

### Section 6 · atmosphere
bg_effect: grid
animation_speed: slow
blur: none
bg_gradient: radial-gradient(circle at 12% 16%, rgba(255,255,255,.22), transparent 9%), linear-gradient(135deg, #008080, #007070 58%, #006060)
texture_overlay: pixels
texture_intensity: 0.20
surface_style: raised
motion_style: snap
thinking_style: blink

### Section 7 · components
message_user_bg: #ffffe1
message_user_fg: #000000
message_assistant_bg: #ffffff
message_assistant_fg: #000000
input_bg: #ffffff
input_fg: #000000
input_border: #000000

### Section 10 · persona
sidebar_name: ASSISTANT.EXE
avatar: ▣
status: C:\\SKINS\\READY

### Section visual
engine: css
preset: desktop-grid
intensity: 0.82
speed: 0.24
density: 96
hud: taskbar
particles: pixels
text_reveal: instant
transitions: snap
parallax: subtle
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


export const pokemonRaw = `### Section 1 · metadata
name: Pokémon Trainer
author: COMANDO
version: 1.0.0
tags: pokemon, trainer, gameboy, rpg, playful, consumer
description: A monster-catching RPG interface for quests, study battles, party planning, and tiny wins.
preview_url: none
license: MIT

### Section 2 · palette
bg: #f8f3d6
fg: #1f2a44
accent: #ffcc03
muted: #47607a
surface: rgba(255,255,255,.88)
border: #2f6db5
error: #d62828
success: #2fb344

### Section 3 · typography
font_sans: Nunito
font_mono: IBM Plex Mono
font_display: Fredoka
size_base: 16px
weight_base: 700
line_height: 1.55
letter_spacing: 0.01em
text_transform: none
weight_display: 800

### Section 4 · layout
radius: 18px
spacing_unit: 9px
max_width: 860px
sidebar_width: 315px
radius_message: 18px 18px 6px 18px
radius_input: 16px
radius_ui: 14px
message_shape: battle-card
border_style: solid

### Section 5 · voice
send_label: Battle!
placeholder: ask the trainer, name the quest, choose a move
empty_state: A wild question appeared!
thinking_label: choosing next move
clear_label: New route

### Section 6 · atmosphere
bg_effect: pixels
animation_speed: medium
blur: 8px
bg_gradient: radial-gradient(circle at 18% 18%, rgba(255,204,3,.52), transparent 24%), radial-gradient(circle at 82% 12%, rgba(229,57,53,.32), transparent 22%), radial-gradient(circle at 68% 82%, rgba(47,109,181,.36), transparent 28%), linear-gradient(160deg, #f8f3d6, #dff4ff 52%, #fff2a8)
texture_overlay: pixels
texture_intensity: 0.24
surface_style: raised
motion_style: bounce
thinking_style: dots

### Section 7 · components
message_user_bg: linear-gradient(135deg, #ffcc03, #ffef8a)
message_user_fg: #1f2a44
message_assistant_bg: rgba(255,255,255,.92)
message_assistant_fg: #1f2a44
input_bg: rgba(255,255,255,.94)
input_fg: #1f2a44
input_border: #2f6db5

### Section 10 · persona
sidebar_name: TRAINER DEX
avatar: ◉
status: party ready

### Section visual
engine: webgl
preset: sprite-field
intensity: 0.88
speed: 0.42
density: 118
hud: playful
particles: pixels
text_reveal: pop
transitions: bounce
parallax: gentle
`;

export const animeTutorRaw = `### Section 1 · metadata
name: Anime Tutor
author: COMANDO
version: 1.0.0
tags: anime, tutor, learning, playful, consumer
description: A bright study sidekick with pop colors, stickers, and encouragement.
preview_url: none
license: MIT

### Section 2 · palette
bg: #21113d
fg: #fff7ff
accent: #ff5fd2
muted: #cbb7ff
surface: rgba(255,255,255,.14)
border: rgba(255,255,255,.30)
error: #ff4f7a
success: #56f0b2

### Section 3 · typography
font_sans: Baloo 2
font_mono: JetBrains Mono
font_display: Fredoka
size_base: 17px
weight_base: 500
line_height: 1.62
letter_spacing: 0em
text_transform: none
weight_display: 700

### Section 4 · layout
radius: 30px
spacing_unit: 10px
max_width: 850px
sidebar_width: 320px
radius_message: 30px 30px 10px 30px
radius_input: 999px
radius_ui: 26px
message_shape: bubble
border_style: solid

### Section 5 · voice
send_label: Let's go!
placeholder: ask sensei anything ✦
empty_state: Lesson arc starts now.
thinking_label: drawing notes
clear_label: New episode

### Section 6 · atmosphere
bg_effect: gradient
animation_speed: medium
blur: 20px
bg_gradient: radial-gradient(circle at 18% 18%, rgba(255,95,210,.42), transparent 24%), radial-gradient(circle at 75% 15%, rgba(91,222,255,.34), transparent 26%), linear-gradient(160deg, #21113d, #5034a5 55%, #ff8bdc)
texture_overlay: sparkle
texture_intensity: 0.2
surface_style: glossy
motion_style: bounce
thinking_style: pulse

### Section 7 · components
message_user_bg: linear-gradient(135deg, #ff5fd2, #5bdeff)
message_user_fg: #21113d
message_assistant_bg: rgba(255,255,255,.17)
message_assistant_fg: #fff7ff
input_bg: rgba(255,255,255,.16)
input_fg: #fff7ff
input_border: rgba(255,255,255,.42)

### Section 10 · persona
sidebar_name: TUTOR ARC
avatar: ✦
status: encouragement maxed

### Section visual
engine: webgl
preset: sparkle-pop
intensity: 0.95
speed: 0.55
density: 135
hud: playful
particles: sparkles
text_reveal: pop
transitions: bounce
parallax: medium
`;


export const starWarsCommandDeckRaw = `### Section 1 · metadata
name: Star Wars Command Deck
author: COMANDO
version: 1.0.0
tags: star-wars, cockpit, command-deck, hologram, sci-fi, tactical
description: A deep-space cockpit console with blue hologram panels, red alert lights, angled glass, and command-channel microcopy.
preview_url: none
license: MIT

### Section 2 · palette
bg: #02050d
fg: #d7ecff
accent: #74c7ff
muted: #6f88a7
surface: rgba(5, 12, 28, .84)
border: #1e6fa6
error: #ff3b30
success: #55ff9b

### Section 3 · typography
font_sans: Inter
font_mono: JetBrains Mono
font_display: Eurostile, Orbitron, Inter
size_base: 15px
weight_base: 500
line_height: 1.62
letter_spacing: 0.03em
text_transform: none
weight_display: 800

### Section 4 · layout
radius: 16px
spacing_unit: 8px
max_width: 880px
sidebar_width: 320px
radius_message: 14px 22px 14px 22px
radius_input: 14px
radius_ui: 18px
message_shape: cockpit-panel
border_style: solid

### Section 5 · voice
send_label: Transmit
placeholder: send a secure channel message
empty_state: Awaiting command from the deck.
thinking_label: calculating hyperspace vector
clear_label: Reset channel

### Section 6 · atmosphere
bg_effect: starfield
animation_speed: slow
blur: 10px
bg_gradient: radial-gradient(circle at 50% -12%, rgba(116,199,255,.32), transparent 30%), radial-gradient(circle at 90% 18%, rgba(255,59,48,.16), transparent 18%), linear-gradient(180deg, #050816, #02050d 54%, #00030a)
texture_overlay: scanlines
texture_intensity: 0.22
surface_style: glass
motion_style: tactical
thinking_style: pulse

### Section 7 · components
message_user_bg: linear-gradient(135deg, rgba(116,199,255,.95), rgba(25,82,130,.92))
message_user_fg: #02050d
message_assistant_bg: rgba(3, 10, 24, .88)
message_assistant_fg: #d7ecff
input_bg: rgba(0, 6, 16, .92)
input_fg: #d7ecff
input_border: #74c7ff

### Section 10 · persona
sidebar_name: COMMAND DECK
avatar: ✦
status: secure channel · rebellion frequency

### Section visual
engine: webgl
preset: stars
intensity: 1.0
speed: 0.24
density: 180
hud: tactical
particles: stars
text_reveal: typewriter
transitions: snap
parallax: deep
`;

export const bundledSkins: Skin[] = [
  parseSkin(minimalRaw, 'minimal'),
  parseSkin(matrixRaw, 'matrix'),
  parseSkin(windows95Raw, 'windows-95-assistant'),
  parseSkin(gothicRaw, 'gothic-librarian'),
  parseSkin(pokemonRaw, 'pokemon-trainer'),
  parseSkin(animeTutorRaw, 'anime-tutor'),
  parseSkin(starWarsCommandDeckRaw, 'star-wars-command-deck'),
];
