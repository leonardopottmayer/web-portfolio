# Leonardo Pottmayer — Portfolio

Personal portfolio website built with React, Vite and TypeScript. Fully bilingual (PT/EN), dark mode, minimalist design.

🌐 **[pottmayer.dev](https://pottmayer.dev)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| i18n | react-i18next + i18next-browser-languagedetector |
| SEO | react-helmet-async |
| Icons | lucide-react |
| Fonts | Syne · DM Sans · DM Mono |

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Experience, Education, Skills, Contact
│   └── ui/           # AnimatedSection, SectionLabel, SkillTag, Timeline
├── data/             # Static content: personal, experience, education, skills
├── hooks/            # useScrolled, useTypewriter
├── i18n/
│   ├── index.ts      # i18next setup
│   └── locales/      # en.json, pt.json
├── pages/            # HomePage, NotFoundPage
├── router/           # createBrowserRouter setup
└── styles/           # globals.css (Tailwind base + custom)
```

---

## Getting Started

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## Internationalization

Language is auto-detected from the browser on first visit (`i18next-browser-languagedetector`). The user's choice is persisted in `localStorage` under the key `i18n_lang`.

Supported languages: **English** (`en`) and **Portuguese** (`pt`). Fallback: `en`.

To add a new translation key, update both `src/i18n/locales/en.json` and `src/i18n/locales/pt.json`.

---

## Content

All personal content lives in `src/data/`:

- **`personal.ts`** — name, contact info, CV links, social links
- **`experience.ts`** — work history (organization, role, period, description)
- **`education.ts`** — academic background
- **`skills.ts`** — skill categories and items

CV files (PT and EN) should be placed in `public/`:

```
public/
├── cv-leonardo-pottmayer-en.pdf
└── cv-leonardo-pottmayer-pt.pdf
```

---

## Deployment — Digital Ocean Static App

This is a SPA deployed as a static site on Digital Ocean App Platform.

Build settings:
- **Build command:** `npm run build`
- **Output directory:** `dist`

The file `public/_redirects` ensures all routes fall back to `index.html`, preventing 404 errors on page refresh:

```
/* /index.html 200
```

---

## SEO

Meta tags (title, description, Open Graph) are managed per-page via `react-helmet-async`. Defaults are defined in each locale file under the `seo` key.

Static SEO files in `public/`:
- `robots.txt` — allows all crawlers, points to sitemap
- `sitemap.xml` — lists the root URL

> Update the domain in `robots.txt` and `sitemap.xml` if the deployment URL changes.
