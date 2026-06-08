# SKINS.MD

Every model. Your skin.

SKINS.MD is a browser-only AI chat interface where a single markdown file transforms the whole assistant environment: color, type, panels, motion, micro-copy, and ambient WebGL atmosphere.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## What ships in this MVP

- OpenRouter API-key entry, stored only in `localStorage`.
- Model selector, default `anthropic/claude-sonnet-4-6`.
- Streaming OpenRouter chat responses.
- Markdown rendering and syntax-highlighted code blocks.
- Conversation persistence in `localStorage`.
- Clear conversation and JSON export.
- Instant skin apply without reload.
- Custom `SKIN.md` import with validation errors for missing sections/fields.
- Imported skins saved to local library.
- Active-skin download.
- Bundled skins include Minimal, Matrix, Gothic Librarian, Pokémon Trainer, Anime Tutor, and Windows 95 Assistant.
- Hybrid sensory engine: accessible DOM chat + CSS token skinning + Three.js/WebGL atmosphere.

## Why this technical path

The old pure HTML/CSS path is strong for readability but too limited for the sensory ambition. This MVP keeps the chat itself as semantic DOM for usability and accessibility, then adds a controlled WebGL layer for depth, particles, scanlines, bloom-like motion, and atmospheric identity. The skin file controls presets and intensities, not arbitrary executable code.

## Scripts

```bash
npm test       # parser validation tests
npm run build  # production build
npm run dev    # local dev server
```

## Privacy

There is no SKINS.MD backend in the MVP. Your OpenRouter key and conversations live in browser `localStorage` for this origin.

## Files

- `SPEC.md` — authoritative SKIN.md format.
- `SKIN.template.md` — copy this to author a new skin.
- `src/skins.ts` — bundled launch skins.
- `src/skinParser.ts` — parser and validator.
- `src/skinEngine.ts` — DOM/CSS/font/custom-CSS injector.
- `src/VisualStage.tsx` — Three.js sensory layer.
- `STRATEGY.md` — research synthesis and product direction.
- `BUSINESS_MODEL_STRATEGY_V1.md` — Phase 0 full-free BYOK business-model strategy and future sponsor/Plus/marketplace stack.
- `WINAMP_CASE_STUDY.md` — lessons from Winamp/Webamp and next strategic steps.
- `WINDOWS95_NOSTALGIA_RESEARCH_V1.md` — deeper Windows 95/98 UI-kit references and next implementation pass for the retro skin.
