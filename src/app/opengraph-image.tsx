import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SKINS.MD — Every model. Your skin.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            letterSpacing: "0.15em",
            color: "#444",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          OPEN SOURCE · OPENROUTER · 200+ MODELS
        </div>
        <div
          style={{
            fontSize: "88px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Every model.</span>
          <span style={{ color: "#555" }}>Your skin.</span>
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "24px",
            color: "#666",
            display: "flex",
          }}
        >
          skins-md.vercel.app
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            fontSize: "22px",
            fontWeight: 700,
            color: "#ffffff",
            display: "flex",
          }}
        >
          SKINS.MD
        </div>
      </div>
    ),
    { ...size }
  );
}
