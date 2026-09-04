# Ketan Damle — Advanced Portfolio Demo

An "advanced" companion to the Session 02 (T8481) sample portfolio. Same stack
we teach in class, pushed further to show what a student can grow the base
demo into once they're comfortable.

## Stack

- **Vite** — build tool / dev server
- **React 19** — framework
- **Tailwind CSS v4** — styling
- **React Router 7** — client-side routing
- **three.js + @react-three/fiber + drei** — hero blob + particle field
- **framer-motion** — scroll-driven & entry motion
- **Zustand** — theme / sensory state (persisted to localStorage)
- **cmdk** — command palette (⌘K)
- **Vercel** — hosting

## What's in it beyond the basic demo

- **4 themes** — Paper (warm cream), Onyx (deep dark), Editorial (high-contrast serif), Aurora (dark w/ green→purple accents). Toggled from the header or ⌘K, persisted, respects `prefers-color-scheme`.
- **Ambient audio** — a small WebAudio-synthesised chord (Amin7 through a lowpass + LFO) with a 5-bar visualizer. Off by default. No external assets.
- **Haptics** — brief `navigator.vibrate` on nav + tap interactions on mobile, gated behind a "sensory" toggle.
- **Reduced-motion path** — disables blob, particles, marquee, transitions, and audio.
- **Custom cursor halo** — desktop-only, blends with hovered UI. Toggleable.
- **Magnetic buttons** — subtle pull toward the cursor on primary CTAs.
- **Split-text hero** — word-by-word reveal on the H1s.
- **Sticky case-study chapters** — spine on the left, chapter body scrolls, current chapter highlights.
- **Scroll-driven parallax** — hero blob rides scroll; case-study cover images do a subtle Y+scale.
- **⌘K command palette** — navigate, jump to a case study, swap theme, toggle sensory settings.
- **Page transitions** — soft fade+slide via `AnimatePresence`.

## Run it locally

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   ├── three/         → HeroBlob, ParticleField (three.js)
│   ├── motion/        → Reveal, SplitText, Magnetic
│   ├── Header, Footer, Marquee, Hero, FeaturedWork, AboutBlock
│   ├── ThemeSwitcher, CommandPalette, PageTransition
│   ├── CursorHalo, AmbientPlayer
├── pages/             → Home, Work, CaseStudy, About, Contact, NotFound
├── data/projects.js   → deep case studies (chapters, images, quotes)
├── store/settings.js  → Zustand + persist; haptic() helper
├── hooks/             → useMagnetic, useReducedMotion
└── index.css          → theme tokens + base + effects
```

## Deploy

Push to `main`. Vercel auto-deploys on every push.
