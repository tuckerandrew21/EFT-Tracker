---
name: "[EPIC] Intelligent Next Up Quest Suggestions"
about: Make "Next Up" suggestions more intelligent and personalized
title: "[EPIC] Intelligent Next Up Quest Suggestions"
labels: enhancement, quest-tracking, epic
---

# [EPIC] Make "Next Up" suggestions more intelligent and personalized

The "Next Up" panel currently suggests quests based on player level, Kappa requirements, chain starters, and map efficiency. While functional, it lacks intelligence about map synergy, quest chain momentum, difficulty matching, and player behavior patterns.

## Goal

Transform Next Up into a smart recommendation engine that helps players maximize efficiency and enjoyment by understanding their playstyle and game context.

## User Value

- Reduce time spent planning which quest to do next
- Maximize raid efficiency (multiple quests per raid)
- Better progression pacing (appropriate difficulty for skill level)
- Personalized to individual playstyle

## Implementation Phases

1. **Phase 1:** Core intelligence improvements (map synergy, chain momentum, trader progress, type diversity)
2. **Phase 2:** Difficulty awareness (use XP rewards to match quest difficulty to player level)
3. **Phase 3:** Behavioral learning (detect playstyle patterns and personalize suggestions)

See [Next Up Enhancement Plan](../../docs/next-up-enhancement-plan.md) for detailed research and implementation guidance.

## Success Metrics

- Users complete suggested quests more frequently
- Average quests per raid increases (better map efficiency)
- Positive user feedback on suggestions relevance
- Reduced "I don't know what to do next" support questions

## Technical Approach

- Enhance existing 4-tier priority algorithm (minimal risk)
- Client-side calculations only (no API rate limits)
- Real-time updates on quest completion
- Optional: Store minimal playstyle data for Phase 3

## Related Issues

- Phase 1: Core Intelligence Improvements
- Phase 2: Difficulty-Based Suggestions
- Phase 3: Behavioral Learning & Personalization
