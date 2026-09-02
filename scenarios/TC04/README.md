# TC04 — Business-logic bug

The business invariant is:

> An order can be refunded only once.

The baseline tracks `refundCount`.

This change removes the increment, creating a state inconsistency: the API can report success while its refund counter no longer reflects the actual event.

## Apply

```bash
git apply scenarios/TC04/bad-change.patch
npm test
```

## What to observe

Can the reviewer reason about the business invariant and state transition, or does it only report style/static concerns?
