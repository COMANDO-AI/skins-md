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
.msg-bubble-user {
  border-left: 3px solid var(--border);
  box-shadow: 0 2px 16px color-mix(in srgb, var(--border) 25%, transparent);
}
.msg-bubble-assistant {
  border-left: 3px solid color-mix(in srgb, var(--accent) 35%, transparent);
  box-shadow: 0 1px 8px color-mix(in srgb, var(--accent) 8%, transparent);
}
.thinking-indicator {
  color: var(--accent);
  font-family: var(--font-display);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
textarea:focus {
  box-shadow: 0 0 0 1px var(--accent), 0 0 20px color-mix(in srgb, var(--accent) 12%, transparent) !important;
  border-color: var(--accent) !important;
}
::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--accent) 40%, var(--border) 60%);
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
right_panel_1_title:  GAME STATS
gauge_label:          WIN %
gauge_value:          87
stat_1_label:         PPG
stat_1_value:         28.4
stat_2_label:         AST
stat_2_value:         9.1
stat_3_label:         +/-
stat_3_value:         +18
right_panel_2_title:  LINEUP
bar_1_label:          OFFENSE
bar_1_value:          92
bar_2_label:          DEFENSE
bar_2_value:          78
bar_3_label:          STAMINA
bar_3_value:          85
bar_4_label:          SQUAD
bar_4_value:          100
nav_recent_1:         Design triple pick-and-roll
nav_recent_2:         Analyze defensive rotations
nav_recent_3:         Review game film highlights
nav_recent_4:         Build training regimen
