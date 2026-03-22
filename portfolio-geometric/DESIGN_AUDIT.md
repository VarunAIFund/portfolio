# Portfolio Design Audit — Varun Sharma
**Audited:** March 22, 2026  
**URL:** http://localhost:3003/  
**Viewports tested:** 1440×900 (desktop), 390×844 (iPhone 14 mobile)  
**Auditor perspective:** Senior frontend designer + UX engineer

---

## Overall Impression

The site has solid bones. The dark glassmorphism aesthetic is coherent, the Syne typeface gives it a modern identity, and the entry animations are tasteful. The hero makes a strong first impression — the oversized name, subtle floating shapes, and centered layout feel intentional.

But after the hero, the site loses momentum. Every section has the same visual rhythm: small all-caps label → giant heading → content. There are no images anywhere. The project cards read like résumé bullets dressed up in dark glass. The contact section is four lines and an email address. A recruiter who has seen 50 portfolios will recognize this as a styled template with content swapped in — not a crafted personal brand.

There is also a silent runtime bug (`ReferenceError: Github is not defined`, 24 times) that will surface immediately to any engineer who opens DevTools. That is an embarrassing signal for someone positioning themselves as a developer.

The score at the end reflects the gap between the potential and the current state.

---

## Top 5 Design Issues

### 1. Hero CTAs have broken visual hierarchy
"View Work" gets a glass button treatment (`bg-white/[0.06]`, border, text at 80% white). "Get in touch →" gets zero treatment — no background, no border, text at 60% white. The result: both CTAs look like they have roughly equal weight, but neither reads clearly as a primary action. The ghost-link treatment of "Get in touch →" makes it indistinguishable from the subtitle text at a glance. One of these should be clearly dominant.

**Fix:** Give "Get in touch →" either (a) the same glass-button treatment as "View Work" but with a border-white/20 style, or (b) make "View Work" into a filled white/primary button so the hierarchy is unambiguous.

### 2. Project cards contain zero visuals
All five project cards are pure text. No screenshot, no mockup GIF, no colored preview header, nothing. For a developer who builds UIs — including a LaTeX editor with live PDF preview and a Gmail manager — the absence of any visual preview is a critical credibility gap. The cards feel like a résumé with rounded corners. This is the single most impactful thing missing from the portfolio.

**Fix:** Add a 16:9 or 3:2 screenshot/mockup as a card header. Even a stylized placeholder with a gradient and icon would be better than nothing. For projects without deployed demos, take a local screenshot and include it as a static asset.

### 3. Geometric shapes provide no section identity — they become visual noise
The four pill-shaped floating shapes are anchored to the hero but appear in the background of every single section as the user scrolls. What works as atmosphere in the hero becomes monotonous decoration in the Experience, Projects, Skills, and Contact sections. Each section looks identical from a visual tone standpoint. The site has no differentiation between sections beyond heading text.

**Fix:** Either (a) limit the floating shapes to the hero section only and introduce section-specific subtle backgrounds (e.g., a faint gradient or different opacity orb per section), or (b) use parallax so the shapes move out of view as you scroll past the hero.

### 4. Skills section has severe visual imbalance
The four-quadrant grid has wildly unequal content: "Languages" has 4 items, "AI/ML" has 12. On a grid with equal card heights, "Languages" sits at the top-left with three-quarters of its card as empty whitespace, while "AI/ML" is crammed. This creates a lopsided composition that looks accidental. Additionally, "RAG" appears as both a pill in AI/ML and as "Retrieval-Augmented Generation" in Concepts — a duplicate that reduces perceived depth.

**Fix:** Either expand "Languages" (add C++, Bash, LaTeX) to balance the grid, or convert to a different layout (e.g., a horizontal list per category, or a single flowing tag cloud). Remove the RAG duplicate from Concepts.

### 5. Section labels and headings consume excessive vertical space
Every section has `py-28 md:py-40` padding, then a small uppercase label with `mb-6`, then a large h2 with `mb-14` (56px). On a 900px viewport, the actual content doesn't begin until you're roughly 250–300px into each section. That's approximately 30% of the visible viewport used for section identification — before you've seen a single piece of content. The experience of scrolling through the page feels like you're mostly looking at section headers and dark backgrounds.

**Fix:** Reduce section top padding to `py-16 md:py-24`. Reduce `mb-14` on h2 elements to `mb-8 md:mb-10`. This alone will make the site feel noticeably more content-dense and professional.

---

## Top 5 UX Issues

### 1. No active navigation state (scroll-spy)
All nav links are permanently styled at `text-white/60`. There is no visual indicator of which section is currently in view. As you scroll through a 6-section single-page app, the navigation is completely inert — it never tells you where you are. This is disorienting on a long page, especially when sections share a near-identical visual style.

**Fix:** Implement an `IntersectionObserver`-based scroll-spy that adds `text-white` (or a small underline/dot indicator) to the active nav link.

### 2. "View Work" takes you to #projects but you scroll through 2 sections to get there
When a visitor clicks "View Work" in the hero, they anchor-jump to `#projects`. But the section order is `Hero → About → Experience → Projects`, so they land on the page after skipping over two sections. More importantly, the visitor who is interested enough to click "View Work" in the first 5 seconds will expect to land *immediately* on your best work. Burying Projects as the fourth section weakens your first impression.

**Fix:** Reorder sections: `Hero → Projects → Experience → About → Skills → Contact`. Projects is your showcase — it should be the first thing they see after the hero.

### 3. No resume download link anywhere
A developer portfolio without a "Download Resume" link is missing its single highest-intent action for recruiters. A hiring manager who lands on your site has one goal: determine in 60 seconds whether you're worth a screen call. Not having a direct PDF resume link forces them to manually compose an email to ask for it. This is a lost conversion.

**Fix:** Add a "Resume" link to the desktop nav (right side, next to the social icons) and a secondary "Download Resume" button in the hero alongside "View Work" and "Get in touch →".

### 4. Contact section has no form — only an email link
"Let's Build Something" is an evocative heading, but the CTA is a `mailto:` link. On desktop, this opens whatever email client is configured (or nothing, if the user is in a browser and hasn't set a default client). For many users, especially on desktop, clicking a mailto link is friction they'll abandon. The contact section is the last thing a convinced visitor sees — make it as low-friction as possible.

**Fix:** Add a simple inline contact form (Name, Email, Message, Send button) using a service like Resend, Formspree, or EmailJS. At minimum, add a Calendly embed link ("Book a 15-min call") as an alternative.

### 5. 3 of 5 projects link only to GitHub — no live product to evaluate
For a visitor who can't run the code locally, a GitHub link is a dead end. LaTeX Resume Editor and Inbox Triage Assistant are your two most recent, most impressive projects — and both have no live demo. A recruiter or potential collaborator clicking "GitHub" will see a README, not the product working.

**Fix:** Deploy both projects (or a read-only demo mode) and add "Live demo" links. For tools that require API keys (LaTeX Editor), create a demo video (30-second screen recording, hosted on YouTube/Loom) and embed or link it from the card. A video beats a GitHub link every time.

---

## Things That Already Look Strong

- **Hero impact:** The oversized name, centered layout, and animated floating shapes create a strong, memorable opening screen. The dark aesthetic fits the AI/tech brand well.
- **Typography system:** Syne is a distinctive, high-quality choice. The heading scale (4xl → 6xl) is consistent, and tracking-tight on large type looks intentional.
- **Animation quality:** Framer-motion stagger animations on section entry are subtle and professional. Not overdone. The `useInView` trigger prevents wasted animation on non-visible content.
- **Experience card layout:** The 4 experience cards are clean and scannable. The "Current" badge is a nice touch. Date + location icons read clearly.
- **Semantic HTML:** Proper `<section>` with `aria-label`, `<nav>`, `<h1>/<h2>/<h3>` hierarchy, `<ul>/<li>` for bullet points, and a `Skip to content` link are all present. This is better than most portfolio sites.
- **Responsive hamburger menu:** The mobile nav collapses correctly, the hamburger transform animation works, and the dropdown includes social links. Functional and clean.
- **Stat cards in About:** The four 2×2 grid cards (Degree, GPA, Location, Graduating) are well-designed — the hierarchy of label → value → sub-value is consistent and compact.

---

## Specific Fixes To Make First (by impact)

| Priority | Fix | Effort | Impact |
|---|---|---|---|
| 1 | Fix `ReferenceError: Github is not defined` in `nav.tsx` — change `Github` to `GithubIcon` | 2 min | Critical (console errors, broken icons) |
| 2 | Add project screenshots/thumbnails as card headers | 2–4 hrs | Very high (transforms text cards into portfolio) |
| 3 | Style "Get in touch →" as a proper ghost button with border | 5 min | High (fixes CTA hierarchy) |
| 4 | Add "Resume" link to the nav and hero | 10 min | High (removes barrier for recruiters) |
| 5 | Reduce section padding (`py-28` → `py-16`, `mb-14` → `mb-8` on h2) | 15 min | High (improves content density) |
| 6 | Implement scroll-spy active state on nav links | 1 hr | Medium-high (improves orientation) |
| 7 | Add a headshot to the About section | 30 min | Medium-high (humanizes the page) |
| 8 | Add a contact form or Calendly link | 1–2 hrs | Medium-high (removes contact friction) |
| 9 | Reorder sections: Projects before Experience | 5 min | Medium (surfaces best work earlier) |
| 10 | Eliminate duplicate RAG/Retrieval-Augmented Generation in Skills | 2 min | Low-medium |

---

## Accessibility Concerns

These are not hypothetical — they were measured from computed CSS values:

| Element | Color | Contrast Ratio | WCAG AA Requirement | Status |
|---|---|---|---|---|
| Nav links | `rgba(255,255,255,0.6)` on `#030303` | ~3.5:1 | 4.5:1 (normal text) | **FAIL** |
| "Get in touch →" | `rgba(255,255,255,0.6)` on black | ~3.5:1 | 4.5:1 | **FAIL** |
| Body paragraphs | `rgba(255,255,255,0.7)` | ~4.2:1 | 4.5:1 | **Marginal FAIL** |
| Section labels (ABOUT, etc.) | `rgba(255,255,255,0.4)` | ~2.4:1 | 4.5:1 | **FAIL** |
| Footer text | `rgba(255,255,255,0.35)` | ~2.1:1 | 4.5:1 | **FAIL** |
| Skill/tech pill text | `rgba(255,255,255,0.55)` | ~3.3:1 | 4.5:1 | **FAIL** |
| Project bullet text | `rgba(255,255,255,0.55)` | ~3.3:1 | 4.5:1 | **FAIL** |

**The entire site's secondary text sits below WCAG AA contrast thresholds.** The primary heading text (white) passes, but everything else is substandard. For a developer positioning themselves as detail-oriented and production-quality, shipping with systematic accessibility failures is a contradiction.

**Additional accessibility notes:**
- `Skip to content` link exists — good.
- All icon-only links have `aria-label` — good.
- The `<alert>` element in the accessibility tree (bottom of page) suggests a Next.js error overlay may be present due to the runtime errors.
- `Github` icon import error causes 24 `ReferenceError` console exceptions — fix this immediately.

---

## Final Score: 6.0 / 10 for Visual Polish

**What earns the 6:** The aesthetic is coherent. The hero works. The type is good. The animations are professional. There are no garish color choices or broken layouts.

**What keeps it from a 7–8:** The project section has no visuals — this is unacceptable for a design-focused developer portfolio. The contact section is a stub. The runtime JS errors show in DevTools. Contrast ratios fail accessibility standards throughout. The sections feel copy-pasted in their structure without visual differentiation.

**What would push it to a 9:** Project thumbnails, a contact form, a resume link, scroll-spy navigation, and at least one section with a distinctly different visual treatment. The site currently reads as a well-executed template. It needs one more layer of personalization and craft to read as a bespoke personal brand.
