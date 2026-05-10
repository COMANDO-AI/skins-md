### Section 1 · metadata
name:          Under the Sea
author:        COMANDO
version:       2.2.0
tags:          underwater, bioluminescent, dark, fluid, submarine, deepnet, deep-sea
description:   DEEPNET ACTIVE · 2,340m · Bioluminescent signal detected. Dive.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            #030f20
fg:            #b8dff5
accent:        #00d4ff
muted:         #3a6080
surface:       #061c35
border:        #0e4070
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
bg_gradient:       linear-gradient(180deg, #0e4a94 0%, #0b3878 30%, #092c62 60%, #071e48 100%)
texture_overlay:   none
texture_intensity: subtle
surface_style:     frosted
motion_style:      bloom
thinking_style:    pulse

### Section 7 · components
message_user_bg:       #104590
message_user_fg:       #d0eeff
message_assistant_bg:  #051628
message_assistant_fg:  #90cce8
input_bg:              #04121f
input_fg:              #b8dff5
input_border:          #0e4070

### Section 9 · custom
/* === WATER BACKGROUND OVERRIDE === */
body {
  background: linear-gradient(180deg, #0e4a94 0%, #0b3878 30%, #092c62 60%, #071e48 100%) !important;
}

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

@keyframes bubbles-rise {
  0%   { background-position: 0 0; }
  100% { background-position: 0 -480px; }
}

@keyframes floor-breathe {
  0%, 100% { opacity: 0.88; }
  50%       { opacity: 1.00; }
}

/* === SWIMMING FISH + BUBBLES — SVG AQUARIUM === */
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

/* === AQUARIUM FLOOR — CORAL REEF === */
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
    /* BRIGHT CORAL GLOWS — cyan, green, pink */
    radial-gradient(ellipse 110px 88px at 10% 100%, rgba(0,212,255,0.70) 0%, transparent 100%),
    radial-gradient(ellipse  78px 62px at 26% 100%, rgba(0,255,180,0.62) 0%, transparent 100%),
    radial-gradient(ellipse  92px 74px at 44% 100%, rgba(232,72,200,0.48) 0%, transparent 100%),
    radial-gradient(ellipse  68px 54px at 60% 100%, rgba(0,255,200,0.58) 0%, transparent 100%),
    radial-gradient(ellipse  98px 78px at 76% 100%, rgba(0,210,255,0.65) 0%, transparent 100%),
    radial-gradient(ellipse  62px 50px at 91% 100%, rgba(232,72,200,0.42) 0%, transparent 100%),
    /* TALL CORAL SPIKES — colored */
    radial-gradient(ellipse 20px 180px at 10% 100%, rgba(0,110,200,0.92) 0%, transparent 100%),
    radial-gradient(ellipse 14px 140px at 26% 100%, rgba(0,160,140,0.88) 0%, transparent 100%),
    radial-gradient(ellipse 18px 165px at 44% 100%, rgba(180,50,160,0.80) 0%, transparent 100%),
    radial-gradient(ellipse 12px 115px at 60% 100%, rgba(0,148,130,0.85) 0%, transparent 100%),
    radial-gradient(ellipse 17px 155px at 76% 100%, rgba(0,105,195,0.90) 0%, transparent 100%),
    radial-gradient(ellipse 11px 100px at 91% 100%, rgba(160,40,150,0.78) 0%, transparent 100%),
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
  animation: floor-breathe 14s ease-in-out infinite;
}

/* === SIDEBAR — DEEPNET HULL === */
aside {
  background: linear-gradient(180deg, #0a3060 0%, #072248 40%, #04152a 100%) !important;
  border-right: 2px solid rgba(0,212,255,0.55) !important;
  box-shadow: 6px 0 80px rgba(0,100,255,0.50) !important;
  position: relative;
  overflow: hidden;
}

/* === SIDEBAR TOP ACCENT STRIPE === */
aside::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(0,212,255,0.9), rgba(0,212,255,0.6), transparent);
  pointer-events: none;
  z-index: 10;
}

/* === SIDEBAR CORAL PLANTS === */
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

/* === VIDEO GAME PANEL BORDERS === */
main > div {
  border: 1px solid rgba(0,212,255,0.35) !important;
  box-shadow:
    0 0 0 1px rgba(0,212,255,0.08),
    0 0 35px rgba(0,150,255,0.22),
    inset 0 1px 0 rgba(0,212,255,0.12) !important;
}

/* === NEON CORNER ACCENT ON USER BUBBLE === */
.msg-bubble-user {
  position: relative;
}
.msg-bubble-user::before {
  content: "";
  position: absolute;
  top: -1px;
  right: -1px;
  width: 14px;
  height: 14px;
  border-top: 2px solid rgba(0,212,255,0.90);
  border-right: 2px solid rgba(0,212,255,0.90);
  border-radius: 0 4px 0 0;
  pointer-events: none;
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
  border: 1px solid rgba(0,140,200,0.22) !important;
  border-left: 3px solid rgba(0,212,255,0.40) !important;
  box-shadow:
    0 4px 28px rgba(0,0,0,0.50),
    0 0 20px rgba(0,80,180,0.08),
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

/* === SURFACE LIGHT RAYS FROM ABOVE === */
html::before {
  content: "";
  position: fixed;
  top: -40%;
  left: -30%;
  right: -30%;
  height: 75%;
  pointer-events: none;
  z-index: 0;
  background:
    linear-gradient(168deg, rgba(0,160,255,0.38) 0%, transparent 50%),
    linear-gradient(180deg, rgba(0,200,255,0.28) 0%, transparent 48%),
    linear-gradient(192deg, rgba(0,100,220,0.32) 0%, transparent 56%),
    linear-gradient(155deg, rgba(0,140,240,0.26) 0%, transparent 42%);
  border-radius: 0 0 80% 80%;
  animation: light-ray-drift 22s ease-in-out infinite alternate;
}

/* === WATER COLUMN SHIMMER === */
html::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    repeating-linear-gradient(91deg, transparent 0px, transparent 22px, rgba(0,180,255,0.03) 23px, transparent 24px),
    repeating-linear-gradient(89deg, transparent 0px, transparent 34px, rgba(0,200,255,0.025) 35px, transparent 36px);
  animation: light-ray-drift 35s ease-in-out infinite alternate-reverse;
}

### Section 10 · persona
sidebar_name:          DEEPNET
sidebar_tagline:       EXPLORE. CONNECT. DISCOVER.
sidebar_icon:          🚢
user_name:             YOU
user_role:             OCEAN EXPLORER
user_level:            1
user_xp:               0
user_xp_max:           2000
assistant_avatar:      🪼
layout:                three-column
right_panel_0_title:   TERMINAL
terminal_line:         yavin-base ~ %
right_panel_1_title:   OCEAN STATUS
gauge_value:           72
stat_1_label:          DEPTH
stat_1_value:          2,340 m
stat_2_label:          PRESSURE
stat_2_value:          235 bar
stat_3_label:          TEMP.
stat_3_value:          4°C
right_panel_2_title:   SUB SYSTEMS
bar_1_label:           ENERGY
bar_1_value:           78
bar_2_label:           OXYGEN
bar_2_value:           62
bar_3_label:           HULL
bar_3_value:           91
bar_4_label:           CREW
bar_4_value:           100
