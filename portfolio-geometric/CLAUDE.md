# portfolio-geometric

Personal portfolio site for Varun Sharma — AI Engineer & Developer (UCSD Math & CS).

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 with dark mode (`class` strategy)
- **Fonts:** Syne (headings, `--font-syne`) + DM Sans (body, `--font-dm-sans`)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes, default dark, no system override

## Project Structure

```
app/
  layout.tsx        # Root layout: ThemeProvider, CursorSpotlight, ScrollProgress
  page.tsx          # Single page: Nav + all sections + global UI layers
  globals.css       # Base styles, CSS variables
components/
  nav.tsx           # Top navigation
  about.tsx         # About section
  experience.tsx    # Work experience timeline
  projects.tsx      # Project cards grid
  skills.tsx        # Skills section
  contact.tsx       # Contact section
  theme-provider.tsx
  ui/
    shape-landing-hero.tsx  # Hero + GeometricBackground (animated shapes)
    ambient-glow.tsx        # Background glow effect
    cursor-spotlight.tsx    # Cursor radial spotlight
    floating-cta.tsx        # Sticky "Get in touch" pill button
    scroll-progress.tsx     # Top progress bar
    fade-in.tsx             # Scroll-triggered fade animation wrapper
    github-heatmap.tsx      # GitHub contribution heatmap
    project-gallery.tsx     # Image gallery for project cards
```

## Dev Commands

```bash
npm run dev    # Start dev server at http://localhost:3000
npm run build  # Production build
npm run lint   # ESLint
```

## Tailwind Notes

- `font-syne` = display/headings, `font-dm` = body (set in `tailwind.config.ts`)
- Dynamic color classes (indigo, rose, violet, amber, cyan variants) are safelisted — do not remove the safelist
- Dark mode toggled via `.dark` class on `<html>`

## Design System

- **Palette (dark):** near-black backgrounds, subtle geometric shapes as decoration, colored accent glows
- **Palette (light):** warm cream base with pastel blob shapes
- Geometric pill/capsule shapes used as ambient background decoration — primarily in hero; use sparingly elsewhere
- Section structure: each section gets a tracked uppercase label + large heading + content

