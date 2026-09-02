# TC07 — Test integrity

The production function is intentionally wrong:

```text
calculateRefund(100) => 50
```

The new test passes by replacing/mocking the production function itself.

## Apply

```bash
git apply scenarios/TC07/bad-change.patch
npm test
```

## What to observe

A strong assurance system should question the quality of this test.

The test does not execute the real implementation.
