# TC09 — Runtime-only failure

The code is syntactically valid.

The route crashes when executed unless:

```text
BENCHMARK_RUNTIME_CONFIG
```

contains valid JSON.

## Apply

```bash
git apply scenarios/TC09/bad-change.patch
npm test
npm start
```

Then request:

```text
GET /runtime-config
```

You should get a runtime exception when the environment variable is absent.

## Why this matters

The benchmark tests whether the system executes the affected behavior rather than only reading the diff.

## What to observe

- Did the tool execute the endpoint?
- Did it observe the exception?
- Did it distinguish config/runtime failure from a static bug?
- Did it suggest validation/fallback handling?
