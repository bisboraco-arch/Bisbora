export const previewCategories = [
  {
    slug: 'spaces',
    name: 'Spaces',
    description: 'A preview direction for thoughtful spaces and a more personal home.',
    image: '/images/bisbora-collection-home.jpg',
    alt: 'A warm, sunlit living room with natural textures',
  },
  {
    slug: 'objects',
    name: 'Objects',
    description: 'A preview direction for everyday objects and tactile details.',
    image: '/images/bisbora-collection-objects.jpg',
    alt: 'Ceramic tableware arranged on a natural wood surface',
  },
  {
    slug: 'paper',
    name: 'Paper',
    description: 'A preview direction for paper goods, notes, and quieter rituals.',
    image: '/images/bisbora-collection-paper.jpg',
    alt: 'A notebook and pen on a wooden table',
  },
]

export const previewProducts = [
  {
    slug: 'sample-space-piece',
    name: 'Sample space piece',
    category: 'spaces',
    description: 'Illustrative home collection preview. The final product details are to be announced.',
    image: '/images/bisbora-collection-home.jpg',
    alt: 'Illustrative preview of a calm, sunlit home',
    gallery: [
      {
        image: '/images/bisbora-collection-home.jpg',
        alt: 'Illustrative preview of a calm, sunlit home',
        caption: 'An editorial direction for considered spaces',
      },
    ],
    price: null,
    currency: null,
    included: null,
    benefits: null,
    formats: null,
    compatibility: null,
    howItWorks: null,
    fulfillment: null,
    faqs: null,
    relatedSlugs: ['sample-everyday-object', 'sample-paper-good'],
    featured: 1,
  },
  {
    slug: 'sample-everyday-object',
    name: 'Sample everyday object',
    category: 'objects',
    description: 'Illustrative objects collection preview. This is not a product listing for sale.',
    image: '/images/bisbora-collection-objects.jpg',
    alt: 'Illustrative preview of handmade ceramic tableware',
    gallery: [
      {
        image: '/images/bisbora-collection-objects.jpg',
        alt: 'Illustrative preview of handmade ceramic tableware',
        caption: 'An editorial direction for thoughtful objects',
      },
    ],
    price: null,
    currency: null,
    included: null,
    benefits: null,
    formats: null,
    compatibility: null,
    howItWorks: null,
    fulfillment: null,
    faqs: null,
    relatedSlugs: ['sample-space-piece', 'sample-paper-good'],
    featured: 2,
  },
  {
    slug: 'sample-paper-good',
    name: 'Sample paper good',
    category: 'paper',
    description: 'Illustrative paper collection preview. The actual catalog has not been added.',
    image: '/images/bisbora-collection-paper.jpg',
    alt: 'Illustrative preview of a notebook and pen',
    gallery: [
      {
        image: '/images/bisbora-collection-paper.jpg',
        alt: 'Illustrative preview of a notebook and pen',
        caption: 'An editorial direction for paper and everyday rituals',
      },
    ],
    price: null,
    currency: null,
    included: null,
    benefits: null,
    formats: null,
    compatibility: null,
    howItWorks: null,
    fulfillment: null,
    faqs: null,
    relatedSlugs: ['sample-space-piece', 'sample-everyday-object'],
    featured: 3,
  },
]

export function getPreviewCategory(slug) {
  return previewCategories.find((category) => category.slug === slug)
}

export function getPreviewProduct(slug) {
  return previewProducts.find((product) => product.slug === slug)
}
