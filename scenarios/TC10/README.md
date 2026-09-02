# TC10 — Re-review lifecycle

This scenario is intentionally a two-step workflow.

### Step A

Apply this patch and open a PR.

The first defect is the TC01 functional logic inversion.

### Step B

Fix only the TC01 inversion.

Push the fix and re-run review.

### Step C

Then add the `/unstable` route from the second half of the patch.

Push again.

## Observe

A good system should:

1. mark the first issue resolved;
2. avoid continuing to block on the fixed line;
3. detect the newly introduced runtime defect;
4. preserve useful review context instead of restarting from zero in a confusing way.
