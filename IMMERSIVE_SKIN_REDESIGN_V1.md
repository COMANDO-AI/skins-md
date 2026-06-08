# SKINS.MD immersive skin redesign notes V1

## Correction from the latest review

The problem is not that Windows95 and Pokémon need more buttons or more UI machinery. They need:

- a stronger full-background skin layer;
- fewer exposed controls;
- a cleaner chatbox baseline closer to modern AI tools;
- theme-specific chrome only where it helps the fantasy;
- secondary actions hidden until the user asks for them.

## Reference synthesis

### Winamp Skin Museum / skin culture

Winamp skins work when the whole object has one strong metaphor. The impact usually comes from a dominant background, a shaped frame, compact native controls, and a strong material language. They do not work because every option is visible.

Applied to SKINS.MD:

- one full-bleed background image per skin;
- one readable chat panel/composer;
- no permanent rows of action buttons;
- controls integrated into the skin material;
- keep the visual fantasy in the environment, not in extra widgets.

### Clean AI chat tools

ChatGPT, Claude, Perplexity, Poe, TypingMind, LibreChat, and Open WebUI suggest a clear hierarchy:

1. The transcript and composer are the product.
2. Message actions should be hover/contextual.
3. Provider/model/skin/editor controls should live in menus/drawers.
4. Prompt chips should be empty-state-only or hidden after conversation starts.
5. The skin should mostly affect background, accent, bubble material, empty state, and subtle motion.

## Design decisions shipped in this pass

### Immersive mode for high-impact skins

Windows95 and Pokémon now enter a special `immersive-skin-shell` layout:

- sidebar collapsed into a small top-left avatar pill;
- skin/provider/import controls are revealed only on hover/focus of that pill;
- AI Chat / AI Agent mode cards are hidden from the main surface;
- export/clear buttons are hidden from the main surface;
- prompt chips are hidden;
- chat panel becomes the primary object;
- composer becomes a clean single input + send control;
- full-background SVG art provides the skin impact.

### Windows95 redesign direction

Concept: **ChatDesk 95 over a fictional retro desktop wallpaper**.

- full background image: teal/blue CRT desktop with clouds, noise, and a distant fake app window;
- central retro app window remains, but denser peripheral desktop controls are muted;
- main transcript uses a simple sunken white viewport;
- composer uses a simple 90s dialog input and send button;
- fewer visible options.

### Pokémon redesign direction

Concept: **Monster Meadow Battle Chat** using original monster-catching/JRPG cues, not copied Pokémon assets.

- full background image: original meadow/battle-field style illustration;
- giant empty-state line over the scene;
- messages as readable battle dialogue panels;
- composer as one clean battle command box;
- secondary controls collapsed;
- no official logos, sprites, type icons, badges, fonts, or exact battle-screen copying.

## Next quality bar

Future skins should start from the same layers:

1. background art/image layer;
2. readability scrim/transcript layer;
3. clean composer;
4. hidden controls drawer;
5. skin-specific message/composer material.

Avoid building each skin as another dashboard.
