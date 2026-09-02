# TC05 — Shared-helper blast radius

Only one helper changes:

```text
requireActiveUser()
```

But it affects the authenticated user route today and is designed as a shared policy helper for future protected routes.

## Apply

```bash
git apply scenarios/TC05/bad-change.patch
npm test
```

## What to observe

Look for whether the tool:

- finds the changed helper
- identifies callers
- understands the security/authorization implication
- estimates downstream impact rather than reviewing only seven changed characters
