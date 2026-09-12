---
id: contributing
title: Contributing
sidebar_label: Contributing
description: How to propose changes to OpenSchool - coding standards, dev workflow, and branch/PR conventions.
---

This covers how to propose changes to OpenSchool. For getting the app
running locally, see the [Setup Walkthrough](./setup) and
[ThunderID Setup](./thunderid) guides - this page assumes that part is
already done.

By participating, you agree to follow the project's
[Code of Conduct](./code-of-conduct).

## Before you start

- **Small fix or obvious bug?** Open a PR directly.
- **New feature or larger change?** Open an issue first to discuss the
  approach - saves everyone rework if the direction needs adjusting.
- **Security issue?** Don't open a public issue - see the
  [Community](/community) page for how to report it privately.

## Orienting yourself

- `CLAUDE.md` in the repository root - fast orientation to backend
  layering, frontend structure, and the data model.
- [Architecture](./architecture) - the full component and data-model
  picture.
- [Architecture Decision Records](./adr) - *why* behind non-obvious
  decisions; check here before "fixing" something that looks wrong but is
  deliberate.

## Making changes

**Backend (Go):**

- SQL lives in `backend/db/queries/*.sql`. After editing it, run `sqlc
  generate` from `backend/` - never hand-edit `backend/db/sqlc/`.
- Follow the existing layering for a feature module: `routes` →
  `handlers` → `services` → `repositories`.
- One clear doc-comment line per exported function/type - match the
  existing style rather than writing long comment blocks.
- Before submitting: `go build ./...` and `go vet ./...` must pass; run
  `staticcheck ./...` too if you have it installed (CI does).

**Frontend (React/TypeScript):**

- Admin CRUD pages follow one shared template - list, a modal form,
  confirm-delete - built from `src/components/common/`. Deviating from it
  should be a deliberate choice, not an accident.
- Before submitting: `pnpm build` and `pnpm lint` must pass.

## Commit and PR conventions

- Branch from `development`: `feature/your-feature-name`.
- All PRs target `development`, not `main`.
- Keep commits focused; explain *why* a change was made, not just what
  changed.
- Reference the issue a PR resolves, if there is one.

## Need help?

See the [Community](/community) page for GitHub Issues, Discussions, and
how to reach the maintainers.
