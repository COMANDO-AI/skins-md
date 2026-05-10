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
        borderBottom: "1px solid rgba(0,212,255,0.20)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "rgba(0,212,255,0.9)",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
      <span style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
        {["rgba(0,212,255,0.5)", "rgba(0,255,170,0.5)", "rgba(255,92,77,0.5)"].map((c, i) => (
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
        background: "linear-gradient(180deg, #020c18 0%, #031424 100%)",
        border: "1px solid rgba(0,212,255,0.22)",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 0 20px rgba(0,80,160,0.25), inset 0 1px 0 rgba(0,212,255,0.08)",
      }}
    >
      <PanelHeader title={persona.right_panel_0_title ?? "TERMINAL"} />
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "rgba(0,212,255,0.85)",
          lineHeight: 1.7,
        }}
      >
        <div style={{ color: "rgba(0,255,170,0.6)", marginBottom: "4px" }}>
          {">"} DEEPNET v2.2 · signal detected
        </div>
        <div style={{ color: "rgba(0,200,255,0.5)", marginBottom: "4px" }}>
          · bioluminescent field: ACTIVE
        </div>
        <div>
          <span style={{ color: "rgba(0,255,170,0.7)" }}>
            {persona.terminal_line ?? "yavin-base ~ %"}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "7px",
              height: "13px",
              background: cursor ? "rgba(0,212,255,0.85)" : "transparent",
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

function OceanStatusPanel({ persona }: { persona: SkinPersona }) {
  const gaugeVal = parseInt(persona.gauge_value ?? "72", 10);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - gaugeVal / 100);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #051a30 0%, #041422 100%)",
        border: "1px solid rgba(0,212,255,0.22)",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 0 20px rgba(0,80,160,0.25), inset 0 1px 0 rgba(0,212,255,0.08)",
        flex: 1,
      }}
    >
      <PanelHeader title={persona.right_panel_1_title ?? "OCEAN STATUS"} />

      {/* Circular gauge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
        <div style={{ position: "relative", width: "100px", height: "100px" }}>
          <svg width="100" height="100" style={{ transform: "rotate(-90deg)" }}>
            <circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke="rgba(0,212,255,0.10)"
              strokeWidth="7"
            />
            <circle
              cx="50" cy="50" r={radius}
              fill="none"
              stroke="rgba(0,212,255,0.85)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ filter: "drop-shadow(0 0 4px rgba(0,212,255,0.6))", transition: "stroke-dashoffset 1s ease" }}
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
                color: "rgba(0,212,255,0.95)",
                textShadow: "0 0 12px rgba(0,212,255,0.5)",
              }}
            >
              {gaugeVal}%
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "rgba(0,212,255,0.5)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              DEPTH
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
            borderBottom: i < 2 ? "1px solid rgba(0,212,255,0.08)" : "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "rgba(0,212,255,0.5)",
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
              color: "rgba(180,224,255,0.9)",
            }}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function SubSystemsPanel({ persona }: { persona: SkinPersona }) {
  const bars = [
    { label: persona.bar_1_label, value: parseInt(persona.bar_1_value ?? "78", 10), color: "rgba(0,212,255,0.8)" },
    { label: persona.bar_2_label, value: parseInt(persona.bar_2_value ?? "62", 10), color: "rgba(0,212,255,0.8)" },
    { label: persona.bar_3_label, value: parseInt(persona.bar_3_value ?? "91", 10), color: "rgba(0,212,255,0.8)" },
    { label: persona.bar_4_label, value: parseInt(persona.bar_4_value ?? "100", 10), color: "rgba(0,255,170,0.8)" },
  ].filter((b) => b.label);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #051a30 0%, #041422 100%)",
        border: "1px solid rgba(0,212,255,0.22)",
        borderRadius: "10px",
        padding: "14px",
        boxShadow: "0 0 20px rgba(0,80,160,0.25), inset 0 1px 0 rgba(0,212,255,0.08)",
      }}
    >
      <PanelHeader title={persona.right_panel_2_title ?? "SUB SYSTEMS"} />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {bars.map((bar, i) => (
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
                  color: "rgba(0,212,255,0.6)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {bar.label === persona.bar_4_label ? "⚡ " : ""}{bar.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(180,224,255,0.8)",
                }}
              >
                {bar.label === persona.bar_4_label ? "4/4" : `${bar.value}%`}
              </span>
            </div>
            <div
              style={{
                height: "5px",
                background: "rgba(0,212,255,0.10)",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${bar.value}%`,
                  background: bar.color,
                  borderRadius: "3px",
                  boxShadow: `0 0 6px ${bar.color}`,
                  transition: "width 1s ease",
                }}
              />
            </div>
          </div>
        ))}
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
        borderLeft: "1px solid rgba(0,212,255,0.15)",
      }}
    >
      {persona.right_panel_0_title !== undefined && <TerminalPanel persona={persona} />}
      <OceanStatusPanel persona={persona} />
      <SubSystemsPanel persona={persona} />
    </div>
  );
}
