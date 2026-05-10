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
nav_recent_1:          Fix random value ordering issue
nav_recent_2:          Merge branch & push TestFlight
nav_recent_3:          PDF reconciliation & transaction match
nav_recent_4:          Submit latest build to Apple
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
  --panel-border:       rgba(68, 147, 248, 0.28);
  --panel-bg-dark:      linear-gradient(180deg, #040810 0%, #030609 100%);
  --panel-bg:           linear-gradient(180deg, #08101e 0%, #060c18 100%);
  --panel-glow:         rgba(20, 60, 200, 0.30);
  --panel-accent:       rgba(68, 147, 248, 0.90);
  --panel-accent-mid:   rgba(68, 147, 248, 0.55);
  --panel-accent-dim:   rgba(68, 147, 248, 0.40);
  --panel-accent-trace: rgba(68, 147, 248, 0.10);
  --panel-accent-glow:  rgba(68, 147, 248, 0.08);
  --panel-text:         rgba(200, 220, 240, 0.95);
  --panel-success:      rgba(0, 204, 102, 0.80);
  --panel-header:       rgba(68, 147, 248, 0.95);
}

/* ── Deep space background ───────────────────────────── */
body {
  background: radial-gradient(ellipse at 50% 20%, #081630 0%, #030609 55%) fixed;
}

/* ── Dense star field ────────────────────────────────── */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(1px 1px at  3%  7%, rgba(220,235,255,0.90) 0%, transparent 100%),
    radial-gradient(1px 1px at  8% 34%, rgba(200,220,255,0.65) 0%, transparent 100%),
    radial-gradient(1px 1px at 13% 61%, rgba(215,230,255,0.55) 0%, transparent 100%),
    radial-gradient(1px 1px at 18% 12%, rgba(230,240,255,0.80) 0%, transparent 100%),
    radial-gradient(1px 1px at 22% 48%, rgba(200,215,255,0.50) 0%, transparent 100%),
    radial-gradient(1px 1px at 26% 83%, rgba(210,225,255,0.45) 0%, transparent 100%),
    radial-gradient(1px 1px at 31%  3%, rgba(220,235,255,0.70) 0%, transparent 100%),
    radial-gradient(1px 1px at 35% 72%, rgba(200,220,255,0.50) 0%, transparent 100%),
    radial-gradient(1px 1px at 39% 26%, rgba(215,230,255,0.60) 0%, transparent 100%),
    radial-gradient(1px 1px at 43% 91%, rgba(200,215,255,0.40) 0%, transparent 100%),
    radial-gradient(1px 1px at 47% 15%, rgba(225,238,255,0.75) 0%, transparent 100%),
    radial-gradient(1px 1px at 52% 55%, rgba(205,220,255,0.45) 0%, transparent 100%),
    radial-gradient(1px 1px at 56% 38%, rgba(215,230,255,0.55) 0%, transparent 100%),
    radial-gradient(1px 1px at 61% 78%, rgba(200,218,255,0.40) 0%, transparent 100%),
    radial-gradient(1px 1px at 65%  9%, rgba(220,235,255,0.70) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 44%, rgba(205,222,255,0.50) 0%, transparent 100%),
    radial-gradient(1px 1px at 74% 67%, rgba(215,228,255,0.45) 0%, transparent 100%),
    radial-gradient(1px 1px at 78% 21%, rgba(225,238,255,0.65) 0%, transparent 100%),
    radial-gradient(1px 1px at 83% 57%, rgba(200,218,255,0.50) 0%, transparent 100%),
    radial-gradient(1px 1px at 87% 88%, rgba(210,225,255,0.40) 0%, transparent 100%),
    radial-gradient(1px 1px at 92% 31%, rgba(220,235,255,0.60) 0%, transparent 100%),
    radial-gradient(1px 1px at 96% 74%, rgba(205,220,255,0.45) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 10% 88%, rgba(220,235,255,0.55) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 28% 52%, rgba(200,220,255,0.50) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 55% 19%, rgba(225,238,255,0.60) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 72% 93%, rgba(210,228,255,0.45) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 89% 42%, rgba(220,235,255,0.55) 0%, transparent 100%),
    radial-gradient(2px 2px   at 16% 29%, rgba(235,245,255,0.50) 0%, transparent 100%),
    radial-gradient(2px 2px   at 44% 66%, rgba(225,240,255,0.40) 0%, transparent 100%),
    radial-gradient(2px 2px   at 81%  8%, rgba(235,245,255,0.55) 0%, transparent 100%),
    radial-gradient(2.5px 2.5px at 33% 40%, rgba(240,248,255,0.45) 0%, transparent 100%),
    radial-gradient(2.5px 2.5px at 67% 77%, rgba(235,245,255,0.40) 0%, transparent 100%);
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
    rgba(0, 0, 0, 0.06) 3px,
    rgba(0, 0, 0, 0.06) 4px
  );
  pointer-events: none;
  z-index: 9997;
}

/* ── Sidebar ─────────────────────────────────────────── */
aside {
  background: linear-gradient(180deg, #06101e 0%, #050c18 50%, #030609 100%) !important;
  border-right: 1px solid rgba(68, 147, 248, 0.30) !important;
  box-shadow: 8px 0 50px rgba(20, 60, 200, 0.22) !important;
}

/* ── Character header — red cockpit bars ─────────────── */
.character-header {
  position: relative !important;
  border-bottom: 1px solid rgba(68, 147, 248, 0.25) !important;
}

.character-header::before,
.character-header::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  height: 4px;
  width: 72px;
  border-radius: 2px;
}

.character-header::before {
  right: calc(50% + 108px);
  background: linear-gradient(90deg, transparent 0%, #881500 40%, #cc2200 100%);
  box-shadow: 0 0 12px rgba(180, 30, 0, 0.70), 0 0 4px rgba(220, 50, 0, 0.50);
}

.character-header::after {
  left: calc(50% + 108px);
  background: linear-gradient(90deg, #cc2200 0%, #881500 60%, transparent 100%);
  box-shadow: 0 0 12px rgba(180, 30, 0, 0.70), 0 0 4px rgba(220, 50, 0, 0.50);
}

/* ── Message bubbles ─────────────────────────────────── */
.msg-bubble-user {
  border: 1px solid rgba(68, 147, 248, 0.28) !important;
  box-shadow: 0 0 14px rgba(20, 60, 200, 0.14) !important;
}

.msg-bubble-assistant {
  border-left: 2px solid rgba(68, 147, 248, 0.40) !important;
}

/* ── Input ───────────────────────────────────────────── */
textarea:focus {
  border-color: rgba(68, 147, 248, 0.55) !important;
  box-shadow: 0 0 14px rgba(30, 90, 220, 0.18) !important;
  outline: none;
}

/* ── Send button ─────────────────────────────────────── */
button[style*="var(--accent)"] {
  box-shadow: 0 0 18px rgba(68, 147, 248, 0.40);
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

/* ── Character header (legacy catch-all) ─────────────── */
.character-header-legacy {
  border-bottom: 1px solid rgba(68, 147, 248, 0.22) !important;
}
```
