# Phase 5 — Local QA Report

**Status:** Local functional and responsive QA passed. External production/device/UAT checks remain pending because the site has not been deployed and final business inputs are not available.

## Environment

- Next.js production build (`npm run build`)
- Local production server (`next start`)
- Browser checks at 320px, 390px, 768px and 1440px widths

## Results

| Check | Result | Evidence |
| --- | --- | --- |
| Production compilation and TypeScript validation | Pass | Static pages and the enquiry API built successfully |
| Core routes | Pass | Home, three service hubs, Projects, About, Contact, Privacy and Terms return 200 |
| Missing route recovery | Pass | Unknown route returns 404 |
| Service metadata | Pass | Service title and canonical are rendered |
| WhatsApp conversion links | Pass | All checked conversion pages contain the shared configured `wa.me` number |
| No-price rule | Pass | Checked rendered conversion pages contain no price copy |
| Sitemap and robots routes | Pass | `/sitemap.xml` responds; non-production robots disallows crawling |
| Enquiry validation | Pass | Invalid request is rejected with 400; valid local request is accepted without an external delivery webhook |
| Mobile menu | Pass | Menu is visible and its navigation links become available at 390px |
| Responsive overflow | Pass | No horizontal overflow observed at 320px, 390px, 768px and 1440px |

## Known launch prerequisites (not defects)

1. Replace the placeholder WhatsApp number before launch.
2. Add final brand name/logo, contact details, operating areas, approved photography, real projects, testimonials, warranty text and legal copy.
3. Configure `NEXT_PUBLIC_SITE_URL` with the production domain; then production `robots.txt` will allow crawling and publish the sitemap.
4. Provide/configure `ENQUIRY_WEBHOOK_URL` or another approved notification provider for contact-form delivery.
5. Add GA4, Search Console and consent configuration after account details are supplied.
6. Perform owner UAT and real iOS Safari, Android Chrome and Samsung Internet checks after staging deployment.

## Launch blocker summary

No local code blocker is open. The launch remains blocked by required owner content, real contact details and production integration configuration.
