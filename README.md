# Novelti Cleaning Services — Next.js rebuild

Replaces the Wix site at novelticleaning.com. Same domain, new hosting.

## Running it

```bash
npm install
npm run dev
```

Node 20+. Fonts are pulled at build time via `next/font/google`, so the first
build needs network access.

## Where things are

```
app/
  layout.tsx        fonts, metadata, LocalBusiness schema, header/footer
  page.tsx          homepage
  globals.css       Tailwind v4 theme tokens (colours, type)
  api/quote/        lead capture endpoint (email + Sheet wiring still to do)
components/
  SiteHeader.tsx    sticky nav with mobile menu
  SiteFooter.tsx
  QuoteForm.tsx     quote request form, honeypot, submission states
  Photo.tsx         renders a real photo, or a labelled slot describing the
                    shot that still needs taking
public/photos/      drop client photos here
```

## Photos

Every `<Photo>` without a `src` renders a green slot describing the shot
needed. Add the file to `public/photos/` and pass `src="/photos/name.jpg"`.

Do not use stock or AI-generated imagery. The current Wix hero is
AI-generated and is the most obvious tell on the live site.

## Still to fill in

- Public liability insurer and cover amount (homepage facts band)
- Three real Google reviews with first name and town
- Privacy policy copy
- Confirm which phone number is primary

## Deploy

Vercel. Point the existing Wix-registered domain at it; keep the registration
where it is. 301 map from the old Wix URLs goes in `next.config.mjs` before
cutover.
