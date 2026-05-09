import Link from "next/link";

const SKIN_PREVIEWS = [
  {
    name: "NBA",
    desc: "Court energy. Arena noise.",
    bg: "#0d0a1a",
    fg: "#ffffff",
    accent: "#fdb927",
    surface: "#1a0f2e",
    border: "#cc0000",
  },
  {
    name: "Star Wars",
    desc: "A long time ago, in a galaxy far, far away.",
    bg: "#050a14",
    fg: "#d8dce8",
    accent: "#4493f8",
    surface: "#0a1428",
    border: "#1e3050",
  },
  {
    name: "Under the Sea",
    desc: "2,340m depth. Pressure stable.",
    bg: "#040d1a",
    fg: "#b8d4e8",
    accent: "#00d4ff",
    surface: "#071525",
    border: "#0a3050",
  },
  {
    name: "Wood",
    desc: "Walnut and amber. Handmade.",
    bg: "#1a1208",
    fg: "#e8d5b0",
    accent: "#c8822a",
    surface: "#241a0e",
    border: "#3a2a18",
  },
  {
    name: "Brutalist",
    desc: "No decoration. No apology.",
    bg: "#ffffff",
    fg: "#000000",
    accent: "#ff0000",
    surface: "#f0f0f0",
    border: "#000000",
  },
  {
    name: "Zen",
    desc: "Cream and silence.",
    bg: "#f4f0eb",
    fg: "#2c2c2c",
    accent: "#7a6855",
    surface: "#ede8e1",
    border: "#d4c8b8",
  },
];

export default function HomePage() {
  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
          SKINS.MD
        </span>
        <a
          href="https://github.com/mariano-comando/skins-md"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#888", fontSize: "0.875rem", textDecoration: "none" }}
        >
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "5rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#666",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Open source · OpenRouter · 200+ models
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Every model.
          <br />
          <span style={{ color: "#666" }}>Your skin.</span>
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#888",
            lineHeight: 1.65,
            marginBottom: "3rem",
            maxWidth: "480px",
            margin: "0 auto 3rem",
          }}
        >
          AI chat where the visual experience is yours. Drop one{" "}
          <code style={{ color: "#fff", background: "#1a1a1a", padding: "0.1em 0.4em", borderRadius: "4px" }}>
            .md
          </code>{" "}
          file. Total transformation.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/chat"
            style={{
              background: "#ffffff",
              color: "#000000",
              padding: "0.875rem 2rem",
              borderRadius: "6px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Start chatting →
          </Link>
          <a
            href="https://github.com/mariano-comando/skins-md"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #333",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "6px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Skin grid */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#444",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          7 launch skins
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {SKIN_PREVIEWS.map((skin) => (
            <div
              key={skin.name}
              style={{
                background: skin.bg,
                border: `1px solid ${skin.border}`,
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
                {[skin.bg, skin.accent, skin.fg, skin.surface].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: c,
                      border: `1px solid ${skin.border}`,
                      display: "inline-block",
                    }}
                  />
                ))}
              </div>
              <div style={{ color: skin.fg, fontWeight: 700, fontSize: "0.9rem", marginBottom: "4px" }}>
                {skin.name}
              </div>
              <div style={{ color: skin.accent, fontSize: "0.75rem", opacity: 0.8 }}>{skin.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Winamp pitch */}
      <section
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "2rem 2rem 6rem",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.7 }}>
          Remember Winamp skins? You could make your music player look like a space station or a
          vintage cassette deck. This is that, but for AI. One{" "}
          <code style={{ color: "#888" }}>.md</code> file. Open format. Community-made skins
          welcome.
        </p>
        <div style={{ marginTop: "3rem" }}>
          <Link
            href="/chat"
            style={{
              color: "#fff",
              fontSize: "0.875rem",
              textDecoration: "underline",
              opacity: 0.5,
            }}
          >
            Open the app →
          </Link>
        </div>
      </section>
    </main>
  );
}
