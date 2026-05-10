### Section 1 · metadata
name:          Under the Sea
author:        COMANDO
version:       2.0.0
tags:          underwater, bioluminescent, dark, fluid, submarine, deepnet, deep-sea
description:   DEEPNET ACTIVE · 2,340m · Bioluminescent signal detected. Dive.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #030c1a
fg:            #a8d8f0
accent:        #00d4ff
muted:         #2a4f6e
surface:       #061525
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
radius:        10px
spacing_unit:  8px
max_width:     740px
sidebar_width: 270px
radius_message: 20px
radius_input:   12px
radius_ui:      8px
message_shape:  pill
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
bg_gradient:       linear-gradient(180deg, #020b18 0%, #041525 30%, #040e1e 60%, #031220 85%, #020a16 100%)
texture_overlay:   none
texture_intensity: subtle
surface_style:     frosted
motion_style:      bloom
thinking_style:    pulse

### Section 7 · components
message_user_bg:       #0a2a50
message_user_fg:       #c8e8f8
message_assistant_bg:  #040e20
message_assistant_fg:  #80c8e8
input_bg:              #030e1e
input_fg:              #a8d8f0
input_border:          #0d3558

### Section 9 · custom
@keyframes plankton-pulse {
  0%, 100% { opacity: 0.55; transform: translateY(0px); }
  33%       { opacity: 0.85; transform: translateY(-10px); }
  66%       { opacity: 0.65; transform: translateY(-5px); }
}

@keyframes light-ray-shift {
  0%   { transform: translateX(-4%) skewX(-1deg); opacity: 0.5; }
  100% { transform: translateX( 4%) skewX( 1deg); opacity: 1.0; }
}

@keyframes depth-glow {
  0%, 100% { opacity: 0.6; text-shadow: 0 0 8px rgba(0,212,255,0.4); }
  50%       { opacity: 1.0; text-shadow: 0 0 16px rgba(0,212,255,0.8), 0 0 32px rgba(0,212,255,0.3); }
}

@keyframes sonar-ring {
  0%   { box-shadow: 0 0 0 0 rgba(0,212,255,0.5); }
  70%  { box-shadow: 0 0 0 12px rgba(0,212,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,212,255,0); }
}

/* Bioluminescent particle field */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    radial-gradient(circle 4px at  6% 14%, rgba(0,212,255,0.65) 0%, transparent 100%),
    radial-gradient(circle 2px at 14% 63%, rgba(0,255,170,0.55) 0%, transparent 100%),
    radial-gradient(circle 3px at 23% 37%, rgba(0,200,255,0.45) 0%, transparent 100%),
    radial-gradient(circle 5px at 31% 79%, rgba(0,180,255,0.40) 0%, transparent 100%),
    radial-gradient(circle 2px at 44% 21%, rgba(0,255,200,0.55) 0%, transparent 100%),
    radial-gradient(circle 3px at 56% 52%, rgba(0,212,255,0.50) 0%, transparent 100%),
    radial-gradient(circle 4px at 67% 29%, rgba(0,230,255,0.45) 0%, transparent 100%),
    radial-gradient(circle 2px at 75% 72%, rgba(0,212,255,0.60) 0%, transparent 100%),
    radial-gradient(circle 6px at 83% 43%, rgba(0,180,255,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 91% 83%, rgba(0,255,160,0.50) 0%, transparent 100%),
    radial-gradient(circle 3px at 97% 34%, rgba(0,212,255,0.55) 0%, transparent 100%),
    radial-gradient(circle 2px at 19% 89%, rgba(0,200,255,0.45) 0%, transparent 100%),
    radial-gradient(circle 4px at 62% 92%, rgba(0,255,180,0.40) 0%, transparent 100%),
    radial-gradient(circle 3px at 38% 56%, rgba(0,212,255,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 77% 10%, rgba(0,230,255,0.55) 0%, transparent 100%),
    radial-gradient(circle 5px at 50%  7%, rgba(0,200,255,0.28) 0%, transparent 100%),
    radial-gradient(circle 3px at  2% 48%, rgba(0,212,255,0.40) 0%, transparent 100%),
    radial-gradient(circle 2px at 88% 18%, rgba(0,255,200,0.45) 0%, transparent 100%),
    radial-gradient(circle 4px at 45% 96%, rgba(0,180,255,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 72% 55%, rgba(0,212,255,0.30) 0%, transparent 100%);
  animation: plankton-pulse 12s ease-in-out infinite;
}

/* Depth light rays from the surface */
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
    linear-gradient(170deg, rgba(0,100,200,0.08) 0%, transparent 55%),
    linear-gradient(180deg, rgba(0,180,255,0.05) 0%, transparent 50%),
    linear-gradient(192deg, rgba(0,60,180,0.07) 0%, transparent 62%),
    linear-gradient(160deg, rgba(0,140,220,0.04) 0%, transparent 45%);
  border-radius: 0 0 80% 80%;
  animation: light-ray-shift 20s ease-in-out infinite alternate;
}

/* Sidebar — deep ocean hull */
.surface-card {
  background: rgba(4, 14, 28, 0.88) !important;
  border-color: rgba(0, 212, 255, 0.1) !important;
  box-shadow:
    4px 0 32px rgba(0, 100, 200, 0.08),
    inset -1px 0 0 rgba(0, 212, 255, 0.07) !important;
}

/* DEEPNET logo — Orbitron glow */
aside .text-lg,
aside span[style*="var(--font-display)"] {
  letter-spacing: 0.12em !important;
  text-shadow: 0 0 12px rgba(0,212,255,0.4), 0 0 28px rgba(0,212,255,0.12);
  animation: depth-glow 4s ease-in-out infinite;
}

/* DIVE / SURFACE button — bioluminescent */
button[style*="var(--accent)"] {
  box-shadow:
    0 0 14px rgba(0,212,255,0.35),
    0 0 30px rgba(0,212,255,0.12),
    inset 0 1px 0 rgba(255,255,255,0.10);
  letter-spacing: 0.14em;
  text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  transition: box-shadow 0.3s ease;
}

button[style*="var(--accent)"]:hover:not(:disabled) {
  box-shadow:
    0 0 22px rgba(0,212,255,0.55),
    0 0 48px rgba(0,212,255,0.22),
    inset 0 1px 0 rgba(255,255,255,0.15);
}

/* User message bubble — bioluminescent */
.msg-bubble-user {
  border: 1px solid rgba(0,212,255,0.22) !important;
  box-shadow:
    0 0 12px rgba(0,212,255,0.18),
    0 0 24px rgba(0,212,255,0.07),
    inset 0 1px 0 rgba(0,212,255,0.10);
}

/* Assistant message bubble — deep dark */
.msg-bubble-assistant {
  border: 1px solid rgba(0,140,200,0.10) !important;
  box-shadow:
    0 2px 18px rgba(0,0,0,0.40),
    inset 0 1px 0 rgba(0,160,220,0.05);
}

/* Sonar scanning thinking indicator */
.thinking-indicator {
  color: rgba(0,212,255,0.9) !important;
  letter-spacing: 0.12em;
  animation: depth-glow 2.2s ease-in-out infinite !important;
}

/* Thinking dot — cascade glow */
.thinking-dot {
  color: rgba(0,212,255,0.9);
  text-shadow: 0 0 8px rgba(0,212,255,0.6);
}

/* Input focus — sonar activation */
textarea:focus {
  border-color: rgba(0,212,255,0.38) !important;
  box-shadow:
    0 0 0 2px rgba(0,212,255,0.07),
    0 0 18px rgba(0,212,255,0.12) !important;
  outline: none;
}

/* Inline code — bioluminescent green */
code {
  color: rgba(0,255,180,0.92) !important;
  text-shadow: 0 0 6px rgba(0,255,180,0.28);
}

/* Accent dot in skin selector */
.rounded-full[style*="var(--accent)"] {
  box-shadow: 0 0 7px rgba(0,212,255,0.55), 0 0 14px rgba(0,212,255,0.2);
  animation: sonar-ring 3s ease-out infinite;
}

/* Scrollbar — sonar trace */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: rgba(2,10,22,0.7);
}
::-webkit-scrollbar-thumb {
  background: rgba(0,212,255,0.22);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0,212,255,0.50);
}

/* Bottom depth fade */
main::after {
  content: "";
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  pointer-events: none;
  display: block;
  background: linear-gradient(to top, rgba(3,12,26,0.6) 0%, transparent 100%);
  margin-top: -60px;
}
