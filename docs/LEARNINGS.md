# Learnings log

## 2026-11-24

- `POSTGRES_DB` is applied only the first time (on an empty volume). To change it, run
  `docker compose down -v`.
- Two things can run on the same port, but only one of them answers. Check with:
  `netstat -ano | findstr :PORT`.
- VS Code's formatter and CI's `format:check` are different things. Before pushing, run
  `npm run lint`, `npm run format:check`, and `npm test`.
- VS Code's Prisma extension may check against the rules of a different version.
  The terminal is the final authority (`npx prisma validate`).
- Use the file name instead of `git add .`, and run `git status` before committing.
