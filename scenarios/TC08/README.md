# TC08 — Repository context

The benchmark intentionally creates a legitimate local exception:

- modern code may use camelCase
- `src/legacy_user.js` intentionally uses snake_case

## Apply

```bash
git apply scenarios/TC08/bad-change.patch
npm test
```

## What to observe

Does a reviewer blindly recommend converting the legacy module to camelCase?

Or does it read the repository documentation/context and preserve the local contract?

This is a contextual-precision test.
