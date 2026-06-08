# CraveRoll

CraveRoll is an offline-first dinner decision app with a playful Gen Z feel: fast rolls, clear filters, satisfying motion, favorites, a tonight board, and a grocery list without API keys or decision spiral.

![CraveRoll logo](public/craveroll-logo.svg)

## Why this modernization exists

The original Dinner Dice version depended on the Edamam API from the browser and exposed an API key in frontend code. CraveRoll removes that risk: no required AI key, no required recipe API key, and no usage-based cost to run the app.

## Product direction

- Cool, animated, and convenient — motion should guide the user, not confuse them.
- One-tap randomization with obvious controls.
- Gen Z visual language: bold gradients, playful micro-interactions, compact copy, and satisfying result reveals.
- Local-first by default so the app is fast, cheap to run, and safe to demo.

## Features

- 🎲 Weighted dinner roll from a curated local meal deck
- Mode cards: Surprise, Cook, Takeout, Leftovers, Cheap, Healthy-ish
- Filters for max time, effort, budget, and ingredient on hand
- “Not tonight” reroll avoidance
- Favorites saved in localStorage
- Add one meal to tonight’s plan
- Grocery list generated from the planned meal
- Responsive modern UI with animation hooks
- Vite + Vitest modernization

## Tech

- React 18
- Vite
- Vitest
- Testing Library
- Plain CSS
- localStorage

## Run locally

```bash
npm install
npm run dev
```

## Test and build

```bash
npm test
npm run build
npm audit --omit=dev
```

Current expected gates:

- Tests pass
- Production build succeeds
- Audit reports 0 vulnerabilities
