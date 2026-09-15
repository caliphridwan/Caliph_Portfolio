# Ridwan Abdulkareem — Portfolio

A single-page portfolio built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS**, and **Framer Motion**, covering four disciplines:
AI Automation, Full-Stack Development, Data Analysis, and Graphic Design.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit your content

Almost everything you need to personalize lives in **`content.ts`** at the
project root — your name, tagline, socials, skills, projects, and work
experience are all plain data there. Change the text and the whole site
updates; you shouldn't need to touch the components for basic edits.

Things to replace before publishing:

- `content.ts` → `profile.email`, `resumeUrl`, and `socials` links
- `content.ts` → `projects` — swap in your real projects and links
- `content.ts` → `experience` — your real work history
- `public/resume.pdf` — add your actual résumé PDF at this path
  (the "Résumé" button in the nav links to `/resume.pdf`)
- `app/layout.tsx` → update the `metadataBase` URL once you have a domain

## Contact form

The contact form currently opens the visitor's email client with the message
pre-filled (no backend required). If you'd rather have it send directly:

1. Sign up for [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) (both have free tiers)
2. Replace the `handleSend` function in `components/Contact.tsx` with a
   `fetch` call to your form endpoint

## Deploy

The fastest path is [Vercel](https://vercel.com) (made by the creators of
Next.js):

1. Push this project to a GitHub repo
2. Import the repo at vercel.com/new
3. Vercel auto-detects Next.js — click **Deploy**

Alternatively, `npm run build` produces a production build you can deploy
anywhere that supports Node.js (Netlify, Render, Railway, your own server).

## Design system

- **Colors:** dark ink (`#14141B`) and paper (`#F2F1F7`) sections, with four
  functional accent colors that tag each discipline throughout the site —
  Indigo (AI), Citrus (Dev), Magenta (Data), Amber (Design). Defined in
  `tailwind.config.ts`.
- **Type:** Fraunces (display/headlines) + Space Grotesk (body/UI), loaded
  via `next/font/google` in `app/layout.tsx`.
- **Accessibility:** visible focus rings, `prefers-reduced-motion` respected
  site-wide (see `app/globals.css`).

## Project structure

```
app/
  layout.tsx      — fonts, metadata, global providers
  page.tsx        — assembles all sections
  globals.css     — base styles, focus states, reduced motion
components/
  Nav.tsx
  Hero.tsx
  Projects.tsx
  Skills.tsx
  About.tsx
  Experience.tsx
  Contact.tsx
content.ts        — all editable copy/data lives here
```
