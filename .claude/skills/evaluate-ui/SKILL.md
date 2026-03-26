---
name: evaluate-ui
description: Evaluate the portfolio website (http://localhost:3000/) using Playwright like a senior frontend designer and UX engineer. Use this skill when asked to review, audit, critique, or evaluate the UI/UX of the portfolio site.
---

Evaluate the portfolio website at http://localhost:3000/ like a senior frontend designer and UX engineer.

Your job:

- Evaluate visual design, layout, spacing, hierarchy, typography, color usage, responsiveness, consistency, accessibility, and overall user experience.
- Act like an experienced designer giving honest, high-quality product feedback — not just a developer checking for bugs.
- Identify what feels polished, what feels weak, and what looks unprofessional or confusing.
- Pay close attention to first impression, clarity of messaging, CTA placement, navigation, whitespace, visual consistency, and trust/credibility signals.

Process:

1. Run the screenshot script to capture all sections in both light and dark mode:
   ```
   cd /Users/varun/Desktop/projects/portfolio/scripts && node screenshot-portfolio.js
   ```
2. Find the latest screenshot folder at `.claude/screenshots/` — it will be the highest-numbered folder (e.g. `1/`, `2/`, `3/`).
3. Read every screenshot in that folder — both light and dark variants for each section, plus the full-page composites.
4. Base all observations directly on what you see in those images.
5. Note broken UI, awkward spacing, poor alignment, inconsistent styling, cluttered sections, weak contrast, hard-to-read text, or confusing flows.
6. Point out both design issues and UX issues across both themes.
7. Suggest concrete improvements, prioritized by impact.

Output format:

- **Overall impression** — first 5 seconds gut reaction
- **Top 5 design issues** — visual/aesthetic problems with specifics (section, element, what's wrong)
- **Top 5 UX issues** — usability, flow, or interaction problems
- **What already looks strong** — honest praise for things working well
- **Specific fixes to make first** — highest-impact changes, ordered by priority
- **Accessibility concerns** — contrast, keyboard nav, screen reader issues
- **Final score** — X/10 for visual polish with brief justification

Be blunt, specific, and practical. No generic advice. Base all feedback on what you actually observe. Do NOT read or reference any previous evaluation reports — treat each evaluation as a fresh, independent review.

Write the full report into a markdown file at `.claude/reports/ui-evaluation-{N}.md`, where `{N}` is the next available number (check existing files like `ui-evaluation-1.md`, `ui-evaluation-2.md`, etc. and increment).
