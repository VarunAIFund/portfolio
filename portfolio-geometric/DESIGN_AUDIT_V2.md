# Portfolio Design Audit — V2 Review (Post-Changes)

**Date:** March 22, 2026
**Scope:** Desktop only (1280×720)
**Compared against:** Initial audit findings

---

## What Improved (Nice Work)

The contrast bump across the board is a real improvement. Comparing before/after:

| Element | Before | After | Verdict |
|---------|--------|-------|---------|
| Hero subtitle | `text-white/40` | `text-white/60` | Readable now |
| "Get in touch →" | `text-white/40` | `text-white/60` | No longer looks disabled |
| Scroll overlay max | `0.6` | `0.15` | Content below fold is visible |
| Section labels (ABOUT, etc.) | `text-white/25` | `text-white/40` | Actually visible |
| About body copy | `text-white/55` | `text-white/70` | Comfortable to read |
| About tertiary paragraph | `text-white/40` | `text-white/60` | Good |
| About stat sub-text | `text-white/35` | `text-white/55` | Good |
| About tags | `text-white/40` | `text-white/55` | Good |
| Experience bullets | `text-white/45` | `text-white/65` | Much better |
| Experience date | `text-white/35` | `text-white/55` | Good |
| Project descriptions | `text-white/45` | `text-white/65` | Clear now |
| Project feature bullets | `text-white/35` | `text-white/55` | Readable |
| Project tech tags | `text-white/40` | `text-white/55` | Good |
| Skills tags | `/70` | `/85` | Best-looking section now |
| Skills category labels | `text-white/35` | `text-white/55` | Visible |
| Contact paragraph | `text-white/40` | `text-white/65` | Good |
| Contact section spacing | `mb-24` | `mb-12` | No more dead void |
| Footer name | `text-white/20` | `text-white/40` | Intentional now |
| Footer details | `text-white/15` | `text-white/35` | Legible |
| Nav links | `text-white/40` | `text-white/60` | Clickable-looking |
| "View Work" link target | `#about` | `#projects` | Correct destination |

**Skills section** is now the strongest section visually — the `/85` colored tags on subtle gradient cards really pop with personality.

---

## The Icon Problem (They Look Vibecoded)

The icons in the About stat cards feel off. Here's exactly why:

### Wrong icon choices

| Card | Current Icon | Problem | Better Choice |
|------|-------------|---------|---------------|
| Degree | `GraduationCap` | Fine — keep it | — |
| GPA | `Award` | Generic ribbon/medal for a number feels like clipart | `TrendingUp`, `Star`, or drop entirely |
| Based in | `MapPin` | Fine — keep it | — |
| Graduating | `Layers` | **Worst offender.** A stack-of-rectangles for graduation? Zero semantic connection. Screams "picked the first techy-looking icon." | `CalendarDays` or `Clock` |

### Structural issues with the icons

1. **Too small and too transparent** — At `w-4 h-4` (16px) with `opacity-70`, lucide's outline-style icons become wispy little sketches. They read as decoration, not information.

2. **Rainbow color assignment feels random** — Each icon gets a different accent color (`text-indigo-400`, `text-rose-400`, `text-violet-400`, `text-cyan-400`) for no semantic reason. Colors were assigned to "make it interesting" rather than to communicate something. Textbook vibecoded pattern: colorful but meaningless.

3. **Neither functional nor decorative enough** — Too small to be a visual anchor, not meaningful enough to justify their presence. They occupy an awkward middle ground.

### Recommended fix: pick one approach

**Option A — Remove icons entirely (more polished):**
The cards work fine without them. The label ("DEGREE", "GPA") + value ("B.S. Math & CS", "3.9 / 4.0") communicates everything. Drop the icons, remove the per-card color differentiation, and let the content breathe.

**Option B — Commit to icons properly:**
- Bump to `w-5 h-5` (20px) and full opacity
- Use a single muted color for all (e.g. `text-white/50`) instead of rainbow
- Fix icon choices: keep `GraduationCap` and `MapPin`, swap `Award` → `TrendingUp`, swap `Layers` → `CalendarDays`

---

## Remaining Issues

### 1. Experience location still at `text-white/25` (missed)

**File:** `components/experience.tsx`, line 165

```tsx
<div className="flex items-center gap-1.5 text-white/25 text-xs">
  <Building2 className="w-3 h-3" />
  {exp.location}
</div>
```

"Mountain View, CA" and "Remote" are nearly invisible. Should be at least `text-white/45`.

### 2. Project feature bullet dots are invisible

**File:** `components/projects.tsx`, line 137

```tsx
<span className="mt-[7px] w-0.5 h-0.5 rounded-full bg-white/20 flex-shrink-0" />
```

`w-0.5 h-0.5` = 2px with `bg-white/20`. Functionally invisible. Bump to `w-1 h-1` and `bg-white/30` to match experience bullet sizing, or replace with a dash character.

### 3. Experience role titles at `text-white/50`

**File:** `components/experience.tsx`, line 155

```tsx
<p className={cn("text-sm font-medium", exp.accentClass)}>
  {exp.role}
</p>
```

Where `accentClass` is `"text-white/50"` for all entries. "Software Engineer Intern" and "AI & Technical Program Management Intern" are important — bump to `text-white/65`.

### 4. Experience metadata icons are too tiny

**File:** `components/experience.tsx`, lines 162–166

`Calendar` and `Building2` at `w-3 h-3` (12px) are nearly unrecognizable on a dark background at that size. Either bump to `w-3.5 h-3.5` or remove them and rely on text alone — the date and location are self-explanatory.

---

## What Still Needs Doing (From V1 Audit)

These items from the original audit haven't been addressed yet:

| Item | Priority | Status |
|------|----------|--------|
| Add GitHub and LinkedIn links (nav + footer) | High | Not done |
| Add resume/PDF download CTA | High | Not done |
| Add project links (GitHub repos, live demos) | High | Not done |
| Add project screenshots/visuals | High | Not done |
| Add a favicon | Medium | Not done |
| Fix tablet heading wrap at 768px | Medium | Not done |
| Rewrite hero subtitle into role + credentials | Medium | Not done |
| Add visual variety between sections | Low | Not done |
| Add `<footer>` semantic element | Low | Not done |
| Add skip-to-content link | Low | Not done |

---

## Updated Score: 6.5 / 10 for Visual Polish

| Category | V1 Score | V2 Score | Notes |
|----------|----------|----------|-------|
| Layout & Structure | 7/10 | 7/10 | Unchanged — was already solid |
| Typography | 7/10 | 7/10 | Unchanged — fonts were always good |
| Color & Contrast | 3/10 | **6/10** | Major improvement across the board |
| Visual Interest | 6/10 | 6/10 | Still no project visuals |
| Consistency | 7/10 | 7/10 | Unchanged |
| Responsiveness | 6/10 | 6/10 | Tablet heading issue still present |
| Polish & Details | 5/10 | **5.5/10** | Icons are still vibecoded, no favicon, no social links |

---

## Bottom Line

The contrast fixes brought the site from "looks nice, can't read it" to "readable with a clear design direction." That's a meaningful jump. The remaining gap to a 7.5+ is: fix or remove the stat icons, clean up the last few low-contrast spots (experience location, role titles, project bullet dots), and add the credibility elements (social links, project links, project visuals).
