# Are You Built to Be a Founder?

A satirical-but-research-backed personality test. The quiz looks like a viral founder-archetype test. It is. The trait dimensions, the weightings, and the final reveal are all pulled from the academic literature on what actually predicts entrepreneurial outcomes. The rhetorical purpose is to deliver one argument: personality traits matter, but they only matter when paired with planning rigor and a real environment. Traits alone are not enough.

This is a companion piece to a research paper by Zach Nye, UVU ENG 2026.

## Stack

- Next.js 16 (App Router) + TypeScript + React 19
- Tailwind CSS v4 (CSS-based theme via `@theme` in `app/globals.css`)
- Framer Motion for transitions and reveals
- lucide-react for icons
- Inter (body) and Manrope (display) via `next/font/google`
- No database, no auth, no API routes. State lives in React + localStorage.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

The `start` script respects the `PORT` env var, so it works for Railway and any host that injects a port at runtime.

## Railway deployment

1. Create a new Railway project from this repo.
2. Railway auto-detects Next.js via Nixpacks. No env vars are required.
3. `railway.json` already pins:
   - `buildCommand: npm run build`
   - `startCommand: npm start`
   - `restartPolicyType: ON_FAILURE`, max 3 retries
4. The Next config uses `output: "standalone"` for a leaner production bundle.

## Project layout

```
app/
  layout.tsx              # Root layout, font loading
  page.tsx                # Landing page
  quiz/page.tsx           # 12-question quiz flow
  results/page.tsx        # Archetype + trait + research reveal
  globals.css             # Tailwind v4 theme + custom utilities

components/
  LandingHero.tsx
  QuizQuestion.tsx
  ProgressBar.tsx
  ResultsArchetype.tsx
  TraitBreakdown.tsx
  ResearchReveal.tsx
  ShareCard.tsx

lib/
  questions.ts            # 12 questions across 5 trait dimensions
  archetypes.ts           # 5 founder archetypes
  scoring.ts              # Normalization, weighting, archetype matching
  research.ts             # Source data for the research reveal
  cn.ts                   # clsx + tailwind-merge helper
```

## Sources

The three sources surfaced in the research reveal are:

- **Branca, E., Intenza, M., & Doni, F. (2025).** Startup entrepreneurs' personality traits and resilience: Unveiling the interplay of prior experience. _International Entrepreneurship and Management Journal, 21_(2). https://doi.org/10.1007/s11365-024-01023-y
- **Dierberger, G., Isaacson, M., Erickson, C., & Dierberger, T. P. (2020).** Kissing frogs: The challenges of becoming a successful entrepreneur. _The Journal of Applied Business Research, 36_(2), 59–76. https://doi.org/10.19030/jabr.v36i2.10342
- **Muchineripi, J. N., Donga, G., & Gavaza, B. K. (2025).** Immigrant entrepreneurs' competitive advantage: The role of cultural and disruptive innovation. _International Journal of Business Ecosystem & Strategy, 7_(4), 97–105. https://doi.org/10.36096/ijbes.v7i4.843

The full annotated bibliography lives in the companion paper.

## TODOs for Zach

- `app/results/page.tsx` and `components/ResearchReveal.tsx` link "Read the full paper" to `#`. Replace with the final paper URL or PDF link.
- Optional: drop a real OG image at `public/og-image.png` (the metadata in `app/layout.tsx` currently uses Next.js defaults).
- Optional: update the year in the footer if submission slips past 2026.

## How the scoring works

Each question maps to one of five trait dimensions. Answers are scored from `-2` to `+2`, averaged within each dimension, then normalized to a 0 to 100 scale.

The composite "Founder Score" is a weighted sum:

| Dimension              | Weight |
| ---------------------- | ------ |
| Planning Rigor         | 0.25   |
| Environment Quality    | 0.25   |
| Emotional Stability    | 0.17   |
| Openness               | 0.17   |
| Conscientiousness      | 0.16   |

The weighting is deliberate. Planning and environment count more than any single personality trait. This quietly enforces the paper's argument before the reveal section ever spells it out.
