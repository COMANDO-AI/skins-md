"use client";

import { useEffect, useState } from "react";
import type { SkinPersona } from "@/lib/skin-parser";

interface Props {
  persona: SkinPersona;
}

const PANEL_STYLE = {
  background: "linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)",
  border: "2px solid color-mix(in srgb, var(--accent) 28%, transparent)",
  borderRadius: "8px",
  padding: "12px",
  boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 20%, transparent), inset 0 1px 0 color-mix(in srgb, var(--accent) 10%, transparent)",
} as const;

function PanelHeader({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        marginBottom: "10px",
        paddingBottom: "8px",
        borderBottom: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "5px",
          height: "5px",
          borderRadius: "1px",
          background: "var(--accent)",
          flexShrink: 0,
          boxShadow: "0 0 6px color-mix(in srgb, var(--accent) 80%, transparent)",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.20em",
          color: "var(--accent)",
          textTransform: "uppercase",
          flex: 1,
        }}
      >
        {title}
      </span>
      <span style={{ display: "flex", gap: "3px" }}>
        {[
          "color-mix(in srgb, var(--accent) 55%, transparent)",
          "color-mix(in srgb, var(--success) 55%, transparent)",
          "color-mix(in srgb, var(--error) 55%, transparent)",
        ].map((c, i) => (
          <span key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", background: c }} />
        ))}
      </span>
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
    <div style={PANEL_STYLE}>
      <PanelHeader title={persona.right_panel_0_title ?? "TERMINAL"} />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", lineHeight: 1.6, color: "color-mix(in srgb, var(--accent) 85%, transparent)" }}>
        <div style={{ color: "color-mix(in srgb, var(--success) 60%, transparent)", marginBottom: "3px" }}>
          {persona.terminal_header_1 ?? "> DEEPNET v2.2 · signal detected"}
        </div>
        <div style={{ color: "color-mix(in srgb, var(--accent) 45%, transparent)", marginBottom: "3px" }}>
          {persona.terminal_header_2 ?? "· field: ACTIVE"}
        </div>
        <div>
          <span style={{ color: "color-mix(in srgb, var(--success) 70%, transparent)" }}>
            {persona.terminal_line ?? "base ~ %"}
          </span>
          <span style={{
            display: "inline-block", width: "6px", height: "12px",
            background: cursor ? "var(--accent)" : "transparent",
            verticalAlign: "middle", marginLeft: "2px", transition: "background 0.1s",
          }} />
        </div>
      </div>
    </div>
  );
}

/* FILES CHANGED style — play log */
function PlayLogPanel({ persona }: { persona: SkinPersona }) {
  const plays = [
    { type: persona.play_1_type, label: persona.play_1_label, score: persona.play_1_score },
    { type: persona.play_2_type, label: persona.play_2_label, score: persona.play_2_score },
    { type: persona.play_3_type, label: persona.play_3_label, score: persona.play_3_score },
    { type: persona.play_4_type, label: persona.play_4_label, score: persona.play_4_score },
  ].filter((p) => p.label);

  const BADGE_COLORS = [
    "color-mix(in srgb, var(--border) 80%, transparent)",
    "color-mix(in srgb, var(--accent) 50%, var(--border) 50%)",
    "color-mix(in srgb, var(--muted) 60%, transparent)",
    "color-mix(in srgb, var(--border) 60%, transparent)",
  ];

  return (
    <div style={PANEL_STYLE}>
      <PanelHeader title={persona.right_panel_1_title ?? "PLAY LOG"} />
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
                color: "color-mix(in srgb, var(--fg) 75%, transparent)",
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
                color: isPositive
                  ? "color-mix(in srgb, var(--success) 80%, transparent)"
                  : "color-mix(in srgb, var(--error) 80%, transparent)",
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
          borderTop: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "color-mix(in srgb, var(--fg) 35%, transparent)",
          textAlign: "right",
        }}>
          {plays.length} plays called
        </div>
      )}
    </div>
  );
}

/* STATS gauge — for skins without PlayLog */
function StatsPanel({ persona }: { persona: SkinPersona }) {
  const gaugeVal = parseInt(persona.gauge_value ?? "72", 10);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - gaugeVal / 100);

  return (
    <div style={{ ...PANEL_STYLE, flex: 1 }}>
      <PanelHeader title={persona.right_panel_1_title ?? "STATS"} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
        <div style={{ position: "relative", width: "90px", height: "90px" }}>
          <svg width="90" height="90" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="45" cy="45" r={radius} fill="none" stroke="color-mix(in srgb, var(--accent) 10%, transparent)" strokeWidth="7" />
            <circle cx="45" cy="45" r={radius} fill="none" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={dashOffset}
              style={{ filter: "drop-shadow(0 0 4px color-mix(in srgb, var(--accent) 60%, transparent))", transition: "stroke-dashoffset 1s ease" }}
            />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "var(--accent)", textShadow: "0 0 10px color-mix(in srgb, var(--accent) 50%, transparent)" }}>
              {gaugeVal}%
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "color-mix(in srgb, var(--accent) 50%, transparent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
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
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0", borderBottom: i < 2 ? "1px solid color-mix(in srgb, var(--accent) 8%, transparent)" : "none" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "color-mix(in srgb, var(--accent) 50%, transparent)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "12px", fontWeight: 700, color: "color-mix(in srgb, var(--fg) 90%, transparent)" }}>{value}</span>
        </div>
      ))}
    </div>
  );
}

/* TODO checklist style */
function GamePlanPanel({ persona }: { persona: SkinPersona }) {
  const items = [
    { label: persona.check_1_label, done: persona.check_1_done === "true" },
    { label: persona.check_2_label, done: persona.check_2_done === "true" },
    { label: persona.check_3_label, done: persona.check_3_done === "true" },
    { label: persona.check_4_label, done: persona.check_4_done === "true" },
  ].filter((c) => c.label);

  const doneCount = items.filter((c) => c.done).length;

  return (
    <div style={PANEL_STYLE}>
      <PanelHeader title={persona.right_panel_2_title ?? "GAME PLAN"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <span style={{
              width: "15px",
              height: "15px",
              borderRadius: "3px",
              border: item.done ? "none" : "1.5px solid color-mix(in srgb, var(--fg) 30%, transparent)",
              background: item.done ? "color-mix(in srgb, var(--accent) 80%, transparent)" : "transparent",
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
              color: item.done
                ? "color-mix(in srgb, var(--fg) 45%, transparent)"
                : "color-mix(in srgb, var(--fg) 80%, transparent)",
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
          borderTop: "1px solid color-mix(in srgb, var(--accent) 10%, transparent)",
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: "color-mix(in srgb, var(--fg) 35%, transparent)",
          textAlign: "right",
        }}>
          {doneCount}/{items.length} complete
        </div>
      )}
    </div>
  );
}

/* BARS panel — fallback for skins without GamePlan */
function BarsPanel({ persona }: { persona: SkinPersona }) {
  const bars = [
    { label: persona.bar_1_label, value: parseInt(persona.bar_1_value ?? "78", 10), isLast: false },
    { label: persona.bar_2_label, value: parseInt(persona.bar_2_value ?? "62", 10), isLast: false },
    { label: persona.bar_3_label, value: parseInt(persona.bar_3_value ?? "91", 10), isLast: false },
    { label: persona.bar_4_label, value: parseInt(persona.bar_4_value ?? "100", 10), isLast: true },
  ].filter((b) => b.label);

  return (
    <div style={PANEL_STYLE}>
      <PanelHeader title={persona.right_panel_2_title ?? "SYSTEMS"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {bars.map((bar, i) => {
          const barColor = bar.isLast
            ? "color-mix(in srgb, var(--success) 80%, transparent)"
            : "color-mix(in srgb, var(--accent) 80%, transparent)";
          return (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "color-mix(in srgb, var(--accent) 60%, transparent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {bar.isLast ? "⚡ " : ""}{bar.label}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "color-mix(in srgb, var(--fg) 80%, transparent)" }}>
                  {bar.isLast ? "4/4" : `${bar.value}%`}
                </span>
              </div>
              <div style={{ height: "5px", background: "color-mix(in srgb, var(--accent) 10%, transparent)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${bar.value}%`, background: barColor, borderRadius: "3px", boxShadow: `0 0 6px ${barColor}`, transition: "width 1s ease" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* STATUS panel with action button */
function StatusPanel({ persona }: { persona: SkinPersona }) {
  return (
    <div style={PANEL_STYLE}>
      <PanelHeader title="STATUS" />
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "14px" }}>🌿</span>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "color-mix(in srgb, var(--fg) 80%, transparent)",
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
            color: "color-mix(in srgb, var(--success) 80%, transparent)",
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
          background: "var(--accent)",
          color: "#000000",
          fontFamily: "var(--font-display)",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          cursor: "pointer",
          boxShadow: "0 2px 14px color-mix(in srgb, var(--accent) 50%, transparent)",
          textTransform: "uppercase",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.filter = "none"; }}
      >
        {persona.action_button ?? "ACTION"}
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
        borderLeft: "2px solid color-mix(in srgb, var(--accent) 22%, transparent)",
      }}
    >
      {persona.right_panel_0_title !== undefined && <TerminalPanel persona={persona} />}
      {hasPlayLog ? <PlayLogPanel persona={persona} /> : <StatsPanel persona={persona} />}
      {hasGamePlan ? <GamePlanPanel persona={persona} /> : <BarsPanel persona={persona} />}
      {hasStatus && <StatusPanel persona={persona} />}
    </div>
  );
}
