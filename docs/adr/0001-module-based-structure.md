# ADR 0001: Module-based folder structure

Status: Accepted (25 Nov 2026)

## Context

In a layer-based structure (routes, controllers, and services in separate folders), the code for a single feature ends up scattered across 5 places.

## Decision

Each feature gets its own folder, `src/modules/<feature>/`, containing its routes, controller, service, schema, and tests.
Shared things live in `config/`, `middlewares/`, and `utils/`.

## Consequences

- One feature lives in one place, making it easier to understand and test
- Shared code needs discipline, otherwise `utils/` turns into a dumping ground
