# Stonks Frontend Monorepo

This codebase is a monorepo built using [TurboRepo](https://turbo.build/repo/docs) to manage Stonks frontend Web applications and libraries.

## Quickstart

### Install

To install all 3rd party packages as well as link all local apps, at root:

```
pnpm install
```

### Build

To build all apps and packages, at root:

```
pnpm run build
```

### Local Development

To run apps in local dev mode, at root to for all apps in parallel, or at respective app directory for single app:

```
pnpm run dev
```

### Installing Packages

See [installing packages via TurboRepo](https://turbo.build/repo/docs/handbook/package-installation#installing-packages)

## What's inside?

This monorepo utilizes [pnpm](https://pnpm.io) as a package manager and includes the following apps/packages/tooling:

### Apps

- `web`: the primary Stonks web application built using [Vite](https://vitejs.dev/)

### Packages

- `ui`: package of Stonks specific UI pattern components written on top of [Tailwind](https://tailwindcss.com/)

### Tooling

- `eslint-config-stonks`: centralized ESLint configuration settings
- `tsconfig`: centralized Typescript configuration settings
- `tailwind-config`: centralized Tailwind configuration settings
- `prettier-config`: centralized Prettier configuration settings

All applications and libraries are 100% [TypeScript](https://www.typescriptlang.org/).
