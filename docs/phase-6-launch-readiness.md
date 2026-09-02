# Phase 6 — Production Launch Readiness

## Current release status

The application is locally built and QA-tested, but it is **not production-ready to deploy** until required business and integration inputs are supplied.

## Required before push/deployment

- [ ] Final business/brand name and SVG logo
- [ ] Approved WhatsApp number in international digits-only format
- [ ] Approved public phone, email and business hours
- [ ] Confirmed Lahore coverage areas
- [ ] Production website URL/domain
- [ ] Final photography, project summaries and testimonial permissions
- [ ] Approved warranty and legal/privacy copy
- [ ] Contact-notification destination (`ENQUIRY_WEBHOOK_URL` or approved provider)
- [ ] GA4 and Search Console credentials/verification plan (if required at launch)
- [ ] Owner UAT approval on staging/production candidate

## Release procedure once approved

1. Set production environment variables in Vercel; never commit secrets.
2. Confirm the GitHub repository’s production branch and project settings.
3. Push the approved local code to the repository.
4. Verify the Vercel production deployment, custom domain and SSL.
5. Confirm production `NEXT_PUBLIC_SITE_URL`; validate canonical tags, sitemap and production robots rules.
6. Smoke-test every navigation link, WhatsApp CTA, contact form delivery and 404 recovery on production.
7. Validate analytics events without collecting message contents or other sensitive enquiry data.
8. Record the release URL, timestamp, deployment identifier, rollback procedure and outstanding follow-ups.

## Rollback plan

- Keep the prior Vercel production deployment available.
- If a critical production defect occurs, promote the last verified deployment through Vercel.
- Do not alter production environment values during rollback unless the issue is configuration-related and the previous values are documented.

## Explicit authorization required

Before I push code or deploy, send a clear instruction such as: **“Push the current code to GitHub and deploy it to Vercel.”**
