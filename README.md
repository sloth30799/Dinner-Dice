# Dinner Dice

Dinner Dice is an offline-first dinner decision helper. It replaces the old API-dependent recipe search with a fast local meal deck, weighted dice rolls, filters, favorites, a tonight plan, and a grocery list.

## Why this modernization exists

The original version depended on the Edamam API from the browser and exposed an API key in frontend code. The modern version removes that risk: no required AI key, no required recipe API key, and no usage-based cost to run the app.

## Features

- 🎲 Weighted dinner roll from a curated local meal deck
- Mode cards: Surprise, Cook, Takeout, Leftovers, Cheap, Healthy-ish
- Filters for max time, effort, budget, and ingredient on hand
- “Not tonight” reroll avoidance
- Favorites saved in localStorage
- Add one meal to tonight’s plan
- Grocery list generated from the planned meal
- Responsive modern UI
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
