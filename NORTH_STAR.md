# NORTH STAR: OAIL Site Architecture & Design Rules

## 1. Purpose
This document serves as the absolute source of truth for the OAIL web platform's design language, motion systems, and component constraints. Its primary goal is to ensure the preservation of the site's "defense-tech / industrial intelligence" aesthetic—specifically enforcing that the core messaging, grid structure, and visual hierarchy remain intact across all future upgrades.

## 2. Non-Negotiables
- **Preserve Copy & Flow:** The business narrative, section order, and exact phrasing across all components (About, TeamCred, BakkenAI, Vision, etc.) must remain mathematically identical during structural upgrades.
- **Logo Hero:** The logo must persistently hold the center of the hero section.
- **Token Consistency:** The established tokens (cream, ink, oail-red) are immutable and must not be overwritten or polluted by one-off hex codes.
- **Node Emanation:** Particle or node animations must logically originate from the central logo bounds, routing outward defensively to stamp "chip pads."

## 3. Design Tokens
The following CSS variables formulate the strict visual identity:
- `var(--cream)`: `#F5F5F0` (Default text color against dark backgrounds, primary highlight)
- `var(--ink)`: `#0A0A0A` (Primary background, deep spatial depth)
- `var(--ink-secondary)`: `#1A1A1A` (Elevated surfaces, secondary depth)
- `var(--ink-tertiary)`: `#333333` (Borders, dividers, subtle UI elements)
- `var(--oail-red)`: `#E53935` (Accent, high-alert, primary interactive state)

## 4. Typography & Layout Rules
- Focus on `Inter` or standard sans-serif stacks.
- Preserve existing Tailwind tracking classes (e.g., `tracking-[0.4em]`) natively in the React code.
- Layouts adhere strictly to the grid-row structure defined in the current components. Dividers and section labels are mandatory for pacing.
- Headline scales (Headline Large / Massive) must not be refactored into alternative paradigms without explicit design approval.

## 5. Motion Rules
- **Choreography:** Reliance on Framer Motion. 
- **Easings:** Subtle, premium easings. Favor `[0.16, 1, 0.3, 1]` or similar custom bezier curves over linear or default ease-out.
- **Durations:** Deliberate and smooth (1.2s to 1.5s for major blocks, rarely under 0.6s).

## 6. Node System Rules (Hybrid Approach)
The visual connective tissue of the Hero relies on a best-in-class hybrid renderer:
- **Layer 1 (tsParticles):** Subtle, slow-drift background constellation. Strict limits on particle count. White and restrained `--oail-red`. Interactive repulse is minimized to feel purposeful, not bouncy.
- **Layer 2 (Canvas Overlay):** Deterministic "chip routing." Short routed lines animate outwards from the logo bounds, pausing to stamp rings (pads). 
  - **Stamp Style:** Geometric ring + optional faint inner dot.
  - **Performance:** Capped at 80 active stamps on desktop, 45 on mobile. Route limits of 8 concurrent desktop, 5 mobile. Device Pixel Ratio (DPR) capped at 2 to prevent GPU thrashing.
  - **Reduced Motion:** Ceases dynamic routing; renders a single static pass of faint stamps.

## 7. Video Rules
- Hero background dictates webm + mp4 + static poster fallbacks to ensure instant LCP.
- Must execute `playsInline`, `muted`, `loop`. 
- Overlaid with a `.75` opacity tint of dark ink for text readability.

## 8. Accessibility
- All motion (videos, framer motion components, canvas requestsAnimationFrame loops) must respect the `prefers-reduced-motion` media query.
- Contrast ratios against the `var(--cream)` text over the tinted video background must exceed WCAG AA standards.

## 9. Acceptance Criteria by Section
- **Hero:** Must mount the hybrid node system without frame drops. Must read the `logoRef`. Must precisely display "Artificial Intelligence For Energy" unmodified.
- **About/Teaser/TeamCred/BakkenAI/Vision/Contact:** Content MUST pass a strict diff check against original source. Zero wording adjustments permitted.
