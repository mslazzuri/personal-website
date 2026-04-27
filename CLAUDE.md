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

**Styling**: Plain CSS with one `.css` file per component in `src/styles/`. No CSS framework or CSS-in-JS.

**Animations**: `src/components/FadeIn.jsx` wraps Framer Motion's `motion.div` with an `IntersectionObserver`-based trigger. Wrap any element in `<FadeIn>` to get scroll-triggered fade-in.

**Contact form**: `ContactMeForm.jsx` submits via EmailJS (`emailjs-com`). The service ID, template ID, and public key are sourced from `import.meta.env` variables — keep these in a `.env` file, not hardcoded.
