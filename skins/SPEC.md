# SKIN.md Format Specification — v1.0

> The canonical format definition for SKINS.MD skins.

A SKIN.md file is a structured markdown document. Sections 1–6 are required. Sections 7–8 are optional. The format is human-readable, diffable, and version-controllable.

---

## Section 1 · metadata

```
name:          [string]          # Display name, e.g. "Neon Noir"
author:        [string]          # GitHub handle or full name
version:       [semver]          # e.g. "1.0.0"
tags:          [csv]             # e.g. "dark, terminal, cyberpunk"
description:   [string]          # 1–2 sentences. What does this skin feel like?
preview_url:   [url | none]      # Link to screenshot or live preview
license:       [string]          # Default: "MIT"
```

## Section 2 · palette

Eight semantic color tokens. All values: hex, rgb(), hsl(), or CSS custom property reference.

```
bg:            [color]           # Primary background
fg:            [color]           # Primary text
accent:        [color]           # Interactive elements, links, CTAs
muted:         [color]           # Secondary text, placeholders
surface:       [color]           # Cards, modals, elevated surfaces
border:        [color]           # Dividers, outlines
error:         [color]           # Error states
success:       [color]           # Confirmation states
```

## Section 3 · typography

```
font_sans:     [font-family]     # UI text. Google Fonts slug or system font stack
font_mono:     [font-family]     # Code blocks, terminal elements
font_display:  [font-family]     # Headers, skin name display
size_base:     [px]              # Root font size, e.g. "16px"
weight_base:   [number]          # Base font weight, e.g. "400"
line_height:   [number]          # Base line height, e.g. "1.6"
```

## Section 4 · layout

```
radius:        [px | rem]        # Border radius for components
spacing_unit:  [px]              # Base spacing unit
max_width:     [px]              # Chat column max width
sidebar_width: [px]              # Conversation list sidebar width
```

## Section 5 · voice

Skins can rewrite UI labels to match their emotional register.

```
send_label:      [string]        # e.g. "Send", "Transmit", "Cast"
placeholder:     [string]        # Input field placeholder text
empty_state:     [string]        # What appears before first message
thinking_label:  [string]        # While model is generating
clear_label:     [string]        # e.g. "Clear", "Reset", "Wipe"
```

## Section 6 · atmosphere

```
bg_effect:       [none | gradient | noise | particles | scanlines]
animation_speed: [slow | normal | fast | none]
blur:            [px | none]     # Background blur intensity
```

## Section 7 · components (optional)

Token overrides at the component level.

```
message_user_bg:        [color]
message_user_fg:        [color]
message_assistant_bg:   [color]
message_assistant_fg:   [color]
input_bg:               [color]
input_fg:               [color]
input_border:           [color]
```

## Section 8 · assets (optional)

```
background_image: [url | none]
icon_set:         [slug | none]  # e.g. "phosphor", "heroicons"
custom_css_url:   [url | none]
```

---

## Validation Rules

- Sections 1–6 are required. A skin missing any of these will not load.
- All color values must be valid CSS color strings.
- `font_sans`, `font_mono`, `font_display` must be Google Fonts slugs or valid system font stacks.
- SKINS.MD fetches Google Fonts automatically from `font_*` fields.
- `bg_effect: none` and omitting `atmosphere` entirely are both valid.

---

*SKINS.MD · COMANDO · v1.0 · MIT*
