# SKINS.MD

**Every model. Your skin.**

AI chat interface where the visual experience is yours. Any model. One file. Total transformation.

---

## What is this

Remember Winamp skins? You could make your music player look like a space station or a vintage cassette deck. SKINS.MD is that, but for AI.

Drop a single `.md` file. Your entire interface transforms — colors, typography, layout, micro-copy, atmosphere. Everything.

- **Any model** — Claude, GPT, Gemini, Llama, Mistral, and 200+ more via OpenRouter
- **One key** — your OpenRouter API key. Lives in your browser. We never see it.
- **One file** — a SKIN.md defines the entire visual experience
- **Open format** — write a skin, share it, fork it, improve it
- **No accounts** — no tracking, no backend, pure client-side

---

## 7 launch skins

| Skin | Vibe |
|------|------|
| Minimal | Nothing in the way. Just thinking. |
| NBA | Court energy. Arena noise. Game 7. |
| Star Wars | A long time ago, in a galaxy far, far away. |
| Under the Sea | 2,340m depth. Pressure stable. |
| Wood | Walnut and amber. Handmade. |
| Brutalist | No decoration. No apology. Pure function. |
| Zen | Cream and silence. The mind slows down. |

---

## Quick start

1. Get a free API key at [openrouter.ai/keys](https://openrouter.ai/keys)
2. Open [skins.md](https://skins.md) (or run locally — see below)
3. Enter your key
4. Pick a skin
5. Chat

---

## Run locally

```bash
git clone https://github.com/mariano-comando/skins-md
cd skins-md/app
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

---

## Create a skin

See [skins/SPEC.md](skins/SPEC.md) for the full format spec.

Quick version: copy [skins/SKIN.template.md](skins/SKIN.template.md), fill in your values, import it in the app via the skin picker.

A valid skin requires 6 sections: `metadata`, `palette`, `typography`, `layout`, `voice`, `atmosphere`.

---

## Contribute a skin

1. Fork this repo
2. Add your `your-skin-name.md` to `skins/`
3. Open a PR — include a screenshot
4. If it renders and feels intentional, it ships

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full bar.

---

## Stack

- Next.js 14 App Router
- Tailwind CSS + CSS custom properties
- OpenRouter (openrouter.ai) — unified API for 200+ models
- localStorage only — no backend, no accounts
- MIT license

---

## License

MIT — see [LICENSE](LICENSE)

---

*SKINS.MD · COMANDO · Buenos Aires · 2026*
