# Komivi Personal Platform

Modern personal website built with Next.js (App Router), TypeScript, and Tailwind CSS. It serves as a portfolio, project showcase, writing platform, and curated reading space.

## Project Purpose

This repository contains the personal website of Komivi Jarod Manuel Assiamua. The site is a modern, text-first personal platform combining portfolio, projects, writing, and research-oriented content.

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
content/        Profile, education, projects, reading, chess, and writing markdown
lib/            Content utilities and data models
public/         Static assets
styles/         Global styles and Tailwind layers
.github/        CI workflows
```

### Core Routes

- `/` Home
- `/about` About
- `/education` Education
- `/projects` Projects
- `/writing` Writing
- `/writing/[slug]` Writing detail
- `/reading` Reading
- `/chess` Chess
- `/contact` Contact

### Content System

Markdown files live in `content/writing` and are parsed at build time using `gray-matter` and `remark`. Data models live in `lib/content.ts`.

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
- Education: `content/education.ts`
- Reading lists: `content/reading.ts`
- Chess: `content/chess.ts`
- Profile: `content/profile.ts`
- Social links: `content/social.ts`

## License

All rights reserved.
