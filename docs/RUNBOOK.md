# Runbook — Exact workflow

## Phase 1: Prepare GitHub

1. Create a new GitHub repository from this benchmark.
2. Push only the clean baseline first.
3. Make sure `npm test` passes.
4. Install/connect the product being tested.

## Phase 2: Run one scenario

Example for TC01:

```bash
git checkout main
git pull
git checkout -b test/tc01-functional-bug
git apply scenarios/TC01/bad-change.patch
npm test
git add .
git commit -m "test: TC01 functional bug"
git push -u origin test/tc01-functional-bug
```

Open a PR.

Do not merge it.

Capture:

- PR review comments
- check/status page
- severity
- exact evidence
- time
- suggested fix
- merge gate outcome

## Phase 3: Reset

After recording the result:

```bash
git checkout main
git branch -D test/tc01-functional-bug
git push origin --delete test/tc01-functional-bug
```

Create a new branch for the next scenario.

If the platform requires the repository state to be clean, wait until its review/check is finished before deleting the branch.

## Phase 4: Repeat

Use exactly the same workflow for TC02–TC10.

## Phase 5: Compare

Put the results into `docs/results.csv`.

Do not score based on whether the wording "sounds smart." Score based on whether the finding is correct and useful.
