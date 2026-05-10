### Section 1 · metadata
name:          Under the Sea
author:        COMANDO
version:       2.1.0
tags:          underwater, bioluminescent, dark, fluid, submarine, deepnet, deep-sea
description:   DEEPNET ACTIVE · 2,340m · Bioluminescent signal detected. Dive.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #020b18
fg:            #a8d8f0
accent:        #00d4ff
muted:         #2a4f6e
surface:       #040f1e
border:        #0d3558
error:         #ff5c4d
success:       #00ffaa

### Section 3 · typography
font_sans:     Exo 2
font_mono:     JetBrains Mono
font_display:  Orbitron
size_base:     14px
weight_base:   400
line_height:   1.75
letter_spacing: 0.02em
text_transform: none
weight_display: 700

### Section 4 · layout
radius:        12px
spacing_unit:  8px
max_width:     740px
sidebar_width: 270px
radius_message: 20px
radius_input:   12px
radius_ui:      10px
message_shape:  default
border_style:   solid

### Section 5 · voice
send_label:    DIVE
placeholder:   Transmit signal...
empty_state:   DEEPNET ACTIVE · 2,340m depth · Awaiting transmission
thinking_label: Sonar scanning
clear_label:   SURFACE

### Section 6 · atmosphere
bg_effect:         gradient
animation_speed:   normal
blur:              none
bg_gradient:       linear-gradient(180deg, #010810 0%, #041525 35%, #040f1e 65%, #030c1a 100%)
texture_overlay:   none
texture_intensity: subtle
surface_style:     frosted
motion_style:      bloom
thinking_style:    pulse

### Section 7 · components
message_user_bg:       #0d3a6e
message_user_fg:       #c8e8ff
message_assistant_bg:  #030d1c
message_assistant_fg:  #88cce8
input_bg:              #030d1c
input_fg:              #a8d8f0
input_border:          #0d3558

### Section 9 · custom
@keyframes plankton-pulse {
  0%, 100% { opacity: 0.8; transform: translateY(0px); }
  40%       { opacity: 1.0; transform: translateY(-14px); }
  70%       { opacity: 0.9; transform: translateY(-7px); }
}

@keyframes light-ray-drift {
  0%   { transform: translateX(-6%) scaleY(0.92); opacity: 0.55; }
  100% { transform: translateX( 6%) scaleY(1.08); opacity: 1.00; }
}

@keyframes logo-glow {
  0%, 100% { text-shadow: 0 0 10px rgba(0,212,255,0.5), 0 0 24px rgba(0,212,255,0.15); }
  50%       { text-shadow: 0 0 20px rgba(0,212,255,1.0), 0 0 50px rgba(0,212,255,0.40), 0 0 80px rgba(0,212,255,0.12); }
}

@keyframes btn-sonar {
  0%   { box-shadow: 0 0 14px rgba(0,212,255,0.45), 0 0 36px rgba(0,212,255,0.15), 0 0 0 0 rgba(0,212,255,0.4); }
  60%  { box-shadow: 0 0 14px rgba(0,212,255,0.45), 0 0 36px rgba(0,212,255,0.15), 0 0 0 10px rgba(0,212,255,0); }
  100% { box-shadow: 0 0 14px rgba(0,212,255,0.45), 0 0 36px rgba(0,212,255,0.15), 0 0 0 0 rgba(0,212,255,0); }
}

@keyframes thinking-depth {
  0%, 100% { opacity: 0.65; letter-spacing: 0.10em; }
  50%       { opacity: 1.00; letter-spacing: 0.14em; }
}

/* === BIOLUMINESCENT PARTICLE FIELD === */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(circle 5px at  5% 12%, rgba(0,212,255,0.80) 0%, transparent 65%),
    radial-gradient(circle 3px at 13% 67%, rgba(0,255,170,0.70) 0%, transparent 65%),
    radial-gradient(circle 4px at 22% 33%, rgba(0,200,255,0.70) 0%, transparent 65%),
    radial-gradient(circle 6px at 30% 82%, rgba(0,180,255,0.60) 0%, transparent 65%),
    radial-gradient(circle 3px at 43% 18%, rgba(0,255,200,0.80) 0%, transparent 65%),
    radial-gradient(circle 4px at 55% 55%, rgba(0,212,255,0.70) 0%, transparent 65%),
    radial-gradient(circle 5px at 67% 25%, rgba(0,230,255,0.65) 0%, transparent 65%),
    radial-gradient(circle 3px at 76% 76%, rgba(0,212,255,0.80) 0%, transparent 65%),
    radial-gradient(circle 7px at 84% 42%, rgba(0,180,255,0.55) 0%, transparent 65%),
    radial-gradient(circle 3px at 92% 85%, rgba(0,255,160,0.70) 0%, transparent 65%),
    radial-gradient(circle 4px at 97% 30%, rgba(0,212,255,0.75) 0%, transparent 65%),
    radial-gradient(circle 3px at 18% 91%, rgba(0,200,255,0.65) 0%, transparent 65%),
    radial-gradient(circle 5px at 61% 94%, rgba(0,255,180,0.60) 0%, transparent 65%),
    radial-gradient(circle 3px at 37% 58%, rgba(0,212,255,0.60) 0%, transparent 65%),
    radial-gradient(circle 3px at 78%  8%, rgba(0,230,255,0.75) 0%, transparent 65%),
    radial-gradient(circle 6px at 49%  5%, rgba(0,200,255,0.55) 0%, transparent 65%),
    radial-gradient(circle 3px at  2% 50%, rgba(0,212,255,0.65) 0%, transparent 65%),
    radial-gradient(circle 4px at 88% 15%, rgba(0,255,200,0.65) 0%, transparent 65%),
    radial-gradient(circle 5px at 44% 97%, rgba(0,180,255,0.55) 0%, transparent 65%),
    radial-gradient(circle 3px at 71% 52%, rgba(0,212,255,0.55) 0%, transparent 65%),
    radial-gradient(circle 4px at 26% 44%, rgba(0,255,180,0.60) 0%, transparent 65%),
    radial-gradient(circle 3px at 58% 38%, rgba(0,200,255,0.55) 0%, transparent 65%),
    radial-gradient(circle 5px at  8% 75%, rgba(0,212,255,0.70) 0%, transparent 65%),
    radial-gradient(circle 3px at 95% 62%, rgba(0,230,255,0.65) 0%, transparent 65%);
  animation: plankton-pulse 14s ease-in-out infinite;
}

/* === SURFACE LIGHT RAYS FROM ABOVE === */
body::after {
  content: "";
  position: fixed;
  top: -40%;
  left: -30%;
  right: -30%;
  height: 75%;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(168deg, rgba(0,120,220,0.14) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0,180,255,0.10) 0%, transparent 48%),
    linear-gradient(192deg, rgba(0,60,180,0.12) 0%, transparent 56%),
    linear-gradient(155deg, rgba(0,100,200,0.08) 0%, transparent 40%);
  border-radius: 0 0 80% 80%;
  animation: light-ray-drift 22s ease-in-out infinite alternate;
}

/* === SIDEBAR — DEEPNET HULL === */
aside {
  background: linear-gradient(180deg, #051e35 0%, #040f1e 55%, #030c1a 100%) !important;
  border-right: 1px solid rgba(0,212,255,0.20) !important;
  box-shadow: 6px 0 50px rgba(0,80,200,0.18) !important;
}

/* === ORBITRON LOGO GLOW === */
aside .text-lg {
  letter-spacing: 0.14em !important;
  animation: logo-glow 3s ease-in-out infinite;
}

/* === DIVE / SURFACE BUTTON — SONAR PULSE === */
button[style*="var(--accent)"] {
  letter-spacing: 0.16em;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  animation: btn-sonar 3.5s ease-out infinite;
  transition: box-shadow 0.25s ease;
}

button[style*="var(--accent)"]:hover:not(:disabled) {
  box-shadow:
    0 0 28px rgba(0,212,255,0.70),
    0 0 60px rgba(0,212,255,0.30),
    0 0 90px rgba(0,212,255,0.10),
    inset 0 1px 0 rgba(255,255,255,0.20) !important;
}

/* === USER BUBBLE — BIOLUMINESCENT BLIP === */
.msg-bubble-user {
  border-radius: 20px 20px 4px 20px !important;
  border: 1px solid rgba(0,212,255,0.35) !important;
  box-shadow:
    0 0 14px rgba(0,212,255,0.28),
    0 0 30px rgba(0,212,255,0.10),
    inset 0 1px 0 rgba(0,212,255,0.18) !important;
}

/* === ASSISTANT BUBBLE — TERMINAL READOUT === */
.msg-bubble-assistant {
  border-radius: 4px 20px 20px 20px !important;
  border: 1px solid rgba(0,140,200,0.18) !important;
  box-shadow:
    0 4px 28px rgba(0,0,0,0.55),
    inset 0 1px 0 rgba(0,160,220,0.08) !important;
}

/* === THINKING — SONAR SCANNING === */
.thinking-indicator {
  color: rgba(0,212,255,1.0) !important;
  text-shadow: 0 0 10px rgba(0,212,255,0.6), 0 0 20px rgba(0,212,255,0.2);
  animation: thinking-depth 1.8s ease-in-out infinite !important;
}

.thinking-dot {
  color: rgba(0,212,255,0.9);
  text-shadow: 0 0 8px rgba(0,212,255,0.6);
}

/* === INPUT AREA — COMMAND TERMINAL === */
textarea:focus {
  border-color: rgba(0,212,255,0.45) !important;
  box-shadow:
    0 0 0 2px rgba(0,212,255,0.09),
    0 0 22px rgba(0,212,255,0.16) !important;
  outline: none;
}

/* === INLINE CODE — BIOLUMINESCENT GREEN === */
code {
  color: rgba(0,255,180,0.95) !important;
  text-shadow: 0 0 8px rgba(0,255,180,0.32);
}

/* === ACCENT DOT IN SKIN PICKER === */
.rounded-full[style*="var(--accent)"] {
  box-shadow: 0 0 8px rgba(0,212,255,0.65), 0 0 18px rgba(0,212,255,0.25);
}

/* === SCROLLBAR — SONAR TRACE === */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: rgba(1,8,18,0.8); }
::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.30); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: rgba(0,212,255,0.60); }
