import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKINS.MD — Every model. Your skin.",
  description:
    "AI chat interface where the visual experience is yours. Any model. One file. Total transformation.",
  openGraph: {
    title: "SKINS.MD — Every model. Your skin.",
    description: "Visual skins for AI. Powered by OpenRouter.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
