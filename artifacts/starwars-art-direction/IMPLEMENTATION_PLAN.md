# Implementation Plan

This plan is intentionally image-first. Do not skip to React/CSS.

## Phase 1 — Master visual

**Goal:** produce a single convincing screenshot image.

1. Create a 1440×900 or 1600×1000 canvas.
2. Build a cinematic Star Wars cockpit/window background.
3. Add integrated UI zones for SKINS.MD.
4. Add fake but representative content:
   - sidebar with skin info/actions;
   - central chat messages;
   - bottom input;
   - right terminal/intel panel;
   - hologram area.
5. Export to `deliverables/starwars-skin-master-candidate-01.png`.
6. Compare visually against `reference/cockpit-window-reference.jpg` and `reference/hologram-reference.jpg`.
7. Stop for approval.

## Phase 2 — Asset slicing after approval

Only after approval:

1. Export background composite.
2. Export cockpit frame if separate.
3. Export hologram asset.
4. Export logos/decals.
5. Export panel masks/overlays.
6. Store optimized assets under `assets/exports/`.

## Phase 3 — SKINS.MD integration

In the production SKINS.MD repo, likely modify:

- `src/skins.ts`
- `src/styles.css`
- `src/App.tsx` if direct `?skin=` routing is needed
- `src/skinParser.test.ts` if bundled skin tests need updating
- `public/skins/sw/` for exported assets

Hard rule: implementation must match the approved screenshot. Do not reinterpret.

## Phase 4 — QA

Before production push:

1. `npm run test`
2. `npm run build`
3. run local app
4. screenshot `?skin=star-wars-command-deck`
5. compare against approved master
6. only then deploy

## Phase 5 — Production

Only after visual approval:

1. commit
2. push main
3. wait for Vercel
4. verify public URL renders the applied skin
5. send link and screenshot evidence
