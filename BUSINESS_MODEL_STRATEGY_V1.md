# BUSINESS MODEL STRATEGY V1 — Skins.md

## One-line thesis

Skins.md is a hosted consumer app and portable skin standard where people choose how their AI looks, speaks, and eventually acts. The first commercial motion is not selling compute; it is building the skin layer, creator ecosystem, and trust surface around bring-your-own-key AI.

## Product position

> Choose your own skin for AI. Bring your own OpenAI, Claude/Anthropic, Gemini, OpenRouter, or local-compatible key. Use any skin as chat today and as an agent when ready.

Skins.md should not be framed as a generic chatbot wrapper or as simple themes. The product is a portable interface/persona layer for AI chats and agents.

- Chat mode: aesthetic/persona wrapper for normal AI conversation.
- Agent mode: the same skin also shapes guidance style, planning posture, permission rhythm, and action behavior.
- Protocol layer: every skin should remain exportable, importable, human-readable, and addressable as a shareable artifact.

## Strategic principle

The adoption surface is the hosted consumer app. The moat is the portable skin format and creator ecosystem.

Prioritize:

1. choose a skin;
2. feel the transformation instantly;
3. bring your own AI key;
4. keep using, sharing, remixing, and eventually publishing skins;
5. upgrade only after the user understands the value.

Do not lead with provider setup, pricing, or agent complexity. Lead with the gallery and the before/after feeling.

## Phase 0 — Full free BYOK launch

Phase 0 is intentionally free.

Tagline:

> Free for now. You put your API key and run any skin.

Phase 0 goals:

- Prove that users want to choose skins before choosing models.
- Validate whether skins create repeated usage, screenshots, sharing, and identity attachment.
- Validate bring-your-own-key provider connection without paying hosted inference costs.
- Validate that the same skin system works for normal AI chat and can later extend to agent mode.
- Seed creator interest before building a paid marketplace.

Phase 0 includes:

- free access to bundled public skins;
- demo/no-key preview for first-touch onboarding;
- BYOK connection for OpenRouter first, then OpenAI, Anthropic/Claude API, Gemini, and OpenAI-compatible/local endpoints;
- basic AI chat through any selected skin;
- import/export of SKIN.md;
- visible creator metadata where available;
- public gallery direction, even if submission is manual at first;
- no paid tier required to experience the core loop;
- no live OpenRouter test until account credit is available.

Phase 0 deliberately does **not** include ads yet.

Reason:

- The immediate priority is product love, retention, and proof of the skin-first funnel.
- BYOK keeps inference costs low enough to delay monetization.
- The product must feel premium and trustworthy while users are learning to paste provider keys.

However, the future free-tier sponsor model should be communicated in strategy and product architecture so it does not feel like a betrayal later.

## Future free model — one respectful sponsor per day

After Phase 0 validation, the free plan can become:

> Free for everyone, supported by one respectful sponsor card per day.

Rules:

- maximum one sponsor exposure per user per day;
- never inside AI replies;
- never masquerading as assistant output;
- never based on private chat content;
- always clearly labeled;
- dismissible after viewing;
- removed for paid users;
- preferably relevant to the skin/AI/creator ecosystem.

Preferred language:

- “daily sponsor card”;
- “sponsored skin of the day”;
- “featured creator”;
- “featured AI tool”;
- “supported by”.

Avoid foregrounding the word “ad” in product experience, but be transparent that sponsor placements are paid.

Bad sponsor placements:

- inserted between user and assistant messages;
- written in the assistant’s voice;
- targeted from sensitive chat content;
- popups during writing;
- agent action confirmations;
- low-quality commodity ad-network banners.

Good sponsor placements:

- home/gallery sponsor card;
- daily sponsored skin;
- featured creator/tool card;
- model/provider sponsor;
- creator challenge sponsor;
- clearly separated marketplace/discovery promotion.

## Paid tier — Plus / Ad-free / Power skin workspace

Paid should not be merely “remove annoyance.” It should remove sponsors and add real depth.

Possible paid benefits:

- no daily sponsor card;
- private skin library;
- more or unlimited custom skins;
- cross-device sync;
- advanced skin editor;
- version history;
- advanced provider presets;
- memory per skin, when safe and clearly scoped;
- early/advanced agent mode;
- private agent configurations;
- premium skin packs;
- creator analytics and publishing tools later.

Initial pricing hypothesis:

- Founding Plus: USD 5–8/month or USD 49–79/year.
- Standard Plus: USD 8–12/month or USD 79–99/year.

Pricing should be tested after Phase 0 retention exists. Avoid pricing so low that the most engaged users cheaply remove all monetization upside.

## Marketplace and creator economy

The larger business is not commodity ad impressions. It is the ecosystem of shareable skins.

Future marketplace surfaces:

- public skin pages with stable URLs;
- creator profiles;
- free skins;
- premium skins;
- skin packs;
- tips;
- creator subscriptions;
- remix/fork paths with attribution;
- sponsored skin drops;
- brand collaborations;
- marketplace take rate.

Each public skin page should eventually include:

- name;
- preview image/video;
- author;
- description/story;
- tags;
- version;
- license;
- compatible modes: chat, agent;
- provider-agnostic status;
- download SKIN.md;
- use/apply action;
- remix/fork action;
- share URL.

The viral object should be the skin, not only the app.

Example share objects:

- `/s/pokemon-trainer`;
- `/s/anime-tutor`;
- `/s/windows-95-assistant`;
- `/s/rambo-operator`;
- `/s/gandhi-mediator`.

## Business model stack

1. **Phase 0 free BYOK**
   - purpose: activation, retention, trust, learning;
   - revenue: none;
   - cost control: users bring their own key.

2. **Free with one daily sponsor**
   - purpose: keep access free while creating a light revenue floor;
   - revenue: scarce sponsor placement;
   - constraint: no ads inside AI conversations.

3. **Plus subscription**
   - purpose: monetize committed users;
   - revenue: monthly/annual subscription;
   - value: ad-free + private/custom/power features.

4. **Creator marketplace**
   - purpose: ecosystem and network effects;
   - revenue: premium skins, packs, tips, subscriptions, take rate.

5. **Agent mode / pro workflows**
   - purpose: high-value use cases;
   - revenue: advanced agent features, private tool configurations, team libraries.

6. **B2B/team layer later**
   - purpose: organizations standardize approved AI personas/interfaces;
   - revenue: team workspaces, governance, private skin registries, brand/persona controls.

## Economics of one sponsor per day

One daily sponsor exposure is user-friendly but not enough to be the whole company.

Approximate gross revenue per user/month at 30 impressions per month:

- USD 2 CPM → USD 0.06/user/month;
- USD 5 CPM → USD 0.15/user/month;
- USD 10 CPM → USD 0.30/user/month;
- USD 25 CPM → USD 0.75/user/month;
- USD 50 CPM → USD 1.50/user/month.

This can support a free tier at scale, especially with BYOK, but the upside should come from Plus, creators, marketplace, and agent-mode value.

## Trust and privacy commitments

The business model must protect the intimacy of AI chat.

Commitments:

- sponsors never see private chats;
- private chat content is not used for sponsor targeting;
- sponsor cards are never generated as assistant replies;
- provider keys are handled with clear technical guarantees;
- BYOK is presented as user freedom and cost control, not as a trick;
- no hidden model/provider switching;
- no covert sponsored skins;
- paid placements are labeled.

If the product cannot honestly satisfy a privacy claim yet, do not make that claim.

## Metrics to track in Phase 0

Activation:

- skin selected;
- first message sent;
- demo response completed;
- provider key successfully connected;
- first real model response completed.

Engagement:

- daily active users;
- D1/D7/D30 retention;
- messages per active user;
- repeat use of the same skin;
- number of skins tried per user;
- skin switching frequency.

Skin ecosystem:

- import attempts;
- successful imports;
- exports/downloads;
- shares/copy-link events;
- public skin page visits once available;
- creator submission attempts.

Provider funnel:

- provider card selected;
- key entry started;
- key validation success/failure;
- failed provider reasons;
- user fallback to demo mode.

Paid-intent later:

- clicks on Plus preview;
- attempts to create private/unlimited skins;
- demand for sync, agent mode, memory, and advanced editor;
- willingness-to-pay survey or founding plan waitlist.

## Messaging hierarchy

Primary homepage message:

> Choose your own skin for AI.

Subcopy:

> Bring your OpenAI, Claude/Anthropic, Gemini, OpenRouter, or local-compatible key. Use any skin as chat today and as an agent when ready.

Phase 0 free copy:

> Free for now. You put your API key and run any skin.

Future free-tier copy:

> Free forever. One respectful sponsor card per day. No ads inside your conversations.

Plus copy:

> Go ad-free and unlock private skins, advanced customization, and agent mode.

Creator copy:

> Make a skin for how your community uses AI.

## Strategic risks

- The product is perceived as “themes for chatbots” instead of a portable AI skin layer.
- BYOK is too technical for mass users unless demo mode creates desire first.
- Ads appear too early or too cheaply and damage trust.
- Paid tier is only ad removal and does not create enough value.
- Marketplace is built before creator/user pull exists.
- Agent mode distracts from the simpler chat-mode adoption funnel.
- Skin files become non-portable due to hidden server state.
- Arbitrary code/CSS/JS is allowed into skins and creates safety problems.

## Strategic decisions for V1

- Phase 0 is full free.
- Users bring their own API key and can run any skin.
- No ads in Phase 0.
- Preserve the future sponsor model as a principled, one-card-per-day free-tier option.
- Do not inject ads into conversations, ever.
- Build paid value around privacy, depth, customization, agent mode, and creator tools.
- Build the public gallery/marketplace direction early as product architecture, not necessarily as full commerce.
- Keep SKIN.md portable, human-readable, and safe/preset-driven.

## Bottom line

Skins.md should start as a free, trust-first, BYOK skin playground.

The first win is not revenue. The first win is proving that people want to choose, use, share, and eventually create AI skins.

After that, monetize with restraint:

- one daily sponsor card for free users;
- Plus for ad-free and deeper skin capabilities;
- creator marketplace for premium skins and packs;
- agent-mode upgrades for high-value workflows.

The business should grow from the skin ecosystem, not from interrupting the conversation.
