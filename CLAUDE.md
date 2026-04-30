# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build to /dist
npm run preview    # Preview production build locally
npm run lint       # ESLint check
npm run deploy     # Build + push to GitHub Pages (gh-pages)
```

## Architecture

Single-page React portfolio hosted on GitHub Pages at `https://mslazzuri.github.io/portfolio/`. Vite is configured with `base: '/portfolio/'` in `vite.config.js` — this must stay in sync with the gh-pages deployment target.

**Routing**: Anchor-based (`#home`, `#about`, `#projects`, etc.) — no React Router. The `AppBar` component uses `IntersectionObserver` to track which section is in view and highlight the active nav link.

**Pages vs Components**: `src/pages/` holds full-section components (one per nav anchor). `src/components/` holds reusable pieces. `App.jsx` stacks the page sections vertically.

**Data**: All content lives in static JSON files in `src/` (`projects.json`, `aboutme.json`, `skills.json`, `storyline.json`) — no API calls. To update displayed content, edit these JSON files.

**Styling**: Plain CSS with one `.css` file per component in `src/styles/`. No CSS framework or CSS-in-JS. Global CSS variables (colors, appbar height, font) are defined in `src/styles/index.css`.

**Animations**: `src/components/FadeIn.jsx` wraps Framer Motion's `motion.div` with an `IntersectionObserver`-based trigger. Wrap any element in `<FadeIn>` to get scroll-triggered fade-in.

**Contact form**: `ContactMeForm.jsx` submits via EmailJS (`emailjs-com`). The service ID, template ID, and public key are sourced from `import.meta.env` variables — keep these in a `.env` file, not hardcoded.

## Logo

`src/components/Logo.jsx` renders an inline SVG with the `> MSL` prompt and a blinking terminal-cursor rectangle. Props:

| Prop | Default | Description |
|------|---------|-------------|
| `size` | `120` | Width and height in px (viewBox is always 120×120) |
| `fg` | `#4A70A9` | Text and cursor color |
| `bg` | `'transparent'` | Background rect fill; pass `'transparent'` (default) for no background |

The AppBar renders `<Logo size={44} />` to fit within the 60px appbar height.

## Static Assets

### `public/web/` — web/social asset kit
All files here are served at `/portfolio/web/` after build.

| File | Used in |
|------|---------|
| `favicon-16x16.png`, `favicon-32x32.png`, `favicon-96x96.png` | Available as PNG favicons (not active — browser tab uses `coffee.gif`) |
| `apple-touch-icon.png` | `<link rel="apple-touch-icon">` in `index.html` — iOS home screen |
| `android-chrome-192x192.png`, `android-chrome-512x512.png` | `site.webmanifest` — Android home screen / PWA |
| `site.webmanifest` | `<link rel="manifest">` in `index.html` |
| `mstile-150x150.png` | `msapplication-TileImage` meta — Windows Start tile |
| `og-image.png` | `og:image` meta — social share preview (LinkedIn, Slack, etc.) |
| `twitter-card.png` | `twitter:image` meta — Twitter/X share preview |
| `avatar-400.png` | JSON-LD `image` — Google Rich Results person photo |
| `logo-google.png` | JSON-LD `logo` — Google Knowledge Panel |

### `src/assets/coffee.gif`
Active browser tab favicon — referenced directly from `index.html` as `<link rel="icon" type="image/gif">` so Vite processes it with the build.

### `public/assets/projects-screenshots/`
Project card images referenced from `src/projects.json`.

## Design Tokens

Defined in `src/styles/index.css` as CSS custom properties:

```css
--white:           #FEFEFE
--backgroundColor: #EFECE3
--lightBlue:       #8FABD4
--darkBlue:        #4A70A9
--black:           #000000
--appbar-height:   60px
```

Font: **IBM Plex Mono** (loaded from Google Fonts), weight 400 globally.
