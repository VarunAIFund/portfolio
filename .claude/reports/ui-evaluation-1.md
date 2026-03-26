# UI Evaluation Report — Portfolio (varunsharma.dev)
**Date:** 2026-03-24
**Evaluator:** Claude (senior frontend design + UX perspective)
**Screenshots:** `.claude/screenshots/1/`
**Modes evaluated:** Light + Dark

---

## Overall Impression

Clean, minimal aesthetic that reads as modern and professional at a glance. The geometric floating pill/capsule shapes in the hero are distinctive and give a strong first impression. Dark mode feels more polished and confident than light mode. The overall hierarchy is clear: name → role → CTA. The site is tasteful but slightly cold — there's very little personality or warmth beyond the abstract decorations. First 5 seconds: *"Developer portfolio. Minimal. Safe. Credible."* — but not especially memorable.

---

## Top 5 Design Issues

### 1. Light Mode Hero — Washed-Out, Low-Energy Background
**Section:** Hero (light)
The geometric shapes in light mode are so desaturated they nearly disappear into the off-white background. The color palette (muted pinks, grays) reads as timid. The hero is the most critical real estate on the page, and light mode feels flat and boring compared to dark mode where the shapes have actual depth and drama. The light version looks like a placeholder.

### 2. Skills Section — Two-Tier Visual Weight Problem
**Section:** Skills (light mode)
The "WEB / FULL-STACK" and "CONCEPTS" skill cards in light mode are nearly invisible — they render almost entirely white-on-white, appearing ghosted or disabled. The Languages and AI/ML cards are clearly visible but the bottom row looks broken or empty at a glance. Dark mode handles this correctly with consistent card contrast.

### 3. About Section — Dense Text Block, No Visual Relief
**Section:** About
"Who I Am" is a wall of small gray text with no visual breathing room or scannable structure. The inline bold words (`senior standing`, `3.9 GPA`, `end-to-end ownership`) help but barely. The side panel (education/work info) appears as tiny cards in a grid that feels cramped relative to the sprawling text column. The section lacks any focal point for the eye to rest on beyond the heading.

### 4. Contact Section — Extremely Sparse / Anticlimactic
**Section:** Contact
"Let's Build Something" is the final impression left on the visitor, and it's disappointingly thin. There's a heading, two lines of copy, and a single mailto chip + location chip. No form, no social links beyond the footer bar, no visual weight. The footer bar is extremely small and low contrast. The section ends the page on a whisper, not a statement.

### 5. Typography Scale Inconsistency Across Sections
The section headings ("Who I Am", "Where I've Worked", "Selected Work", "Tech Stack") use a large, heavy serif-adjacent display font that looks great. However, body text across sections is inconsistently sized — About uses quite small body text, while Experience uses a more comfortable size. The pill/tag elements in Skills also feel slightly oversized relative to the body type, creating visual choppiness.

---

## Top 5 UX Issues

### 1. Hero CTA — No Clear Primary Action
**Section:** Hero
There are two equally weighted CTAs: "View Work" and "Get in Touch →". Neither is primary. They share the same visual style (pill buttons with similar weight). A visitor doesn't know which to click first. The more critical CTA for a portfolio is "View Work" — it should be the dominant button.

### 2. Navigation Is Invisible in Hero (Light Mode)
**Section:** Nav / Hero (light)
The top navigation bar has extremely low contrast against the light hero background. The links ("About", "Experience", "Projects", "Skills", "Contact") are barely readable. The icon cluster on the right (social links, theme toggle) is similarly muted. A visitor might not even register the nav bar exists at first glance.

### 3. Projects Section — No CTA or "See All" Link Visible
**Section:** Projects
The projects grid shows 2-3 items but there's no visible "See all projects" link or count indicator in the screenshot. If there are more projects, users have no signal. The "3 images" badge on the LaTeX project thumbnail is a positive UX signal but inconsistent — other projects don't show image counts.

### 4. About Section — Side Panel Information Is Tiny and Disconnected
**Section:** About
The right-side cards (B.S. Math & CS, UCSD, GPA, Bay Area, December 2026) appear as dense micro-cards in a grid. They're visually disconnected from the prose. Users scanning the page won't naturally register that the key facts (graduation date, GPA, location) are in that panel — it blends into the background. In light mode the cards nearly disappear.

### 5. Experience Section — Scroll Depth Unknown, No Progress Signal
**Section:** Experience
The experience entries are displayed without any visual timeline or progress indicator. The third entry (Planck AI) is cut off in the screenshot. There's no indication of how many roles are listed or a way to collapse/expand. For longer experience sections, users may abandon scrolling before seeing all entries.

---

## What Already Looks Strong

- **Dark mode overall:** Cohesive, confident, and sharp. The dark background with the geometric shapes is genuinely impressive as a hero. The experience and projects cards read cleanly.
- **Typography pairing:** The large display heading font ("Varun Sharma", section titles) is well-chosen and creates strong visual hierarchy. The weight contrast between headings and body reads correctly.
- **GitHub Activity heatmap:** A smart, concrete credibility signal. The 1,004 contributions callout is effective social proof. The heatmap itself is clearly rendered in dark mode.
- **Project card previews:** Using actual app screenshots as card thumbnails is far more effective than abstract graphics. The LaTeX Resume Editor screenshot is particularly effective.
- **Skill tag design:** The pill/badge tag components are clean and readable. Categories (Languages, AI/ML, Web, Concepts) are well organized and scannable.
- **Navigation active state:** The current section is highlighted in the nav (e.g., "Skills" is underlined when in that section). This is correct and well-implemented.
- **Local time display in Contact:** Showing "2:17 PM PT" is a thoughtful, human touch that signals approachability and timezone awareness.

---

## Specific Fixes to Make First (Priority Order)

### Priority 1: Fix Light Mode Hero Contrast
The geometric shapes need more saturation and opacity in light mode. Either increase the color saturation of the pill shapes or darken the background tint. Right now the light hero looks washed out vs. the dark hero which has genuine depth. This is the first thing every visitor sees.

### Priority 2: Fix Skills Section Ghost Cards (Light Mode)
The "WEB / FULL-STACK" and "CONCEPTS" cards appear invisible in light mode. Check the card background color — it's likely too close to the page background. Add a subtle border or increase the card surface opacity so all four quadrants are visually consistent.

### Priority 3: Differentiate Hero CTAs
Make "View Work" a filled primary button and "Get in Touch →" a ghost/outline secondary button. This creates clear hierarchy and guides the user's eye to the most appropriate first action.

### Priority 4: About Section — Add Visual Breathing Room
Break the prose into shorter paragraphs, or add one visual element (avatar, a key stat callout, an accent block) to give the eye somewhere to land. The side panel facts should be more prominent — consider larger cards with more whitespace or moving key facts (school, graduation, GPA) inline as highlighted stats.

### Priority 5: Contact Section — Expand the CTA
Add at minimum: a LinkedIn link button, a GitHub button, and consider a simple contact form or a Calendly-style link. "Let's Build Something" with just an email address is underselling the section. The footer bar is also too small — consider giving it more vertical padding and making the links more readable.

### Priority 6: Improve Nav Legibility in Light Mode
Increase nav link contrast against the hero background. Consider adding a subtle backdrop blur/frosted glass effect on the nav bar so it remains readable regardless of what's behind it.

---

## Accessibility Concerns

- **Light mode nav contrast:** Nav links in hero appear to be very light gray on near-white — almost certainly fail WCAG AA (4.5:1 ratio minimum for normal text). This needs a contrast audit.
- **About section body text:** The gray text on off-white background in light mode looks borderline — small body text at low contrast is a screen reader / vision impairment risk.
- **Ghost skill cards (light mode):** White cards on white background fail any contrast requirement.
- **"EXPERIENCE", "ABOUT", "SKILLS" section labels:** The small all-caps labels above each section heading are extremely low contrast in light mode — they may not meet WCAG AA at all.
- **Keyboard navigation:** Cannot assess from screenshots alone, but pill/tag elements and social icon links in the header need verified focus states.
- **Icon-only links:** The social icons in the top-right nav appear to be icon-only with no visible label — these need `aria-label` attributes to be screen-reader accessible.

---

## Final Score

**6.5 / 10**

**Justification:** The dark mode is genuinely strong (7.5/10) and demonstrates real design sensibility — clean, modern, technically polished. But the light mode brings the overall score down significantly with its washed-out hero, broken skill cards, and near-invisible navigation. The About and Contact sections feel unfinished relative to the quality of the Experience and Projects sections. The core design language is right; this needs refinement passes on light mode contrast and section completeness, not a redesign.

---

*Generated by Claude Code — evaluate-ui skill*
