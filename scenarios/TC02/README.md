# TC02 — Security vulnerability: SQL injection pattern

## Apply

```bash
git apply scenarios/TC02/bad-change.patch
npm test
```

Start the server and test:

```bash
npm start
```

Then:

```text
GET /search-user?email=' OR '1'='1
```

This is a fake/mock SQL sink. No real database is connected.

## What to measure

- Does the product identify the source (`req.query.email`)?
- Does it identify the sink (SQL query construction)?
- Does it explain exploitability?
- Does it propose parameterized queries or an equivalent safe design?
