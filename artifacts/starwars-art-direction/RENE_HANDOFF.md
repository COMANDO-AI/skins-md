# René Handoff — Star Wars SKINS.MD Skin

## Context

Boris wants a Star Wars-branded SKINS.MD skin that feels like a real saga-branded command interface, not a generic sci-fi dashboard.

Previous attempts failed badly. The failure mode was clear:

- starting with CSS instead of art direction;
- layering random assets over the app;
- using clean SVG/vector ships where the reference needed cinematic bitmaps;
- producing NASA/shuttle cockpit vibes;
- pushing links before visual quality was actually aligned with the reference.

This repo exists so you can restart the work with the correct process.

## Goal

Create a **screenshot-quality master visual** for a Star Wars saga-branded AI interface skin.

The intended feeling:

> A Winamp/Webamp-style fan skin, but for an AI chat/agent interface — bold, cinematic, branded, instantly recognizable as Star Wars.

This is a demo/proof-of-concept. Boris explicitly wants the Star Wars branding to be strong, not watered down into generic “inspired by” sci-fi.

## Primary deliverable

Before any app implementation, deliver:

```text
deliverables/starwars-skin-master-candidate-01.png
```

Recommended size:

```text
1440×900 or 1600×1000
```

This should look like the finished SKINS.MD app screenshot, even if it is fake/static.

## What to use

Recommended pipeline:

1. Generate or composite a cinematic Star Wars cockpit/command-deck scene.
2. Design UI zones into that scene.
3. Place fake but realistic SKINS.MD UI content inside the zones.
4. Iterate as a static image until approved.
5. Only after approval, slice/export assets for frontend.

Good tools:

- ComfyUI + Flux Kontext / SDXL / ControlNet / IP-Adapter.
- Midjourney for fast visual direction.
- Photoshop / Photopea for compositing and inpainting.
- Figma for UI layout, text, measurements, final review frame.

Bad starting point:

- React/CSS first.
- v0/Lovable/Bolt SaaS UI generator.
- random asset collage inside production app.

## Reference files

Use these:

- `reference/cockpit-window-reference.jpg` — key top-window / cockpit atmosphere.
- `reference/hologram-reference.jpg` — hologram quality: dirty, bitmap, glow, not clean SVG.
- `reference/xwing-photo-reference.jpg` — example of photo-like ship material.
- `reference/partial-standalone-demo-bitmap.png` — partial direction that improved but is not enough.

Avoid these:

- `reference/rejected-applied-skin-collage.png` — bad collage implementation.
- `reference/rejected-nasa-source.jpg` — wrong NASA/shuttle direction.

## Visual direction

The image should have:

- top panoramic Star Wars cockpit/window zone;
- dark metal cockpit frame;
- recognizable Star Wars logo/branding;
- TIE / X-wing / Star Destroyer / Death Star-type imagery integrated with depth;
- blue holographic glow;
- low-res scanlines/noise/bloom/glass dirt;
- left navigation/control panel;
- central AI chat transcript panel;
- bottom command input/composer;
- right terminal/intel panel;
- lower-right hologram area;
- material texture and lighting that feel game/PlayStation/cinematic.

## Critical mistakes to avoid

Do not create:

- clean SVG line-art ships;
- flat CSS panels;
- generic sci-fi neon dashboard;
- NASA cockpit;
- random stickers/logos placed over an app;
- a dark unreadable collage;
- a standard SaaS chat app with a Star Wars background.

## Approval workflow

Stop after the first master candidate. Boris should approve the image before any code.

Do not promise implementation quality from code/tests. The quality gate is visual.

## If you later implement in SKINS.MD

Implementation target in the production repo will likely be:

- skin id: `star-wars-command-deck`
- deep link: `https://skins-md.vercel.app/?skin=star-wars-command-deck`

But do not implement until the image is approved.
