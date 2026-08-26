# ARTS OF FINANCE — PRD

## Original Problem Statement
Build a premium, high-converting, production-ready website foundation for **Arts Of Finance** — positioned as Bhopal's No.1 Stock Market Training Institute (reference: artsoffinance.in). Dark "Midnight Trading Floor" aesthetic (deep black/navy, electric green, muted gold), animated trading-terminal hero, full course ecosystem with dedicated pages, local SEO pages, blog, FAQ/AEO, Google Maps placeholder, centralized placeholder config, and strict rule: **never invent business data** (fees, phone, address, testimonials, certifications, stats stay as placeholders until the owner provides them).

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + Lenis smooth scroll. `src/config/site.js` is the single source of truth for all business info/placeholders (NAP, mentor, socials, integrations). Data files in `src/data/` (courses, faqs, blog, seoPages, legal).
- **Backend**: FastAPI — `POST/GET /api/leads` (demo enquiries stored in MongoDB), `/api/health`, `/api/config/status` (reports which integrations are configured, no secrets).
- **Integrations (placeholders, env-ready)**: market data API, Google Maps embed (`REACT_APP_GOOGLE_MAP_EMBED_URL` activates live map), WhatsApp/phone (`REACT_APP_WHATSAPP_NUMBER`, `REACT_APP_PHONE_NUMBER`), GA4, GTM, Meta Pixel, CRM, email service — all keys stubbed in `.env` files.

## User Personas
1. Bhopal student/beginner exploring stock market classes → free demo CTA.
2. Working professional comparing structured courses → course detail pages + curriculum.
3. Aspiring trader seeking advanced options/TA training → spotlights + mentor credibility.
4. Parent/researcher validating trust → about, FAQ, disclaimers, honest placeholder reviews.

## Core Requirements (static)
Home (19-section structure), About, Courses, 7 course detail pages, 5 Bhopal SEO landing pages, Blog (Market Intelligence), FAQ (15 AEO questions), Contact with working enquiry form, Privacy/Terms/Disclaimer/Refund, 404, sitemap.xml, robots.txt, schema (Org, WebSite, Course, FAQ, Breadcrumb, Article), canonical/OG per page, mobile sticky action bar.

## Implemented (2026-08-26)
- Full site: all pages/routes above, dark premium theme (Sora/Manrope/JetBrains Mono), animated candlestick canvas hero with parallax + scroll fade, demo market terminal cards (NIFTY, BANK NIFTY, SENSEX, BTC, GOLD, USD/INR — clearly marked "Demo · Not Live"), editorial marquee, trust strip, numbered-chapter About/Why Us, bento course ecosystem + 4 course spotlights, 7-step glowing learning journey timeline, mentor section (all placeholders), testimonial wall (empty-state placeholders, zero fake reviews), Bhopal SEO section, production-ready Google Maps container, FAQ accordion, CTA bands, footer with NAP + mandated market disclaimer.
- Working lead capture: contact/demo form saves to MongoDB (verified end-to-end via UI + curl).
- WhatsApp number configured: +91 7610714365 (all WhatsApp buttons open wa.me chat with prefilled message "Hi, I want to book a free demo class at Arts Of Finance." — verified June 2026). Call Now buttons dial the same number (tel: link). Lead form: after successful submit, WhatsApp opens on visitor's device with full lead details prefilled to owner's number (free lead-alert flow, verified).
- SEO: per-page titles/meta/canonical/OG, JSON-LD schemas, sitemap, robots, breadcrumbs, alt text. No fake review schema.
- Mobile: sticky bottom bar (Book Demo / WhatsApp / Call), animated hamburger menu, no horizontal overflow (verified at 390px).
- Fixed during QA: component import depth bug (CTABand/MapSection), double `/api` form endpoint, SEO landing page routing.

## Backlog
- **P0**: Owner supplies real data → populate `src/config/site.js` + `.env` (phone, WhatsApp, email, address, map embed URL, mentor profile/photo, fees/durations, socials, testimonials, Google reviews link).
- **P1**: Connect market data API to `MarketCards` (swap `DEMO_MARKETS`), activate GA4/GTM/Meta Pixel, wire CRM/email webhook in `create_lead`.
- **P2**: Admin view for leads (GET /api/leads currently open — add auth when admin panel is built), blog CMS, real article content, og-image assets, Lighthouse audit pass.

## Next Tasks
1. Collect business info from owner and fill centralized config.
2. Add Google Maps embed URL → map activates automatically.
3. Provide mentor photo/credentials + verified testimonials.
4. Decide on admin dashboard for viewing demo enquiries.
