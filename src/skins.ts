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

export const cozyStudyRaw = `### Section 1 · metadata
name: Cozy Study Companion
author: COMANDO
version: 1.0.0
tags: cozy, study, focus, warm, consumer
description: A warm desk lamp, soft paper, and a patient companion for studying.
preview_url: none
license: MIT

### Section 2 · palette
bg: #24160f
fg: #fff2dc
accent: #ffb86b
muted: #c8a989
surface: rgba(80,48,30,.72)
border: rgba(255,184,107,.35)
error: #ff7a7a
success: #9bd18b

### Section 3 · typography
font_sans: Nunito
font_mono: IBM Plex Mono
font_display: Fraunces
size_base: 16px
weight_base: 500
line_height: 1.7
letter_spacing: 0em
text_transform: none
weight_display: 800

### Section 4 · layout
radius: 22px
spacing_unit: 10px
max_width: 820px
sidebar_width: 320px
radius_message: 26px
radius_input: 24px
radius_ui: 20px
message_shape: soft
border_style: solid

### Section 5 · voice
send_label: Ask gently
placeholder: what are we studying today?
empty_state: Your desk is ready.
thinking_label: turning pages
clear_label: Tidy desk

### Section 6 · atmosphere
bg_effect: particles
animation_speed: slow
blur: 16px
bg_gradient: radial-gradient(circle at 25% 12%, rgba(255,184,107,.34), transparent 25%), radial-gradient(circle at 75% 70%, rgba(122,78,42,.45), transparent 32%), linear-gradient(150deg, #24160f, #55331f 58%, #160e0a)
texture_overlay: paper
texture_intensity: 0.2
surface_style: frosted
motion_style: float
thinking_style: ellipsis

### Section 7 · components
message_user_bg: #ffb86b
message_user_fg: #2a1609
message_assistant_bg: rgba(255,242,220,.13)
message_assistant_fg: #fff2dc
input_bg: rgba(36,22,15,.82)
input_fg: #fff2dc
input_border: rgba(255,184,107,.45)

### Section 10 · persona
sidebar_name: STUDY NOOK
avatar: ☕
status: focus lamp: warm

### Section visual
engine: webgl
preset: fireflies
intensity: 0.72
speed: 0.22
density: 96
hud: soft
particles: fireflies
text_reveal: typewriter
transitions: dissolve
parallax: gentle
`;

export const executiveRaw = `### Section 1 · metadata
name: Executive Operator
author: COMANDO
version: 1.0.0
tags: executive, operator, productivity, premium, consumer
description: A polished command center for decisions, briefings, and sharp execution.
preview_url: none
license: MIT

### Section 2 · palette
bg: #070b12
fg: #eef4ff
accent: #7dd3fc
muted: #8fa4bd
surface: rgba(10,18,30,.84)
border: rgba(125,211,252,.32)
error: #fb7185
success: #34d399

### Section 3 · typography
font_sans: Inter
font_mono: JetBrains Mono
font_display: Sora
size_base: 15px
weight_base: 500
line_height: 1.58
letter_spacing: -0.01em
text_transform: none
weight_display: 800

### Section 4 · layout
radius: 16px
spacing_unit: 9px
max_width: 900px
sidebar_width: 330px
radius_message: 18px
radius_input: 16px
radius_ui: 14px
message_shape: premium
border_style: solid

### Section 5 · voice
send_label: Execute
placeholder: brief me, decide, draft, delegate
empty_state: Command center standing by.
thinking_label: synthesizing brief
clear_label: Reset room

### Section 6 · atmosphere
bg_effect: grid
animation_speed: medium
blur: 18px
bg_gradient: radial-gradient(circle at 15% 10%, rgba(125,211,252,.24), transparent 26%), radial-gradient(circle at 85% 18%, rgba(99,102,241,.20), transparent 28%), linear-gradient(145deg, #070b12, #111827 56%, #020617)
texture_overlay: glass
texture_intensity: 0.16
surface_style: glass
motion_style: slide
thinking_style: pulse

### Section 7 · components
message_user_bg: linear-gradient(135deg, #7dd3fc, #c4b5fd)
message_user_fg: #020617
message_assistant_bg: rgba(15,23,42,.84)
message_assistant_fg: #eef4ff
input_bg: rgba(2,6,23,.78)
input_fg: #eef4ff
input_border: rgba(125,211,252,.42)

### Section 10 · persona
sidebar_name: OPERATOR
avatar: ◈
status: briefing layer active

### Section visual
engine: webgl
preset: executive-grid
intensity: 0.82
speed: 0.36
density: 120
hud: tactical
particles: nodes
text_reveal: fade-up
transitions: snap
parallax: medium
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

export const fantasyQuestRaw = `### Section 1 · metadata
name: Fantasy Quest Mentor
author: COMANDO
version: 1.0.0
tags: fantasy, quest, mentor, rpg, consumer
description: A quest log interface for goals, lore, tasks, and brave next steps.
preview_url: none
license: MIT

### Section 2 · palette
bg: #10150e
fg: #f6edd4
accent: #d6b35f
muted: #b7a078
surface: rgba(35,46,29,.82)
border: rgba(214,179,95,.46)
error: #d96b6b
success: #87c56d

### Section 3 · typography
font_sans: Cormorant Garamond
font_mono: IBM Plex Mono
font_display: Cinzel Decorative
size_base: 18px
weight_base: 600
line_height: 1.62
letter_spacing: 0.01em
text_transform: none
weight_display: 700

### Section 4 · layout
radius: 12px
spacing_unit: 10px
max_width: 820px
sidebar_width: 325px
radius_message: 10px 28px 10px 28px
radius_input: 12px
radius_ui: 10px
message_shape: parchment
border_style: double

### Section 5 · voice
send_label: Begin quest
placeholder: name the quest or ask the mentor
empty_state: The map waits for your first mark.
thinking_label: reading the runes
clear_label: Reroll path

### Section 6 · atmosphere
bg_effect: particles
animation_speed: slow
blur: 10px
bg_gradient: radial-gradient(circle at 50% 0%, rgba(214,179,95,.26), transparent 30%), radial-gradient(circle at 85% 70%, rgba(74,111,60,.28), transparent 32%), linear-gradient(180deg, #10150e, #26331f 55%, #070a06)
texture_overlay: parchment
texture_intensity: 0.26
surface_style: raised
motion_style: reveal
thinking_style: ellipsis

### Section 7 · components
message_user_bg: #d6b35f
message_user_fg: #151006
message_assistant_bg: rgba(246,237,212,.12)
message_assistant_fg: #f6edd4
input_bg: rgba(16,21,14,.86)
input_fg: #f6edd4
input_border: rgba(214,179,95,.52)

### Section 10 · persona
sidebar_name: QUEST MENTOR
avatar: ✧
status: map ink: fresh

### Section visual
engine: webgl
preset: rune-orbit
intensity: 0.72
speed: 0.28
density: 100
hud: compass
particles: motes
text_reveal: parchment
transitions: page-turn
parallax: gentle
`;

export const bundledSkins: Skin[] = [
  parseSkin(minimalRaw, 'minimal'),
  parseSkin(terminalRaw, 'terminal-oracle'),
  parseSkin(vaporwaveRaw, 'vaporwave-mirage'),
  parseSkin(gothicRaw, 'gothic-librarian'),
  parseSkin(cozyStudyRaw, 'cozy-study-companion'),
  parseSkin(executiveRaw, 'executive-operator'),
  parseSkin(animeTutorRaw, 'anime-tutor'),
  parseSkin(fantasyQuestRaw, 'fantasy-quest-mentor'),
];
