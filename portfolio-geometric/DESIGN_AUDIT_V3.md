# Portfolio Design & UX Audit
**Auditor:** Claude (Senior Frontend Designer perspective)
**Date:** March 24, 2026
**URL:** http://localhost:3000/
**Viewport:** 1440×900 desktop

---

## Overall Impression

The portfolio has a coherent visual identity: warm cream background, a bold geometric sans-serif, soft pastel blob shapes, and a clean one-page scroll layout. The typography is confident — the display name reads well, the section heading rhythm is consistent, and the font choice is tasteful. The overall aesthetic leans tasteful-minimal.

But it reads more like a design exercise than a finished product. Several critical sections feel underdeveloped (Contact), one project card is visually broken (no image), the blob shapes become noise after the hero, and there are no navigational signals helping users orient themselves as they scroll. First-time recruiters will get a positive-but-forgettable impression. The design needs to earn its minimalism — right now it's using restraint as a crutch instead of using it to drive focus.

---

## Top 5 Design Issues

### 1. Background blobs are overused and become visual noise
The same pill/capsule shapes appear on **every single section** — just recolored and repositioned. On the hero this works fine. By the Skills section, they're visual clutter. They also clip awkwardly at section boundaries, creating a sense of unfinishedness. The blobs don't evolve or respond to content — they're a static texture. Reduce them significantly or reserve them only for the hero and contact section.

### 2. Hero has too much dead space below the fold
The bottom ~40% of the hero viewport is empty cream + floating shapes. Nothing draws the eye downward. There's no scroll indicator, no preview of what's below, no visual tension that communicates "keep going." A first-time visitor could bounce without realizing this is a full scrollable site. This is the single highest-impact UX failure.

### 3. Movie Tracker project card has no image, breaking the grid
Three of four project cards have a real screenshot at the top. The Movie Tracker card is pure text. In a 2×2 grid this immediately draws the eye because it looks half-done. It undermines confidence in the project and, by proximity, in the section overall. Add a screenshot.

### 4. No section background differentiation — all sections look identical
Every section: same cream background, same blob shapes. Users lose spatial orientation. The only signal they're in a new section is the tracked uppercase label (ABOUT, EXPERIENCE, etc.) which is set in very light gray and easy to miss. Even a 2% tint variation between alternating sections would help enormously.

### 5. CTA visual hierarchy is broken on the hero
"View Work" and "Get in touch →" are styled identically — same pill shape, same approximate weight, similar size. For a portfolio, "View Work" is the primary action. It should be a filled/solid button. "Get in touch" should be secondary/outlined. Right now they compete equally and neither feels like the clear call to action.

---

## Top 5 UX Issues

### 1. No scroll indicator on the hero
Nothing signals "there's more below." No arrow, no subtle animation, no "scroll to explore" hint. The blobs at the bottom of the hero could visually suggest depth if positioned as if bleeding off-screen, but currently they just sit there. First-time visitors who land and don't immediately scroll will miss everything.

### 2. Sticky "Get in touch →" button is redundant and noisy on the Contact section
The floating pill CTA persists across the entire page. When the user reaches the Contact section, they now have: a heading ("Let's Build Something"), a paragraph, an email pill button, AND the floating sticky "Get in touch →" button still visible. Three competing contact affordances. Hide the sticky button when the contact section is in view.

### 3. About section body copy has no visual hierarchy — walls of text
Three paragraphs with zero bold text, zero emphasis, zero visual breaks beyond paragraph spacing. A recruiter scanning this at 5 seconds will read nothing. Bold 1–2 key phrases per paragraph (e.g., **end-to-end ownership**, **3.9 GPA**, **agentic AI**) so skimmers get the message even without reading every word.

### 4. No availability or status signal anywhere
For a portfolio targeting internship/job opportunities, there's no "Open to opportunities" signal, no "Available Summer 2026" mention, no status indicator. The Contact section heading "Let's Build Something" is vague. A recruiter shouldn't have to guess whether you're actively looking. State it explicitly near the hero or in the Contact section.

### 5. Experience section has no company logos
The experience cards are text-only with a company name in bold. DeepLearning.AI, AI Fund, Planck AI, Integem — these are recognizable enough that logos would add instant credibility and visual anchor points. Logo + company name together is the convention; text-only looks incomplete by comparison and wastes prime real estate on the left of each card.

---

## Things That Already Look Strong

- **Typography system is excellent.** The display font is bold and geometric without feeling cold. The tracked uppercase section labels (ABOUT, EXPERIENCE…) are a clean structural device.
- **Section heading rhythm is consistent.** Every section uses the same pattern: tracked label → display heading. This is professional and scannable.
- **Stats cards in the About section are well-designed.** The label → value → sub-value hierarchy is clear and scannable. These read like a resumé at a glance.
- **"Current" badge on active roles** is a nice detail that immediately communicates employment status without the user reading dates.
- **GitHub activity heatmap is smart social proof.** 1,000 contributions over the past year, visible at a glance. This is a differentiator that most portfolios don't include.
- **Project screenshots are real and recognizable.** The LaTeX editor and healthcare chatbot screenshots show real product UI, which is infinitely better than placeholder images.
- **Experience bullet points are strong.** Specific numbers (55% cost reduction, 4 min → 1 min, ~19 MB → ~3 MB) make the achievements credible and concrete.
- **Font choice and color palette are cohesive.** The warm cream + lavender/pink/sage pastel combination is tasteful and distinctive without trying too hard.
- **Navigation active state tracking works.** The nav correctly highlights the current section as you scroll — good implementation detail.
- **The "VS" logo mark in the top left** is a subtle but polished personal brand touch.

---

## Specific Fixes to Make First (by impact)

### Critical
1. **Add a screenshot to Movie Tracker.** Take a screenshot of the live app at `https://inner-tokenizer-350401.web.app` and add it to the card. This is a 10-minute fix with major visual impact.

2. **Add a scroll indicator to the hero.** A simple animated down chevron (`↓`) centered at the bottom of the hero, fading in after 1 second, fixes the "where do I go" problem completely.

3. **Differentiate the CTA buttons.** Make "View Work" a filled dark button (background: near-black, text: white). Keep "Get in touch →" as the outlined/ghost style. The visual hierarchy immediately becomes clear.

4. **Fix the hydration error (console).** There's a `Warning: Prop did not match. Server:` React error on every page load, almost certainly caused by the live clock (`4:10 AM PT`) rendering differently on server vs client. Wrap it in `useEffect` with `mounted` state, or use `suppressHydrationWarning` on that element. Unaddressed hydration errors indicate sloppiness to technical recruiters who open DevTools.

### High Priority
5. **Reduce blob density.** Remove the blobs entirely from the Experience and Skills sections. Keep them on Hero, About, Projects, and Contact — but reduce opacity on those from ~20% to ~10%. Less is more.

6. **Add bold emphasis to About section paragraphs.** Bolding key phrases like "senior standing," "3.9 GPA," "end-to-end ownership," and "AI to practical, human-facing problems" makes the section scannable without changing any copy.

7. **Fix the "1,000contributions" rendering bug.** In the Skills section, the GitHub activity label renders as `1,000contributions last year` with no space. This is a CSS/text rendering issue. Add a space or `&nbsp;` between the number and the word.

8. **Hide the sticky "Get in touch →" button when Contact section is in view.** Use an IntersectionObserver to toggle its visibility. When the contact section is visible, the floating button is redundant and creates visual competition.

### Medium Priority
9. **Add an availability statement.** Below the subtitle on the hero, or as a small badge/pill, add something like "Open to Summer 2026 opportunities." This is the most-searched-for signal by recruiters.

10. **Add company logos to the Experience cards.** Fetch or use SVG logos for DeepLearning.AI and AI Fund (the two "Current" roles especially). Even 24×24px logos add instant brand recognition.

11. **Harmonize the GitHub contribution graph color palette.** The default blue/purple squares look out of place against the warm cream and lavender/pink blob palette. Restyle the contribution squares to use your existing palette colors (something like lavender `#a5b4fc` at full intensity, fading through cream).

12. **Add even subtle section background alternation.** Consider making Experience and Contact sections use a very slightly different background (e.g., `#f0ede8` instead of `#f5f2ed`) to give users a sense of section transitions as they scroll.

---

## Accessibility Concerns

| Issue | Severity | Detail |
|-------|----------|--------|
| Section labels low contrast | Medium | ABOUT, EXPERIENCE, PROJECTS etc. are in very light gray tracked caps on cream. Likely fails WCAG AA (4.5:1) for that font size. Darken or increase tracking/weight. |
| Icon-only nav buttons | Low | GitHub, LinkedIn, and Resume download icons have no visible label. Verify they have proper `aria-label` attributes. The `img` refs in the snapshot suggest SVG icons — ensure alt text or aria-label is set. |
| Live clock in Contact | Low | The live time display ("4:10 AM PT") updates dynamically. Screen reader users may hear it announced repeatedly if `aria-live` is set. Add `aria-live="off"` or remove it from the accessibility tree with `aria-hidden`. |
| React hydration error | Medium | The server/client prop mismatch (likely the time component) means the initial render is incorrect. This can cause flicker and confuse screen readers that parse server-rendered HTML. |
| Skip to content link | Good | "Skip to content" link exists and points to `#main-content` — this is correctly implemented. |

---

## Visual Polish Score

**6.5 / 10**

The bones are good — coherent palette, strong typography, clean grid. But the overuse of blob shapes, the empty hero, the broken project grid, the underdeveloped Contact section, and the live console error collectively hold this back from feeling finished. Address the Critical and High Priority fixes above and this moves to an 8/10 easily. The design has a clear point of view; it just needs to follow through on it.
