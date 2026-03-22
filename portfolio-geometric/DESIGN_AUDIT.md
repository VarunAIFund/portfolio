# Design & UX Audit — Varun Sharma Portfolio

**Audited:** March 22, 2026  
**URL:** http://localhost:3003/  
**Viewport tested:** 1280 × 720 (desktop)  
**Auditor perspective:** Senior frontend designer & UX engineer

---

## Overall Impression

This is a clean, dark-themed single-page portfolio with tasteful geometric background shapes, solid typography choices (Syne + DM Sans), and a consistent visual system. The first impression is cinematic and premium — it feels like it belongs to someone who cares about craft. The content hierarchy is logical and the information architecture makes sense for a student/early-career portfolio.

However, the site leans **too heavily into restraint**. The ultra-low-opacity design language (borders at 6-8%, text at 40-65%, backgrounds at 2-4%) creates an overall feeling of *dimness* that hurts readability and makes the site feel washed out on many monitors. There's a fine line between elegant minimalism and making your content hard to read — this site occasionally crosses it.

The site also lacks **proof artifacts** — no project screenshots, no GitHub links, no live demo links, no LinkedIn. For a portfolio whose entire purpose is to get someone hired, these are critical omissions.

---

## Top 5 Design Issues

### 1. Pervasive Low-Contrast Text Hierarchy (High Impact)
Almost every text element sits between `white/40%` and `white/65%`. The section labels ("ABOUT", "EXPERIENCE", etc.) at `white/40%` on `#030303` yield a contrast ratio of **3.59:1** — failing WCAG AA for normal text. The stat card labels, sub-text at `white/45%` (4.35:1), and pill tags at `white/55%` are all borderline. On a non-calibrated monitor or in a room with any ambient light, large chunks of this site become genuinely hard to read.

**Fix:** Bump section labels to `white/50%` minimum. Body text should be `white/75%` minimum. Stat sub-text to `white/60%`. The goal is elegant, not invisible.

### 2. No Visual Proof in Projects Section (High Impact)
The Projects section is text-only — no screenshots, no mockups, no thumbnails. This is a portfolio site. Recruiters and hiring managers scan visually. A wall of text cards with no imagery makes even impressive projects look underwhelming. The Healthcare Chatbot and MediMinder both have UIs — they should be shown.

**Fix:** Add a subtle screenshot or mockup image to each project card, even if it's a small cropped thumbnail in the corner or top of the card. If you don't have screenshots, generate simple mockups.

### 3. Excessive Section Padding Creates a "Scrolling Through Void" Feel (Medium Impact)
Every section has `160px` top and bottom padding (py-40). Combined with the almost-black backgrounds and very subtle gradient orbs, this creates enormous dark dead zones between sections. The total page height is **5,769px** for what is essentially 6 sections of content. The experience section alone is 1,376px tall. Users feel like they're scrolling through darkness.

**Fix:** Reduce padding to `py-20 md:py-28` (80px/112px). This maintains breathing room without the "am I still on the same page?" feeling. Alternatively, add subtle visual landmarks (faint horizontal rules, section number indicators) to give scroll progress cues.

### 4. Geometric Background Shapes Overlap Content (Medium Impact)
The floating ElegantShape elements are positioned with negative offsets (`left-[-10%]`, `right-[-5%]`) and sit behind the content. On the About and Experience sections, the shapes visually compete with the stat cards and experience cards. The shapes at `bottom-[5%]` and `top-[70%]` create bright spots that pull the eye away from content. They're beautiful in the hero but become visual noise when they persist through all sections.

**Fix:** Either fade the shapes out more aggressively as the user scrolls (the overlay opacity transform is there but maxes at 0.15 — try 0.4), or restrict the shapes to only the hero area. The current implementation has them as a fixed background that persists everywhere, which dilutes their impact.

### 5. Project Cards Lack Interactive Affordance (Medium Impact)
The project cards have hover effects (subtle gradient, border brightening) but no links, no "View Project" button, no GitHub icon, no external link arrow. They look interactive but lead nowhere. This creates a frustrating experience — the user's brain says "this looks clickable" but nothing happens. The experience cards have the same issue.

**Fix:** Add at least a GitHub link and/or live demo link to each project card. Even "View on GitHub →" in the bottom-right would work. If the projects don't have public repos, add a "Details →" link that expands the card or opens a modal with more info.

---

## Top 5 UX Issues

### 1. No Social Links or Resume Download (Critical)
There is no LinkedIn, GitHub, Twitter/X, or resume/CV download anywhere on the site. The only contact method is an email link. For a developer portfolio, this is a serious oversight. Recruiters expect to find your GitHub and LinkedIn within seconds. The absence makes the site feel incomplete and reduces trust.

**Fix:** Add a social links row (GitHub, LinkedIn, at minimum) to either the nav, the hero section, or the contact section. Add a "Download Resume" button to the hero or contact section.

### 2. No Active Nav State or Scroll Spy (Medium Impact)
As you scroll through the page, the nav links don't highlight to indicate which section you're currently viewing. This is standard behavior on single-page portfolios and its absence makes the nav feel static and disconnected from the page content.

**Fix:** Implement an Intersection Observer-based scroll spy that adds a `text-white` or subtle underline to the active nav link based on which section is in the viewport.

### 3. "View Work" CTA is Underwhelming (Medium Impact)
The primary hero CTA ("View Work") is a ghost button — low-opacity border, low-opacity background, low-opacity text. It doesn't stand out as a call-to-action. In a sea of low-opacity elements, the one thing that should pop (your primary CTA) blends in. The secondary CTA ("Get in touch →") has even less visual weight and is barely distinguishable from body text.

**Fix:** Make "View Work" a solid or semi-solid button — `bg-white/[0.12]` with `border-white/[0.20]` at minimum. Or use a subtle accent color fill (indigo-500/20). The primary CTA should be the highest-contrast interactive element on the hero.

### 4. Hero Subtitle Reads Like a Resume Bullet, Not a Value Proposition (Medium Impact)
"UCSD Math & CS · GPA 3.9 · SWE Intern at DeepLearning.AI & AI Fund · Incoming Visa SWE Intern" is a list of credentials, not a hook. It tells the reader *what* you are but not *what you can do for them* or *what makes you interesting*. The midpoint dot separators also make it feel dense and clinical.

**Fix:** Lead with a compelling one-liner like "Building AI systems that solve real problems" or "Full-stack engineer specializing in production AI." Put the credentials in the About section or as a secondary line beneath the value prop.

### 5. Contact Section Lacks a Form or Multiple Channels (Low-Medium Impact)
The contact section has a single mailto link and a location badge. There's no contact form, no scheduling link (Calendly), and no social media links. For someone actively seeking opportunities, making it as easy as possible to reach you is critical. Some recruiters won't use their email client for a portfolio contact — they'll want a quick form.

**Fix:** Either add a simple contact form (name, email, message) or at minimum add LinkedIn/GitHub links alongside the email. A "Book a chat" Calendly link would be a strong addition.

---

## Things That Already Look Strong

1. **Typography pairing is excellent.** Syne for headings + DM Sans for body is a distinctive, modern combination. Syne gives the headings character without being gimmicky, and DM Sans is clean and readable. The tracking and weight choices are well-considered.

2. **The hero section makes a strong first impression.** The animated geometric shapes, the large bold name, and the fade-up animations create a polished, cinematic entrance. It feels premium and intentional.

3. **Consistent design system throughout.** Card styles, border opacities, rounded corners (2xl), spacing rhythm, tag/pill styles — there's a clear visual language that repeats consistently. This shows design discipline.

4. **Section heading hierarchy is clear.** The pattern of uppercase label → large gradient heading → content works well and gives each section a consistent introduction. The gradient headings (Selected Work, Tech Stack, Let's Build Something) add visual interest without being garish.

5. **Skills section color-coding is effective.** Each skill category (Languages, AI/ML, Web, Concepts) has its own color accent on the tags and card gradient. This makes scanning fast and adds visual variety within a consistent framework.

6. **Experience cards are well-structured.** The layout — company name with status badge, role, date/location, and bullet points — presents information clearly. The "Current" badges in green provide useful at-a-glance status.

7. **Custom scrollbar and selection color** are small but appreciated polish details that show attention to craft.

---

## Specific Fixes — Prioritized by Impact

### Do First (This Week)
1. **Add GitHub + LinkedIn links** — in nav and/or contact section
2. **Add resume/CV download button** — in hero and/or contact
3. **Bump all text opacity by ~10-15%** — section labels to `white/50%`, body to `white/75%`, sub-text to `white/60%`
4. **Make "View Work" CTA more prominent** — stronger background/border
5. **Add project links** — GitHub repos, live demos, or at minimum make cards link somewhere

### Do Next (This Sprint)
6. **Add project screenshots/thumbnails** — even simple ones dramatically improve visual impact
7. **Reduce section padding** from `py-40` to `py-24` or `py-28`
8. **Implement scroll spy** for nav active states
9. **Rewrite hero subtitle** from credential list to value proposition
10. **Increase geometric overlay fade** so shapes don't compete with content sections

### Nice to Have
11. Add a simple contact form or Calendly link
12. Add a page-load progress bar or scroll indicator
13. Consider adding a brief "What I'm looking for" line in the hero or about section to signal intent to recruiters
14. Add hover tooltips or expanded descriptions to skill tags
15. Add a "Back to top" button for the 5,700px scroll depth

---

## Accessibility Concerns

| Element | Contrast Ratio | WCAG AA (Normal) | WCAG AA (Large) |
|---|---|---|---|
| Section labels (`white/40%`) | 3.59:1 | **FAIL** | PASS |
| Stat card labels (`white/40%`) | 3.59:1 | **FAIL** | PASS |
| Sub-text (`white/45%`) | 4.35:1 | **FAIL** | PASS |
| Tag pills (`white/55%`) | 6.13:1 | PASS | PASS |
| Nav links (`white/60%`) | 7.24:1 | PASS | PASS |
| Body text (`white/70%`) | 9.84:1 | PASS | PASS |
| CTA text (`white/80%`) | 12.84:1 | PASS | PASS |

**Additional accessibility notes:**
- **No skip-to-content link.** Keyboard users have to tab through the entire nav before reaching content.
- **Sections lack `aria-label` attributes.** The `<section>` elements have `id` but no `aria-label`, making screen reader navigation less informative.
- **Heading hierarchy is correct** — single H1, H2s for sections, H3s for sub-items. Well done.
- **No images exist on the page**, so alt text is not an issue currently — but will be when screenshots are added.
- **Mobile hamburger button** has a proper `aria-label="Toggle menu"`. Good.
- **`lang="en"`** is set on the html element. Good.
- **Font sizes are generally adequate** — body text at 16-18px, headings scale well from 36px to 96px.

---

## Final Score

### Visual Polish: 6.5 / 10

**Breakdown:**
- Typography & font choices: 9/10
- Color palette & theming: 7/10
- Spacing & layout: 6/10 (too much dead space)
- Visual hierarchy: 6/10 (too many things at similar low opacity)
- Component consistency: 8/10
- Imagery & visual proof: 3/10 (none exists)
- Interactive polish: 5/10 (hover states exist but no destinations)
- Overall impression: 7/10

The foundation is strong. The design system is coherent and the typography is distinctive. But the site currently reads as a well-styled text document rather than a portfolio that *shows* work. The three things that would have the biggest impact on raising this score: (1) add project visuals, (2) add social/GitHub links, and (3) increase text contrast across the board. Those three changes alone would push this into 8/10 territory.
