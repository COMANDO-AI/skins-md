### Section 1 · metadata
name:          NBA
author:        COMANDO
version:       1.0.0
tags:          sports, bold, loud, maximalist, dark
description:   Court energy. Arena noise. Every session feels like game 7.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #0d0a1a
fg:            #ffffff
accent:        #fdb927
muted:         #9d9db5
surface:       #1a0f2e
border:        #cc0000
error:         #ff3333
success:       #00cc44

### Section 3 · typography
font_sans:     Inter
font_mono:     JetBrains Mono
font_display:  Bebas Neue
size_base:     15px
weight_base:   600
line_height:   1.5

### Section 4 · layout
radius:        4px
spacing_unit:  8px
max_width:     760px
sidebar_width: 280px

### Section 5 · voice
send_label:    SHOOT
placeholder:   Run the play...
empty_state:   Game time. What's the move?
thinking_label: Analyzing...
clear_label:   NEW GAME

### Section 6 · atmosphere
bg_effect:         gradient
animation_speed:   fast
blur:              none
bg_gradient:       linear-gradient(160deg, #1a0020 0%, #0d0a1a 40%, #1a0010 100%)
texture_overlay:   grain
texture_intensity: subtle
surface_style:     raised
motion_style:      snap
thinking_style:    pulse

### Section 7 · components
message_user_bg:       #cc0000
message_user_fg:       #ffffff
message_assistant_bg:  #1a0f2e
message_assistant_fg:  #ffffff

### Section 9 · custom
/* === NBA SKIN · EA Sports aesthetic === */

/* Deep arena atmosphere */
body {
  background: linear-gradient(160deg, #1a0020 0%, #0d0a1a 40%, #1a0010 100%) fixed;
}

/* Court floor glow at bottom */
body::before {
  content: "";
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 35%;
  background: radial-gradient(ellipse 100% 60% at 50% 100%,
    color-mix(in srgb, #cc0000 6%, transparent) 0%,
    transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* Scoreboard top glow */
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: radial-gradient(ellipse 80% 50% at 50% 0%,
    color-mix(in srgb, #fdb927 4%, transparent) 0%,
    transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/* Sidebar - stronger frame */
aside {
  border-right: 2px solid color-mix(in srgb, var(--border) 55%, transparent) !important;
  box-shadow: 4px 0 30px color-mix(in srgb, var(--border) 25%, transparent) !important;
}

/* Message bubbles */
.msg-bubble-user {
  border-left: 3px solid var(--border) !important;
  box-shadow: 0 2px 16px color-mix(in srgb, var(--border) 20%, transparent) !important;
}
.msg-bubble-assistant {
  border-left: 3px solid color-mix(in srgb, var(--accent) 40%, transparent) !important;
}

/* Thinking — gold pulse */
.thinking-indicator {
  color: var(--accent) !important;
  font-family: var(--font-display) !important;
  letter-spacing: 0.18em !important;
  text-transform: uppercase !important;
  text-shadow: 0 0 12px color-mix(in srgb, var(--accent) 50%, transparent) !important;
}

/* Input focus — gold ring */
textarea:focus {
  border-color: var(--accent) !important;
  box-shadow: 0 0 0 1px var(--accent), 0 0 16px color-mix(in srgb, var(--accent) 15%, transparent) !important;
}

/* Scrollbar — red-gold blend */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--accent) 45%, var(--border) 55%);
  border-radius: 2px;
}

/* Code snippets */
code {
  color: var(--accent) !important;
  background: color-mix(in srgb, var(--accent) 8%, transparent) !important;
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent) !important;
}

### Section 10 · persona
sidebar_name:         NBA
sidebar_tagline:      EVERY GAME IS GAME 7.
sidebar_icon:         🏀
user_name:            PLAYER
user_role:            POINT GUARD
user_level:           23
user_xp:              1850
user_xp_max:          2300
assistant_avatar:     🏀
layout:               three-column
right_panel_0_title:  COURT FEED
terminal_line:        hardwood-01 ~ %
terminal_header_1:    > ARENA v2.4 · session active
terminal_header_2:    · shot clock: RUNNING
right_panel_1_title:  PLAYS CALLED
play_1_type:          PG
play_1_label:         Pick-and-roll
play_1_score:         +12 pts
play_2_type:          SG
play_2_label:         3-pointer set
play_2_score:         +9 pts
play_3_type:          SF
play_3_label:         Post-up sequence
play_3_score:         +6 pts
play_4_type:          PF
play_4_label:         Defensive stop
play_4_score:         -3 pts
right_panel_2_title:  GAME PLAN
check_1_label:        Execute pick-and-roll
check_1_done:         true
check_2_label:        Switch to zone defense
check_2_done:         true
check_3_label:        Sub in reserve players
check_3_done:         true
check_4_label:        Close out 4th quarter
check_4_done:         false
action_button:        CALL PLAY
status_branch:        hardwood-01 ~ main
status_note:          SEASON · GAME 23
nav_recent_1:         Design triple pick-and-roll
nav_recent_2:         Analyze defensive rotations
nav_recent_3:         Review game film highlights
nav_recent_4:         Build training regimen
