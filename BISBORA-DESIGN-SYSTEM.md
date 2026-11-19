# BISBORA Brand Identity & Design System

**Status:** Phase 1 — brand foundation  
**Scope:** Visual and interaction standards for future BISBORA digital experiences. This is a specification, not a website implementation.

## 1. Brand direction

### Brand idea

**BISBORA is considered, natural, and distinctive.** Its identity pairs the expressive, hand-drawn character of the original wordmark with the calm restraint of an editorial lifestyle boutique.

The supplied references span fashion, interiors, home goods, and stationery. Their shared visual language—not any one reference brand or product category—is the direction: tactile materials, warm neutrals, thoughtful photography, quiet green, and carefully composed editorial layouts. Until the product range is confirmed, keep the system category-flexible.

### Design principles

1. **Logo-led, never logo-competing:** preserve the original BISBORA artwork and give it room.
2. **Warm minimalism:** use paper-like light surfaces, natural darks, and limited color.
3. **Editorial clarity:** combine expressive serif headlines with highly legible sans-serif utility text.
4. **Tactile, not rustic:** suggest texture through photography and restrained surface variation; keep the interface precise.
5. **Curated, not crowded:** prioritize a few strong images and clear hierarchy over dense product grids or decoration.
6. **Trust through consistency:** use stable navigation, clear product information, accessible controls, and predictable interactions.

## 2. Logo system

The supplied BISBORA logo is the primary brand asset. Its custom, fine-line lettering and interwoven opening mark are distinctive; they are not a typeface or a construction guide.

### Required handling

- Use the supplied original artwork as-is. Do not redraw, retype, trace, replace, stretch, skew, rotate, crop into, or independently recolor any part of it.
- Preserve the original proportions and the relationship between the symbol and wordmark.
- Keep the logo on calm, high-contrast backgrounds. The supplied reference shows it in dark brown over textured ivory; use that pairing as the default.
- Maintain clear space of at least the height of the “B” around the complete logo.
- Once a production logo export is supplied, target a visible logo width of **160–200 px** in desktop navigation and **140–168 px** on mobile. For hero or brand-story placements, use **280–440 px**, scaled proportionally.
- Do not place copy, controls, borders, or busy imagery inside the clear space. Avoid shadows, outlines, filters, and animation on the artwork.
- Use a small-screen logo only if a separate original symbol-only asset is supplied and approved. Do not extract one from the full lockup.

**Asset handoff:** the reference image includes a paper-textured background. Do not remove that texture or key out the background to simulate transparency. For flexible production use, obtain the original vector or transparent logo export from the brand owner. Until then, use the provided image intact, at its original aspect ratio, only as a complete brand-story/feature visual on a compatible surface; do not crop it into a navigation logo or extract the mark.

## 3. Color system

The palette starts with the logo’s deep, warm brown and the ivory paper around it. Muted olive and clay borrow the natural, material quality shared by the inspiration references. Brass is a minor highlight, never a competing brand color.

| Token | Hex | Role |
|---|---|---|
| `espresso` | `#452713` | Primary brand color; logo-adjacent emphasis, primary buttons, deep navigation/footer |
| `olive` | `#4D5942` | Secondary brand color; secondary calls to action, selected states, occasional feature panels |
| `clay` | `#9B5B3E` | Accent; limited use for seasonal highlights, small labels, and editorial emphasis |
| `brass` | `#B18A52` | Fine decorative detail only; never small text or a primary control |
| `paper` | `#F7F3EC` | Main page background |
| `white` | `#FFFDFA` | Raised card and input surface |
| `sand` | `#E9E0D3` | Soft section contrast, image backplates, category surfaces |
| `line` | `#D8CFC2` | Dividers, subtle borders, input outlines |
| `ink` | `#30271F` | Main text and headings on light surfaces |
| `muted-ink` | `#6D6257` | Secondary text, descriptions, metadata on light surfaces |
| `inverse` | `#F7F3EC` | Text and icons on espresso or olive surfaces |

### Usage ratios

- **65%** paper and white surfaces
- **20%** photography and sand
- **10%** espresso and ink
- **5%** olive, clay, and brass combined

These are composition guidelines, not hard quotas. Avoid large areas of clay or brass. Use color with enough contrast for its purpose; brass remains decorative, and muted text should not be used for small text on tinted or photographic backgrounds without checking contrast.

## 4. Typography

Typography should echo the contrast between the hand-drawn logo and the refined editorial references without imitating the logo lettering.

### Font roles

- **Display and editorial headings:** `Cormorant Garamond`, with a serif fallback such as `Georgia`. Use regular or medium weights; italic is a restrained editorial accent, not a default.
- **Body, navigation, product data, and controls:** `DM Sans`, with `Arial` or a system sans-serif fallback. Use regular and medium weights for legibility.
- **Logo:** original artwork only; never substitute a font.

If these font files are unavailable or not licensed for the project, select visually similar licensed alternatives and retain the same metrics and hierarchy.

| Style | Typeface | Desktop size / line height | Mobile size / line height | Weight and tracking |
|---|---|---:|---:|---|
| Display / H1 | Editorial serif | 56 / 1.02 | 40 / 1.05 | 400; tight, about `-0.02em` |
| H2 | Editorial serif | 40 / 1.08 | 32 / 1.12 | 400 |
| H3 | Editorial serif | 28 / 1.15 | 24 / 1.2 | 400–500 |
| H4 / card title | Sans-serif | 18 / 1.3 | 17 / 1.3 | 500 |
| Lead paragraph | Sans-serif | 18 / 1.6 | 17 / 1.55 | 400 |
| Body | Sans-serif | 16 / 1.6 | 15 / 1.55 | 400 |
| Supporting / metadata | Sans-serif | 13 / 1.45 | 13 / 1.45 | 400–500 |
| Button / navigation | Sans-serif | 14 / 1 | 14 / 1 | 500; optional `0.01em` |

Use sentence case for headings and controls. Reserve uppercase and wider tracking for short overlines or compact category labels. Keep paragraphs to a comfortable reading width of roughly 60–70 characters.

## 5. Layout and spacing

- **Spacing base:** 4 px. Use a consistent 4 px rhythm, with common steps of 8, 12, 16, 24, 32, 48, 64, 80, and 96 px.
- **Content width:** maximum 1280 px; center the layout with 24–40 px desktop gutters.
- **Grid:** 12 columns on wide screens, 6 on tablets, and 4 on phones. Use 24 px desktop and 16 px mobile gutters.
- **Section spacing:** 80–112 px between major desktop sections; 48–64 px on mobile. Related content within a section should be grouped more tightly.
- **Responsive breakpoints:** 640 px (small), 768 px (tablet), 1024 px (desktop), and 1280 px (wide). Adapt composition rather than simply shrinking desktop layouts.
- Keep the first view calm and focused: a clear headline, one primary action, and a deliberate hero image rather than multiple competing banners.
- Use generous negative space around editorial content. Product listings may be denser, but should retain clear image, name, price, and action hierarchy.

## 6. Shape, borders, and elevation

### Corner radii

- `small`: 4 px — chips, compact labels, and subtle image details
- `control`: 8 px — buttons, fields, and small interactive elements
- `card`: 12 px — standard product and content cards
- `feature`: 20 px — large editorial panels and image-led features
- `pill`: 999 px — only for intentionally pill-shaped controls or badges

Prefer restrained rounding; avoid giving every surface a pill shape. Keep images and their containing card corners consistent.

### Borders and shadows

- Default border: 1 px solid `line`; use it where it improves separation, not around every element.
- Soft card shadow: `0 8px 24px rgba(48, 39, 31, 0.06)`.
- Raised surface shadow: `0 16px 40px rgba(48, 39, 31, 0.10)`.
- Avoid hard black shadows, glossy gradients, heavy outlines, and layered floating cards that obscure imagery.

## 7. Surfaces and component language

- **Page sections:** alternate `paper` and `white`; use `sand` or olive as a deliberate feature surface. Avoid introducing extra background colors without a clear hierarchy purpose.
- **Navigation:** quiet and compact, with the original logo at the visual anchor. Navigation labels use sans-serif. Keep utility actions simple and consistently aligned.
- **Buttons:** primary is espresso with inverse text; secondary is an outlined or olive treatment; text links are understated. Use 44 px minimum control height, 8 px radius, and clear hover, focus, active, and disabled states. Button labels use concise verbs.
- **Cards:** rely on photography, spacing, and typography for distinction. A product card should show a consistent image ratio, concise title, price, and any necessary variant or status information. Use `white` or `paper` surfaces; reserve shadows for genuinely raised or interactive cards.
- **Category tiles:** use consistent image crops, concise labels, and minimal decoration. Circular crops are appropriate only when the photography and category hierarchy support them.
- **Editorial panels:** combine serif headlines, short sans-serif copy, and a single intentional image focal point. Olive or clay can anchor a panel but should not overpower it.
- **Forms:** use clear labels, helpful validation, and 44 px minimum field height. Keep the surface white, border subtle, and focus indicator visible.
- **Footer:** use espresso or olive with inverse text. Keep link groups scannable and avoid turning the footer into a dense block.
- **Badges and labels:** small, high contrast, and used only for meaningful states such as “New” or “Limited”; avoid decorative discount noise.

## 8. Photography and art direction

- Favor natural, directional light; real textures; warm whites; wood, linen, stone, paper, and botanical details.
- Use authentic products and lived-in environments over sterile cutouts or overly glossy renders.
- Keep a restrained warm grade. Preserve enough true-to-life color that merchandise remains accurate.
- Establish one main focal point per composition and leave visual breathing room for text when overlay is required.
- Use editorial crops for campaigns and consistent, neutral backgrounds for product imagery. Do not put small text over busy photos.
- Avoid oversaturation, stark cool-gray casts, generic luxury clichés, and visual clutter.

## 9. Interaction, motion, and accessibility

- Use motion to clarify state changes, not as decoration. Prefer short opacity or position transitions of **150–250 ms** with calm easing.
- Respect reduced-motion preferences. Do not make essential information depend on animation or hover.
- Provide visible keyboard focus, semantic heading order, descriptive image alternatives, and accessible names for icon-only controls.
- Target WCAG AA contrast for text and controls. Do not rely on color alone to communicate status.
- Make interactive targets at least 44 × 44 px where practical; ensure touch and keyboard use are first-class.
- Keep product actions, prices, error messages, and navigation labels explicit and readable.

## 10. Consistency across future pages

Every page should use the same logo rules, color roles, type scale, spacing rhythm, radii, and interaction states. Page-specific expression should come from photography, content, and the balance of editorial and product modules—not from inventing a new palette or button style.

Use this sequence as a layout check:

1. Establish the page purpose and a clear headline.
2. Introduce one primary visual or product focus.
3. Group supporting information into consistent sections and card patterns.
4. Provide a clear next action.
5. Close with the shared footer and trust or service information where relevant.

## 11. Implementation token reference

These tokens are the canonical values for a future implementation. They are documented here only; no application styles or pages are changed in Phase 1.

```css
:root {
  --color-espresso: #452713;
  --color-olive: #4d5942;
  --color-clay: #9b5b3e;
  --color-brass: #b18a52;
  --color-paper: #f7f3ec;
  --color-white: #fffdfa;
  --color-sand: #e9e0d3;
  --color-line: #d8cfc2;
  --color-ink: #30271f;
  --color-muted-ink: #6d6257;
  --color-inverse: #f7f3ec;

  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "DM Sans", Arial, sans-serif;

  --radius-small: 4px;
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-feature: 20px;
  --radius-pill: 999px;

  --shadow-card: 0 8px 24px rgb(48 39 31 / 6%);
  --shadow-raised: 0 16px 40px rgb(48 39 31 / 10%);
}
```
