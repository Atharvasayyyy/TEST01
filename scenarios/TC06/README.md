# TC06 — Hallucinated/nonexistent dependency

The dependency name and version are intentionally invented.

## Apply

```bash
git apply scenarios/TC06/bad-change.patch
```

Do NOT run `npm install` after applying if you want to keep your local environment clean; the point is to see whether the review system validates the dependency.

## Test

Create the PR and let the product analyze it.

## What to observe

Does it verify:

- package existence?
- version existence?
- installability?
- lockfile consistency?
