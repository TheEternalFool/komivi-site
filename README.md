# Komivi Personal Platform

Modern personal website built with Next.js (App Router), TypeScript, and Tailwind CSS. It serves as a portfolio, project showcase, writing platform, and research space.

## Project Purpose

This repository contains the personal website of Komivi Assiamua. The site is a modern, text-first personal platform combining portfolio, projects, and writing.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Markdown content (`content/writing`)
- Deployment target: Vercel

## Architecture

```
app/            Next.js routes (App Router)
components/     Reusable UI components
content/        Profile, project data, and writing markdown
lib/            Content utilities and data models
public/         Static assets
styles/         Global styles and Tailwind layers
.github/        CI workflows
```

### Core Routes

- `/` Home (hero, intro, featured projects, writing, CTA)
- `/about` About and skills
- `/projects` Project grid
- `/writing` Writing index
- `/writing/[slug]` Writing detail (Markdown)
- `/contact` Contact form + social links

### Content System

Markdown files live in `content/writing` and are parsed at build time using `gray-matter` and `remark`. Content models are defined in `lib/content.ts`.

## Pipelines

### Git Workflow

- `main` → production
- `dev` → development/staging
- Feature branches branch off `dev` and merge back into `dev`

### CI

GitHub Actions builds on push and PR to `dev` and `main`.

File: `.github/workflows/ci.yml`

### Deployment

- `dev` → Vercel preview (staging)
- `main` → Vercel production

Once the repo is connected in Vercel, deployments happen automatically on push.

## Development

### Local Setup

```bash
npm install
npm run dev
```

If you hit a port permission error:

```bash
PORT=3001 npm run dev -- -H 127.0.0.1
```

### Build

```bash
npm run build
```

## Content Editing

- Writing posts: `content/writing/*.md`
- Projects: `content/projects.ts`
- Profile details: `content/profile.ts`
- Social links: `content/social.ts`

## License

All rights reserved.
