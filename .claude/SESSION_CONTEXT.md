# Session Context - EFT Quest Tracker

**Last Updated:** 2025-11-24

## Project Overview

**EFT Quest Tracker** - A web app to track Escape from Tarkov quest progress across all traders with dependency visualization and wiki integration.

### Core Features

1. Quest progress tracking (not started / in progress / completed)
2. Trader-organized views (Prapor, Therapist, Skier, Peacekeeper, Mechanic, Ragman, Jaeger, Fence, Lightkeeper)
3. Quest dependency visualization
4. Wiki integration (links to Tarkov Wiki)
5. User authentication (save progress)
6. Filter/search by name, trader, status, level

## Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------- |
| Framework | Next.js 14 (App Router)          |
| Language  | TypeScript                       |
| Styling   | Tailwind CSS, shadcn/ui          |
| Database  | PostgreSQL                       |
| ORM       | Prisma                           |
| Auth      | NextAuth.js                      |
| Hosting   | Vercel (app), Supabase/Neon (db) |

## MCP Servers Configured

| Server       | Status                    |
| ------------ | ------------------------- |
| GitHub       | ✅ Working                |
| Context7     | ✅ Working                |
| Brave Search | ✅ Configured             |
| Playwright   | ✅ Fixed                  |
| Memory       | ✅ Ready                  |
| Git          | ✅ Ready                  |
| Filesystem   | ✅ Ready                  |
| Docker       | ✅ Ready                  |
| SQLite       | ✅ Ready                  |
| Postgres     | ⏸️ Need connection string |

## Project Links

- **Repo:** https://github.com/andrew-tucker-razorvision/EFT-Tracker
- **Project Board:** https://github.com/users/andrew-tucker-razorvision/projects/4/views/1
- **Data Source:** https://escapefromtarkov.fandom.com/wiki/Quests

## Current Status

- [x] Repository created from template
- [x] MCP servers configured (GitHub, Context7, Brave Search, Playwright)
- [x] README updated for EFT-Tracker
- [ ] Template cleanup (.project-intake removal)
- [ ] GitHub issues created for roadmap
- [ ] Next.js project initialized
- [ ] Database schema designed
- [ ] Quest data scraped/imported

## Notes

- Windows environment with PowerShell
- Using GitHub CLI for issue/project management
- Quest data will be sourced from Tarkov Wiki
