# Design Brief — Star Wars Command Skin

## One-line brief

Design a cinematic Star Wars saga-branded SKINS.MD interface skin that looks like a real cockpit/command-deck game UI, not a CSS theme.

## Product frame

SKINS.MD is an AI interface skin system. The skin should prove that an AI assistant can feel like it belongs inside a fictional world, the way Winamp skins made a music player feel like a cultural object.

## Target emotion

- cinematic;
- branded;
- tactile;
- cockpit-like;
- old fan-skin energy, but with modern image quality;
- PlayStation/game UI quality;
- “I want to use this” screenshot appeal.

## Composition

Preferred layout:

```text
┌─────────────────────────────────────────────────────────────┐
│  cinematic cockpit/window: ships, battle, blue glow          │
├───────────────┬───────────────────────────────┬─────────────┤
│ left controls │ central chat / transcript      │ right intel │
│ skin/sidebar  │ large readable dark panel      │ terminal    │
│               │                               │ hologram    │
├───────────────┴───────────────────────────────┴─────────────┤
│ bottom command input / status strip                          │
└─────────────────────────────────────────────────────────────┘
```

Do not take this literally as boxes. It should feel integrated into a cockpit frame.

## Visual ingredients

- Star Wars logo: visible, yellow/gold, integrated as branded UI.
- Empire/Rebel marks: allowed as decals/HUD markers.
- Ships: raster/photo/rendered, with depth and glow.
- Hologram: noisy cyan bitmap, dirty screen, bloom, scanlines.
- Frame: dark cockpit metal, beveled panels, glass dirt, edge highlights.
- Typography: readable UI text, with branded labels and terminal microcopy.
- Lighting: dark blue/black with cyan hologram and gold logo accents.

## Negative direction

Avoid:

- vector ships;
- simple iconography;
- generic cyberpunk;
- NASA/shuttle;
- pure CSS geometry;
- overly clean minimal app UI;
- misaligned collage;
- logo stickers pasted without composition.

## Suggested generation prompt

```text
A cinematic Star Wars saga branded AI command interface skin, dark blue imperial cockpit UI, screenshot of a futuristic desktop agent app inside a Star Wars command deck, thick worn metal cockpit frames, glowing blue holographic panels, Star Wars logo in the upper left, imperial and rebel interface decals, left navigation panel, central chat transcript panel, right terminal panel, bottom command input, holographic X-wing projection in the lower right, TIE fighters and Star Destroyer visible through the top panoramic window, game UI, PlayStation quality, realistic rendered bitmap, dirty glass, scanlines, bloom, low light, high contrast, detailed material texture, cinematic composition, 16:9
```

Negative prompt:

```text
flat vector, clean SVG, generic dashboard, SaaS UI, web app template, bright white UI, NASA cockpit, generic cyberpunk, random collage, toy-like, cartoon, simple icons, CSS borders, empty panels, unreadable layout
```
