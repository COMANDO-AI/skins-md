# Contributing a skin

This is the Winamp moment for AI interfaces. If you have a visual idea that deserves to exist — submit it.

## The bar

A skin ships if it:
- Loads without errors (all 6 required sections present)
- Has a coherent visual identity (not random colors)
- Feels like something — a place, a mood, a practice
- Includes a screenshot in the PR

## How to submit

1. Fork the repo
2. Create `skins/your-skin-name.md` — use [SKIN.template.md](skins/SKIN.template.md) as starting point
3. Test it locally: run `npm run dev`, import your skin via the skin picker
4. Add a screenshot to your PR description
5. Open the PR — title: `skin: Your Skin Name`

## Format reference

Full spec: [skins/SPEC.md](skins/SPEC.md)

Required sections: `metadata`, `palette`, `typography`, `layout`, `voice`, `atmosphere`

Optional sections: `components`, `assets`

## What we're looking for

Unique territory. Dark academic. Terminal green. Brutalist newspaper. Disco. Wabi-sabi. Retro Mac. Anything that makes someone say "I didn't know I needed this until now."

---

*MIT license applies to all contributions.*
