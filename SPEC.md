# SPEC.md — SKIN.md Format

A SKIN.md file is a structured markdown document. Markdown headers delimit sections. YAML-style `key: value` pairs define tokens inside each section.

Sections 1–6 are required. Sections 7–10 and `Section visual` are optional. v2 fields are backward-compatible.

## Section 1 · metadata

```md
name:          [string]
author:        [string]
version:       [semver]
tags:          [csv]
description:   [string]
preview_url:   [url | none]
license:       [string]
```

## Section 2 · palette

Eight semantic color tokens. Values: hex, rgb(), hsl(), named CSS colors, or CSS custom-property references.

```md
bg:            [color]
fg:            [color]
accent:        [color]
muted:         [color]
surface:       [color]
border:        [color]
error:         [color]
success:       [color]
```

## Section 3 · typography

```md
font_sans:       [font-family]
font_mono:       [font-family]
font_display:    [font-family]
size_base:       [px]
weight_base:     [number]
line_height:     [number]
letter_spacing:  [em | px]
text_transform:  [none | uppercase | lowercase | capitalize]
weight_display:  [number]
```

## Section 4 · layout

```md
radius:          [px | rem]
spacing_unit:    [px]
max_width:       [px]
sidebar_width:   [px]
radius_message:  [px | rem]
radius_input:    [px | rem]
radius_ui:       [px | rem]
message_shape:   [default | pill | sharp | asymmetric]
border_style:    [solid | dashed | double | dotted]
```

## Section 5 · voice

Micro-copy. Skins rewrite UI labels to match their emotional register.

```md
send_label:      [string]
placeholder:     [string]
empty_state:     [string]
thinking_label:  [string]
clear_label:     [string]
```

## Section 6 · atmosphere

```md
bg_effect:          [none | gradient | noise | particles | scanlines]
animation_speed:    [slow | normal | fast | none]
blur:               [px | none]
bg_gradient:        [css gradient]
texture_overlay:    [grain | paper | fabric | metal | glass | halftone]
texture_intensity:  [0–1]
surface_style:      [flat | frosted | raised | inset]
motion_style:       [fade | slide | snap | glitch | bloom | typewriter | none]
thinking_style:     [pulse | dots | blink | ellipsis]
```

## Section 7 · components optional

```md
message_user_bg:        [color]
message_user_fg:        [color]
message_assistant_bg:   [color]
message_assistant_fg:   [color]
input_bg:               [color]
input_fg:               [color]
input_border:           [color]
```

## Section 8 · assets optional

```md
background_image: [url | none]
icon_set:         [slug | none]
custom_css_url:   [url | none]
```

## Section 9 · custom optional

Raw CSS block. Injected into the page as `<style id="skin-custom">`. Use sparingly. MVP supports CSS, not JavaScript.

## Section 10 · persona optional

```md
sidebar_name: [string]
avatar:       [string]
status:       [string]
```

## Section visual optional MVP extension

A safe preset-driven sensory layer. This is deliberately configuration, not executable shader/CSS/JS code. Renderers must treat every value as a token or bounded number and must ignore or reject anything outside the allowlist.

```md
engine:       [subtle | webgl | css | none]
preset:       [stars | code-rain | aurora | embers | fireflies | executive-grid | sparkle-pop | rune-orbit | desktop-grid | sprite-field]
intensity:    [0–1.2]
speed:        [0–2]
density:      [20–260]
hud:          [none | minimal | soft | tactical | playful | compass]
particles:    [none | stars | code | embers | fireflies | nodes | sparkles | motes]
text_reveal:  [none | instant | fade | fade-up | typewriter | pop | parchment]
transitions:  [none | fade | dissolve | snap | bounce | page-turn | slide]
parallax:     [none | subtle | gentle | medium | deep]
```

Safety constraints:

- `Section visual` cannot define raw CSS, JavaScript, shader source, URLs, HTML, imports, functions, or event handlers.
- Unknown visual keys are invalid, not silently executed.
- Values containing `{}`, `<>`, semicolons, `script`, `shader`, `function`, `eval`, `import`, or `url()` are rejected by validation.
- New visual capabilities must be added as named presets/tokens in the spec before renderers use them.

## Validation rules

- Sections 1–6 required.
- Required fields inside Sections 1–6 must be present.
- Color fields must be valid CSS color strings.
- Fonts may be Google Fonts names or CSS font stacks.
- `bg_effect: none` is valid.
- v1 skins with no v2 fields still load.
- Unknown optional fields are ignored by the MVP parser unless mapped by the renderer.
