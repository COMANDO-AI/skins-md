"use client";

import { useEffect, useState } from "react";
import type { SkinPersona } from "@/lib/skin-parser";

interface Props {
  persona: SkinPersona;
}

// Per-panel accent colors: Terminal=cyan, Ocean Status=blue, Sub Systems=yellow
const PANEL_ACCENTS = ["#00e5ff", "#3b82f6", "#fbbf24"];
const PANEL_GLOW = [
  "rgba(0,229,255,0.30)",
  "rgba(59,130,246,0.30)",
  "rgba(251,191,36,0.30)",
];

function panelStyle(idx: number) {
  return {
    background: "linear-gradient(160deg, #031c3a 0%, #020d22 100%)",
    border: `2px solid ${PANEL_ACCENTS[idx]}44`,
    borderRadius: "10px",
    padding: "12px",
    boxShadow: `0 0 28px ${PANEL_GLOW[idx]}, inset 0 1px 0 ${PANEL_ACCENTS[idx]}22`,
  } as const;
}

function PanelHeader({ title, idx }: { title: string; idx: number }) {
  const accent = PANEL_ACCENTS[idx];
  const dot2 = idx === 0 ? "#00ff88" : idx === 1 ? "#22c55e" : "#22c55e";
  const dot3 = idx === 0 ? "#ff4444" : idx === 1 ? "#ef4444" : "#ef4444";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        marginBottom: "10px",
        paddingBottom: "8px",
        borderBottom: `1px solid ${accent}33`,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "6px",
          height: "6px",
          borderRadius: "1px",
          background: accent,
          flexShrink: 0,
          boxShadow: `0 0 8px ${accent}cc`,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.20em",
          color: accent,
          textTransform: "uppercase",
          flex: 1,
          textShadow: `0 0 10px ${accent}88`,
        }}
      >
        {title}
      </span>
      <span style={{ display: "flex", gap: "4px" }}>
        {[accent, dot2, dot3].map((c, i) => (
          <span
            key={i}
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: c,
              boxShadow: `0 0 6px ${c}bb`,
            }}
          />
        ))}
      </span>
    </div>
  );
}

/* Yellow submarine SVG illustration */
function SubmarineSVG() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
      <svg
        width="130"
        height="72"
        viewBox="0 0 130 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: "drop-shadow(0 0 8px rgba(0,229,255,0.50)) drop-shadow(0 4px 16px rgba(0,100,200,0.40))",
          animation: "sub-bob 3.8s ease-in-out infinite",
        }}
      >
        <style>{`@keyframes sub-bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }`}</style>

        {/* Periscope */}
        <rect x="72" y="4" width="6" height="18" rx="3" fill="#e6a800" />
        <rect x="70" y="4" width="10" height="4" rx="2" fill="#d4950a" />
        {/* Periscope glass */}
        <circle cx="75" cy="5" r="3" fill="#00e5ff" opacity="0.8" />

        {/* Hull shadow */}
        <ellipse cx="64" cy="52" rx="50" ry="14" fill="rgba(0,0,0,0.25)" />

        {/* Main hull */}
        <ellipse cx="64" cy="45" rx="50" ry="16" fill="#f9c921" />
        <ellipse cx="64" cy="43" rx="50" ry="16" fill="#fbbf24" />

        {/* Hull highlight */}
        <ellipse cx="64" cy="36" rx="40" ry="6" fill="#fde68a" opacity="0.55" />

        {/* Conning tower */}
        <rect x="56" y="22" width="28" height="22" rx="6" fill="#f59e0b" />
        <rect x="58" y="24" width="24" height="10" rx="4" fill="#fcd34d" opacity="0.6" />

        {/* Portholes */}
        <circle cx="44" cy="44" r="8" fill="#0a2a4a" />
        <circle cx="44" cy="44" r="6" fill="#0d3555" />
        <circle cx="44" cy="44" r="4" fill="#1e5a8a" />
        <circle cx="42" cy="42" r="1.5" fill="rgba(255,255,255,0.7)" />

        <circle cx="72" cy="44" r="8" fill="#0a2a4a" />
        <circle cx="72" cy="44" r="6" fill="#0d3555" />
        <circle cx="72" cy="44" r="4" fill="#1e5a8a" />
        <circle cx="70" cy="42" r="1.5" fill="rgba(255,255,255,0.7)" />

        {/* Propeller */}
        <circle cx="14" cy="44" r="5" fill="#e6a800" />
        <ellipse cx="14" cy="37" rx="3" ry="7" fill="#f59e0b" opacity="0.85" transform="rotate(-20 14 37)" />
        <ellipse cx="14" cy="51" rx="3" ry="7" fill="#f59e0b" opacity="0.85" transform="rotate(20 14 51)" />
        <circle cx="14" cy="44" r="2.5" fill="#d4950a" />

        {/* Nose cone */}
        <ellipse cx="113" cy="44" rx="8" ry="10" fill="#f59e0b" />
        <circle cx="116" cy="44" r="5" fill="#fcd34d" opacity="0.4" />

        {/* Water bubbles from propeller */}
        <circle cx="6" cy="40" r="2" fill="none" stroke="rgba(0,229,255,0.7)" strokeWidth="1" />
        <circle cx="2" cy="36" r="1.5" fill="none" stroke="rgba(0,229,255,0.55)" strokeWidth="1" />
        <circle cx="8" cy="32" r="1" fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function TerminalPanel({ persona }: { persona: SkinPersona }) {
  const [cursor, setCursor] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={panelStyle(0)}>
      <PanelHeader title={persona.right_panel_0_title ?? "TERMINAL"} idx={0} />
      <SubmarineSVG />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", lineHeight: 1.6, color: "rgba(0,229,255,0.85)" }}>
        <div style={{ color: "rgba(0,255,136,0.70)", marginBottom: "3px" }}>
          {persona.terminal_header_1 ?? "> DEEPNET v2.2 · signal detected"}
        </div>
        <div style={{ color: "rgba(0,229,255,0.45)", marginBottom: "3px" }}>
          {persona.terminal_header_2 ?? "· field: ACTIVE"}
        </div>
        <div>
          <span style={{ color: "rgba(0,255,136,0.75)" }}>
            {persona.terminal_line ?? "base ~ %"}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "12px",
              background: cursor ? "#00e5ff" : "transparent",
              verticalAlign: "middle",
              marginLeft: "2px",
              transition: "background 0.1s",
              boxShadow: cursor ? "0 0 6px #00e5ff" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function PlayLogPanel({ persona }: { persona: SkinPersona }) {
  const plays = [
    { type: persona.play_1_type, label: persona.play_1_label, score: persona.play_1_score },
    { type: persona.play_2_type, label: persona.play_2_label, score: persona.play_2_score },
    { type: persona.play_3_type, label: persona.play_3_label, score: persona.play_3_score },
    { type: persona.play_4_type, label: persona.play_4_label, score: persona.play_4_score },
  ].filter((p) => p.label);

  const BADGE_COLORS = [
    "rgba(0,229,255,0.25)",
    "rgba(59,130,246,0.30)",
    "rgba(251,191,36,0.25)",
    "rgba(0,229,255,0.15)",
  ];

  return (
    <div style={panelStyle(1)}>
      <PanelHeader title={persona.right_panel_1_title ?? "PLAY LOG"} idx={1} />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {plays.map((play, i) => {
          const isPositive = !play.score?.startsWith("-");
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#fff",
                background: BADGE_COLORS[i % BADGE_COLORS.length],
                padding: "1px 5px",
                borderRadius: "3px",
                flexShrink: 0,
                minWidth: "26px",
                textAlign: "center",
              }}>
                {play.type ?? "??"}
              </span>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                color: "rgba(200,232,255,0.75)",
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}>
                {play.label}
              </span>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 700,
                color: isPositive ? "rgba(0,255,136,0.85)" : "rgba(255,68,68,0.85)",
                flexShrink: 0,
              }}>
                {play.score}
              </span>
            </div>
          );
        })}
      </div>
      {plays.length > 0 && (
        <div style={{
          marginTop: "8px",
          paddingTop: "6px",
          borderTop: "1px solid rgba(59,130,246,0.12)",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "rgba(200,232,255,0.35)",
          textAlign: "right",
        }}>
          {plays.length} plays called
        </div>
      )}
    </div>
  );
}

function StatsPanel({ persona }: { persona: SkinPersona }) {
  const gaugeVal = parseInt(persona.gauge_value ?? "72", 10);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - gaugeVal / 100);

  return (
    <div style={{ ...panelStyle(1), flex: 1 }}>
      <PanelHeader title={persona.right_panel_1_title ?? "OCEAN STATUS"} idx={1} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <svg width="100" height="100" style={{ transform: "rotate(-90deg)" }}>
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00e5ff" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="8" />
            <circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{
                filter: "drop-shadow(0 0 6px rgba(0,229,255,0.70))",
                transition: "stroke-dashoffset 1s ease",
              }}
            />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#00e5ff",
              textShadow: "0 0 14px rgba(0,229,255,0.80)",
              lineHeight: 1,
            }}>
              {gaugeVal}%
            </span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "8px",
              color: "rgba(0,229,255,0.55)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "2px",
            }}>
              {persona.gauge_label ?? "DEPTH"}
            </span>
          </div>
        </div>
      </div>
      {[
        [persona.stat_1_label, persona.stat_1_value],
        [persona.stat_2_label, persona.stat_2_value],
        [persona.stat_3_label, persona.stat_3_value],
      ].filter(([l]) => l).map(([label, value], i) => (
        <div key={i} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 0",
          borderBottom: i < 2 ? "1px solid rgba(59,130,246,0.10)" : "none",
        }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "rgba(59,130,246,0.70)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {label}
          </span>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "12px",
            fontWeight: 700,
            color: "rgba(200,232,255,0.90)",
          }}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function GamePlanPanel({ persona }: { persona: SkinPersona }) {
  const items = [
    { label: persona.check_1_label, done: persona.check_1_done === "true" },
    { label: persona.check_2_label, done: persona.check_2_done === "true" },
    { label: persona.check_3_label, done: persona.check_3_done === "true" },
    { label: persona.check_4_label, done: persona.check_4_done === "true" },
  ].filter((c) => c.label);

  const doneCount = items.filter((c) => c.done).length;

  return (
    <div style={panelStyle(2)}>
      <PanelHeader title={persona.right_panel_2_title ?? "GAME PLAN"} idx={2} />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <span style={{
              width: "15px",
              height: "15px",
              borderRadius: "3px",
              border: item.done ? "none" : "1.5px solid rgba(251,191,36,0.35)",
              background: item.done ? "rgba(251,191,36,0.80)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "9px",
              color: "#000",
              marginTop: "1px",
            }}>
              {item.done ? "✓" : ""}
            </span>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              color: item.done ? "rgba(200,232,255,0.40)" : "rgba(200,232,255,0.80)",
              textDecoration: item.done ? "line-through" : "none",
              lineHeight: 1.3,
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <div style={{
          marginTop: "8px",
          paddingTop: "6px",
          borderTop: "1px solid rgba(251,191,36,0.10)",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "rgba(200,232,255,0.35)",
          textAlign: "right",
        }}>
          {doneCount}/{items.length} complete
        </div>
      )}
    </div>
  );
}

const BAR_ICONS = ["⚡", "🫧", "🛡", "👥"];
const BAR_COLORS = [
  { fill: "linear-gradient(90deg, #00e5ff, #3b82f6)", glow: "rgba(0,229,255,0.50)" },
  { fill: "linear-gradient(90deg, #38bdf8, #0ea5e9)", glow: "rgba(56,189,248,0.45)" },
  { fill: "linear-gradient(90deg, #34d399, #059669)", glow: "rgba(52,211,153,0.45)" },
  { fill: "linear-gradient(90deg, #fbbf24, #f59e0b)", glow: "rgba(251,191,36,0.50)" },
];

function BarsPanel({ persona }: { persona: SkinPersona }) {
  const bars = [
    { label: persona.bar_1_label, value: parseInt(persona.bar_1_value ?? "78", 10) },
    { label: persona.bar_2_label, value: parseInt(persona.bar_2_value ?? "62", 10) },
    { label: persona.bar_3_label, value: parseInt(persona.bar_3_value ?? "91", 10) },
    { label: persona.bar_4_label, value: parseInt(persona.bar_4_value ?? "100", 10) },
  ].filter((b) => b.label);

  return (
    <div style={panelStyle(2)}>
      <PanelHeader title={persona.right_panel_2_title ?? "SUB SYSTEMS"} idx={2} />
      <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
        {bars.map((bar, i) => {
          const isCrewBar = bar.label?.toUpperCase().includes("CREW");
          const bc = BAR_COLORS[i % BAR_COLORS.length];
          return (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(251,191,36,0.75)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {BAR_ICONS[i % BAR_ICONS.length]} {bar.label}
                </span>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(200,232,255,0.80)",
                }}>
                  {isCrewBar ? "4/4" : `${bar.value}%`}
                </span>
              </div>
              <div style={{ height: "6px", background: "rgba(251,191,36,0.10)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${bar.value}%`,
                  background: bc.fill,
                  borderRadius: "4px",
                  boxShadow: `0 0 8px ${bc.glow}`,
                  transition: "width 1s ease",
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatusPanel({ persona }: { persona: SkinPersona }) {
  return (
    <div style={panelStyle(0)}>
      <PanelHeader title="STATUS" idx={0} />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "14px" }}>🌿</span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "rgba(200,232,255,0.80)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
            {persona.status_branch ?? "main"}
          </span>
        </div>
        {persona.status_note && (
          <div style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            letterSpacing: "0.08em",
            color: "rgba(0,255,136,0.80)",
            textTransform: "uppercase",
            paddingLeft: "20px",
          }}>
            {persona.status_note}
          </div>
        )}
      </div>
      <button
        style={{
          width: "100%",
          padding: "9px 12px",
          borderRadius: "6px",
          border: "none",
          background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
          color: "#ffffff",
          fontFamily: "var(--font-display)",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          cursor: "pointer",
          boxShadow: "0 2px 14px rgba(124,58,237,0.55)",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.15)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "none"; }}
      >
        {persona.action_button ?? "CREATE PR"}
      </button>
    </div>
  );
}

export default function RightPanel({ persona }: Props) {
  const hasPlayLog = Boolean(persona.play_1_label);
  const hasGamePlan = Boolean(persona.check_1_label);
  const hasStatus = Boolean(persona.action_button);

  return (
    <div
      style={{
        width: "220px",
        minWidth: "220px",
        maxWidth: "220px",
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "10px 8px 10px 0",
        flexShrink: 0,
        borderLeft: "2px solid rgba(0,229,255,0.18)",
      }}
    >
      {persona.right_panel_0_title !== undefined && <TerminalPanel persona={persona} />}
      {hasPlayLog ? <PlayLogPanel persona={persona} /> : <StatsPanel persona={persona} />}
      {hasGamePlan ? <GamePlanPanel persona={persona} /> : <BarsPanel persona={persona} />}
      {hasStatus && <StatusPanel persona={persona} />}
    </div>
  );
}
