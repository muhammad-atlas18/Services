# Lahore Solar, Electrical & AC Services Website

Local Next.js/TypeScript implementation for the Lahore local-services website specification.

## Run locally

1. Copy `.env.example` to `.env.local`.
2. Set the approved WhatsApp number and site URL when available.
3. Install dependencies: `npm install`
4. Start development: `npm run dev`
5. Create a production build: `npm run build`
6. Serve the production build: `npm run start`

## Key configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Required digits-only WhatsApp number used by all CTAs |
| `NEXT_PUBLIC_SITE_URL` | Production canonical/sitemap URL |
| `ENQUIRY_WEBHOOK_URL` | Optional server-only endpoint for validated enquiry delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Reserved for approved GA4 setup |

Never commit actual environment files or secrets.

## Project structure

- `app/` — Next.js pages, API route, sitemap and robots configuration
- `components/` — shared layout, navigation, WhatsApp CTA, form and schema components
- `lib/` — service data, shared WhatsApp helpers and analytics event definitions
- `docs/` — phase deliverables, QA report and launch/optimisation plans
- `design/` — Phase 2 UI specification and static prototype

## Important launch rules

- Do not display service prices or starting prices.
- Keep WhatsApp as the primary conversion action.
- Use only approved contact details, operating areas, photos, project evidence and testimonials.
- Final quotation depends on site condition, materials, equipment compatibility and complete scope.
- Production requires the launch-readiness items in `docs/phase-6-launch-readiness.md`.

## Validation completed

- Production build and TypeScript validation
- Core route and 404 checks
- WhatsApp CTA, no-price, sitemap and robots checks
- Enquiry endpoint validation/rate-limit/honeypot checks
- Responsive overflow checks at 320px, 390px, 768px and 1440px

See `docs/phase-5-qa-report.md` for details.
