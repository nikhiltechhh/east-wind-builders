# Plan: Specializations & Capabilities Section with Popup Details

Add a new richly-organized section to the East Wind Contractors site that showcases all the work types, styles, and specialized services you listed. Each item is a card with an image; clicking opens a polished popup (modal) with a larger image and a detailed description. Everything will follow the existing brown & cream theme, Cormorant Garamond + Inter typography, and motion style.

## What the user will see

A new section titled **"Our Capabilities"** placed between `Services` and `Approach`, organized into clear tabs so the page doesn't get overwhelming:

```text
[ Project Types ]  [ Residential ]  [ Commercial ]  [ Styles ]  [ Specialized ]  [ Process ]
```

Each tab shows a responsive grid of image cards. Click any card → elegant modal opens with:
- Large hero image
- Title + subtitle
- Detailed description
- Key features as a tagged list
- Subtle gold accent + close button

### Tab contents

1. **Project Types** (3 cards): Exteriors · Interiors · Renovation
2. **Residential** (3 cards): Flats · Villas · Farm Houses
3. **Commercial** (6 cards): Office Design · Hospitality · Healthcare · Commercial Kitchen & Food Space · Entertainment & Recreation · Luxury Commercial
4. **Styles** (4 cards): Modern · Contemporary · Minimalist · Classic Luxury
5. **Specialized** (6 cards): Kerala Nalukettu · Chettinad · Rajasthan Haveli · Andhra Courtyard · Rustic / Mud Houses · Tropical & Heritage Sustainable
6. **Process** — visual horizontal timeline of all 17 steps (Client Meet → Handover), no popup needed; each step has an icon + label, with a tooltip-style hover for details.

A separate compact band above the tabs highlights **Sustainable Eco-Friendly Interiors** pillars (Environmental Conscious Home Design, Complete Theme Based, Natural Materials, Ventilation Planning) as 4 icon tiles.

## Technical Details

**New files**
- `src/components/site/Capabilities.tsx` — main section with shadcn `Tabs` + grid of cards
- `src/components/site/CapabilityModal.tsx` — reusable shadcn `Dialog`-based popup
- `src/components/site/ProcessTimeline.tsx` — horizontal scrollable timeline (process steps)
- `src/data/capabilities.ts` — typed data: `{ id, title, image, shortDesc, longDesc, features[] }`

**Images** (generated via `imagegen` at `fast` quality, ~1024x768, jpg)
To keep generation cost reasonable, ~22 unique images:
- 3 project types, 3 residential, 6 commercial, 4 styles, 6 specialized
Reuse existing `hero-interior.jpg` / project images where they fit (e.g., Modern style).

**Updates**
- `src/pages/Index.tsx` — insert `<Capabilities />` after `<Services />`
- `src/components/site/Header.tsx` — add "Capabilities" nav link

**Stack used**
- `@/components/ui/dialog` (shadcn) for popups
- `@/components/ui/tabs` (shadcn) for category switching
- `framer-motion` for card hover lift, modal fade, and stagger reveal
- All colors via existing semantic tokens (`primary`, `gold`, `cream`, `espresso`)

**Responsiveness**
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Tabs become a horizontally scrollable row on mobile
- Modal: `max-w-3xl`, image stacks above text on small screens
- Process timeline: horizontal scroll on mobile, full grid on desktop

**Accessibility / SEO**
- Each card is a `<button>` with proper `aria-label`
- Modal uses Dialog primitives (focus trap built in)
- Images have descriptive alt text
- Section has semantic `<section id="capabilities">` + single `<h2>`

## Out of scope (can be added later if you want)
- Filtering/search inside the section
- Linking each capability card to a dedicated route/page
- Real photo gallery per capability (currently 1 image each)

Approve this and I'll build it.
