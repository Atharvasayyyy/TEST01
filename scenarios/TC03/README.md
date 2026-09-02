# TC03 — False-positive trap

This looks superficially like a user-input-to-database scenario, but the query is parameterized and the input is sanitized.

## Goal

See whether a reviewer reports "SQL injection" merely because it sees database-looking code.

## Apply

```bash
git apply scenarios/TC03/bad-change.patch
npm test
```

## Important

This is a precision test, not a "find a bug" test.

A strong tool should either stay silent or explicitly explain why this path is mitigated.
