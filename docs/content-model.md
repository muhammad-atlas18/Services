# Phase 1 — Content Model

## Site configuration

| Field | Type | Status |
| --- | --- | --- |
| Brand name | Text | Pending owner input |
| Logo | SVG/image asset | Pending |
| WhatsApp number | Environment value, international digits only | Pending |
| Phone | Text/link | Pending |
| Email | Text/link | Pending |
| Business hours | Structured list | Pending |
| Public address | Optional structured address | Pending |
| Coverage areas | List of confirmed Lahore areas | Pending |
| Warranty statement | Rich text | Pending |

## Service

`slug`, `category` (solar/electrical/ac), `title`, `shortDescription`, `heroImage`, `summary`, `included[]`, `exclusions[]`, `warningSigns[]`, `processSteps[]`, `materialsAndSystems[]`, `competencePoints[]`, `faq[]`, `relatedServiceSlugs[]`, `projectIds[]`, `seoTitle`, `seoDescription`.

Each service owns unique helpful content. It uses no public price field.

## Project

`id`, `slug`, `title`, `category`, `area`, `challenge`, `completedWork`, `result`, `images[]`, `imageAlt[]`, `completionDate` (optional), `featured`, `consentConfirmed`.

Private addresses, identifiable customer information and unapproved images are prohibited.

## FAQ

`id`, `question`, `answer`, `pageScope`, `sortOrder`. FAQ schema is emitted only for visible, valid page content.

## Testimonial

`id`, `quote`, `customerIdentifier` (name or approved initials), `area`, `service`, `consentConfirmed`, `sortOrder`.

No invented testimonials, ratings, names or areas.

## Service area

`slug`, `name`, `isOperational`, `localProof`, `uniqueContent`, `supportedServiceSlugs[]`, `seoTitle`, `seoDescription`.

Area routes render only when `isOperational`, unique content and local proof are all present.

## CTA tracking payload

`event: whatsapp_click`, `page_path`, `service`, `cta_position`, `device_type`. Never record user-entered WhatsApp message contents or sensitive enquiry data in analytics.
