# AGENTS.md

## Project purpose
This repository contains the personal website of Komivi Jarod Manuel Assiamua.
The site is a modern, light-first personal platform combining profile, projects, reading, and a live assistant.

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- OpenAI Responses API
- Vercel deployment target

## Engineering principles
- Prefer clarity over cleverness
- Prefer reusable components
- Avoid unnecessary dependencies
- Avoid overengineering
- Keep code readable and production-minded

## Design principles
- Light-first, premium, modern
- Bold typography and clean hierarchy
- Subtle motion and polished interactions
- Avoid clutter and gimmicks

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
- motion foundation
- homepage visual direction

Agent 2 (pages + content architecture)
- page routes and structure
- content models and scaffolding
- About, Education, Projects, Reading, Chess, Contact

Agent 3 (docs + quality)
- README, AGENTS, spec/plans
- CI and workflow docs
- metadata and SEO basics
- Vercel readiness

## When making changes
- Inspect existing files first
- Explain major structural choices briefly
- Make the smallest clean change that solves the task
- Ensure the app builds successfully after meaningful changes
