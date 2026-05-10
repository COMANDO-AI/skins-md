"use client";

import { useEffect, useState } from "react";
import type { SkinPersona } from "@/lib/skin-parser";

interface Props {
  persona: SkinPersona;
}

function PanelHeader({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "12px",
        paddingBottom: "8px",
        borderBottom: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "var(--accent)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
      <span style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
        {[
          "color-mix(in srgb, var(--accent) 50%, transparent)",
          "color-mix(in srgb, var(--success) 50%, transparent)",
          "color-mix(in srgb, var(--error) 50%, transparent)",
        ].map((c, i) => (
          <span
            key={i}
            style={{ width: "8px", height: "8px", borderRadius: "50%", background: c }}
          />
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
    <div
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)",
        border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 0 20px color-mix(in srgb, var(--accent) 25%, transparent), inset 0 1px 0 color-mix(in srgb, var(--accent) 8%, transparent)",
      }}
    >
      <PanelHeader title={persona.right_panel_0_title ?? "TERMINAL"} />
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "color-mix(in srgb, var(--accent) 85%, transparent)",
          lineHeight: 1.7,
        }}
      >
        <div style={{ color: "color-mix(in srgb, var(--success) 60%, transparent)", marginBottom: "4px" }}>
          {persona.terminal_header_1 ?? "> DEEPNET v2.2 · signal detected"}
        </div>
        <div style={{ color: "color-mix(in srgb, var(--accent) 50%, transparent)", marginBottom: "4px" }}>
          {persona.terminal_header_2 ?? "· bioluminescent field: ACTIVE"}
        </div>
        <div>
          <span style={{ color: "color-mix(in srgb, var(--success) 70%, transparent)" }}>
            {persona.terminal_line ?? "yavin-base ~ %"}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "13px",
              background: cursor ? "var(--accent)" : "transparent",
              verticalAlign: "middle",
              marginLeft: "2px",
              transition: "background 0.1s",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function StatsPanel({ persona }: { persona: SkinPersona }) {
  const gaugeVal = parseInt(persona.gauge_value ?? "72", 10);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - gaugeVal / 100);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)",
        border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 0 20px color-mix(in srgb, var(--accent) 25%, transparent), inset 0 1px 0 color-mix(in srgb, var(--accent) 8%, transparent)",
        flex: 1,
      }}
    >
      <PanelHeader title={persona.right_panel_1_title ?? "STATS"} />

      {/* Circular gauge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <svg width="100" height="100" style={{ transform: "rotate(-90deg)" }}>
            <circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke="color-mix(in srgb, var(--accent) 10%, transparent)"
              strokeWidth="7"
            />
            <circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ filter: "drop-shadow(0 0 4px color-mix(in srgb, var(--accent) 60%, transparent))", transition: "stroke-dashoffset 1s ease" }}
            />
          </svg>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--accent)",
                textShadow: "0 0 12px color-mix(in srgb, var(--accent) 50%, transparent)",
              }}
            >
              {gaugeVal}%
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "color-mix(in srgb, var(--accent) 50%, transparent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {persona.gauge_label ?? "DEPTH"}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      {[
        [persona.stat_1_label, persona.stat_1_value],
        [persona.stat_2_label, persona.stat_2_value],
        [persona.stat_3_label, persona.stat_3_value],
      ].filter(([l]) => l).map(([label, value], i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 0",
            borderBottom: i < 2 ? "1px solid color-mix(in srgb, var(--accent) 8%, transparent)" : "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "color-mix(in srgb, var(--accent) 50%, transparent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "12px",
              fontWeight: 700,
              color: "color-mix(in srgb, var(--fg) 90%, transparent)",
            }}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function BarsPanel({ persona }: { persona: SkinPersona }) {
  const bars = [
    { label: persona.bar_1_label, value: parseInt(persona.bar_1_value ?? "78", 10), isLast: false },
    { label: persona.bar_2_label, value: parseInt(persona.bar_2_value ?? "62", 10), isLast: false },
    { label: persona.bar_3_label, value: parseInt(persona.bar_3_value ?? "91", 10), isLast: false },
    { label: persona.bar_4_label, value: parseInt(persona.bar_4_value ?? "100", 10), isLast: true },
  ].filter((b) => b.label);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)",
        border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 0 20px color-mix(in srgb, var(--accent) 25%, transparent), inset 0 1px 0 color-mix(in srgb, var(--accent) 8%, transparent)",
      }}
    >
      <PanelHeader title={persona.right_panel_2_title ?? "SYSTEMS"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {bars.map((bar, i) => {
          const barColor = bar.isLast
            ? "color-mix(in srgb, var(--success) 80%, transparent)"
            : "color-mix(in srgb, var(--accent) 80%, transparent)";
          return (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "color-mix(in srgb, var(--accent) 60%, transparent)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {bar.isLast ? "⚡ " : ""}{bar.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "color-mix(in srgb, var(--fg) 80%, transparent)",
                  }}
                >
                  {bar.isLast ? "4/4" : `${bar.value}%`}
                </span>
              </div>
              <div
                style={{
                  height: "5px",
                  background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${bar.value}%`,
                    background: barColor,
                    borderRadius: "3px",
                    boxShadow: `0 0 6px ${barColor}`,
                    transition: "width 1s ease",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RightPanel({ persona }: Props) {
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
        gap: "10px",
        padding: "12px 10px 12px 0",
        flexShrink: 0,
        borderLeft: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
      }}
    >
      {persona.right_panel_0_title !== undefined && <TerminalPanel persona={persona} />}
      <StatsPanel persona={persona} />
      <BarsPanel persona={persona} />
    </div>
  );
}
