# BISBORA Storefront Preview

The BISBORA storefront preview, built with React, Vite, and Framer Motion, following the [brand system](./BISBORA-DESIGN-SYSTEM.md) and [site architecture](./BISBORA-WEBSITE-ARCHITECTURE.md).

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Browsing routes

- `/` — editorial homepage
- `/shop` — searchable, filterable, sortable preview catalog
- `/categories` and `/categories/:slug` — category directory and filtered listings
- `/products/:slug` — product preview details
- `/about`, `/contact`, and `/faq` — brand story and support information
- `/policies/privacy`, `/policies/terms`, and `/policies/refunds-digital` — pre-launch policy drafts

The sample catalog is in [`src/catalog.js`](./src/catalog.js). Every item is explicitly a placeholder; prices, inventory, product specifications, and purchase actions are not enabled. Product detail routes expose sections for purchase inclusions, benefits, formats/compatibility, fulfillment, and FAQs but mark unavailable details instead of inventing claims. `/cart` and `/checkout` explicitly state that ordering is unavailable. No PayPal SDK, payment endpoint, cart, order, or download fulfillment is configured. Add verified catalog and fulfillment data and configure a secure PayPal integration before enabling purchases. Replace the editorial imagery with BISBORA-approved, licensed product and campaign photography when available.

Contact details are not configured, so the Contact page does not display a nonfunctional form or an invented email. Policy pages are explicitly pre-launch drafts, not final legal policies; they must be completed from verified business, jurisdiction, and operational details before launch.

The homepage newsletter control is a non-connected preview: it shows a clear status when used, but does not send or persist the address. It must be connected to an approved mailing-list service and covered by the final privacy notice before launch.

The storefront routes are client-rendered. Configure the production host to serve `index.html` as the fallback for `/shop`, `/categories/*`, `/products/*`, `/about`, `/contact`, `/faq`, `/cart`, `/checkout`, and `/policies/*` so direct links and refreshes resolve correctly.
