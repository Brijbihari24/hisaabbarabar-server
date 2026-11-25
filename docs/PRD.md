# HisaabBarabar: PRD (v1)

## Problem

Friends and flatmates keep spending money together, and nobody remembers who owes what.

## Goal

Log expenses in a group; the app tells you who owes whom how much, using the minimum number of transactions.

## Users

Friends, flatmates, and trip groups (mostly on mobile).

## In scope (v1)

- Signup/login: email + password, Google
- Create a group and join via an invite link (with expiry and revoke)
- Add expenses: equal and exact split
- Balances, settle-up suggestions, and settlement records
- Live balance updates (Socket.io)

## Out of scope (v1)

Multiple currencies, receipt upload, notifications, placeholder members, percentage split, Facebook login, AI features.

## Success criteria

- The full flow works on a live URL (with a demo user)
- Tests pass for the settle-up logic
- Every change goes through a PR with green CI, and ships via the develop → main release flow

## Rules

- Money is stored as integers (paise).
- A user can only see data from their own groups.

## Timeline

Target: Fri 11 Dec 2026. Soft landing: Wed 16 Dec 2026.
Cut order if time runs short: Socket.io live updates, edit/delete expense, UI polish.
