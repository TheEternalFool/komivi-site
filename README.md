# Komivi Personal Platform

Modern personal website built with Next.js (App Router), TypeScript, and Tailwind CSS. It serves as a portfolio, research hub, technical blog, and project showcase.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Markdown content (`posts/`)
- Deployment: Vercel

## Project Architecture

```
app/            Next.js routes (App Router)
components/     Reusable UI components
lib/            Utilities and data helpers (e.g., markdown loaders)
posts/          Markdown blog posts
styles/         Global styles and Tailwind layers
public/         Static assets
.github/        CI workflows
```

### Key App Routes

- `/` Home (hero, featured projects, latest posts, CTA)
- `/about` About and skills
- `/projects` Project grid
- `/blog` Blog index
- `/blog/[slug]` Blog post page (Markdown)
- `/contact` Contact form + social links

### Content System

Markdown files live in `posts/` and are parsed at build time using `gray-matter` and `remark`. Blog routes render dynamically with static params for each post slug.

## Development Workflow

### Branching

- `main` → production
- `dev` → development
- Feature branches should be created from `dev` and merged back into `dev`.

### Local Development

```bash
npm install
npm run dev
```

If you hit a port permission error, run:

```bash
PORT=3001 npm run dev -- -H 127.0.0.1
```

### CI

GitHub Actions builds on push and PR to `dev` and `main`.

File: `.github/workflows/ci.yml`

### Deployment

- `dev` → staging deployment on Vercel
- `main` → production deployment on Vercel

Once the repo is connected in Vercel, deployments happen automatically on push.

## Getting Started Checklist

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Add/edit blog posts in `posts/`
4. Update project content in `app/projects/page.tsx`
5. Customize About and Home content

## License

All rights reserved.
