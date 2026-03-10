# Komivi Personal Platform

Modern personal website built with Next.js (App Router), TypeScript, and Tailwind CSS. It serves as a portfolio, project showcase, writing platform, and research space.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Markdown content (`content/writing`)
- Deployment: Vercel

## Project Architecture

```
app/            Next.js routes (App Router)
components/     Reusable UI components
content/        Profile, project data, and writing markdown
lib/            Content utilities and data models
public/         Static assets
styles/         Global styles and Tailwind layers
.github/        CI workflows
```

### Key App Routes

- `/` Home (hero, intro, featured projects, writing, CTA)
- `/about` About and skills
- `/projects` Project grid
- `/writing` Writing index
- `/writing/[slug]` Writing detail (Markdown)
- `/contact` Contact form + social links

### Content System

Markdown files live in `content/writing` and are parsed at build time using `gray-matter` and `remark`. Content models are defined in `lib/content.ts`.

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
3. Add/edit writing in `content/writing`
4. Update projects in `content/projects.ts`
5. Customize About and Home content

## License

All rights reserved.
