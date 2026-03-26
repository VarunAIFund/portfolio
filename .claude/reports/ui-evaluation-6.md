# UI Evaluation — Portfolio (Post-Redesign)
*Screenshots: `.claude/screenshots/12/` — Both light and dark mode*

---

## Overall Impression

**Significantly stronger than before.** Light mode is now a real first-class experience — the white card surfaces floating on warm cream create clear visual hierarchy where there was almost none previously. Dark mode remains the standout, atmospheric and polished. The contact section now has a readable description line and better proportions. The scroll indicator in the hero is finally legible. This portfolio reads as credible and professional. A recruiter landing on this would not bounce.

---

## Top 5 Design Issues

### 1. Skills section cards (light mode) — surface still lacks punch
**Section:** Tech Stack / light-5-skills.png
The four skill group cards still read as near-invisible boxes. The white card backgrounds are applied but the borders are so fine and the background contrast so subtle that the grid looks like ghosted outlines rather than solid, elevated surfaces. The Languages card and AI/ML card in the top row are barely distinguishable from each other visually. The bottom row (Web/Full-Stack, Concepts) appears even lighter. This section needs stronger card definition — a slightly darker border or more opaque card background.

### 2. Contact section — too much empty air below the pills
**Section:** Contact / light-6-contact.png, dark-6-contact.png
The description line ("Open to new grad roles...") is a real improvement. But there's a large dead zone between the email/location pills and the footer — several hundred pixels of nothing. The pills are also smaller than they deserve to be for the last CTA on the page. The section heading "Contact" jumps straight to actionable items without enough visual build-up. Compared to every other section's density, this feels underbuilt.

### 3. Movie Tracker project card — no thumbnail breaks grid rhythm
**Section:** Projects / light-4-projects.png
Three of four project cards have screenshot thumbnails. The Movie Tracker card (bottom-right) has no image and starts directly with the title and text. In the grid layout this creates a jarring visual asymmetry — the bottom half of the grid looks unfinished next to the Healthcare Scheduling Chatbot card. Either add a placeholder/gradient header, or reorder cards so the no-image card is not in the bottom-right anchor position.

### 4. Hero "Get in touch →" button (dark mode) — dangerously low contrast
**Section:** Hero / dark-1-hero.png
The secondary CTA ("Get in touch →") appears as a nearly invisible pill in dark mode — the border at `border-white/[0.10]` is barely perceptible against the dark background, and the text `text-white/70` merges with the void. "View Work" reads clearly while "Get in touch →" almost disappears. Two CTAs at drastically different visual weights creates confusion about which is primary.

### 5. About section stat sub-labels — insufficient contrast
**Section:** About / light-2-about.png
The stat cards in light mode now have clear white backgrounds (improvement), but the sub-label text (e.g. "Cognitive Science Minor", "Provost Honors 2023–2026") is rendered in `text-white/60`, which in light mode maps to approximately `rgba(13,12,10,0.60)` — around `#625f5a`. On a near-white card background this sits at roughly a 3.8:1 ratio — borderline WCAG AA for small text, and it *reads* even harder than that because the card label above it in gray and the value text in near-black create a 3-stop jump that makes the sub-label feel neglected.

---

## Top 5 UX Issues

### 1. No copyable plain-text email visible in the contact section
The email address is only accessible by clicking the pill button (mailto: link). Users who want to copy the address to paste into their own email client, or just read and remember it, have to hunt. Consider adding `hello@varunsharma.dev` as legible static text near the button, or making the pill show the address visibly at rest (it currently does on hover/focus, but isn't immediately scannable).

### 2. Navigation active state is too subtle
On scroll, the active nav link changes color — but the change is so subtle (a slight opacity increase) that it's nearly imperceptible, especially in light mode. A first-time visitor cannot reliably tell which section they are in. A simple underline, bold weight, or color shift would make section-tracking feel reliable.

### 3. Project grid imbalance creates "loading error" perception
The Movie Tracker card without a thumbnail looks, at first glance, like the image failed to load. The three adjacent cards all have screenshots with height-44 image headers. The bottom-right card with no image starts at the card title immediately, creating a significantly shorter visual block. This is a first-impression problem — a visitor might think the page is broken or incomplete.

### 4. Skill tags are not interactive but look like they should be
In both modes, the skill pill tags in the About section and Skills section look exactly like clickable filter buttons — rounded, bordered, small text. Users will naturally attempt to click them expecting filtering behavior. There's zero feedback when they do. Either add a tooltip or micro-interaction on click/hover, or visually differentiate them as labels (no hover state, no pointer cursor).

### 5. Contact section has no visual bridge from the heatmap above it
The GitHub heatmap sits in the Skills section, immediately above Contact. On scroll, the two sections bleed into each other without clear delineation — the heatmap bleeds into the Contact heading. The section divider (if any) is invisible. On the full-page view, Contact looks like an afterthought appended to Skills rather than a standalone destination.

---

## What Already Looks Strong

- **Dark mode atmosphere** — the deep navy + ambient teal-indigo glow is genuinely distinctive. This is not a generic dark portfolio; it has a personality.
- **Project thumbnails** — using real product screenshots is the right call. LaTeX Resume Editor and MediMinder both look like real, working software, which builds credibility immediately.
- **Typography scale** — the Syne heading at 6xl / 7xl scales crisply. Heading → subtitle → body has a clear three-stop hierarchy.
- **About section (light mode)** — the white cards now float cleanly on cream. The two-column bio + stats layout is well-proportioned and reads quickly.
- **Experience section (light mode)** — the white-card company cards now have obvious visual presence. DeepLearning.AI and AI Fund with "Current" badges are clear and scannable.
- **Scroll indicator** — the "scroll" label + animated chevron is a genuine upgrade. Readable at a glance in both modes.
- **GitHub heatmap** — a differentiating element most portfolios lack. Communicates active engagement with real data.
- **Floating CTA** — well-timed appearance, unobtrusive, auto-hides when contact section is visible. Good behavioral polish.

---

## Specific Fixes to Make First (Prioritized)

### Priority 1 — Skills card border boost in light mode
In `globals.css`, increase the light-mode border override for `border-white/[0.07]` and `border-white/[0.09]` from `rgba(13,12,10,0.26)` to at least `rgba(13,12,10,0.14)`. Also bump `bg-white/[0.03]` from `rgba(255,255,255,0.58)` to `rgba(255,255,255,0.80)` — the skills cards use this lower-opacity class. The goal is a card that reads as a surface, not a suggestion.

### Priority 2 — Secondary hero CTA contrast (dark mode)
Change `bg-white/[0.03] border border-white/[0.10] text-white/70` to `bg-white/[0.06] border border-white/[0.18] text-white/80` for the "Get in touch →" button. It needs to be readable as an option, not invisible. The primary button can still have higher visual weight.

### Priority 3 — Movie Tracker placeholder header
Add a gradient placeholder (`bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent h-44`) for the Movie Tracker card when `project.image` is null. This keeps the grid visually balanced and removes the "broken image" perception.

### Priority 4 — Contact section padding / layout
Reduce the bottom padding on the section or add a visual element between the pills and the footer. Options: a brief "or find me on" row pointing to GitHub/LinkedIn with icons, or just reduce the `py-16 md:py-24` to `py-12 md:py-16` for this section specifically. The current whitespace reads as unfinished.

### Priority 5 — Nav active state
Add `font-medium` and a visible color or underline to the active nav item. The current subtle opacity shift is insufficient for orientation.

---

## Accessibility Concerns

| Issue | Location | Severity |
|---|---|---|
| `text-white/30` override = `rgba(13,12,10,0.28)` ≈ 2.4:1 | LocalTime, footer metadata (light mode) | Fail — WCAG AA requires 4.5:1 for small text |
| Stat sub-labels at ~3.8:1 on white card | About section (light mode) | Borderline — borderline pass but perceived as harder |
| Skill tag hover has no focus ring visible | Skills, About pill tags | Keyboard nav: unclear what is interactive |
| GitHub link icons (footer) lack visible focus outline | Contact footer | Keyboard nav gap |
| `aria-hidden` on LocalTime skips it from screen readers | Contact | Acceptable for decorative clock, confirm it's truly supplemental |

---

## Final Score

**7.5 / 10**

Up from an estimated 5/10 in light mode pre-edits. Dark mode was already 7/10 and remains at 7.5/10 — the changes tightened it slightly. The biggest single remaining gap is the Skills section card definition in light mode and the underdeveloped Contact section. Get those two right and this is an 8.5 easily. The bones are strong, the typography is clean, and the dark mode atmosphere is genuinely memorable. What separates this from a 9 is the light mode still needing one more pass and the contact section not closing the loop with enough conviction.

---

*Evaluation date: 2026-03-25 | Screenshots: .claude/screenshots/12/*
