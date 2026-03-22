# Portfolio Design & UX Audit — Varun Sharma

**Date:** March 22, 2026
**Reviewed by:** Senior Frontend Designer & UX Engineer (AI-assisted)
**Site:** `localhost:3003` — portfolio-geometric (Next.js 14 + Tailwind + Framer Motion)
**Viewports tested:** Desktop (1280×720), Tablet (768×1024), Mobile (390×844)

---

## Overall Impression

The site establishes a dark, minimal aesthetic with geometric floating shapes that immediately signals design awareness. The font pairing (Syne headings + DM Sans body) is strong and the layout skeleton is clean. However, the design suffers from a critical systemic problem: **extreme low contrast makes most of the content functionally unreadable**. The site looks moody and premium from a distance, but the moment someone tries to actually *read* it, they'll struggle. It also lacks the proof-of-work elements (project screenshots, live links, social profiles) that make a portfolio credible to hiring managers.

First impression: *"This looks expensive, but I can't read half of it."*

---

## Top 5 Design Issues

### 1. Catastrophic text contrast across the entire site (Critical)

The most pervasive issue. Body text at `text-white/40` to `text-white/55` on `#030303` fails WCAG AA by a wide margin. Specific offenders:

| Element | Tailwind Class | Approx Contrast Ratio | Required |
|---------|---------------|----------------------|----------|
| Hero subtitle | `text-white/40` | ~2.2:1 | 4.5:1 |
| Experience bullets | `text-white/45` | ~2.5:1 | 4.5:1 |
| "Get in touch →" | `text-white/40` | ~2.2:1 | 4.5:1 |
| Section labels (ABOUT, EXPERIENCE…) | `text-white/25` at 12px | ~1.5:1 | 4.5:1 |
| Footer text | `text-white/15` to `text-white/20` | ~1.2:1 | 4.5:1 |

### 2. Scroll overlay darkens the entire page below the fold

The `GeometricBackground` component applies an overlay that fades from 0 to 0.6 opacity as you scroll:

```tsx
const overlayOpacity = useTransform(scrollY, [0, 600], [0, 0.6]);
```

Combined with already-low text contrast, this makes everything below the hero progressively darker. The full-page screenshot is nearly pitch-black from the About section down. Content sections are fighting the background for visibility.

### 3. No project visuals — text-only project cards

The Projects section has zero screenshots, mockups, or visual evidence of work. Three text-only cards with descriptions and bullet points look like a resume, not a portfolio. This is the single biggest missed opportunity for visual impact. A recruiter scrolling quickly will skip right past these.

### 4. Tablet breakpoint causes awkward hero heading wrap

At 768px, "Varun Sharma" breaks across two lines as "Varun / Sharma" which looks unintentional and broken. The `text-6xl` (md breakpoint) is too large for that viewport width given the name length.

### 5. Monotone visual rhythm — no section differentiation

Every section uses the same card style: `bg-white/[0.02] border border-white/[0.06]`. About cards, experience cards, project cards, and skills cards are nearly identical. There's no visual pacing or rhythm change as you scroll. The page feels like one long, undifferentiated stream.

---

## Top 5 UX Issues

### 1. "View Work" links to `#about` instead of `#projects`

A user clicking "View Work" expects to see projects, not a bio section. The CTA mislabels the destination.

**File:** `components/ui/shape-landing-hero.tsx` line 157
```tsx
<a href="#about" ...>View Work</a>
```

**Fix:** Change to `href="#projects"`.

### 2. No social links or resume download anywhere

No GitHub, LinkedIn, Twitter/X, or resume PDF link exists on the entire page. For a developer portfolio targeting tech recruiters, this is a dealbreaker. These are the first things a hiring manager looks for after scanning the hero.

### 3. Projects have no clickable links

None of the three project cards link to a live demo, GitHub repo, or case study. A portfolio that says "I built things" but doesn't let you verify is unconvincing. The cards aren't even interactive — no hover cursor change suggesting they lead somewhere.

### 4. Hero subtitle reads like a CSV export, not a value proposition

> "UCSD Math & CS · GPA 3.9 · SWE Intern at DeepLearning.AI & AI Fund · Incoming Visa SWE Intern"

Crams too many facts into one line separated by middle dots. It reads like metadata, not a human-sounding introduction. A recruiter won't parse all five data points in a glance.

**Suggestion:** Split into a one-line role description ("AI Engineer building intelligent systems") and a smaller credential line below.

### 5. Contact section has dead space and redundant information

The `mb-24` (96px) gap between the contact buttons and footer creates a large void. The email appears three times on the page (nav, contact CTA, footer). The location pill is styled like a button but isn't interactive, creating a false affordance.

---

## What Already Looks Strong

- **Geometric background animation** — The floating gradient pill shapes are distinctive, smooth (12s ease-in-out loop), and tasteful. This is the strongest visual element and sets the site apart from template portfolios.
- **Font pairing** — Syne for display headings + DM Sans for body is a polished, modern combination. The Syne italic on section headings ("Selected Work", "Tech Stack") is elegant.
- **Heading hierarchy** — Proper H1 → H2 → H3 cascade. Clean section labeling pattern (uppercase tracking-wide category label → large heading → content).
- **Nav behavior** — The sticky nav with transparent-to-blurred background on scroll is well-implemented. Mobile hamburger menu animates cleanly and includes the email contact.
- **Experience section content quality** — The actual writing is specific and quantified ("200K profiles", "19 MB to 3 MB"). This is strong portfolio copy. The "Current" badges are a nice touch.
- **Stats grid in About** — The 2×2 card grid (Degree, GPA, Location, Graduating) is a clever way to surface key facts at a glance.
- **Animation timing** — Staggered fade-up reveals (`staggerChildren: 0.1`) feel smooth and intentional, not distracting.
- **Custom scrollbar** — Small but polished detail.

---

## Specific Fixes, Prioritized by Impact

### Fix Immediately (This Week)

| # | Fix | File(s) | Impact |
|---|-----|---------|--------|
| 1 | Raise all body text to at least `text-white/70`, secondary text to `text-white/50`. Replace `text-white/25` section labels with `text-white/40` minimum. | `about.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`, `contact.tsx`, `shape-landing-hero.tsx`, `nav.tsx` | **Transforms readability** |
| 2 | Remove or dramatically reduce the scroll overlay opacity. Change `[0, 0.6]` to `[0, 0.15]` at most, or remove entirely. | `shape-landing-hero.tsx` line 177 | **Fixes invisible content** |
| 3 | Fix "View Work" to link to `#projects` instead of `#about`. | `shape-landing-hero.tsx` line 157 | **Fixes broken CTA** |
| 4 | Add GitHub and LinkedIn links to the nav (desktop) and footer. Add a resume PDF download button near the hero CTAs. | `nav.tsx`, `contact.tsx` | **Credibility** |
| 5 | Add a favicon. Currently returning a 404 for `/favicon.ico`. | `app/` directory | **Professionalism** |

### Fix Soon (Next Sprint)

| # | Fix | Details |
|---|-----|---------|
| 6 | Add project images/screenshots and link each card to a GitHub repo or live demo. | Projects section |
| 7 | Rewrite the hero subtitle as two elements: a one-line role description + a smaller credential line. | Hero section |
| 8 | Fix the tablet (768px) hero heading size — use `text-5xl` at `md` breakpoint or add `sm:text-5xl`. | `shape-landing-hero.tsx` |
| 9 | Add visual variety between sections — alternate background subtle tints, or use different card layouts for Projects vs Experience. | All section components |
| 10 | Reduce the `mb-24` in the contact section to `mb-12` and add social icon links in the footer. | `contact.tsx` |

---

## Accessibility Concerns

| Issue | Severity | Status |
|-------|----------|--------|
| Body text contrast ratios (~2.2:1 to 3.0:1) fail WCAG AA (4.5:1 required) | **Critical** | Fail |
| Section labels at `text-white/25` fail WCAG AA and AAA | **Critical** | Fail |
| No skip-to-content link | Medium | Fail |
| No `<footer>` semantic element (currently a `<div>` inside contact section) | Medium | Fail |
| Sections lack `aria-label` attributes | Low | Fail |
| Missing favicon (console 404) | Low | Fail |
| `lang="en"` is present | — | **Pass** |
| Heading hierarchy is correct (H1 → H2 → H3) | — | **Pass** |
| Menu button has `aria-label="Toggle menu"` | — | **Pass** |
| Viewport meta tag is correct | — | **Pass** |

---

## Final Score: 5.5 / 10 for Visual Polish

| Category | Score | Notes |
|----------|-------|-------|
| Layout & Structure | 7/10 | Clean grid, good hierarchy, proper responsive skeleton |
| Typography | 7/10 | Great font choice, ruined by low opacity/contrast |
| Color & Contrast | 3/10 | Systemic WCAG failures, content unreadable in multiple spots |
| Visual Interest | 6/10 | Geometric bg is strong, but zero project visuals drags it down |
| Consistency | 7/10 | Uniform design language (perhaps too uniform) |
| Responsiveness | 6/10 | Works but tablet heading break is rough |
| Polish & Details | 5/10 | No favicon, no social links, dead-end project cards, redundant email |

---

## Bottom Line

The bones are good. The design language shows taste. But the aggressive low-contrast approach has crossed from "moody" into "unreadable," and the missing proof-of-work elements (project visuals, links, social profiles) undermine the credibility a portfolio needs to have. **Fixing the contrast alone would probably bump this to a 7.**
