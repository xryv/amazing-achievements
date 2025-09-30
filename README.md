# amazing-achievements

[![CI](https://github.com/<your-username>/amazing-achievements/actions/workflows/ci.yml/badge.svg)](https://github.com/<your-username>/amazing-achievements/actions/workflows/ci.yml)
 

Small repo engineered to unlock GitHub achievements (solo-friendly):
- Pull Shark (merge a PR)
- Quickdraw (issue ➜ PR in < 5 min)
- Actions / CI usage
- “Spilled Coffee” (intentionally fail CI once)

## How to use
1. Create an issue (bug) about a failing test.
2. Open a PR that fixes it within 5 minutes (Quickdraw).
3. Merge the PR (Pull Shark).
4. First commit will intentionally fail CI (“Spilled Coffee”), then fix it.

## Dev
```bash
npm install
npm test
```

## Scripts

- `npm test` — run the test suite
