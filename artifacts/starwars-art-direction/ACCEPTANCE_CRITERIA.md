# Acceptance Criteria

No implementation/deploy is acceptable unless these are true.

## Visual quality gate

The candidate image must:

- look obviously Star Wars in under 2 seconds;
- look like a cinematic game/cockpit UI, not a website theme;
- use raster/photo/rendered imagery as dominant visual material;
- integrate ships/logos/panels into one composition;
- avoid the NASA/shuttle look entirely;
- avoid generic sci-fi/cyberpunk;
- avoid clean vector ships or SVG line art as hero imagery;
- avoid random collage.

## Layout gate

The image must include usable SKINS.MD areas:

- left navigation/sidebar;
- central chat transcript;
- bottom composer/input;
- right terminal/intel panel;
- lower-right hologram or equivalent branded visual zone.

## Reference alignment gate

Compare against:

- `reference/cockpit-window-reference.jpg`
- `reference/hologram-reference.jpg`

The candidate should match the quality language:

- dirty glass;
- glow/bloom;
- perspective;
- depth;
- texture;
- cinematic lighting;
- non-vector ship treatment.

## Rejection examples

Do not resemble:

- `reference/rejected-applied-skin-collage.png`
- `reference/rejected-nasa-source.jpg`

## Process gate

Do not push to production until:

1. candidate screenshot is approved;
2. assets are sliced from the approved design;
3. local app screenshot matches the approved design;
4. tests/build pass.
