# UI Evaluation Report #3
**Date:** 2026-03-24
**Screenshots:** `.claude/screenshots/3/`

---

## Overall Impression (First 5 Seconds)

Clean and minimal — this reads as a serious developer portfolio, not a flashy one. The hero lands well with confident typography, and the two-mode theme system works. But it sits a hair too close to "understated" tipping into "sparse." There's no image of Varun, no visual hook beyond floating pill shapes, and the pacing from section to section feels samey — every section uses the same flat background without visual breathing room or contrast between sections. The site is credible but not yet memorable.

---

## Top 5 Design Issues

### 1. Skills section — light mode broken fade (Web / Full-Stack + Concepts cards)
**Section:** Tech Stack / Skills
**What's wrong:** In light mode, the bottom two category cards (Web / Full-Stack and Concepts) are almost completely invisible — they're rendered at extremely low opacity, appearing ghosted out against the background. This looks like a bug where the background of those cards matches the page background too closely, or opacity is unintentionally applied. In dark mode both cards are fully legible. This is the most jarring issue on the page.

### 2. Hero decorative pills add noise without meaning
**Section:** Hero
**What's wrong:** The blurred pill/capsule shapes floating behind the name are an abstract visual motif with no clear purpose. In dark mode they look fine — moody and atmospheric. In light mode they look like unfinished placeholder shapes on a beige background. They don't reference any brand idea, technology, or personality. They make the hero feel busier without adding information or charm.

### 3. About section info cards have invisible borders in light mode
**Section:** Who I Am (right column cards)
**What's wrong:** The cards for "B.S. Math & CS", location ("Bay Area, CA"), and timeline info have borders that are nearly indistinguishable from the cream background. They read as floating text with no card weight. The hierarchy between the block of body text (left) and the factual data cards (right) collapses — both elements blend into one flat surface.

### 4. No visual differentiation between sections
**Section:** Full page
**What's wrong:** Every section shares the same flat background — cream in light, near-black in dark. There is zero alternating rhythm. Scrolling through the full-page composite, the sections blur together. A single alternating background (e.g., slightly lighter or darker panel for every other section) would create visual cadence and make navigation landmarks clearer.

### 5. Contact section is too sparse — no form, low visual weight
**Section:** Let's Build Something
**What's wrong:** The contact section contains a heading, two lines of copy, an email pill, a location pill, and three link buttons. There's nothing here that encourages action beyond clicking an email address. The section takes up very little vertical space and doesn't feel like a deliberate CTA — it feels like an afterthought. The footer micro-text ("UCSD Mathematics & Computer Science · Expected Dec 2026") is important but gets buried.

---

## Top 5 UX Issues

### 1. No contact form — high friction conversion
Email links (`mailto:`) require the user to have an email client configured and switch apps. This is the #1 friction point on any portfolio. Without a form, a meaningful percentage of interested recruiters or collaborators will bounce rather than contact. This is a direct lost opportunity.

### 2. Floating "Get in touch" button (dark mode only) is inconsistent
In dark mode, a floating sticky CTA "Get in touch →" appears in the bottom-right corner on the Experience, Projects, and Skills sections. In light mode, this button does not appear. This is a significant inconsistency — either both themes should show it or neither should. It also blocks content in the lower-right when scrolling (e.g., the last experience card's date partially overlaps with it).

### 3. Projects section image-to-text ratio is off
**Section:** Selected Work
The project cards have a large screenshot preview at top and a wall of text below. The descriptions are long and dense (3 bullet points + tag list). Most visitors won't read all of this. The cards need a clearer hierarchy: title → one-line hook → 2-3 bullets → tech stack tags. The current layout puts too much information in front of the reader without a clear lead.

### 4. About section skill tags are not visually distinct from body text
**Section:** Who I Am
The skill tags ("End-to-End Ownership", "Agentic AI", "Full-Stack") appear at the bottom of the bio section but look like plain pill chips without enough visual weight to differentiate them from body content. A recruiter skimming this section might miss them entirely.

### 5. No section anchoring feedback in navigation on scroll
The nav links (About, Experience, Projects, Skills, Contact) do highlight the active section in dark mode (e.g., "Experience" appears bold/underlined when on that section), but in light mode this behavior isn't clearly visible. Users scrolling through lose track of where they are on the page.

---

## What Already Looks Strong

- **Typography is confident.** The large section headings ("Varun Sharma", "Where I've Worked", "Selected Work") have great weight and scale. The font choice is clean and contemporary without being trendy.
- **Experience cards are well-structured.** Company name, role, dates, location, and bullets are all logically arranged. The "Current" badge is a smart detail.
- **Dark mode is genuinely good.** The overall dark mode aesthetic is moody and polished — the pill shapes work better in dark, the cards have readable contrast, and the GitHub heatmap reads clearly.
- **GitHub heatmap is a great trust signal.** 1,004 contributions with a visible activity graph is specific, verifiable proof of consistent output. This is one of the strongest credibility elements on the page.
- **Project screenshots in cards** are effective visual previews — they give context before the reader even reads the title.
- **Navigation is unobtrusive.** The minimal nav doesn't fight with content, and the icon row (resume, GitHub, theme toggle) on the right is a smart compact group.
- **"Let's Build Something" heading** is one of the best-worded elements on the site — warm and specific.

---

## Specific Fixes to Make First (Priority Order)

### P0 — Fix the light mode Skills section fade bug
The Web / Full-Stack and Concepts category cards are invisible in light mode. This is a critical visual bug that makes the site look broken to anyone viewing in light mode. Audit the CSS for those cards — likely an opacity or background-color issue where the card background matches the page background.

### P1 — Show the floating "Get in touch" CTA in both modes, or remove it from both
The sticky CTA button is present in dark mode across Experience/Projects/Skills, but absent in light mode. Pick one — either render it consistently across themes, or replace it with in-section CTAs that work in both. If keeping it, ensure it doesn't overlap card content.

### P2 — Add visual contrast between sections
Add even a subtle background shift (e.g., `bg-stone-50` vs `bg-white` in light, `bg-zinc-900` vs `bg-zinc-950` in dark) to every other section. This creates rhythm and makes the page feel structured rather than one continuous scroll.

### P3 — Add a contact form (or at minimum a mailto fallback that opens in-browser)
Replace or augment the email pill with a simple 3-field form (Name, Email, Message). Even a `mailto:` form submission is better than a bare link. This is likely the highest-ROI change for converting visitors into contacts.

### P4 — Strengthen About section info card borders
Increase the border opacity or add a subtle shadow to the data cards in the "Who I Am" section's right column. In light mode they currently disappear into the background.

### P5 — Tighten project card descriptions
Reduce each project description to 1 sentence max before the bullet list. Lead with the impact or problem solved, not the tech stack. Example: "LaTeX Resume Editor — Full-stack AI editor that writes and previews your resume in real time." Short, punchy, specific.

---

## Accessibility Concerns

- **Light mode Skills cards (P0 issue):** The near-invisible Web/Full-Stack and Concepts cards likely have contrast ratios below 1:1 effectively. This fails WCAG AA for text contrast.
- **Floating CTA button inconsistency:** If the button only appears in one theme, keyboard-navigating users who prefer light mode will never reach it.
- **Small tag text:** The skill and tech stack pills appear to be around 11-12px at full resolution. This is below the recommended minimum of 16px for body text and may be illegible on lower-resolution screens.
- **No visible focus indicators confirmed** from screenshots — links and buttons should have visible `:focus-visible` rings, especially important for the nav and CTA buttons.
- **GitHub heatmap color legend:** The "Less → More" legend at the bottom of the heatmap uses color alone to convey information. Users with color vision deficiency may not be able to interpret the gradient.

---

## Final Score: 6.8 / 10

**Justification:** The site has a solid, professional foundation. The dark mode in particular is attractive and cohesive, typography choices are strong, and the content itself (experience, project screenshots, GitHub heatmap) tells a compelling story. What holds it back is a handful of execution gaps: a broken light mode in the Skills section, inconsistent behavior between themes, no contact form reducing conversion, and a flat scrolling experience where sections don't differentiate themselves visually. Fix the P0/P1 issues and this becomes an 8+. Add section rhythm and a contact form and it's competing with top-tier developer portfolios.
