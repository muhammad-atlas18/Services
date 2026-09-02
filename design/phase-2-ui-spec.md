# Phase 2 — UI Design Specification

## Design direction

The interface is clean, dependable and technically competent: Trust Navy establishes authority, Service Green carries primary actions, and Energy Amber is reserved for solar highlights. All content remains readable without animation, and all primary conversion routes lead to WhatsApp.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Trust Navy | `#0B1F33` | Headings, dark sections, footer |
| Service Green | `#0F6B4F` | Primary CTA, active service accent |
| Energy Amber | `#F5B82E` | Solar marker and restrained highlights |
| Warm Off-White | `#F7FAF8` | Main page background |
| Ink | `#1C2733` | Body copy |
| Muted Slate | `#667085` | Supporting text |
| Soft Border | `#D8E2DE` | Inputs, separators and cards |
| WhatsApp Green | `#25D366` | Recognition accent only |

Heading font: Manrope (700). Body/interface font: Inter (400/500/600), with system fallbacks.

## Component decisions

| Component | UI behaviour |
| --- | --- |
| Primary CTA | Green surface, white label, 44px minimum height, visible focus ring |
| Secondary CTA | Navy text and border, same target size and focus treatment |
| WhatsApp CTA | Explicit text label plus optional icon; source/service context passed to the shared link helper |
| Service card | 16px radius, image/visual panel, title, concise scope, details and WhatsApp actions kept as separate targets |
| Header | Sticky; turns from transparent/light to solid surface on scroll; solar is first service item |
| Mobile menu | Keyboard-operable dialog/panel, closes on route selection or Escape |
| FAQ | Native button with `aria-expanded`; answer content remains readable with reduced motion |
| Project card | Optimised image area, service tag, confirmed area and scope/result copy |

## Responsive composition

| Width | Layout |
| --- | --- |
| 320–767px | One-column sections, 16px gutters, stacked CTAs, compact header |
| 768–1023px | Two-column content/cards where appropriate, 24px gutters |
| 1024px+ | 12-column container capped at 1200px; balanced hero and multi-column cards |

## Motion notes

- Section reveal: 400ms fade and 16px upward motion, once per section.
- Card hover: pointer devices only; 220ms, 4px lift and subtle shadow.
- Buttons: 160–180ms colour/lift feedback.
- `prefers-reduced-motion` removes transform-heavy and staggered movement.
- No parallax, autoplay video, scroll-jacking or continuously pulsing CTA.

## Prototype scope

The companion HTML prototype covers the desktop and mobile-ready Home screen, representative service card interactions, sticky conversion affordance, navigation pattern, process, projects, FAQ and final CTA. It deliberately uses placeholders until the owner provides final brand, contact and project assets.

## Phase 2 approval checklist

- [x] Visual system translated into reusable tokens and component decisions.
- [x] Home screen prototype prepared with responsive behaviour.
- [x] Representative service-detail visual direction documented.
- [x] Navigation and WhatsApp conversion path prototyped.
- [ ] Owner approves final logo, imagery, business identity and contact content.
