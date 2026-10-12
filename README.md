# Starbucks® Handcrafted — Editorial Coffee Culture

> **An art-directed digital coffee experience built with HTML5, CSS3, Vanilla JavaScript ES Modules, and purposeful GSAP motion.**  
> *Designed to eliminate generic AI web design patterns in favor of deliberate composition, authentic typography, and genuine coffeehouse atmosphere.*

https://starbucks-pi-three.vercel.app/

## 1. Project Overview & Design Manifesto

This project reimagines the digital presence of Starbucks through the lens of an award-winning digital art director, high-end food photographer, and senior frontend engineer.

Rather than relying on predictable website templates or generic AI design tropes (such as repetitive three-card grids, floating gradient blobs, fake ratings, and decorative buttons that lead nowhere), this build establishes an **editorial coffeehouse narrative**. Every section is composed around authentic photography, deliberate negative space, and functional user interactions.

### Core Anti-AI-Slop Principles
1. **No Predictable Centered Heroes:** The hero is an asymmetrical editorial spread designed around the physical characteristics and negative space of cold-brewed coffee.
2. **No Repetitive 3-Card Grids:** Products are arranged with varied scale and visual hierarchy, reflecting their sensory profile and craftsmanship.
3. **No Meaningless Decoration:** Shapes, badges, and elements only exist when they serve a storytelling, nutritional, or functional purpose.
4. **Motion Must Earn Its Place:** The website is fully functional, balanced, and legible with animations completely disabled. When enabled, GSAP and ScrollTrigger provide restrained, magazine-like reveals that strictly respect `prefers-reduced-motion`.
5. **Honest Data & Functional Interactions:** Product specs, ingredients, caffeine levels, and roasting notes are verified. The cart and store finder are fully interactive demonstrations that transparently communicate their demo status.

---

## 2. Art Direction & Visual Language

### Color Tokens
The palette draws directly from the official **Starbucks Creative Expression** design system and the warm textures of a third-place coffeehouse:

| Token Name | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| **Starbucks Green** | `#006241` | Primary brand green, interactive accents, vector Siren mark |
| **House Green** | `#1E3932` | Deep roasted espresso green, hero accents, footer & banner framing |
| **Warm Canvas** | `#FBF9F5` | Natural warm milk canvas replacing sterile digital white |
| **Warm Neutral** | `#F2F0EB` | Soft café neutral used for product cards and secondary surfaces |
| **Espresso Charcoal** | `#211D1A` | Deep, warm ink for serif headlines and dark roast emphasis |
| **Reserve Amber** | `#C88D41` | Warm caramel and roasted malt accent for Reserve badges |
| **Terracotta Rust** | `#B55734` | Autumn harvest accent for spiced seasonal campaigns |

### Typography System
- **Headlines & Editorial Accents:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — an expressive variable serif with warm curves, vintage bookish italics, and tactile terminals inspired by early 20th-century type design.
- **UI & Body Copy:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — a geometric, humanist sans-serif delivering razor-sharp legibility across mobile and desktop displays.

---

## 3. The Six Distinct Visual Moments

```
┌─────────────────────────────────────────────────────────────┐
│ MOMENT A: HERO CAMPAIGN                                     │
│ "MAKE ROOM FOR A GOOD MOMENT." · Nitro Cold Brew Editorial  │
├─────────────────────────────────────────────────────────────┤
│ MOMENT B: THE HANDCRAFTED SELECTION                         │
│ Curated product composition with varied scales & filters     │
├─────────────────────────────────────────────────────────────┤
│ MOMENT C: COFFEE CRAFTSMANSHIP                              │
│ Triple portafilter mosaic, extraction science & roast tabs  │
├─────────────────────────────────────────────────────────────┤
│ MOMENT D: SEASONAL CAMPAIGN                                 │
│ Configurable accent switcher (Autumn, Winter, Spring, etc.) │
├─────────────────────────────────────────────────────────────┤
│ MOMENT E: THE THIRD PLACE (Atmosphere)                      │
│ Sunlit Scandinavian architecture & community manifesto     │
├─────────────────────────────────────────────────────────────┤
│ MOMENT F: CLOSING & FOOTER                                  │
│ Neighborhood café invitation, newsletter & brand navigation │
└─────────────────────────────────────────────────────────────┘
```

### Moment A — Hero Campaign
- **Focal Image:** Official Starbucks Nitro Cold Brew studio photograph with a micro-nitrogen head and amber condensation.
- **Composition:** Asymmetrical editorial layout pairing restrained serif typography with negative space.
- **Interactivity:** Direct anchor to the handcrafted menu, one-click café finder drawer trigger, and real-time roast notes.

### Moment B — Featured Drinks
- **Composition:** A multi-scale editorial layout avoiding repetitive card grids:
  - *Lead Feature:* Wide horizontal split card for **Iced Brown Sugar Oatmilk Shaken Espresso** with ingredients, tasting notes, and nutritional badges.
  - *Portrait Feature:* Tall vertical card for **Nitro Cold Brew with Vanilla Sweet Cream**.
  - *Duo & Trio Cards:* Compact cards for **Pike Place® Roast & Artisan Tart Pairing**, **Reserve® Microfoam Flat White**, and **Pure Japanese Matcha Tea Latte**.
- **Interactivity:** Category filter tabs (`All`, `Espresso Craft`, `Cold Craft`, `Seasonal Reserve`, `Brewed & Bakery`, `Botanical Tea`) and an "Inspect & Tailor" button on each beverage.

### Moment C — Coffee Craftsmanship
- **Composition:** A magazine-style editorial mosaic featuring a high-resolution flat lay of three commercial espresso portafilters (whole roasted beans, fine grounds, and pulled shot with latte art), paired with an overhead crema view and C.A.F.E. Practices verification (99% ethically sourced).
- **Interactivity:** Interactive 3-stage Roasting Spectrum tabs (**Blonde Roast**, **Medium Roast**, **Dark Roast**) that update tasting notes and body profiles in real time.

### Moment D — Seasonal Campaign
- **Composition:** Campaign banner pairing an authentic autumn gathering table scene with seasonal bakery craftsmanship.
- **Interactivity:** A dynamic seasonal switcher:
  - *Autumn Harvest:* Spiced pecan chai and pumpkin spice in amber glassware.
  - *Winter Hearth:* Dark roasts, fireside ceramics, chestnut praline, and peppermint mocha.
  - *Spring Bloom:* Shade-grown ceremonial matcha and lavender chill.
  - *Summer Sanctuary:* Slow-steeped cold brew on nitrogen tap.
  - Dynamically updates background tints, typography colors, sensory descriptions, and barista pairings.

### Moment E — Coffeehouse Atmosphere (The Third Place)
- **Composition:** Architectural photography of a sunlit café with fluted sage green banquettes, morning shadow lines, and natural wood furniture.
- **Storytelling:** The "Third Place" manifesto celebrating the physical space between home and work, structured around three pillars: *Mindful Pacing*, *Architectural Warmth*, and *Neighborhood Roots*.

### Moment F — Closing & Functional Footer
- **Composition:** High-contrast House Green closing banner with the invitation *"Step in. The kettle is warm."*
- **Interactivity:** Interactive newsletter subscription with instant validation and discreet toast notification, quick-trigger store locator button, and a multi-column accessible footer with the authentic Starbucks Siren mark.

---

## 4. Interactive Engineering & Modules

Built strictly with **HTML5, CSS3, and Vanilla JavaScript ES Modules**. No React, Vue, Angular, Tailwind, Bootstrap, or jQuery.

```
New folder (26)/
├── index.html                 # Semantic HTML5 document with accessible landmarks
├── README.md                  # Complete architectural & design documentation
├── assets/
│   ├── icons/
│   │   └── starbucks-siren.svg # Authentic vector Siren SVG extracted from Starbucks CDN
│   └── images/
│       ├── sb_asset_113070.jpg # Nitro Cold Brew (Hero & Cold Craft)
│       ├── drink_iced_caramel.jpg # Iced Brown Sugar Oatmilk Shaken Espresso
│       ├── sb_asset_112873.jpg # Seasonal Gathering Table (Autumn Campaign)
│       ├── sb_asset_112943.jpg # Artisan Bakery Pecan & Pumpkin Tarts
│       ├── craft_latte_pour.jpg # Triple Portafilter Craftsmanship (Beans, Ground, Shot)
│       ├── craft_cup_warm.jpg   # Fresh Crema Espresso Extraction
│       ├── cafe_interior.jpg    # Sunlit Third Place Café Interior
│       ├── 137-112942.jpg      # Handheld Ceramic Siren Mug
│       ├── drink_matcha_iced.jpg# Ceremonial Matcha Latte Art
│       └── drink_iced_swirl.jpg # Reserve Flat White in Picardie Glass
├── css/
│   ├── variables.css          # Design tokens, colors, typography scales, shadows
│   ├── base.css               # Reset, typography rules, focus rings, accessibility
│   ├── components.css         # Header, buttons, drawers, badges, toast notifications
│   ├── sections.css           # Styling for all 6 distinct visual moments
│   └── responsive.css         # Breakpoint fine-tuning (320px, 375px, 768px, 1440px)
└── js/
    ├── main.js                # Main orchestrator, seasonal switcher & event routing
    ├── drinks-data.js         # Verified beverage formulations, nutrition & sizes
    ├── stores-data.js         # Verified flagship store locations & amenities
    ├── customizer.js          # Interactive drink customizer drawer & localStorage demo tray
    ├── store-locator.js       # Live search & amenity filter store locator drawer
    └── animations.js          # Restrained GSAP 3.12.5 & ScrollTrigger reveals
```

### Module Breakdown
- **`drinks-data.js`**: Contains structured specifications for each beverage, including size options (Short, Tall, Grande, Venti), calorie and caffeine data, roast profiles, and tasting notes.
- **`customizer.js`**:
  - Dynamically renders the beverage customization drawer for any drink.
  - Allows selecting cup size, milk choice (Oatmilk, Whole Milk, Almondmilk, Coconutmilk, Nonfat, Sweet Cream), espresso shot steppers, and syrup pump steppers.
  - Recalculates nutrition and pricing in real time.
  - Manages the simulated demo order tray in `localStorage`.
  - Animates the header bag counter badge with a spring pop effect.
  - Shows floating toast confirmations for user feedback.
- **`store-locator.js`**:
  - Real-time search by city, neighborhood, or address.
  - Filter chips for *Nitro on Tap*, *Reserve Bar*, and *Drive-Thru*.
  - Stores user's preferred café in `localStorage` and updates the header with the active city name.
- **`animations.js`**:
  - Timed hero image crop-reveal and gentle headline slides via GSAP.
  - ScrollTrigger section entrance reveals that degrade gracefully.
  - Full adherence to `@media (prefers-reduced-motion: reduce)`.

---

## 5. Responsive Verification & Accessibility

The design was structured with fluid CSS (`clamp()`, CSS Grid, Flexbox) and verified across the following viewports:

- **320px – 375px (Compact Mobile):** Single-column stacking, minimum 44×44px touch targets, mobile navigation slide-in drawer, full-width customizer panel, and zero horizontal overflow.
- **390px – 430px (Modern Smartphones):** Refined image aspect ratios, comfortable padding, and legible typography balance.
- **768px – 1024px (Tablets & Small Laptops):** 2-column editorial layouts, preserved whitespace, and responsive header.
- **1440px – 1920px (Desktop Displays):** Max container width capping (`1360px`) prevents excessive horizontal stretching while maintaining magazine spread proportions.

### Accessibility Highlights
- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`).
- Working skip link (`.skip-link`) for keyboard navigation.
- High-contrast color ratios meeting WCAG AA requirements.
- Full `aria-modal="true"`, `aria-label`, and `role="dialog"` attributes on all slide-in drawers.
- Keyboard focus trapping and `Escape` key listeners to dismiss all active overlays.




