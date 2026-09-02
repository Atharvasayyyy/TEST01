# TC01 — Functional logic bug

## Goal

Introduce a valid-JavaScript logic inversion.

## Apply

```bash
git apply scenarios/TC01/bad-change.patch
npm test
```

The benchmark intentionally does not have a test that directly catches this bug, so the reviewer must reason about behavior.

## What to ask the tool

You do not need to tell it the answer. Let it review naturally.

Record:

- Did it identify the inverted condition?
- Did it understand that existing users would receive `404`?
- Did it suggest the exact safe fix?
- Did it provide evidence?
