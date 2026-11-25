# ADR 0002: PostgreSQL with Prisma 6

Status: Accepted (25 Nov 2026)

## Context

The app handles money, and an expense and its splits must be saved together (as a transaction).
The project is in plain JavaScript. Prisma 7's default client generates TypeScript source, which doesn't run directly on this project's Node version.

## Decision

PostgreSQL (local, in Docker) and Prisma 6 (`prisma-client-js`). Multi-table writes go inside DB transactions. Upgrading to Prisma 7+ will happen later in a separate PR.

## Consequences

- Strong consistency, relations, and migrations
- Prisma 6 is an older major version, so the upgrade work is left for later
