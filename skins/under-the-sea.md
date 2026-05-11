### Section 1 · metadata
name:          Under the Sea
author:        COMANDO
version:       3.0.0
tags:          underwater, bioluminescent, dark, fluid, submarine, deepnet, deep-sea, winamp, hud
description:   DEEPNET ACTIVE · 2,340m · Bioluminescent signal detected. Dive.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #010810
fg:            #c8e8ff
accent:        #00ffff
muted:         #1e4060
surface:       #040f1e
border:        #0a3058
error:         #ff3030
success:       #00ff88

### Section 3 · typography
font_sans:     Exo 2
font_mono:     JetBrains Mono
font_display:  Orbitron
size_base:     13px
weight_base:   400
line_height:   1.75
letter_spacing: 0.04em
text_transform: uppercase
weight_display: 900

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
bg_gradient:       linear-gradient(180deg, #0a2855 0%, #062040 25%, #030f22 55%, #010810 100%)
texture_overlay:   none
texture_intensity: subtle
surface_style:     frosted
motion_style:      bloom
thinking_style:    pulse

### Section 7 · components
message_user_bg:       #0a2a5a
message_user_fg:       #d8f0ff
message_assistant_bg:  #020a18
message_assistant_fg:  #a0d8c0
input_bg:              #020810
input_fg:              #00ff88
input_border:          #0a3058

### Section 9 · custom

/* === WATER BACKGROUND OVERRIDE === */
body {
  background: linear-gradient(180deg, #0a2855 0%, #062040 25%, #030f22 55%, #010810 100%) !important;
}

/* =====================================================
   KEYFRAMES
   ===================================================== */

@keyframes scanline-drift {
  0%   { background-position: 0 0; }
  100% { background-position: 0 8px; }
}

@keyframes sonar-rotate {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes terminal-lock {
  0%, 100% { border-color: rgba(0, 255, 255, 0.60); }
  50%       { border-color: rgba(0, 255, 255, 0.95); box-shadow: 0 0 0 1px rgba(0,255,255,0.25), 0 0 30px rgba(0,255,255,0.38), inset 0 0 20px rgba(0,255,136,0.06); }
}

@keyframes plankton-pulse {
  0%, 100% { opacity: 0.8; transform: translateY(0px); }
  40%       { opacity: 1.0; transform: translateY(-14px); }
  70%       { opacity: 0.9; transform: translateY(-7px); }
}

@keyframes light-ray-drift {
  0%   { transform: translateX(-8%) scaleY(0.90); opacity: 0.55; }
  100% { transform: translateX( 8%) scaleY(1.14); opacity: 1.00; }
}

@keyframes logo-glow {
  0%, 100% {
    text-shadow: 0 0 12px rgba(0,255,255,0.6), 0 0 30px rgba(0,255,255,0.20), 0 0 60px rgba(0,200,255,0.08);
    letter-spacing: 0.18em;
  }
  50% {
    text-shadow: 0 0 24px rgba(0,255,255,1.0), 0 0 60px rgba(0,255,255,0.50), 0 0 100px rgba(0,200,255,0.20), 0 0 160px rgba(0,150,255,0.06);
    letter-spacing: 0.24em;
  }
}

@keyframes btn-sonar {
  0%   { box-shadow: 0 0 24px rgba(0,255,255,0.70), 0 0 60px rgba(0,255,255,0.28), 0 0 0 0 rgba(0,255,255,0.55), inset 0 1px 0 rgba(255,255,255,0.30); }
  60%  { box-shadow: 0 0 24px rgba(0,255,255,0.70), 0 0 60px rgba(0,255,255,0.28), 0 0 0 18px rgba(0,255,255,0), inset 0 1px 0 rgba(255,255,255,0.30); }
  100% { box-shadow: 0 0 24px rgba(0,255,255,0.70), 0 0 60px rgba(0,255,255,0.28), 0 0 0 0 rgba(0,255,255,0), inset 0 1px 0 rgba(255,255,255,0.30); }
}

@keyframes thinking-depth {
  0%, 100% {
    opacity: 0.65;
    letter-spacing: 0.12em;
    text-shadow: 0 0 10px rgba(0,255,255,0.50), 0 0 24px rgba(0,255,255,0.18);
  }
  50% {
    opacity: 1.00;
    letter-spacing: 0.22em;
    text-shadow: 0 0 22px rgba(0,255,255,1.0), 0 0 50px rgba(0,255,255,0.45), 0 0 90px rgba(0,200,255,0.15);
  }
}

@keyframes bubbles-rise {
  0%   { background-position: 0 0; }
  100% { background-position: 0 -480px; }
}

@keyframes floor-breathe {
  0%, 100% { opacity: 0.88; filter: brightness(0.94); }
  50%       { opacity: 1.00; filter: brightness(1.18); }
}

/* =====================================================
   SWIMMING FISH + BUBBLES — SVG AQUARIUM (PRESERVED)
   ===================================================== */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 900'%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='1700 160' to='-250 160' dur='22s' repeatCount='indefinite'/%3E%3Cg transform='scale(-1.8,1.8)'%3E%3Cellipse rx='30' ry='17' fill='%231e40af'/%3E%3Cellipse cx='2' cy='4' rx='22' ry='12' fill='%232563eb'/%3E%3Cpolygon points='-30,0 -44,-18 -46,0 -44,18' fill='%23fbbf24'/%3E%3Cpath d='M-8,-17 L2,-28 L14,-22 L20,-17' fill='%231e3a8a'/%3E%3Cellipse cx='-2' cy='0' rx='10' ry='17' fill='none' stroke='%23fbbf24' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='23' cy='-4' r='4.5' fill='white'/%3E%3Ccircle cx='24' cy='-4' r='2.5' fill='%230c1a4e'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='1700 280' to='-200 280' dur='20s' begin='3s' repeatCount='indefinite'/%3E%3Cg transform='scale(-1.3,1.3)'%3E%3Cellipse rx='22' ry='13' fill='%23ea580c'/%3E%3Cellipse cx='0' cy='2' rx='16' ry='9' fill='%23f97316'/%3E%3Cellipse cx='-5' cy='0' rx='3' ry='13' fill='white' opacity='0.9'/%3E%3Cellipse cx='9' cy='0' rx='3' ry='13' fill='white' opacity='0.9'/%3E%3Cpolygon points='-22,0 -34,-12 -36,0 -34,12' fill='%23ea580c'/%3E%3Cpath d='M-5,-13 L2,-22 L12,-16 L14,-13' fill='%23c2410c'/%3E%3Ccircle cx='16' cy='-2' r='3.5' fill='white'/%3E%3Ccircle cx='17' cy='-2' r='2' fill='%230a0a0a'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='1700 440' to='-250 440' dur='26s' begin='1s' repeatCount='indefinite'/%3E%3Cg transform='scale(-1.5,1.5)'%3E%3Cellipse rx='26' ry='21' fill='%23eab308'/%3E%3Cellipse cx='0' cy='2' rx='20' ry='15' fill='%23facc15'/%3E%3Cpolygon points='-26,0 -38,-14 -40,0 -38,14' fill='%23ca8a04'/%3E%3Cpath d='M-12,-21 Q0,-34 16,-22 L16,-21' fill='%23a16207'/%3E%3Cpath d='M-12,21 Q0,34 16,22 L16,21' fill='%23a16207'/%3E%3Cellipse cx='22' cy='-1' rx='6' ry='5' fill='%2393c5fd' opacity='0.5'/%3E%3Ccircle cx='18' cy='-5' r='4' fill='white'/%3E%3Ccircle cx='19' cy='-5' r='2.2' fill='%231a1a1a'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='-250 350' to='1700 350' dur='28s' begin='6s' repeatCount='indefinite'/%3E%3Cg transform='scale(1.4,1.4)'%3E%3Cellipse rx='30' ry='17' fill='%231e40af'/%3E%3Cellipse cx='2' cy='4' rx='22' ry='12' fill='%232563eb'/%3E%3Cpolygon points='-30,0 -44,-18 -46,0 -44,18' fill='%23fbbf24'/%3E%3Cpath d='M-8,-17 L2,-28 L14,-22 L20,-17' fill='%231e3a8a'/%3E%3Cellipse cx='-2' cy='0' rx='10' ry='17' fill='none' stroke='%23fbbf24' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='23' cy='-4' r='4.5' fill='white'/%3E%3Ccircle cx='24' cy='-4' r='2.5' fill='%230c1a4e'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='-200 500' to='1700 500' dur='24s' begin='9s' repeatCount='indefinite'/%3E%3Cg transform='scale(1.1,1.1)'%3E%3Cellipse rx='22' ry='13' fill='%23ea580c'/%3E%3Cellipse cx='0' cy='2' rx='16' ry='9' fill='%23f97316'/%3E%3Cellipse cx='-5' cy='0' rx='3' ry='13' fill='white' opacity='0.9'/%3E%3Cellipse cx='9' cy='0' rx='3' ry='13' fill='white' opacity='0.9'/%3E%3Cpolygon points='-22,0 -34,-12 -36,0 -34,12' fill='%23ea580c'/%3E%3Cpath d='M-5,-13 L2,-22 L12,-16 L14,-13' fill='%23c2410c'/%3E%3Ccircle cx='16' cy='-2' r='3.5' fill='white'/%3E%3Ccircle cx='17' cy='-2' r='2' fill='%230a0a0a'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='-250 650' to='1700 650' dur='19s' begin='14s' repeatCount='indefinite'/%3E%3Cg transform='scale(1,1)'%3E%3Cellipse rx='26' ry='21' fill='%23eab308'/%3E%3Cellipse cx='0' cy='2' rx='20' ry='15' fill='%23facc15'/%3E%3Cpolygon points='-26,0 -38,-14 -40,0 -38,14' fill='%23ca8a04'/%3E%3Cpath d='M-12,-21 Q0,-34 16,-22 L16,-21' fill='%23a16207'/%3E%3Cpath d='M-12,21 Q0,34 16,22 L16,21' fill='%23a16207'/%3E%3Cellipse cx='22' cy='-1' rx='6' ry='5' fill='%2393c5fd' opacity='0.5'/%3E%3Ccircle cx='18' cy='-5' r='4' fill='white'/%3E%3Ccircle cx='19' cy='-5' r='2.2' fill='%231a1a1a'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='-250 200' to='1700 200' dur='18s' begin='12s' repeatCount='indefinite'/%3E%3Cg transform='scale(1,1)'%3E%3Cellipse rx='30' ry='17' fill='%231e40af'/%3E%3Cellipse cx='2' cy='4' rx='22' ry='12' fill='%232563eb'/%3E%3Cpolygon points='-30,0 -44,-18 -46,0 -44,18' fill='%23fbbf24'/%3E%3Cpath d='M-8,-17 L2,-28 L14,-22 L20,-17' fill='%231e3a8a'/%3E%3Cellipse cx='-2' cy='0' rx='10' ry='17' fill='none' stroke='%23fbbf24' stroke-width='2' opacity='0.7'/%3E%3Ccircle cx='23' cy='-4' r='4.5' fill='white'/%3E%3Ccircle cx='24' cy='-4' r='2.5' fill='%230c1a4e'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3CanimateTransform attributeName='transform' type='translate' from='-300 310' to='1700 310' dur='14s' begin='7s' repeatCount='indefinite'/%3E%3Cg transform='translate(-20,0)'%3E%3Cellipse rx='14' ry='7' fill='%2393c5fd' opacity='0.85'/%3E%3Cpolygon points='-14,0 -20,-7 -21,0 -20,7' fill='%2360a5fa' opacity='0.85'/%3E%3Ccircle cx='11' cy='-2' r='2' fill='white'/%3E%3C/g%3E%3Cg transform='translate(20,-14)'%3E%3Cellipse rx='12' ry='6' fill='%2393c5fd' opacity='0.80'/%3E%3Cpolygon points='-12,0 -18,-6 -19,0 -18,6' fill='%2360a5fa' opacity='0.80'/%3E%3Ccircle cx='9' cy='-2' r='1.8' fill='white'/%3E%3C/g%3E%3Cg transform='translate(0,16)'%3E%3Cellipse rx='13' ry='6.5' fill='%2393c5fd' opacity='0.75'/%3E%3Cpolygon points='-13,0 -19,-6 -20,0 -19,6' fill='%2360a5fa' opacity='0.75'/%3E%3Ccircle cx='10' cy='-2' r='1.9' fill='white'/%3E%3C/g%3E%3C/g%3E%3Ccircle cx='144' cy='950' r='6' fill='none' stroke='rgb(180,240,255)' stroke-opacity='0.65' stroke-width='1.5'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='9s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.8;0.8;0' keyTimes='0;0.08;0.85;1' dur='9s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='288' cy='950' r='4' fill='none' stroke='rgb(200,245,255)' stroke-opacity='0.60' stroke-width='1.2'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='11s' begin='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.75;0.75;0' keyTimes='0;0.08;0.85;1' dur='11s' begin='2s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='432' cy='950' r='8' fill='none' stroke='rgb(180,240,255)' stroke-opacity='0.55' stroke-width='1.8'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='13s' begin='5s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.7;0.7;0' keyTimes='0;0.07;0.85;1' dur='13s' begin='5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='576' cy='950' r='5' fill='none' stroke='rgb(200,245,255)' stroke-opacity='0.62' stroke-width='1.3'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='10s' begin='1s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.78;0.78;0' keyTimes='0;0.08;0.85;1' dur='10s' begin='1s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='720' cy='950' r='7' fill='none' stroke='rgb(180,240,255)' stroke-opacity='0.68' stroke-width='1.6'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='8s' begin='4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.82;0.82;0' keyTimes='0;0.09;0.85;1' dur='8s' begin='4s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='864' cy='950' r='4' fill='none' stroke='rgb(200,245,255)' stroke-opacity='0.58' stroke-width='1.2'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='12s' begin='7s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.72;0.72;0' keyTimes='0;0.08;0.85;1' dur='12s' begin='7s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='1008' cy='950' r='9' fill='none' stroke='rgb(180,240,255)' stroke-opacity='0.60' stroke-width='2'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='14s' begin='3s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.75;0.75;0' keyTimes='0;0.07;0.85;1' dur='14s' begin='3s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='1152' cy='950' r='5' fill='none' stroke='rgb(200,245,255)' stroke-opacity='0.63' stroke-width='1.3'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='10s' begin='6s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.78;0.78;0' keyTimes='0;0.08;0.85;1' dur='10s' begin='6s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='1296' cy='950' r='6' fill='none' stroke='rgb(180,240,255)' stroke-opacity='0.65' stroke-width='1.5'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='9s' begin='2.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.8;0.8;0' keyTimes='0;0.09;0.85;1' dur='9s' begin='2.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3Ccircle cx='1400' cy='950' r='4' fill='none' stroke='rgb(200,245,255)' stroke-opacity='0.60' stroke-width='1.2'%3E%3Canimate attributeName='cy' from='950' to='-30' dur='11s' begin='5.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;0.75;0.75;0' keyTimes='0;0.08;0.85;1' dur='11s' begin='5.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* =====================================================
   CRT SCANLINES — SUBMARINE MONITOR OVERLAY
   ===================================================== */
html::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9998;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(0, 0, 0, 0.10) 2px,
    rgba(0, 0, 0, 0.10) 4px
  );
  animation: scanline-drift 8s linear infinite;
}

/* =====================================================
   AQUARIUM FLOOR — CORAL REEF (ENHANCED GLOW)
   ===================================================== */
body::after {
  content: "";
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 320px;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(0deg, rgba(1,4,12,0.98) 0%, rgba(2,9,26,0.94) 22%, rgba(3,15,38,0.72) 50%, transparent 100%),
    /* BRIGHT CORAL GLOWS — pushed to maximum neon */
    radial-gradient(ellipse 110px 88px at 10% 100%, rgba(0,255,255,0.85) 0%, transparent 100%),
    radial-gradient(ellipse  78px 62px at 26% 100%, rgba(0,255,180,0.78) 0%, transparent 100%),
    radial-gradient(ellipse  92px 74px at 44% 100%, rgba(232,72,200,0.62) 0%, transparent 100%),
    radial-gradient(ellipse  68px 54px at 60% 100%, rgba(0,255,200,0.72) 0%, transparent 100%),
    radial-gradient(ellipse  98px 78px at 76% 100%, rgba(0,220,255,0.80) 0%, transparent 100%),
    radial-gradient(ellipse  62px 50px at 91% 100%, rgba(232,72,200,0.60) 0%, transparent 100%),
    /* TALL CORAL SPIKES */
    radial-gradient(ellipse 20px 180px at 10% 100%, rgba(0,110,200,0.95) 0%, transparent 100%),
    radial-gradient(ellipse 14px 140px at 26% 100%, rgba(0,160,140,0.92) 0%, transparent 100%),
    radial-gradient(ellipse 18px 165px at 44% 100%, rgba(180,50,160,0.85) 0%, transparent 100%),
    radial-gradient(ellipse 12px 115px at 60% 100%, rgba(0,148,130,0.90) 0%, transparent 100%),
    radial-gradient(ellipse 17px 155px at 76% 100%, rgba(0,105,195,0.94) 0%, transparent 100%),
    radial-gradient(ellipse 11px 100px at 91% 100%, rgba(160,40,150,0.82) 0%, transparent 100%),
    /* WIDE ROCK / REEF MOUNDS */
    radial-gradient(ellipse 125px  96px at  4% 100%, rgba(0,12,36,0.98) 0%, transparent 100%),
    radial-gradient(ellipse  90px  72px at 14% 100%, rgba(0, 9,30,0.96) 0%, transparent 100%),
    radial-gradient(ellipse 105px  84px at 26% 100%, rgba(0,11,34,0.97) 0%, transparent 100%),
    radial-gradient(ellipse 140px 108px at 38% 100%, rgba(0, 8,28,0.95) 0%, transparent 100%),
    radial-gradient(ellipse  95px  76px at 51% 100%, rgba(0,10,32,0.96) 0%, transparent 100%),
    radial-gradient(ellipse 118px  94px at 63% 100%, rgba(0, 8,26,0.97) 0%, transparent 100%),
    radial-gradient(ellipse 100px  80px at 74% 100%, rgba(0,11,34,0.96) 0%, transparent 100%),
    radial-gradient(ellipse 110px  88px at 84% 100%, rgba(0, 9,30,0.95) 0%, transparent 100%),
    radial-gradient(ellipse 130px 102px at 94% 100%, rgba(0, 8,28,0.97) 0%, transparent 100%);
  animation: floor-breathe 9s ease-in-out infinite;
}

/* =====================================================
   SURFACE LIGHT RAYS FROM ABOVE
   ===================================================== */
html::before {
  content: "";
  position: fixed;
  top: -40%;
  left: -30%;
  right: -30%;
  height: 80%;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(168deg, rgba(0,180,255,0.45) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0,220,255,0.35) 0%, transparent 48%),
    linear-gradient(192deg, rgba(0,100,220,0.40) 0%, transparent 56%),
    linear-gradient(155deg, rgba(0,150,250,0.32) 0%, transparent 42%);
  border-radius: 0 0 80% 80%;
  animation: light-ray-drift 16s ease-in-out infinite alternate;
}

/* =====================================================
   SIDEBAR — DEEPNET HULL
   ===================================================== */
aside {
  background: linear-gradient(180deg, #071e3d 0%, #050f25 45%, #030a18 100%) !important;
  border-right: 2px solid rgba(0, 255, 255, 0.65) !important;
  box-shadow: 8px 0 80px rgba(0, 100, 255, 0.50), 16px 0 140px rgba(0, 50, 180, 0.20) !important;
  position: relative;
  overflow: hidden;
}

/* Top accent neon stripe */
aside::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(0,255,255,1.0), rgba(0,255,255,0.75), transparent);
  box-shadow: 0 0 20px rgba(0,255,255,0.95), 0 0 50px rgba(0,255,255,0.40), 0 0 90px rgba(0,200,255,0.15);
  pointer-events: none;
  z-index: 10;
}

/* Coral plants SVG (PRESERVED) */
aside::after {
  content: "";
  position: absolute;
  bottom: 55px;
  left: 0;
  right: 0;
  height: 180px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.80;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 270 180'%3E%3Cpath d='M18,180 Q12,140 22,100 Q12,60 18,20' fill='none' stroke='%2300b894' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M22,130 Q2,110 8,88' fill='none' stroke='%2300b894' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M20,95 Q36,75 28,55' fill='none' stroke='%2300b894' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M252,180 Q258,140 248,100 Q258,60 252,20' fill='none' stroke='%23ff6b6b' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M248,110 Q268,90 262,68' fill='none' stroke='%23ff6b6b' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M42,180 L46,148 L54,125 L49,102' fill='none' stroke='%23fd7272' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M54,125 L64,108' fill='none' stroke='%23fd7272' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M49,102 L38,90' fill='none' stroke='%23fd7272' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M228,180 L224,148 L216,125 L221,102' fill='none' stroke='%230097a7' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M216,125 L206,108' fill='none' stroke='%230097a7' stroke-width='4' stroke-linecap='round'/%3E%3Cpath d='M221,102 L232,90' fill='none' stroke='%230097a7' stroke-width='4' stroke-linecap='round'/%3E%3Cg transform='translate(135,162)'%3E%3Cpolygon points='0,-10 2,-3 10,-3 4,2 7,10 0,5 -7,10 -4,2 -10,-3 -2,-3' fill='%23ff9f43'/%3E%3C/g%3E%3Cellipse cx='95' cy='172' rx='32' ry='14' fill='none' stroke='%23a55eea' stroke-width='2' opacity='0.8'/%3E%3Cellipse cx='182' cy='175' rx='24' ry='11' fill='none' stroke='%23e84393' stroke-width='2' opacity='0.7'/%3E%3C/svg%3E");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

/* =====================================================
   SONAR SWEEP — ROTATING CONIC BEAM
   ===================================================== */
main {
  position: relative;
  overflow: hidden;
}

main::before {
  content: "";
  position: absolute;
  width: 200vw;
  height: 200vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  pointer-events: none;
  z-index: 0;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 350deg,
    rgba(0, 255, 255, 0.04) 354deg,
    rgba(0, 255, 255, 0.14) 358deg,
    rgba(0, 255, 255, 0.04) 360deg
  );
  border-radius: 50%;
  animation: sonar-rotate 14s linear infinite;
}

/* =====================================================
   WINAMP PANEL CHROME — CORNER CLIPS + NEON GLOW
   ===================================================== */
main > div,
.surface-card {
  position: relative;
  clip-path: polygon(
    0 0,
    calc(100% - 14px) 0,
    100% 14px,
    100% 100%,
    14px 100%,
    0 calc(100% - 14px)
  ) !important;
  border: 1px solid rgba(0, 255, 255, 0.55) !important;
  box-shadow:
    0 0 0 1px rgba(0, 255, 255, 0.10),
    0 0 30px rgba(0, 255, 255, 0.28),
    0 0 80px rgba(0, 100, 255, 0.16),
    inset 0 1px 0 rgba(0, 255, 255, 0.24),
    inset 0 0 50px rgba(0, 10, 40, 0.85),
    0 12px 60px rgba(0, 0, 0, 0.75) !important;
  background: linear-gradient(160deg, rgba(4, 18, 45, 0.96) 0%, rgba(2, 9, 25, 0.98) 100%) !important;
}

/* =====================================================
   USER BUBBLE — HUD OCTAGON WITH CORNER BRACKETS
   ===================================================== */
.msg-bubble-user {
  position: relative;
  clip-path: polygon(
    12px 0%, 100% 0%,
    100% calc(100% - 12px), calc(100% - 12px) 100%,
    0% 100%, 0% 12px
  ) !important;
  border-radius: 0 !important;
  border: 1px solid rgba(0, 255, 255, 0.65) !important;
  box-shadow:
    0 0 20px rgba(0, 255, 255, 0.32),
    0 0 50px rgba(0, 100, 255, 0.14),
    inset 0 1px 0 rgba(0, 255, 255, 0.28),
    inset 0 0 24px rgba(0, 40, 100, 0.30) !important;
}

/* Top-right corner bracket */
.msg-bubble-user::before {
  content: "";
  position: absolute;
  top: -1px;
  right: -1px;
  width: 16px;
  height: 16px;
  border-top: 2px solid rgba(0, 255, 255, 1.0);
  border-right: 2px solid rgba(0, 255, 255, 1.0);
  border-radius: 0 3px 0 0;
  pointer-events: none;
  box-shadow: 5px -5px 14px rgba(0, 255, 255, 0.55);
  z-index: 1;
}

/* Bottom-left corner bracket */
.msg-bubble-user::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid rgba(0, 255, 255, 0.72);
  border-left: 2px solid rgba(0, 255, 255, 0.72);
  pointer-events: none;
  z-index: 1;
}

/* =====================================================
   ASSISTANT BUBBLE — TERMINAL READOUT
   ===================================================== */
.msg-bubble-assistant {
  border-radius: 0 !important;
  border: 1px solid rgba(0, 100, 160, 0.28) !important;
  border-left: 3px solid rgba(0, 255, 136, 0.80) !important;
  box-shadow:
    0 4px 32px rgba(0, 0, 0, 0.65),
    -4px 0 24px rgba(0, 255, 136, 0.08),
    inset 0 1px 0 rgba(0, 140, 100, 0.12),
    inset 4px 0 0 rgba(0, 255, 136, 0.04) !important;
  background: linear-gradient(135deg, rgba(2, 10, 24, 0.98) 0%, rgba(1, 7, 18, 0.99) 100%) !important;
}

/* =====================================================
   THINKING — SONAR SCANNING
   ===================================================== */
.thinking-indicator {
  color: rgba(0, 255, 255, 1.0) !important;
  font-family: var(--font-mono) !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  animation: thinking-depth 1.4s ease-in-out infinite !important;
}

.thinking-dot {
  color: rgba(0, 255, 255, 0.95) !important;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.80) !important;
}

/* =====================================================
   INPUT AREA — COMMAND TERMINAL
   ===================================================== */
textarea {
  color: rgba(0, 255, 136, 0.92) !important;
  caret-color: rgba(0, 255, 255, 1.0);
  text-shadow: 0 0 6px rgba(0, 255, 136, 0.40);
  font-family: var(--font-mono) !important;
  letter-spacing: 0.05em !important;
  border: 1px solid rgba(0, 255, 255, 0.25) !important;
  clip-path: polygon(
    6px 0%, 100% 0%,
    100% calc(100% - 6px), calc(100% - 6px) 100%,
    0% 100%, 0% 6px
  ) !important;
  border-radius: 0 !important;
  background: rgba(1, 6, 16, 0.92) !important;
}

textarea::placeholder {
  color: rgba(0, 160, 100, 0.45) !important;
  font-style: italic;
  letter-spacing: 0.08em;
}

textarea:focus {
  border-color: rgba(0, 255, 255, 0.65) !important;
  box-shadow:
    0 0 0 1px rgba(0, 255, 255, 0.18),
    0 0 22px rgba(0, 255, 255, 0.24),
    inset 0 0 20px rgba(0, 255, 136, 0.04) !important;
  outline: none;
  animation: terminal-lock 2.2s ease-in-out infinite;
}

/* =====================================================
   ORBITRON LOGO GLOW
   ===================================================== */
aside .text-lg {
  letter-spacing: 0.18em !important;
  animation: logo-glow 2.5s ease-in-out infinite;
}

/* =====================================================
   DIVE BUTTON — PARALLELOGRAM + SONAR PULSE
   ===================================================== */
button[style*="var(--accent)"] {
  background: rgba(0, 255, 255, 1.0) !important;
  color: #010810 !important;
  font-family: var(--font-display) !important;
  font-weight: 900 !important;
  letter-spacing: 0.22em !important;
  text-shadow: none !important;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%) !important;
  border-radius: 0 !important;
  border: none !important;
  box-shadow: 0 0 24px rgba(0, 255, 255, 0.70), 0 0 60px rgba(0, 255, 255, 0.28), inset 0 1px 0 rgba(255,255,255,0.30) !important;
  animation: btn-sonar 2.8s ease-out infinite !important;
  transition: all 0.15s ease !important;
}

button[style*="var(--accent)"]:hover:not(:disabled) {
  background: #ffffff !important;
  box-shadow:
    0 0 36px rgba(0, 255, 255, 0.92),
    0 0 80px rgba(0, 255, 255, 0.48),
    0 0 140px rgba(0, 200, 255, 0.20),
    inset 0 1px 0 rgba(255,255,255,0.40) !important;
  transform: translateY(-1px) !important;
}

/* =====================================================
   INLINE CODE — PHOSPHOR CYAN
   ===================================================== */
code {
  color: rgba(0, 255, 255, 0.95) !important;
  background: rgba(0, 20, 40, 0.85) !important;
  border: 1px solid rgba(0, 255, 255, 0.18) !important;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.45), 0 0 20px rgba(0, 255, 255, 0.14);
}

/* =====================================================
   ACCENT DOT IN SKIN PICKER
   ===================================================== */
.rounded-full[style*="var(--accent)"] {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.80), 0 0 24px rgba(0, 255, 255, 0.35);
}

/* =====================================================
   SCROLLBAR — SONAR TRACE
   ===================================================== */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track {
  background: rgba(1, 4, 12, 0.90);
  border-left: 1px solid rgba(0, 255, 255, 0.06);
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(0,255,255,0.50), rgba(0,100,200,0.35));
  border-radius: 0;
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.40);
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgba(0,255,255,0.80), rgba(0,150,255,0.55));
  box-shadow: 0 0 14px rgba(0, 255, 255, 0.65);
}

### Section 10 · persona
sidebar_name:          DEEPNET
sidebar_tagline:       2,340M · SIGNAL ACQUIRED
sidebar_icon:          🪼
user_name:             YOU
user_role:             DIVE OPERATOR
user_level:            LVL 12
user_xp:               840
user_xp_max:           2000
assistant_avatar:      🪼
layout:                three-column
right_panel_0_title:   [ TERMINAL ]
terminal_line:         deepnet@sub-b7 ~ $
terminal_header_1:     > DEEPNET v2.3 · link acquired
terminal_header_2:     · biolum: DETECTED
right_panel_1_title:   [ OCEAN STATUS ]
gauge_value:           72
stat_1_label:          DEPTH
stat_1_value:          2,340 m
stat_2_label:          PRESSURE
stat_2_value:          235 bar
stat_3_label:          TEMP.
stat_3_value:          4°C
right_panel_2_title:   [ SUB SYSTEMS ]
bar_1_label:           ENERGY
bar_1_value:           78
bar_2_label:           OXYGEN
bar_2_value:           62
bar_3_label:           HULL
bar_3_value:           91
bar_4_label:           CREW
bar_4_value:           100
