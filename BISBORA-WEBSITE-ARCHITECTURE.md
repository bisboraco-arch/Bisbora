# BISBORA Website Architecture

**Status:** Phase 2 — information architecture  
**Scope:** Page structure, navigation, discovery, and purchase journeys. This document defines what the future website contains and how its parts connect; it does not implement pages.

## 1. Architecture principles

- Keep the experience editorial, calm, and product-led, following the [BISBORA Brand Identity & Design System](./BISBORA-DESIGN-SYSTEM.md).
- Make shopping discoverable from every page without making brand, support, or policy information difficult to find.
- Use one shared header, footer, typography hierarchy, and component language across all routes.
- Make product information, price, availability, delivery or access details, and return eligibility clear before a customer commits to checkout.
- Structure category and product pages around the catalog rather than hard-coding an assumed product range.
- Keep policies accurate to BISBORA's actual products and operations. Do not promise delivery, returns, digital access, or payment options until confirmed.

## 2. Page hierarchy and route map

```text
Home                                        /
├── Shop All                                /shop
│   └── Product Categories                 /categories
│       └── Category listing                /categories/:categorySlug
│           └── Individual Product Details  /products/:productSlug
├── About BISBORA                           /about
├── Contact                                 /contact
├── FAQ                                     /faq
├── Shopping Cart                           /cart
├── Checkout                                /checkout
└── Policies
    ├── Privacy Policy                      /policies/privacy
    ├── Terms and Conditions                /policies/terms
    └── Refund and Digital Product Policy   /policies/refunds-digital
```

“Product Categories” has two connected levels: a category index that introduces the available departments, and category listing pages that show products for one category. The index and listings should be generated from the same catalog taxonomy. A product can be reached from Shop All, a category listing, search, or a recommendation and always resolves to one canonical product detail route.

### Global shell

Every page uses the shared site header and footer. Checkout can use a simplified version of the shell to reduce distraction, but retains BISBORA identity, support access, and policy links. The cart count, selected filters, and basket contents remain consistent as the customer navigates.

## 3. Header and navigation

### Desktop header

Use a compact optional announcement strip only for a current, verified message. Do not show assumed shipping promotions.

Primary header contents, from left to right:

1. Original BISBORA logo linking to Home.
2. Primary navigation: **Shop All**, **Categories**, **About**, **Contact**.
3. Search control.
4. Shopping bag/cart icon with an accessible name and item count.

The Categories item opens an accessible dropdown or mega-menu populated from the active catalog. It should not invent departments when no category data exists. The Shop All destination remains one click away. FAQ and policy destinations live in the footer and are linked contextually from relevant content.

### Header behavior

- Keep the header consistent across marketing, discovery, and support pages.
- Use clear current-page or open-menu states, keyboard access, visible focus, and click/tap behavior; do not make hover the only way to open navigation.
- Search should open a focused search interface with suggestions/results when available and a clear no-results state.
- The cart control opens the Cart route; its count updates after item changes and remains available across routes.

## 4. Footer structure

Use a consistent footer in four scannable groups:

1. **Brand:** original BISBORA logo where the asset can be placed correctly, a concise brand description, and optional social links only when official accounts are supplied.
2. **Shop:** Shop All and links to active product categories.
3. **Help:** FAQ, Contact, and relevant order or product support information.
4. **Legal:** Privacy Policy, Terms and Conditions, and Refund and Digital Product Policy.

End with the copyright notice and any verified business details required for the selling regions. The footer should use the design system's deep brand surface and inverse text, with readable contrast and spacing.

## 5. Page specifications

| Page | Purpose | Recommended hierarchy and key content | Main onward paths |
|---|---|---|---|
| **Home** `/` | Introduce BISBORA and guide visitors toward discovery. | Focused editorial hero with one primary shop action; selected categories; curated or featured products; concise brand/value story; supporting trust or service information only when verified. | Shop All, category, product detail, About |
| **Shop All** `/shop` | Browse the complete active catalog. | Page title and short introduction; result count; sort; catalog-backed filters; product grid; pagination or load-more pattern; helpful empty/no-results state. | Category listing, product detail, Cart |
| **Product Categories** `/categories` | Help shoppers choose a department. | Category index using consistent image tiles, names, and short descriptions; show only active catalog categories. A selected category opens its own listing. | Category listing, Shop All |
| **Category listing** `/categories/:categorySlug` | Browse a subset of the catalog. | Breadcrumbs; category title and introduction; result count; filters and sort; product grid; resettable filter state; empty state with a clear recovery action. | Product detail, sibling category, Shop All |
| **Individual Product Details** `/products/:productSlug` | Answer purchase questions and enable a confident add-to-cart decision. | Breadcrumbs; product gallery; name, price, availability; variants/options when applicable; concise summary; primary add-to-cart action; complete description and specifications; applicable delivery/access and refund information; related products. | Cart, Shop All/category, FAQ or policy |
| **About BISBORA** `/about` | Explain the brand and create an emotional connection. | Brand story; principles or point of view; supporting imagery; product/craft details only when substantiated; contextual shop action. | Shop All, category, Contact |
| **Contact** `/contact` | Make it easy to get help or discuss an enquiry. | Contact options and response expectations only when confirmed; enquiry form with clear labels, validation, privacy context, and success/error states. Link order/product questions to FAQ. | FAQ, Shop All, Privacy Policy |
| **FAQ** `/faq` | Resolve common pre- and post-purchase questions. | Scannable topic groups such as products, ordering, payment, delivery/access, returns, and account/order support as applicable; searchable or anchor-linked questions; answers link to relevant policies. | Product detail, Contact, Cart, policy pages |
| **Shopping Cart** `/cart` | Review and edit the prospective order. | Line items with image, options, quantity controls, remove action, subtotal, any known charges/estimates, and an unambiguous checkout action. Include empty-cart state and recovery link. | Product detail, Shop All, Checkout, FAQ |
| **Checkout** `/checkout` | Collect required details and complete the order transparently. | Contact/customer details; delivery or digital fulfillment details as applicable; selected fulfillment and payment; itemized order summary; final total and policy links; explicit order submission; field-level validation and recoverable errors. Offer guest checkout unless an account requirement is confirmed. | Cart, policies, order confirmation state |
| **Privacy Policy** `/policies/privacy` | Explain collection and handling of personal data. | Dated, readable policy covering actual data practices, purposes, retention, sharing, rights, contact, and region-specific notices as applicable. | Contact, Checkout |
| **Terms and Conditions** `/policies/terms` | Set the terms for use and purchase. | Dated terms covering actual business identity, ordering, pricing, payment, fulfillment, intellectual property, liability, and governing requirements as applicable. | Shop All, Checkout, Contact |
| **Refund and Digital Product Policy** `/policies/refunds-digital` | Explain cancellation, refunds, and digital-product rules clearly. | Separate physical-goods and digital-product provisions where both exist; eligibility, timelines, process, exceptions, and digital access/delivery terms must reflect actual operations and applicable law. | Product detail, FAQ, Contact, Checkout |

### Purchase completion state

After a successful checkout, show a clear order confirmation state with a reference, a concise summary, and next-step information appropriate to the actual fulfillment type. This is a required transaction state, not an additional top-level page in the requested 12-page inventory. Do not represent an unsuccessful or pending payment as a completed order.

## 6. Page connections and customer journey

### Primary purchase journey

1. **Arrive:** Home introduces the brand and presents a clear Shop All or category route.
2. **Discover:** the visitor opens Shop All, the category index, a category listing, or search.
3. **Narrow:** catalog-backed filters and sorting reduce results without hiding active filter state or the reset action.
4. **Evaluate:** the product detail page presents product choices, full details, price, availability, and applicable fulfillment/refund information.
5. **Add:** Add to Cart confirms the action without losing the browsing context; the customer can continue shopping or go to Cart.
6. **Review:** Cart allows quantity and item edits, communicates the subtotal and known costs, and provides a direct Checkout action.
7. **Complete:** Checkout collects only necessary data, displays the final charges and applicable policy links before submission, and exposes validation/payment errors clearly.
8. **Confirm:** a successful purchase leads to an accurate confirmation state and the appropriate next steps.

### Supporting and alternate journeys

- Home → About → Shop All: visitors understand the brand before browsing.
- Home/header → Search → Product Details: visitors with a specific need can go straight to an item.
- Product Details → FAQ/policy → return to Product Details or Cart: questions are answered in context without losing the purchase path.
- Cart → Shop All/category/product: an empty cart always provides a clear way back to discovery.
- Any page → Contact or FAQ: help remains available without interrupting core browsing.
- Footer → legal policy: policy documents stay reachable from every route and are linked from checkout where relevant.

## 7. Product discovery experience

- **Entry points:** header navigation, Home editorial/category modules, Shop All, category index, category listings, and search.
- **Search:** provide a persistent desktop entry and an obvious mobile entry. Support product/category results when data permits, keyboard selection, clear query handling, and useful no-results recovery (clear query, browse categories, or open Shop All).
- **Filters:** expose only facets represented by reliable catalog data (for example, product type, availability, or product-specific attributes). Show active filters, allow individual removal and reset-all, preserve state when opening a product and returning, and keep result counts accurate.
- **Sorting:** present understandable choices supported by the catalog, such as featured, newest, or price order only when the required data and merchandising rules exist.
- **Product cards:** maintain consistent imagery and information order: product image, name, price, and only meaningful status or variant indicators. Cards link to one canonical product page; do not hide essential item information behind hover.
- **Recommendations:** use curated related products or category links. Avoid implying personalized recommendations unless personalization is actually implemented and disclosed as required.
- **Empty and unavailable states:** distinguish no matching search/filter results from an empty catalog or unavailable product; offer a suitable next action and never fabricate inventory.

## 8. Mobile navigation and shopping

- Replace desktop navigation with a compact header containing an accessible menu button, the original logo asset where it can be displayed correctly, and the cart control.
- The menu opens a keyboard- and screen-reader-accessible panel with Shop All, expandable Categories, About, Contact, FAQ, and Search. Keep the cart directly reachable outside the panel.
- Provide clear open/close state, Escape dismissal, sensible focus handling, and return focus to the trigger when the panel closes.
- Make category navigation a tap-to-expand list; do not require hover or precision pointer interaction.
- Present search in a full-width focused view. Keep the query, result state, and back path clear.
- Use single-column product layouts and touch-sized controls. Filters open in a sheet or dedicated panel with visible Apply and Reset actions; show active-filter count on the trigger.
- Keep product options, price, and Add to Cart near the product title and image; keep the purchase action easy to reach without obscuring information.
- Cart and checkout must fit narrow screens without horizontal scrolling. Keep totals and primary next actions visible at decision points while preserving access to item details and policy links.

## 9. Cross-page consistency rules

- Use the same names for categories, products, prices, and policy links in navigation, cards, product pages, cart, checkout, and footer.
- Preserve the cart and relevant discovery state across internal navigation.
- Use breadcrumbs on category and product pages to give a stable path back up the catalog.
- Make internal links descriptive and use clear action labels, not generic “click here”.
- Use consistent loading, error, empty, unavailable, and success states; provide a recovery path for each.
- Apply the shared design tokens, logo rules, accessible contrast, and responsive behavior defined in Phase 1.

## 10. Decisions required before implementation

The architecture is deliberately catalog-neutral. Confirm these business inputs before committing product-specific navigation, checkout fields, fulfillment copy, or legal content:

1. Product types, category taxonomy, variants, and whether the store sells physical goods, digital products, or both.
2. Selling regions, currency, taxes, shipping/delivery or download/access fulfillment, and applicable payment methods.
3. Inventory and availability behavior; whether accounts, guest checkout, wishlists, or product reviews are in scope.
4. Actual return/refund rules, customer support contact details, business identity, privacy practices, and legal jurisdiction.
5. Production logo export, product photography, and the verified customer-service and trust claims that can be shown.

These decisions refine the content and controls but do not change the core route hierarchy or customer journey above.

## 12. Phase 4 storefront preview status

The current frontend preview wires `/shop`, `/categories`, `/categories/:categorySlug`, and `/products/:productSlug` to a small demonstration catalog in `src/catalog.js`. Search, category filtering, and featured/name sorting operate on that preview data. The example category names, product names, images, and descriptions are not confirmed BISBORA merchandise; price is stated as pending, and purchase actions are intentionally unavailable. Replace the preview records with verified catalog data before describing products as available or accepting payment.

## 13. Phase 5 purchase readiness

Product detail routes provide a large editorial preview, purchase summary, and sections for included items, features, formats/compatibility, fulfillment, FAQs, and related previews. Unknown information stays explicitly pending. `/cart` and `/checkout` show a not-ready state rather than a simulated transaction. The project has no PayPal SDK, server-side order creation/capture endpoint, confirmed product price/currency, or fulfillment service. Do not enable a payment action until BISBORA provides verified product/fulfillment data and configures a secure PayPal integration. Never treat a client-only button or browser-side order total as a successful payment.

## 14. Phase 6 supporting-page status

The shared shell now includes `/about`, `/contact`, `/faq`, `/policies/privacy`, `/policies/terms`, and `/policies/refunds-digital`. The About page describes BISBORA's intended digital-product philosophy without implying that products are for sale. FAQ answers distinguish confirmed preview behavior from unconfirmed future product and fulfillment details. Contact remains transparent that there is no verified support address or connected form. Policy pages are marked pre-launch drafts and identify missing business, jurisdiction, and operational information instead of inventing legal terms. Complete and review these details, and configure a real contact channel, before launch.
