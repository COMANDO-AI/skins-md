import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          bg: "var(--bg)",
          fg: "var(--fg)",
          accent: "var(--accent)",
          muted: "var(--muted)",
          surface: "var(--surface)",
          border: "var(--border)",
          error: "var(--error)",
          success: "var(--success)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        skin: "var(--radius)",
      },
      maxWidth: {
        chat: "var(--max-width)",
      },
    },
  },
  plugins: [],
};

export default config;
