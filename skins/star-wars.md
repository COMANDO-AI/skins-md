### Section 1 · metadata
name:          Star Wars
author:        COMANDO
version:       2.0.0
tags:          sci-fi, dark, franchise, epic, immersive, cockpit, space
description:   A long time ago, in a galaxy far, far away... your AI workspace.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #060a14
fg:            #c8d8ec
accent:        #4493f8
muted:         #3a5272
surface:       #0c1624
border:        #1e3858
error:         #ff4040
success:       #00cc66

### Section 3 · typography
font_sans:     Inter
font_mono:     Share Tech Mono
font_display:  Orbitron
size_base:     14px
weight_base:   400
line_height:   1.65
letter_spacing: 0.03em
text_transform: uppercase
weight_display: 700

### Section 4 · layout
radius:        3px
radius_message: 2px
radius_input:  2px
radius_ui:     4px
border_style:  solid
spacing_unit:  8px
max_width:     720px
sidebar_width: 260px
message_shape: sharp

### Section 5 · voice
send_label:    TRANSMIT
placeholder:   Type / for commands
empty_state:   The Force is strong here. Speak.
thinking_label: Decoding
clear_label:   NEW SESSION

### Section 6 · atmosphere
bg_effect:     none
animation_speed: slow
blur:          none
texture_overlay: none
surface_style: raised
motion_style:  fade
thinking_style: pulse

### Section 7 · components
message_user_bg:       #0a1f40
message_user_fg:       #d0e8ff
message_assistant_bg:  #07111f
message_assistant_fg:  #aac0d8
input_bg:              #070e1a
input_fg:              #c8d8ec
input_border:          #1e3858

### Section 8 · persona
sidebar_name:          REBEL ALLIANCE
sidebar_tagline:       SECURE CHANNEL ACTIVE
sidebar_icon:          ✦
user_name:             LUKE
user_role:             JEDI PATHFINDER
user_level:            JEDI KNIGHT
assistant_avatar:      ◈
layout:                three-column
right_panel_0_title:   TERMINAL
right_panel_1_title:   FORCE STATUS
right_panel_2_title:   SHIP SYSTEMS
terminal_line:         luke@yavin-base ~ %
terminal_header_1:     > REBEL ALLIANCE · channel secure
terminal_header_2:     · FORCE FIELD: ACTIVE
gauge_value:           85
gauge_label:           FORCE
stat_1_label:          MIDICHLORIANS
stat_1_value:          15,000
stat_2_label:          FORCE LEVEL
stat_2_value:          JEDI
stat_3_label:          LOCATION
stat_3_value:          YAVIN 4
bar_1_label:           SHIELDS
bar_1_value:           92
bar_2_label:           HYPERDRIVE
bar_2_value:           78
bar_3_label:           WEAPONS
bar_3_value:           100
bar_4_label:           LIFE SUPPORT
bar_4_value:           95

### Section 9 · custom
```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

/* ── Panel theming tokens ────────────────────────────── */
:root {
  --panel-border:       rgba(68, 147, 248, 0.25);
  --panel-bg-dark:      linear-gradient(180deg, #060c18 0%, #040a14 100%);
  --panel-bg:           linear-gradient(180deg, #0c1624 0%, #080f1e 100%);
  --panel-glow:         rgba(20, 60, 200, 0.25);
  --panel-accent:       rgba(68, 147, 248, 0.85);
  --panel-accent-mid:   rgba(68, 147, 248, 0.50);
  --panel-accent-dim:   rgba(68, 147, 248, 0.40);
  --panel-accent-trace: rgba(68, 147, 248, 0.10);
  --panel-accent-glow:  rgba(68, 147, 248, 0.08);
  --panel-text:         rgba(200, 220, 240, 0.90);
  --panel-success:      rgba(0, 204, 102, 0.70);
  --panel-header:       rgba(68, 147, 248, 0.90);
}

/* ── Deep space background ───────────────────────────── */
body {
  background: radial-gradient(ellipse at 50% 0%, #0d1f3c 0%, #060a14 65%) fixed;
}

/* ── Star field ──────────────────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at  8% 12%, rgba(200,220,255,0.70) 0%, transparent 100%),
    radial-gradient(1px 1px at 17% 44%, rgba(180,210,255,0.45) 0%, transparent 100%),
    radial-gradient(1px 1px at 26%  8%, rgba(220,235,255,0.60) 0%, transparent 100%),
    radial-gradient(1px 1px at 34% 68%, rgba(190,215,255,0.35) 0%, transparent 100%),
    radial-gradient(1px 1px at 43% 29%, rgba(210,230,255,0.55) 0%, transparent 100%),
    radial-gradient(1px 1px at 52% 82%, rgba(200,220,255,0.40) 0%, transparent 100%),
    radial-gradient(1px 1px at 61% 17%, rgba(220,235,255,0.50) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 55%, rgba(180,210,255,0.35) 0%, transparent 100%),
    radial-gradient(1px 1px at 79% 38%, rgba(200,225,255,0.60) 0%, transparent 100%),
    radial-gradient(1px 1px at 88% 73%, rgba(210,230,255,0.45) 0%, transparent 100%),
    radial-gradient(1px 1px at 95% 22%, rgba(200,220,255,0.50) 0%, transparent 100%),
    radial-gradient(1px 1px at 13% 91%, rgba(190,215,255,0.30) 0%, transparent 100%),
    radial-gradient(1px 1px at  4% 57%, rgba(200,215,255,0.40) 0%, transparent 100%),
    radial-gradient(1px 1px at 56% 34%, rgba(215,230,255,0.30) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 37% 51%, rgba(200,220,255,0.35) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 65% 88%, rgba(210,230,255,0.30) 0%, transparent 100%),
    radial-gradient(2px 2px   at 82%  6%, rgba(220,235,255,0.40) 0%, transparent 100%),
    radial-gradient(2px 2px   at 48% 62%, rgba(200,220,255,0.25) 0%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

/* ── Scanline overlay ────────────────────────────────── */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 3px,
    rgba(0, 0, 0, 0.07) 3px,
    rgba(0, 0, 0, 0.07) 4px
  );
  pointer-events: none;
  z-index: 9997;
}

/* ── Sidebar ─────────────────────────────────────────── */
aside {
  background: linear-gradient(180deg, #081428 0%, #060e1e 50%, #040a14 100%) !important;
  border-right: 1px solid rgba(68, 147, 248, 0.28) !important;
  box-shadow: 6px 0 40px rgba(20, 60, 200, 0.18) !important;
}

/* ── Message bubbles ─────────────────────────────────── */
.msg-bubble-user {
  border: 1px solid rgba(68, 147, 248, 0.28) !important;
  box-shadow: 0 0 12px rgba(20, 60, 200, 0.12) !important;
}

.msg-bubble-assistant {
  border-left: 2px solid rgba(68, 147, 248, 0.35) !important;
}

/* ── Input ───────────────────────────────────────────── */
textarea:focus {
  border-color: rgba(68, 147, 248, 0.55) !important;
  box-shadow: 0 0 14px rgba(30, 90, 220, 0.18) !important;
  outline: none;
}

/* ── Send button ─────────────────────────────────────── */
button[style*="var(--accent)"] {
  box-shadow: 0 0 16px rgba(68, 147, 248, 0.35);
  letter-spacing: 0.12em;
}

/* ── Code ────────────────────────────────────────────── */
code {
  background: rgba(68, 147, 248, 0.10) !important;
  border: 1px solid rgba(68, 147, 248, 0.18) !important;
  color: rgba(150, 200, 255, 0.90) !important;
}

/* ── Scrollbar ───────────────────────────────────────── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(68, 147, 248, 0.30); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(68, 147, 248, 0.55); }

/* ── Character header ────────────────────────────────── */
.character-header {
  border-bottom: 1px solid rgba(68, 147, 248, 0.22) !important;
}
```
