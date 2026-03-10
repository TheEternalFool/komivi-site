# Komivi Personal Platform

Modern personal website built with Next.js (App Router), TypeScript, and Tailwind CSS. It serves as a portfolio, project showcase, and curated reading space with an AI assistant.

## Project Purpose

This repository contains the personal website of Komivi Jarod Manuel Assiamua. The site is a modern, light-first personal platform combining profile, projects, reading, and research-oriented context.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- OpenAI Responses API (assistant)
- Deployment target: Vercel

## Architecture

```
app/            Next.js routes (App Router)
components/     Reusable UI components
content/        Profile, education, projects, reading, chess
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
- `/reading` Reading
- `/chess` Chess
- `/contact` Contact

### Assistant

The homepage includes a live assistant panel backed by a Route Handler (`app/api/chat/route.ts`).

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

## Configuration

Create a `.env.local` file with:

```
OPENAI_API_KEY=your_key
OPENAI_MODEL=gpt-4.1-mini
```

## Content Editing

- Projects: `content/projects.ts`
- Education: `content/education.ts`
- Reading lists: `content/reading.ts`
- Chess: `content/chess.ts`
- Profile: `content/profile.ts`
- Social links: `content/social.ts`

## License

All rights reserved.
