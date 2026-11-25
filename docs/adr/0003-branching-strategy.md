# ADR 0003: Branching strategy (main, develop, release)

Status: Accepted (25 Nov 2026)

## Context

The goal of this project is to learn how a real team works. The main/develop/release flow is common in service-based companies.

## Decision

- `main`: released code only. `develop`: the integration branch (default).
- Work happens on `feature/*`, `fix/*`, and `chore/*` branches, merged into `develop` via PR (squash merge).
- Release: a `release/vX.Y.Z` branch is cut from `develop`, merged into `main` via PR (merge commit), and then merged back into `develop`.
- Hotfix: branched from `main`, then merged into both `main` and `develop`.
- `main` and `develop` are protected; a passing CI check is required.

## Consequences

- Production and integration stay separate, giving a chance for a final check before each release
- More ceremony: a PR for every feature, and a separate branch for every release
