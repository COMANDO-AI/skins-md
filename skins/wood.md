### Section 1 · metadata
name:          Wood
author:        COMANDO
version:       2.0.0
tags:          nature, warm, organic, dark, minimal, atelier, craft, workshop
description:   ATELIER ACTIVE · Walnut bench ready · Sawdust in the air. Craft.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #1a1208
fg:            #e8d5b0
accent:        #c8822a
muted:         #7a5c3a
surface:       #241a0e
border:        #3a2a18
error:         #cc4422
success:       #4a8844

### Section 3 · typography
font_sans:     Lora
font_mono:     JetBrains Mono
font_display:  Playfair Display
size_base:     16px
weight_base:   400
line_height:   1.75
letter_spacing: 0.01em
text_transform: none
weight_display: 700

### Section 4 · layout
radius:        6px
spacing_unit:  10px
max_width:     720px
sidebar_width: 260px
radius_message: 18px
radius_input:   8px
radius_ui:      6px
message_shape:  default
border_style:   solid

### Section 5 · voice
send_label:    CRAFT
placeholder:   What are you making today?
empty_state:   Workshop ready. Tools sharp. What will you build?
thinking_label: Shaping...
clear_label:   CLEAR BENCH

### Section 6 · atmosphere
bg_effect:         gradient
animation_speed:   slow
blur:              none
bg_gradient:       linear-gradient(180deg, #1f1508 0%, #1a1208 40%, #150f06 70%, #0e0a04 100%)
texture_overlay:   grain
texture_intensity: subtle
surface_style:     raised
motion_style:      fade
thinking_style:    pulse

### Section 7 · components
message_user_bg:       #3a2010
message_user_fg:       #f0ddb8
message_assistant_bg:  #1e1408
message_assistant_fg:  #d4b88a
input_bg:              #160f05
input_fg:              #e8d5b0
input_border:          #3a2a18

### Section 9 · custom
@keyframes sawdust-drift {
  0%, 100% { opacity: 0.75; transform: translateY(0px) translateX(0px); }
  30%       { opacity: 1.00; transform: translateY(-18px) translateX(4px); }
  65%       { opacity: 0.85; transform: translateY(-9px) translateX(-3px); }
}

@keyframes amber-sway {
  0%   { transform: translateX(-5%) scaleY(0.94); opacity: 0.60; }
  100% { transform: translateX( 5%) scaleY(1.06); opacity: 0.90; }
}

@keyframes logo-amber {
  0%, 100% { text-shadow: 0 0 10px rgba(200,130,42,0.45), 0 0 22px rgba(200,130,42,0.12); }
  50%       { text-shadow: 0 0 18px rgba(220,150,50,0.90), 0 0 44px rgba(200,130,42,0.35), 0 0 70px rgba(180,110,30,0.10); }
}

@keyframes btn-craft {
  0%   { box-shadow: 0 0 12px rgba(200,130,42,0.40), 0 0 30px rgba(200,130,42,0.12), 0 0 0 0 rgba(200,130,42,0.35); }
  60%  { box-shadow: 0 0 12px rgba(200,130,42,0.40), 0 0 30px rgba(200,130,42,0.12), 0 0 0 10px rgba(200,130,42,0.00); }
  100% { box-shadow: 0 0 12px rgba(200,130,42,0.40), 0 0 30px rgba(200,130,42,0.12), 0 0 0 0 rgba(200,130,42,0.00); }
}

@keyframes thinking-carve {
  0%, 100% { opacity: 0.60; letter-spacing: 0.08em; }
  50%       { opacity: 1.00; letter-spacing: 0.13em; }
}

/* === SAWDUST MOTE FIELD === */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(circle 4px at  4% 14%, rgba(200,130,42,0.80) 0%, transparent 65%),
    radial-gradient(circle 3px at 12% 68%, rgba(220,160,60,0.70) 0%, transparent 65%),
    radial-gradient(circle 5px at 21% 35%, rgba(190,110,32,0.65) 0%, transparent 65%),
    radial-gradient(circle 3px at 29% 80%, rgba(210,145,50,0.60) 0%, transparent 65%),
    radial-gradient(circle 4px at 42% 20%, rgba(230,170,70,0.75) 0%, transparent 65%),
    radial-gradient(circle 3px at 54% 57%, rgba(200,130,42,0.65) 0%, transparent 65%),
    radial-gradient(circle 5px at 66% 28%, rgba(215,140,45,0.60) 0%, transparent 65%),
    radial-gradient(circle 3px at 75% 74%, rgba(200,130,42,0.75) 0%, transparent 65%),
    radial-gradient(circle 6px at 83% 44%, rgba(180,110,30,0.55) 0%, transparent 65%),
    radial-gradient(circle 3px at 91% 83%, rgba(220,155,55,0.65) 0%, transparent 65%),
    radial-gradient(circle 4px at 96% 32%, rgba(200,130,42,0.70) 0%, transparent 65%),
    radial-gradient(circle 3px at 17% 90%, rgba(195,125,40,0.60) 0%, transparent 65%),
    radial-gradient(circle 5px at 60% 92%, rgba(225,165,65,0.55) 0%, transparent 65%),
    radial-gradient(circle 3px at 36% 56%, rgba(200,130,42,0.55) 0%, transparent 65%),
    radial-gradient(circle 3px at 77%  9%, rgba(215,145,48,0.70) 0%, transparent 65%),
    radial-gradient(circle 5px at 48%  6%, rgba(190,115,35,0.52) 0%, transparent 65%),
    radial-gradient(circle 3px at  2% 48%, rgba(200,130,42,0.60) 0%, transparent 65%),
    radial-gradient(circle 4px at 87% 17%, rgba(230,165,62,0.60) 0%, transparent 65%),
    radial-gradient(circle 5px at 43% 96%, rgba(180,110,30,0.52) 0%, transparent 65%),
    radial-gradient(circle 3px at 70% 50%, rgba(200,130,42,0.52) 0%, transparent 65%),
    radial-gradient(circle 4px at 25% 42%, rgba(220,155,55,0.58) 0%, transparent 65%),
    radial-gradient(circle 3px at 57% 36%, rgba(195,125,40,0.52) 0%, transparent 65%),
    radial-gradient(circle 5px at  7% 73%, rgba(200,130,42,0.68) 0%, transparent 65%),
    radial-gradient(circle 3px at 94% 60%, rgba(215,145,48,0.62) 0%, transparent 65%);
  animation: sawdust-drift 16s ease-in-out infinite;
}

/* === WORKSHOP LAMP LIGHT POOL === */
body::after {
  content: "";
  position: fixed;
  top: -35%;
  left: -25%;
  right: -25%;
  height: 70%;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(170deg, rgba(200,130,42,0.18) 0%, transparent 52%),
    linear-gradient(180deg, rgba(220,160,60,0.13) 0%, transparent 46%),
    linear-gradient(190deg, rgba(180,100,28,0.15) 0%, transparent 54%),
    linear-gradient(158deg, rgba(210,140,48,0.11) 0%, transparent 44%);
  border-radius: 0 0 80% 80%;
  animation: amber-sway 24s ease-in-out infinite alternate;
}

/* === SIDEBAR — WALNUT PANEL === */
aside {
  background: linear-gradient(180deg, #2a1a0a 0%, #1f1208 40%, #160d06 100%) !important;
  border-right: 1px solid rgba(200,130,42,0.28) !important;
  box-shadow: 6px 0 50px rgba(160,90,20,0.25) !important;
}

/* === SIDEBAR TOP ACCENT STRIPE === */
aside::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(200,130,42,0.65), rgba(220,160,60,0.40), transparent);
  pointer-events: none;
}

aside {
  position: relative;
}

/* === PLAYFAIR LOGO — AMBER GLOW === */
aside .text-lg {
  letter-spacing: 0.12em !important;
  animation: logo-amber 4s ease-in-out infinite;
}

/* === CRAFT BUTTON — WARM PULSE === */
button[style*="var(--accent)"] {
  letter-spacing: 0.14em;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  animation: btn-craft 3.5s ease-out infinite;
  transition: box-shadow 0.25s ease;
}

button[style*="var(--accent)"]:hover:not(:disabled) {
  box-shadow:
    0 0 24px rgba(200,130,42,0.65),
    0 0 52px rgba(200,130,42,0.28),
    0 0 80px rgba(180,100,28,0.10),
    inset 0 1px 0 rgba(255,220,140,0.18) !important;
}

/* === USER BUBBLE — AMBER WARMTH === */
.msg-bubble-user {
  border-radius: 18px 18px 4px 18px !important;
  border: 1px solid rgba(200,130,42,0.32) !important;
  box-shadow:
    0 0 12px rgba(200,130,42,0.22),
    0 0 28px rgba(180,100,28,0.08),
    inset 0 1px 0 rgba(220,160,60,0.14) !important;
}

/* === ASSISTANT BUBBLE — BENCH SURFACE === */
.msg-bubble-assistant {
  border-radius: 4px 18px 18px 18px !important;
  border: 1px solid rgba(120,80,30,0.20) !important;
  border-left: 3px solid rgba(200,130,42,0.38) !important;
  box-shadow:
    0 4px 24px rgba(0,0,0,0.55),
    0 0 16px rgba(120,70,20,0.06),
    inset 0 1px 0 rgba(200,130,42,0.06) !important;
}

/* === THINKING — SHAPING === */
.thinking-indicator {
  color: rgba(200,130,42,1.0) !important;
  text-shadow: 0 0 10px rgba(200,130,42,0.55), 0 0 20px rgba(180,100,28,0.18);
  animation: thinking-carve 2s ease-in-out infinite !important;
}

.thinking-dot {
  color: rgba(200,130,42,0.9);
  text-shadow: 0 0 8px rgba(200,130,42,0.55);
}

/* === INPUT AREA — WORK SURFACE === */
textarea:focus {
  border-color: rgba(200,130,42,0.42) !important;
  box-shadow:
    0 0 0 2px rgba(200,130,42,0.08),
    0 0 20px rgba(200,130,42,0.14) !important;
  outline: none;
}

/* === INLINE CODE — AMBER GRAIN === */
code {
  color: rgba(220,175,80,0.95) !important;
  text-shadow: 0 0 8px rgba(200,130,42,0.28);
}

/* === ACCENT DOT IN SKIN PICKER === */
.rounded-full[style*="var(--accent)"] {
  box-shadow: 0 0 8px rgba(200,130,42,0.60), 0 0 18px rgba(180,100,28,0.22);
}

/* === SCROLLBAR — AMBER TRACE === */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: rgba(14,10,4,0.8); }
::-webkit-scrollbar-thumb { background: rgba(200,130,42,0.28); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: rgba(200,130,42,0.55); }

### Section 10 · persona
sidebar_name:          ATELIER
sidebar_tagline:       MAKE. SHAPE. REFINE.
sidebar_icon:          🪵
user_name:             YOU
user_role:             MASTER MAKER
user_level:            1
user_xp:               0
user_xp_max:           2000
assistant_avatar:      🔨
layout:                three-column
right_panel_0_title:   BENCH LOG
terminal_line:         workshop-01 ~ %
right_panel_1_title:   WORKSHOP
gauge_value:           84
stat_1_label:          MATERIAL
stat_1_value:          walnut
stat_2_label:          TEMP.
stat_2_value:          warm
stat_3_label:          HUMIDITY
stat_3_value:          42%
right_panel_2_title:   TOOL STATUS
bar_1_label:           LATHE
bar_1_value:           88
bar_2_label:           ROUTER
bar_2_value:           74
bar_3_label:           CHISEL
bar_3_value:           95
bar_4_label:           MALLET
bar_4_value:           100
