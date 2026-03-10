# AGENTS.md

## Project purpose
This repository contains the personal website of Komivi Jarod Manuel Assiamua.
The site is a modern, text-first personal platform combining portfolio, projects, writing, and curated reading.

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Markdown or MDX content
- Vercel deployment target

## Engineering principles
- Prefer clarity over cleverness
- Prefer reusable components
- Avoid unnecessary dependencies
- Avoid overengineering
- Keep code readable and production-minded

## Design principles
- Minimal
- Elegant
- Technical
- Text-first
- Dark-first if appropriate
- Avoid generic startup aesthetics
- Avoid flashy interactions unless they improve clarity

## Git workflow
- main = production
- dev = development
- feature branches branch off from dev

## Content rules
- Do not invent personal facts
- Clearly mark placeholder content
- Keep copy concise, thoughtful, and professional

## 3-agent ownership model

Agent 1 (design system + shared UI)
- design system and tokens
- shared UI components
- layout, navbar, footer
- reusable components

Agent 2 (pages + content architecture)
- page routes and structure
- content models and markdown scaffolding
- About, Education, Projects, Writing, Reading, Chess, Contact
- homepage content structure

Agent 3 (docs + quality)
- AGENTS.md, README.md, spec.md, plans.md
- CI and workflow docs
- metadata and SEO basics
- Vercel readiness

## When making changes
- Inspect existing files first
- Explain major structural choices briefly
- Make the smallest clean change that solves the task
- Ensure the app builds successfully after meaningful changes
