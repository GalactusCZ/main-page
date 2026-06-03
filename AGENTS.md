# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 5 personal portfolio with React components and Tailwind CSS. Page routes live in `src/pages`: `src/pages/index.astro` is the English homepage and `src/pages/cs/index.astro` is the Czech route. Shared layout is in `src/layouts/Layout.astro`. Reusable UI and section components live in `src/components`, with primitives under `src/components/ui`. Portfolio content, links, locale strings, and resume paths are centralized in `src/lib/data.ts`; edit that file before hard-coding content in components. Global styles live in `src/styles/global.css`. Static files, PDFs, sitemap, robots file, and favicon live in `public`.

## Build, Test, and Development Commands

- `bun install`: install dependencies from `bun.lock`.
- `bun run dev`: start the Astro development server.
- `bun run build`: build the production site into `dist` and run Astro checks during the build.
- `bun run preview`: preview the built site locally.
- `docker build -t main-page .`: build the container image locally for deployment checks.

## Coding Style & Naming Conventions

Use TypeScript, Astro, and React patterns already present in the repo. Components use PascalCase filenames such as `HeroSection.tsx`; utility modules use lowercase names such as `utils.ts`. Prefer the `@/` import alias for files under `src`. Keep indentation at two spaces in Astro, TS/TSX, JSON, and CSS. Style with Tailwind utility classes and shared CSS variables in `global.css`; use `cn` from `src/lib/utils.ts` for conditional class composition.

## Testing Guidelines

There is currently no dedicated test runner or coverage target. Treat `bun run build` as the required validation step before committing. For UI changes, also run `bun run dev` or `bun run preview` and manually check both `/` and `/cs/`, including desktop and mobile widths, dark/light theme behavior, and resume/download links.

## Commit & Pull Request Guidelines

Recent history uses short Conventional Commit-style messages: `feat: add ...`, `fix: remove ...`, and `refact: update ...`. Keep commits focused and use a lowercase type prefix. Pull requests should include a concise description, list of visible changes, validation performed, and screenshots for UI changes. Mention linked issues when applicable and call out changes to public assets, resumes, Docker/nginx config, or locale content.

## Security & Configuration Tips

Do not commit secrets or machine-specific configuration. Public files are served as-is, so verify PDFs and contact details before adding them to `public`. Keep dependency changes intentional and preserve `bun.lock` with `package.json` updates.
