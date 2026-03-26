# UI Evaluation — Portfolio (varunsharma.dev)
**Date:** 2026-03-24
**Screenshots:** `.claude/screenshots/2/`
**Evaluator:** Senior Frontend Designer / UX Engineer perspective

---

## Overall Impression

First 5 seconds: Clean, minimal, modern. The hero immediately communicates the name and role. The floating pill/capsule shapes add personality without being distracting. The typography is strong and confident. However, the light mode suffers from a near-invisible card contrast problem — sections blur together on the beige/cream background. Dark mode reads crisper. First impression is **"ambitious but needs more visual depth"**.

---

## Top 5 Design Issues

### 1. Light Mode Card Contrast is Near-Zero
**Sections:** Experience, Projects, Skills
All card components in light mode have borders and backgrounds so close in value to the page background (both are warm off-white/beige) that the cards essentially disappear. The experience cards blend into the page. The skill tag group cards are ghost-like. This makes the light mode feel flat, undifferentiated, and hard to scan. There's no visual layering or depth at all in light mode.

### 2. Skills Section: "Concepts" Category Missing in Light Mode
**Section:** Skills / Tech Stack
The dark mode clearly shows four skill groups: Languages, AI/ML, Web/Full-Stack, and **Concepts** (with tags like Structured Outputs, Transfer Learning, Data Pipelines, etc.). In the light mode screenshot, the Concepts card is either hidden or not rendering — only three cards appear. This is a likely rendering/visibility bug specific to light mode.

### 3. Hero Section Floating Shapes Vanish in Dark Mode
**Section:** Hero
The floating pill/capsule shapes are a nice design detail in light mode — they add dimensionality. In dark mode, they are nearly invisible against the near-black background. The shapes are clearly dark-on-dark. They need either a different treatment (glow, lighter fill, outline style) or higher contrast fills to work in both themes.

### 4. Project Cards are Unreadable in Light Mode
**Section:** Projects / Selected Work
In light mode, the project cards sit on the same off-white surface with nearly invisible card borders. The screenshots inside the cards are the only elements that give any visual separation. The card backgrounds and the page background are the same value — there is no shadow, elevation, or border-radius contrast that communicates "this is a card." Compare to dark mode, where the dark card on the even-darker background reads much more cleanly.

### 5. Footer is Severely Understyled
**Section:** Contact / Footer
The footer line ("Varun Sharma · hello@varunsharma.dev · UC San Diego Mathematics & Computer Science · Expected Dec 2026") reads as an afterthought. It's small, low-contrast gray text with no visual design treatment. The footer has no visual separator from the contact section above it. In light mode it nearly disappears into the background. No copyright, no year, no visual hierarchy.

---

## Top 5 UX Issues

### 1. No Contact Form — Entirely Dependent on External Links
**Section:** Contact
The contact section offers: an email address, GitHub, LinkedIn, and Resume download. There is no inline contact form. Recruiters and collaborators who want to reach out must open their email client, navigate to GitHub/LinkedIn, or download a PDF. A simple name/email/message form with Formspree or similar would dramatically improve conversion. This is the single biggest UX gap.

### 2. Hero CTAs Have Identical Visual Weight
**Section:** Hero
"View Work" and "Get in Touch" are both rendered as similar pill-button outlines. Neither reads as primary. Best practice is to have one filled/solid primary CTA (View Work) and one ghost/outline secondary CTA (Get in Touch). Currently a visitor's eye doesn't know which to click first.

### 3. "Get in Touch" Floating Button Appears Inconsistently
**Sections:** Experience, Projects, Contact (dark mode only)
A floating "Get in touch →" sticky button appears in the bottom-right corner in some dark mode section screenshots (Experience, Projects) but is absent in others. It doesn't appear to show in light mode at all. If this is intentional (showing after scrolling past hero), the trigger condition isn't consistent across themes, which breaks the UX contract.

### 4. Experience Section Cards Don't Scroll-Hint Properly
**Section:** Experience
The third experience card (Planck AI) is partially cut off at the bottom of the viewport, which is good scroll-hinting. However, the card's text content (role title, bullet points) is the same visual weight as the cards above. There's no visual affordance distinguishing "current" roles from "past" beyond the small "Current" badge — which is a tiny pill badge that could easily be missed.

### 5. About Section Stat Cards Are Too Small and Hard to Parse
**Section:** About / Who I Am
The stat cards on the right side of the About section (GPA, location, dates) are tiny boxes with very small text. In light mode they are barely legible. These stats are valuable signal (3.9 GPA!) but are presented like an afterthought. They deserve more visual prominence — either larger cards, bolder numbers, or a different layout that lets them breathe.

---

## What Already Looks Strong

- **Typography scale is excellent.** The section headings ("Varun Sharma", "Who I Am", "Where I've Worked", "Selected Work") are bold, confident, and appropriately large. Hierarchy is clear.
- **Hero design is distinctive.** The floating pill shapes with gradient background is a memorable, personal aesthetic that doesn't look generic.
- **Dark mode overall reads beautifully.** The near-black background with clean white text, subtle card borders, and the GitHub heatmap all look polished.
- **Section labeling pattern is consistent.** Small caps "ABOUT", "EXPERIENCE", "PROJECTS", etc. above each heading is a professional touch that aids navigation.
- **Navigation is clean and minimal.** The fixed top nav with section links and icon cluster on the right is unobtrusive and well-placed.
- **Project screenshots add immediacy.** Showing actual UI screenshots in project cards is far more effective than abstract placeholders.
- **Tech tag pills are scannable.** The grouped skill tags (Languages, AI/ML, Web/Full-Stack) let a recruiter assess technical fit in seconds.
- **GitHub activity heatmap is a strong trust signal.** 1,004 contributions last year is impressive and the visualization communicates consistent engagement.

---

## Specific Fixes to Make First (Priority Order)

### P0 — Critical Visibility Bugs
1. **Fix light mode card contrast.** Add a subtle shadow (`box-shadow: 0 1px 4px rgba(0,0,0,0.08)`) or slightly darker card background (`#f0ede8` vs page `#f5f2ec` for example) to all card components in light mode. Cards need to lift off the page visually.
2. **Fix Concepts skill group not rendering in light mode.** Check if it has a conditional render or a CSS display:none that activates in light mode.

### P1 — High Impact
3. **Fix dark mode hero floating shapes.** Give them a lighter opacity fill, or a subtle glow/gradient border so they're visible on the dark background.
4. **Differentiate hero CTAs.** Make "View Work" a solid filled button (dark fill, white text) and "Get in Touch" the outline style. The primary action should be unmistakable.
5. **Add a contact form.** Even a 3-field form (name, email, message) routed through Formspree or Resend would dramatically improve conversion from visitors who aren't LinkedIn-native.

### P2 — Medium Impact
6. **Standardize the sticky "Get in touch" floating button.** Make it appear consistently in both light and dark mode, triggered after scrolling past the hero section. Right now it's theme-inconsistent.
7. **Enlarge the About section stats.** Consider making GPA, location, and dates larger and bolder — these are credibility signals that deserve prominence.
8. **Style the footer.** Add a visual separator (thin line or padding), consider a slightly darker background, and ensure the text contrast meets WCAG AA (currently borderline in light mode).

### P3 — Polish
9. **Add hover states to project cards.** Currently the project cards don't appear to have obvious hover interactions. A subtle lift (transform: translateY(-2px)) or border highlight would make them feel interactive.
10. **Add a photo or avatar to the About section.** The "Who I Am" section is entirely text + small stat cards. A professional photo would humanize it and increase trust/memorability.

---

## Accessibility Concerns

- **Footer text contrast (light mode):** The footer text reads as ~#888 gray on ~#f5f2ec cream. This likely fails WCAG AA (4.5:1 minimum for body text). Darken to at least #666.
- **Stat card text in About section:** Very small text (~11-12px estimated) in light mode with low contrast — needs verification but likely fails WCAG AA.
- **Section label small caps ("ABOUT", "SKILLS"):** These uppercase tracking labels are low contrast against the page in light mode. Need to verify contrast ratio.
- **Keyboard navigation:** Cannot verify from screenshots, but sticky "Get in Touch" floating button needs to be keyboard-focusable and have a visible focus ring.
- **Alt text for project screenshots:** Cannot verify from screenshots, but all `<img>` project screenshots should have descriptive alt text.
- **Color-only information:** The GitHub heatmap uses color intensity as the sole encoding for contribution count. A screen reader or colorblind user gets no information. Consider adding a tooltip with count on hover (if not already present).

---

## Final Score

**7.2 / 10**

**Justification:** The portfolio has a strong, distinctive aesthetic — the typography, layout structure, and dark mode presentation are genuinely polished. The hero is memorable. But it's held back by significant light mode contrast failures that make cards effectively invisible, a missing contact form, inconsistent interactive states, and small accessibility gaps. Dark mode rates an 8.5 on its own; light mode closer to a 5.5. The bones are excellent — execution in light mode needs a focused pass.
