# Art Director Instructions — Star Wars SKINS.MD Skin

## Role

You are the art director for this skin. Your job is not to implement React/CSS. Your job is to define and approve the visual world before any developer integrates it.

The skin should feel like a Star Wars saga-branded AI command interface: cinematic, tactile, screenshot-worthy, and immediately recognizable.

## What you own

You own:

- visual direction;
- composition;
- reference selection;
- asset choices;
- material/lighting quality;
- typography mood;
- panel placement;
- approval/rejection of screenshots;
- final export package for implementation.

You do **not** need to own:

- React implementation;
- parser/schema details;
- deployment;
- production QA;
- API/backend behavior.

## Primary deliverable

Before any code implementation, produce:

```text
deliverables/starwars-skin-master-candidate-01.png
```

Recommended size:

```text
1440×900 or 1600×1000
```

This should look like the final product screenshot, even if it is static/fake.

The frontend developer should later implement this image, not reinterpret it.

## Process

### 1. Build the reference board

Create a small board with:

- 3–5 Star Wars cockpit / command deck references;
- 3 hologram references;
- 3 game UI / PlayStation-quality interface references;
- 2–3 Winamp/Webamp skin references;
- 1–2 current SKINS.MD screenshots for functional constraints.

Use the existing repo references first:

- `reference/cockpit-window-reference.jpg`
- `reference/hologram-reference.jpg`
- `reference/xwing-photo-reference.jpg`

Also inspect the rejected references:

- `reference/rejected-applied-skin-collage.png`
- `reference/rejected-nasa-source.jpg`

Those are examples of what not to do.

### 2. Define the visual grammar

Write or decide the following before generating/compositing:

- color palette: dark imperial blue/black, cyan hologram, Star Wars gold/yellow accent;
- material: worn metal, dirty glass, old cockpit screen glow;
- lighting: cinematic low light, bloom, depth, not flat panels;
- texture: scanlines, grain, glass dirt, compression/noise where appropriate;
- branding: Star Wars logo and saga marks should be strong, not timid;
- UI density: enough detail to feel like a command deck, but central chat must remain readable.

### 3. Create the master composition

Create one static composition first. Use any visual tool you prefer:

- Photoshop;
- Figma;
- Midjourney + Photoshop;
- ComfyUI / Flux / SDXL + Photoshop;
- Krea / Leonardo / Freepik Mystic;
- manual photobash.

Do not begin with HTML/CSS.

The composition must include:

- top cinematic cockpit/window zone;
- left control/sidebar area;
- central chat/transcript area;
- bottom command input/composer area;
- right intel/terminal area;
- lower-right hologram or ship projection;
- obvious Star Wars branding.

### 4. Add realistic placeholder UI

Use fake but realistic SKINS.MD content:

- left: skin selector / connection state / system controls;
- center: 2–4 chat messages;
- bottom: input field and action button;
- right: terminal/intel text, telemetry, mission/event feed;
- small labels: Rebel/Empire/System/Deck/Comms/Hyperdrive/etc.

Text can be fake, but it must look intentional and readable.

### 5. Self-check before showing Boris

Reject your own candidate if it looks like:

- NASA;
- generic sci-fi;
- CSS dashboard;
- random collage;
- flat vector art;
- SaaS chat app with a background;
- too dark to understand;
- too noisy to use;
- logo stickers pasted on top without integration.

Ask:

> If I remove the Star Wars logo, does the composition still feel like Star Wars?

If the answer is no, keep working.

### 6. Present only screenshots, not code

For review, present:

1. master candidate screenshot;
2. 2–3 cropped details:
   - cockpit/window;
   - chat panel;
   - hologram/right panel;
3. short notes on what changed.

Do not present a browser link until the static image is approved.

## Approval criteria

The master candidate is approved only if:

- it feels Star Wars in under 2 seconds;
- it resembles a designed object, not a web theme;
- it visually aligns with the cockpit/hologram references;
- the UI zones are usable and readable;
- the central chat area is not buried under decoration;
- the overall result is screenshot-worthy.

## Developer handoff package

After approval, export:

```text
assets/exports/background-master.png
assets/exports/cockpit-frame.png        optional
assets/exports/hologram.png             optional
assets/exports/logo-lockup.png          optional
assets/exports/panel-overlays.png       optional
assets/exports/noise-scanline-overlay.png optional
```

Also provide:

```text
deliverables/starwars-skin-master-approved.png
deliverables/layout-map.png
deliverables/implementation-notes.md
```

The layout map should mark:

- sidebar bounds;
- chat bounds;
- composer bounds;
- right panel bounds;
- safe margins;
- mobile/responsive expectations if any.

## Suggested prompt for image generation

Use as a starting point, not final truth:

```text
A cinematic Star Wars saga branded AI command interface skin, dark blue imperial cockpit UI, screenshot of a futuristic desktop agent app inside a Star Wars command deck, thick worn metal cockpit frames, glowing blue holographic panels, Star Wars logo integrated into the upper left interface, imperial and rebel interface decals, left navigation panel, central chat transcript panel, right terminal panel, bottom command input, holographic X-wing projection in the lower right, TIE fighters and Star Destroyer visible through the top panoramic window, game UI, PlayStation quality, realistic rendered bitmap, dirty glass, scanlines, bloom, low light, high contrast, detailed material texture, cinematic composition, 16:9
```

Negative prompt:

```text
flat vector, clean SVG, generic dashboard, SaaS UI, web app template, bright white UI, NASA cockpit, generic cyberpunk, random collage, toy-like, cartoon, simple icons, CSS borders, empty panels, unreadable layout, sticker logo, fake depth, flat neon frame
```

## Final rule

Do not let a developer implement until the art direction is locked as an image.

A bad master image will become a worse app. A strong master image gives the developer something concrete to implement.
