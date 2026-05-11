### Section 1 · metadata
name:          NBA
author:        COMANDO
version:       2.0.0
tags:          sports, bold, loud, maximalist, dark, arena, ea-sports, game-7, skins-md
description:   Arena dark. Scoreboard gold. Court floor red. Every session is Game 7.
preview_url:   none
license:       MIT

### Section 2 · palette
bg:            oklch(4% 0.008 280)
fg:            oklch(97% 0 0)
accent:        oklch(78% 0.18 75)
muted:         oklch(62% 0.02 280)
surface:       oklch(8% 0.02 280)
border:        oklch(50% 0.22 25)
error:         oklch(55% 0.25 25)
success:       oklch(72% 0.22 145)

### Section 3 · typography
font_sans:     Oswald
font_mono:     JetBrains Mono
font_display:  Bebas Neue
size_base:     14px
weight_base:   400
line_height:   1.5

### Section 4 · layout
radius:        2px
spacing_unit:  8px
max_width:     760px
sidebar_width: 280px

### Section 5 · voice
send_label:    SHOOT
placeholder:   Run the play...
empty_state:   Game time. What's the move?
thinking_label: ANALYZING...
clear_label:   NEW GAME
error_message: TURNOVER. Try again.
success_toast: BUCKET.

### Section 6 · atmosphere
bg_effect:         layered-radial
animation_speed:   snap
blur:              none
bg_gradient:       radial-3-layer
texture_overlay:   grain
texture_intensity: subtle
surface_style:     flush
motion_style:      snap
thinking_style:    gold-pulse
easing:            expo-out

### Section 7 · components
message_user_bg:       oklch(50% 0.22 25)
message_user_fg:       oklch(97% 0 0)
message_assistant_bg:  oklch(12% 0.025 280)
message_assistant_fg:  oklch(97% 0 0)
border_width:          1px
panel_border:          oklch(50% 0.22 25 / 0.35)
focus_ring:            oklch(78% 0.18 75 / 0.55)

### Section 9 · custom

/* ═══════════════════════════════════════════════════════
   NBA SKIN v2 · ARENA EDITION
   Court energy. Scoreboard gold. Every session is Game 7.
   SKINS.MD format · COMANDO · 2026
   ═══════════════════════════════════════════════════════ */

/* ── Google Fonts ──────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap');

/* ── Extended design tokens ────────────────────────────── */
:root {
  /* Arena darks — perceptual gradient down */
  --nba-black:        oklch(4% 0.008 280);
  --nba-surface-01:   oklch(8% 0.02 280);
  --nba-surface-02:   oklch(12% 0.025 280);
  --nba-surface-03:   oklch(16% 0.03 280);
  --nba-surface-04:   oklch(20% 0.035 280);

  /* Gold — Lakers championship */
  --nba-gold:         oklch(78% 0.18 75);
  --nba-gold-dim:     oklch(58% 0.14 75);
  --nba-gold-glow:    oklch(78% 0.18 75 / 0.18);
  --nba-gold-border:  oklch(78% 0.18 75 / 0.38);
  --nba-gold-ring:    oklch(78% 0.18 75 / 0.55);

  /* Red — court floor, urgency, user identity */
  --nba-red:          oklch(50% 0.22 25);
  --nba-red-light:    oklch(62% 0.22 25);
  --nba-red-dim:      oklch(38% 0.18 25);
  --nba-red-glow:     oklch(50% 0.22 25 / 0.14);
  --nba-red-border:   oklch(50% 0.22 25 / 0.45);

  /* Text */
  --nba-fg:           oklch(97% 0 0);
  --nba-muted:        oklch(62% 0.02 280);
  --nba-subtle:       oklch(42% 0.015 280);

  /* Diff green */
  --nba-green:        oklch(72% 0.22 145);
  --nba-green-dim:    oklch(55% 0.18 145);

  /* Easing — always explicit, never keyword */
  --ease-snap: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in:   cubic-bezier(0.7, 0, 0.84, 0);

  /* Type families */
  --font-display: 'Bebas Neue', 'Impact', condensed, sans-serif;
  --font-sans:    'Oswald', 'Arial Narrow', sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;
}

/* ── Keyframes ─────────────────────────────────────────── */

/* Thinking indicator — gold scoreboard glow pulse */
@keyframes gold-pulse {
  0%, 100% {
    opacity: 1;
    filter: drop-shadow(0 0 8px oklch(78% 0.18 75 / 0.5));
  }
  50% {
    opacity: 0.48;
    filter: drop-shadow(0 0 26px oklch(78% 0.18 75 / 0.85))
            drop-shadow(0 0 4px oklch(78% 0.18 75));
  }
}

/* Message entry — EA Sports snap, not ease */
@keyframes snap-in {
  from {
    opacity: 0;
    transform: translateY(10px) scaleY(0.96);
    clip-path: inset(8px 0 0 0);
  }
  to {
    opacity: 1;
    transform: translateY(0) scaleY(1);
    clip-path: inset(0 0 0 0);
  }
}

/* Panel / header reveal */
@keyframes clip-reveal {
  from { clip-path: inset(100% 0 0 0); }
  to   { clip-path: inset(0% 0 0 0); }
}

/* Court floor glow — ambient breathing */
@keyframes court-breathe {
  0%, 100% { opacity: 0.58; }
  50%       { opacity: 1; }
}

/* Scoreboard numbers — tick up on load */
@keyframes scoreboard-tick {
  from { transform: translateY(-8px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

/* ── Body — three-layer arena atmosphere ───────────────── */

body {
  background:
    radial-gradient(ellipse 120% 52% at 50% 100%,
      oklch(50% 0.22 25 / 0.11) 0%, transparent 65%),
    radial-gradient(ellipse 80% 42% at 50% 0%,
      oklch(78% 0.18 75 / 0.07) 0%, transparent 58%),
    radial-gradient(ellipse 180% 110% at 22% 58%,
      oklch(8% 0.025 280) 0%, oklch(4% 0.008 280) 100%)
    fixed;
  font-family: var(--font-sans);
  font-weight: 400;
  color: var(--nba-fg);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Court floor — red warmth radiating up from below */
body::before {
  content: "";
  position: fixed;
  bottom: 0; left: 0; right: 0;
  height: 48%;
  background: radial-gradient(
    ellipse 140% 72% at 50% 100%,
    oklch(50% 0.22 25 / 0.13) 0%,
    transparent 68%
  );
  pointer-events: none;
  z-index: 0;
  animation: court-breathe 4.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  will-change: opacity;
}

/* Scoreboard — gold light washing down from above */
body::after {
  content: "";
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 40%;
  background: radial-gradient(
    ellipse 75% 52% at 50% 0%,
    oklch(78% 0.18 75 / 0.08) 0%,
    transparent 64%
  );
  pointer-events: none;
  z-index: 0;
}

/* Grain texture — arena concrete atmosphere */
html::after {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  background-size: 140px 140px;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: overlay;
  opacity: 0.28;
}

/* ── Sidebar ───────────────────────────────────────────── */

aside,
[class*="sidebar"],
nav[role="navigation"] {
  background: var(--nba-surface-01);
  border-right: 1px solid var(--nba-red-border);
  filter: drop-shadow(4px 0 30px oklch(50% 0.22 25 / 0.16));
}

/* ── Right panels ──────────────────────────────────────── */

[class*="panel-right"],
[class*="sidebar-right"],
.right-panel {
  background: var(--nba-surface-01);
  border-left: 1px solid var(--nba-surface-03);
}

/* ── Panel / card containers ───────────────────────────── */

[class*="panel"],
[class*="card"],
.widget {
  background: var(--nba-surface-01);
  border: 1px solid var(--nba-surface-03);
  border-radius: 2px;
}

/* ── Panel headers — Bebas Neue, gold, clip-reveal ─────── */

[class*="panel"] h1,
[class*="panel"] h2,
[class*="panel"] h3,
[class*="panel-header"],
[class*="section-title"],
[class*="widget-title"],
aside h2,
aside h3 {
  font-family: var(--font-display);
  font-size: clamp(0.68rem, 1.3vw, 0.95rem);
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--nba-gold);
  line-height: 1;
  animation: clip-reveal 0.45s var(--ease-snap) both;
}

/* Scoreboard-scale numbers — diffs, tokens, XP, counts */
[class*="score"],
[class*="stat-num"],
[class*="token-count"],
[class*="xp-value"],
[class*="level-num"],
[class*="count-display"] {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 4rem);
  letter-spacing: -0.02em;
  line-height: 1;
  animation: scoreboard-tick 0.35s var(--ease-snap) both;
}

/* ── Session list / Recents ────────────────────────────── */

.session-item,
.recent-item,
aside li,
nav li,
[class*="nav-item"],
[class*="session-list"] li {
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 0.8125rem;
  color: var(--nba-muted);
  border-radius: 2px;
  transition:
    color var(--ease-snap) 0.14s,
    background var(--ease-snap) 0.14s;
}

.session-item:hover,
.recent-item:hover,
aside li:hover,
nav li:hover,
[class*="nav-item"]:hover {
  color: var(--nba-fg);
  background: var(--nba-surface-02);
}

.session-item.active,
.recent-item.active,
aside li.active,
[class*="nav-item"].active {
  color: var(--nba-gold);
  background: oklch(78% 0.18 75 / 0.06);
  border-left: 2px solid var(--nba-gold);
}

/* ── Message bubbles ───────────────────────────────────── */

.msg-bubble-user {
  background: var(--nba-red);
  color: var(--nba-fg);
  font-family: var(--font-sans);
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.55;
  border-left: 2px solid var(--nba-red-light);
  border-radius: 0 2px 2px 0;
  text-wrap: pretty;
}

.msg-bubble-assistant {
  background: var(--nba-surface-02);
  color: var(--nba-fg);
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.58;
  border-left: 2px solid var(--nba-gold-border);
  border-radius: 0 2px 2px 0;
  text-wrap: pretty;
}

/* Scroll-driven entry — messages animate as they enter viewport */
.msg-bubble-user,
.msg-bubble-assistant {
  animation: snap-in linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 18%;
}

/* ── Thinking indicator — gold scoreboard pulse ─────────── */

.thinking-indicator,
[class*="thinking"],
[class*="loading-text"],
[class*="generating-text"],
[class*="analyzing"] {
  font-family: var(--font-display);
  font-size: clamp(0.8rem, 1.6vw, 1.1rem);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--nba-gold);
  animation: gold-pulse 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  will-change: opacity, filter;
}

/* ── Input / Textarea ──────────────────────────────────── */

textarea,
input[type="text"],
input[type="search"],
[class*="chat-input"],
[class*="input-area"] {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--nba-fg);
  background: var(--nba-surface-02);
  border: 1px solid var(--nba-surface-03);
  border-radius: 2px;
  transition:
    border-color var(--ease-snap) 0.18s,
    outline var(--ease-snap) 0.18s;
}

textarea:focus,
input[type="text"]:focus,
input[type="search"]:focus,
[class*="chat-input"]:focus,
[class*="input-area"]:focus {
  border-color: var(--nba-gold);
  outline: 2px solid var(--nba-gold-ring);
  outline-offset: 0;
}

/* ── Buttons ───────────────────────────────────────────── */

button,
[role="button"],
.btn {
  font-family: var(--font-display);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: 2px;
  transition:
    transform var(--ease-snap) 0.15s,
    filter var(--ease-snap) 0.15s,
    background var(--ease-snap) 0.15s;
}

button:hover,
[role="button"]:hover,
.btn:hover {
  transform: scaleY(0.96) scaleX(1.015);
  filter: brightness(1.18);
}

button:active,
[role="button"]:active,
.btn:active {
  transform: scaleY(0.91);
  transition-duration: 0.06s;
}

/* Primary action — NEW SESSION, red */
[class*="primary"],
[class*="action-btn"],
[class*="new-session"],
[class*="btn-primary"] {
  background: var(--nba-red);
  color: var(--nba-fg);
  border: none;
  outline: 1px solid oklch(62% 0.22 25 / 0.45);
  outline-offset: 1px;
}

/* CTA — PUSH BRANCH, gold */
[class*="cta"],
[class*="btn-cta"],
[class*="push-btn"],
[class*="submit-primary"] {
  background: var(--nba-gold);
  color: oklch(6% 0.015 280);
  font-weight: 700;
  letter-spacing: 0.1em;
  border: none;
}

/* ── Links ─────────────────────────────────────────────── */

a {
  color: var(--nba-gold);
  text-decoration: none;
  transition:
    color var(--ease-snap) 0.14s,
    filter var(--ease-snap) 0.14s;
}

a:hover {
  color: var(--nba-fg);
  filter: drop-shadow(0 0 10px var(--nba-gold-glow));
}

/* ── Code ──────────────────────────────────────────────── */

code,
kbd {
  font-family: var(--font-mono);
  font-size: 0.875em;
  color: var(--nba-gold);
  background: oklch(78% 0.18 75 / 0.08);
  border: 1px solid var(--nba-gold-border);
  border-radius: 2px;
  padding: 0.1em 0.35em;
}

pre {
  font-family: var(--font-mono);
  background: var(--nba-surface-01);
  border: 1px solid var(--nba-surface-03);
  border-left: 3px solid var(--nba-red-border);
  border-radius: 0 2px 2px 0;
  color: var(--nba-fg);
}

pre code {
  background: transparent;
  border: none;
  padding: 0;
  color: inherit;
}

/* ── Diff stats — scoreboard-scale Bebas Neue ──────────── */

[class*="addition"],
[class*="diff-add"],
[class*="text-green"],
.insertions {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.8vw, 3rem);
  letter-spacing: -0.02em;
  color: var(--nba-green);
  animation: scoreboard-tick 0.3s var(--ease-snap) both;
}

[class*="deletion"],
[class*="diff-remove"],
[class*="text-red"],
.deletions {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.8vw, 3rem);
  letter-spacing: -0.02em;
  color: var(--nba-red);
  animation: scoreboard-tick 0.3s var(--ease-snap) both;
}

/* Git diff inline — file-level +/- counts */
[class*="file-additions"],
[class*="lines-added"] {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--nba-green);
}

[class*="file-deletions"],
[class*="lines-removed"] {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--nba-red);
}

/* ── Messages container — performance ──────────────────── */

[class*="messages"],
[class*="chat-history"],
[class*="message-list"] {
  content-visibility: auto;
}

/* ── Scrollbar ─────────────────────────────────────────── */

::-webkit-scrollbar       { width: 3px; height: 3px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: color-mix(in oklch, var(--nba-gold) 42%, var(--nba-red) 58%);
  border-radius: 0;
}
::-webkit-scrollbar-thumb:hover { background: var(--nba-gold); }

/* ── Tabs — CHAT / COWORK / CODE ───────────────────────── */

[role="tab"],
[class*="tab-item"],
[class*="nav-tab"] {
  font-family: var(--font-display);
  font-size: clamp(0.6rem, 1.1vw, 0.82rem);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--nba-muted);
  border-radius: 2px;
  transition:
    color var(--ease-snap) 0.14s,
    background var(--ease-snap) 0.14s;
}

[role="tab"][aria-selected="true"],
[class*="tab-item"].active,
[class*="nav-tab"].active {
  color: oklch(4% 0.008 280);
  background: var(--nba-gold);
}

/* ── Status bar ────────────────────────────────────────── */

[class*="status-bar"],
[class*="statusbar"],
footer {
  background: oklch(5% 0.012 280);
  border-top: 1px solid var(--nba-surface-03);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--nba-muted);
}

[class*="branch"],
[class*="git-branch"],
[class*="status-branch"] {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--nba-muted);
}

[class*="ahead"],
[class*="commits-ahead"] {
  color: var(--nba-gold);
  font-family: var(--font-display);
  letter-spacing: 0.08em;
}

/* ── Todo / Checklist ──────────────────────────────────── */

[class*="todo"] li,
[class*="checklist"] li,
[class*="task-item"] {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--nba-fg);
  animation: snap-in var(--ease-snap) 0.35s both;
}

[class*="todo"] li:has(input:checked),
[class*="task-item"].done,
[class*="task-item"][data-done="true"] {
  color: var(--nba-subtle);
  text-decoration: line-through;
  text-decoration-color: oklch(78% 0.18 75 / 0.4);
}

/* ── Checkbox ──────────────────────────────────────────── */

input[type="checkbox"] { accent-color: var(--nba-gold); }

/* ── Selection ─────────────────────────────────────────── */

::selection {
  background: oklch(78% 0.18 75 / 0.22);
  color: var(--nba-fg);
}

/* ── Focus ─────────────────────────────────────────────── */

:focus-visible {
  outline: 2px solid var(--nba-gold-ring);
  outline-offset: 2px;
}

/* ── Custom cursor — CSS component ────────────────────── */

* { cursor: none; }

.nba-cursor {
  width: 16px;
  height: 16px;
  background: var(--nba-gold);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition:
    transform var(--ease-snap) 0.2s,
    background var(--ease-snap) 0.2s,
    border-radius var(--ease-snap) 0.2s;
  will-change: transform, left, top;
}

/* Shape change on hover — circle → square */
.nba-cursor.is-hovering {
  transform: translate(-50%, -50%) scale(2.6);
  background: var(--nba-red);
  border-radius: 2px;
}

/* Compress on click */
.nba-cursor.is-clicking {
  transform: translate(-50%, -50%) scale(0.72);
  transition-duration: 0.06s;
}

### Section 10 · persona
sidebar_name:          NBA
sidebar_tagline:       EVERY GAME IS GAME 7.
sidebar_icon:          🏀
user_name:             PLAYER
user_role:             POINT GUARD
user_level:            23
user_xp:               1850
user_xp_max:           2300
assistant_avatar:      🏀
layout:                three-column
right_panel_0_title:   TERMINAL
terminal_line:         hardwood-01 ~ %
terminal_header_1:     > ARENA v2.0 · session active
terminal_header_2:     · shot clock: RUNNING
right_panel_1_title:   FILES CHANGED
right_panel_2_title:   DIFF SUMMARY
right_panel_3_title:   TODO
right_panel_4_title:   STATUS
play_1_type:           PG
play_1_label:          Pick-and-roll
play_1_score:          +12 pts
play_2_type:           SG
play_2_label:          3-pointer set
play_2_score:          +9 pts
play_3_type:           SF
play_3_label:          Post-up sequence
play_3_score:          +6 pts
play_4_type:           PF
play_4_label:          Defensive stop
play_4_score:          -3 pts
action_button:         CALL PLAY
status_branch:         hardwood-01 ~ main
status_note:           SEASON · GAME 23
nav_recent_1:          Design triple pick-and-roll
nav_recent_2:          Analyze defensive rotations
nav_recent_3:          Review game film highlights
nav_recent_4:          Build training regimen
music_bar_show:        true
music_bar_label:       NBA SOUNDTRACK
music_bar_track_1:     Jay-Z — IZZO (H.O.V.A.)
music_bar_track_2:     Drake — Started From the Bottom
music_bar_track_3:     Kendrick Lamar — Money Trees
music_bar_track_4:     Lil Wayne — A Milli
music_bar_track_5:     Kanye West — All Falls Down
music_bar_track_6:     Nas — N.Y. State of Mind

### Section 11 · widgets
widget_1_enabled:      true
widget_1_type:         live-scores
widget_1_title:        TONIGHT'S GAMES
widget_1_slot:         right_panel_5
widget_1_source:       https://api.balldontlie.io/v1/games
widget_1_params:       dates[]=TODAY
widget_1_refresh_sec:  60
widget_1_display:      scoreboard
widget_1_empty_state:  NO GAMES TONIGHT. REST DAY.
widget_1_auth:         none

widget_2_enabled:      true
widget_2_type:         standings
widget_2_title:        CONFERENCE STANDINGS
widget_2_slot:         right_panel_6
widget_2_source:       https://api.balldontlie.io/v1/standings
widget_2_params:       season=2025
widget_2_refresh_sec:  3600
widget_2_display:      table
widget_2_columns:      team,wins,losses,pct
widget_2_auth:         none

widget_3_enabled:      true
widget_3_type:         player-spotlight
widget_3_title:        PLAYER OF THE GAME
widget_3_slot:         sidebar_bottom
widget_3_source:       https://api.balldontlie.io/v1/stats
widget_3_params:       seasons[]=2025&per_page=1&sort=pts&direction=desc
widget_3_refresh_sec:  3600
widget_3_display:      card
widget_3_fields:       player.first_name,player.last_name,team.abbreviation,pts,ast,reb
widget_3_auth:         none
