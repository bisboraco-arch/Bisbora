import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import {
  getPreviewCategory,
  getPreviewProduct,
  previewCategories,
  previewProducts,
} from './catalog.js'

const navigation = [
  { label: 'Shop all', href: '/shop' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
]

const pageTitles = {
  '/about': 'About',
  '/contact': 'Contact',
  '/faq': 'Frequently Asked Questions',
  '/policies/privacy': 'Privacy Policy',
  '/policies/terms': 'Terms and Conditions',
  '/policies/refunds-digital': 'Refund & Digital Product Policy',
  '/shop': 'Shop All',
  '/categories': 'Product Categories',
  '/cart': 'Shopping Bag',
  '/checkout': 'Checkout',
}

function getPageTitle(pathname) {
  const productMatch = pathname.match(/^\/products\/([^/]+)$/)
  const categoryMatch = pathname.match(/^\/categories\/([^/]+)$/)
  const product = productMatch ? getPreviewProduct(productMatch[1]) : null
  const category = categoryMatch ? getPreviewCategory(categoryMatch[1]) : null
  const pageTitle = product?.name ?? category?.name ?? pageTitles[pathname]

  return pageTitle ? `${pageTitle} — BISBORA` : 'BISBORA — A more considered everyday'
}

const collectionCards = [
  {
    title: 'Spaces to settle into',
    detail: 'A little room to breathe.',
    image: '/images/bisbora-collection-home.jpg',
    alt: 'Warm, light-filled living room with natural wood and soft furnishings',
    number: '01',
    category: 'spaces',
  },
  {
    title: 'Objects to keep',
    detail: 'Everyday things, considered.',
    image: '/images/bisbora-collection-objects.jpg',
    alt: 'Handmade ceramic tableware in soft, natural tones',
    number: '02',
    category: 'objects',
  },
  {
    title: 'Pages for a pause',
    detail: 'A slower kind of inspiration.',
    image: '/images/bisbora-collection-paper.jpg',
    alt: 'A poetry book resting on a warm wood table',
    number: '03',
    category: 'paper',
  },
]

const previewItems = [
  {
    title: 'Spaces to settle into',
    type: 'A collection in the making',
    image: '/images/bisbora-collection-home.jpg',
    alt: 'Sunlight falling into a calm, considered home',
    tone: 'home',
    slug: 'sample-space-piece',
  },
  {
    title: 'Objects to keep',
    type: 'A collection in the making',
    image: '/images/bisbora-collection-objects.jpg',
    alt: 'A close-up of tactile ceramic objects',
    tone: 'objects',
    slug: 'sample-everyday-object',
  },
  {
    title: 'Pages for a pause',
    type: 'A collection in the making',
    image: '/images/bisbora-collection-paper.jpg',
    alt: 'A notebook and pen on a wooden table',
    tone: 'edit',
    slug: 'sample-paper-good',
  },
]

function Logo({ className = '' }) {
  return (
    <motion.a
      className={`brand-mark ${className}`}
      href="/"
      aria-label="Bisbora home"
      initial={{ opacity: 0, y: -7, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 170, damping: 20, delay: 0.06 }}
    >
      <img src="/images/bisbora-logo.png" alt="Bisbora" />
    </motion.a>
  )
}

function SearchForm({ mobile = false }) {
  return (
    <form
      className={`header-search${mobile ? ' header-search-mobile' : ''}`}
      action="/shop"
      method="get"
      role="search"
    >
      <label className="visually-hidden" htmlFor={mobile ? 'mobile-shop-search' : 'shop-search'}>
        Search the preview catalog
      </label>
      <Search size={16} strokeWidth={1.7} aria-hidden="true" />
      <input
        id={mobile ? 'mobile-shop-search' : 'shop-search'}
        type="search"
        name="q"
        placeholder="Search"
        autoComplete="off"
      />
    </form>
  )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={window.location.pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <SearchForm />

        <button
          ref={menuButtonRef}
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {navigation.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.045 }}
              >
                {item.label} <ArrowUpRight size={16} strokeWidth={1.6} />
              </motion.a>
            ))}
            <SearchForm mobile />
            <a className="mobile-nav-cta" href="/#newsletter" onClick={closeMenu}>
              Stay in touch <ArrowRight size={16} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeroArtwork() {
  return (
    <motion.div
      className="hero-art"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.75, 0.25, 1] }}
      aria-label="A visual preview of the BISBORA collection"
    >
      <img
        className="hero-art-image"
        src="/images/bisbora-hero-room.jpg"
        alt="A sunlit living room with natural textures and considered details"
        fetchPriority="high"
      />
      <div className="hero-art-shade" />

      <div className="art-note">
        <span className="art-note-dot" />
        A first look at BISBORA
      </div>

      <motion.div
        className="digital-card"
        initial={{ opacity: 0, y: 22, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.65, delay: 0.58, ease: 'easeOut' }}
      >
        <div className="digital-card-topline">
          <span>A LITTLE MORE INTENTION</span>
          <span>NO. 01</span>
        </div>
        <img className="digital-card-logo" src="/images/bisbora-logo.png" alt="Bisbora" />
        <div className="digital-card-picture">
          <img
            src="/images/bisbora-collection-home.jpg"
            alt=""
            loading="lazy"
            aria-hidden="true"
          />
        </div>
        <div className="digital-card-caption">
          <span>The thoughtful living edit</span>
          <span>Collection preview</span>
        </div>
        <span className="digital-card-index">A NEW CHAPTER, IN THE MAKING</span>
      </motion.div>

      <motion.div
        className="phone-card"
        initial={{ opacity: 0, y: 20, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ duration: 0.65, delay: 0.76, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <div className="phone-speaker" />
        <img src="/images/bisbora-logo.png" alt="" />
        <span className="phone-eyebrow">THE FIRST EDIT</span>
        <div className="phone-image">
          <img src="/images/bisbora-collection-objects.jpg" alt="" />
        </div>
        <span className="phone-line phone-line-long" />
        <span className="phone-line" />
        <span className="phone-button">A LITTLE PREVIEW</span>
      </motion.div>

      <div className="art-caption">
        <span>Thoughtful things, a little differently.</span>
        <ArrowDown size={16} strokeWidth={1.5} />
      </div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="hero page-width" id="top">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <span className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" />
          A thoughtful world, taking shape
        </span>
        <h1>
          Make room for
          <br />
          a more <em>considered</em>
          <br />
          everyday.
        </h1>
        <p className="hero-description">
          An independent point of view on the things we choose, the spaces we make,
          and the small rituals that make a day our own.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/shop">
            Explore the previews <ArrowRight size={17} strokeWidth={1.7} />
          </a>
          <a className="text-link" href="#story">
            The story behind Bisbora <ArrowUpRight size={15} strokeWidth={1.7} />
          </a>
        </div>
        <div className="hero-signoff">
          <span className="signoff-rule" />
          <span>Thoughtfully imagined. Still unfolding.</span>
        </div>
      </motion.div>

      <HeroArtwork />
    </section>
  )
}

function IntroBand() {
  return (
    <section className="intro-band" aria-label="The BISBORA point of view">
      <div className="intro-band-inner page-width">
        <div className="intro-mark" aria-hidden="true">
          <Leaf size={29} strokeWidth={1.1} />
        </div>
        <p>
          The everyday is made of little things.
          <br className="desktop-break" /> Let’s make them <em>mean a little more.</em>
        </p>
        <span className="intro-side-note">A point of view by Bisbora</span>
      </div>
    </section>
  )
}

function Collections() {
  return (
    <section className="collections-section section-space" id="collections">
      <div className="page-width">
        <motion.div
          className="section-heading collections-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="eyebrow"><span className="eyebrow-line" />A few directions we love</span>
            <h2>Find your kind of <em>everyday.</em></h2>
          </div>
          <p>
            A first glimpse into the ideas behind Bisbora. Our collections are still
            taking shape; consider these little windows into our world.
          </p>
        </motion.div>

        <div className="collection-grid">
          {collectionCards.map((card, index) => (
            <motion.a
              className="collection-card"
              href={`/categories/${card.category}`}
              key={card.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              whileHover={{ y: -5 }}
            >
              <div className="collection-image-wrap">
                <img src={card.image} alt={card.alt} loading="lazy" />
                <span className="collection-number">{card.number}</span>
                <span className="collection-open" aria-hidden="true">
                  <ArrowUpRight size={19} strokeWidth={1.5} />
                </span>
              </div>
              <div className="collection-card-copy">
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </div>
                <span className="preview-label">A point of view</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function FirstLook() {
  return (
    <section className="first-look-section section-space" id="first-look">
      <div className="page-width">
        <motion.div
          className="section-heading first-look-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="eyebrow"><span className="eyebrow-line" />The first collection is taking shape</span>
            <h2>A little of what’s <em>to come.</em></h2>
          </div>
          <p>
            These are collection previews, not products for sale. We’ll share the
            real thing when it’s ready.
          </p>
        </motion.div>

        <div className="preview-grid">
          {previewItems.map((item, index) => (
            <motion.a
              className={`preview-card preview-card-${item.tone}`}
              href={`/products/${item.slug}`}
              aria-label={`View ${item.title}, preview placeholder`}
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="preview-image">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="preview-stamp">
                  <Sparkles size={13} strokeWidth={1.5} /> COMING INTO FOCUS
                </span>
                <span className="preview-image-count">0{index + 1} / 03</span>
              </div>
              <div className="preview-card-copy">
                <div>
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="preview-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} strokeWidth={1.6} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="catalog-note">
          Our actual products and categories are still to be announced.
        </p>
      </div>
    </section>
  )
}

const principles = [
  {
    number: '01',
    title: 'Considered, not crowded',
    text: 'A slower, more thoughtful eye for what belongs in your everyday.',
    icon: <Leaf size={22} strokeWidth={1.3} />,
  },
  {
    number: '02',
    title: 'Feeling in the details',
    text: 'Natural textures, meaningful choices, and room for your own story.',
    icon: <Sparkles size={21} strokeWidth={1.3} />,
  },
  {
    number: '03',
    title: 'Always becoming',
    text: 'A new independent brand, growing with care and an open mind.',
    icon: <ArrowUpRight size={21} strokeWidth={1.4} />,
  },
]

function WhyBisbora() {
  return (
    <section className="why-section section-space" id="why-bisbora">
      <div className="page-width why-layout">
        <motion.div
          className="why-intro"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow eyebrow-light">
            <span className="eyebrow-line" />A small manifesto
          </span>
          <h2>
            Less noise.
            <br />
            More <em>meaning.</em>
          </h2>
          <p>
            Bisbora begins with a simple feeling: the things around us can make
            the everyday feel more like our own.
          </p>
          <a className="light-link" href="#story">
            Get to know us <ArrowRight size={16} strokeWidth={1.6} />
          </a>
          <span className="why-ornament" aria-hidden="true">B.</span>
        </motion.div>

        <div className="principle-list">
          {principles.map((principle, index) => (
            <motion.article
              className="principle-row"
              key={principle.number}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="principle-number">{principle.number}</span>
              <span className="principle-icon" aria-hidden="true">{principle.icon}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
              <span className="principle-rule" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="story-section section-space" id="story">
      <div className="page-width story-layout">
        <motion.div
          className="story-image"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/bisbora-collection-objects.jpg"
            alt="Quietly beautiful everyday objects in a warm, natural setting"
            loading="lazy"
          />
          <span className="story-image-caption">A softer pace, a little more wonder.</span>
          <span className="story-image-index">BISBORA — AN INTRODUCTION</span>
        </motion.div>

        <motion.div
          className="story-copy"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow"><span className="eyebrow-line" />A note from Bisbora</span>
          <h2>
            A brand for the
            <br />
            things that feel
            <br />
            <em>like you.</em>
          </h2>
          <p>
            BISBORA is an independent world being built around thoughtful
            choices and a more personal kind of everyday. Not more for the sake
            of more — just the details that make a space, a ritual, or a moment
            feel entirely your own.
          </p>
          <p>
            We’re at the beginning. This is our invitation to slow down, look
            closer, and make something meaningful together.
          </p>
          <a className="story-link" href="#newsletter">
            Be here from the beginning <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
          <span className="story-signature">With care, <em>Bisbora</em></span>
        </motion.div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setMessage('This preview is not connected to a mailing list. Your email has not been sent or saved.')
  }

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="page-width newsletter-inner">
        <div className="newsletter-copy">
          <span className="eyebrow eyebrow-light">
            <span className="eyebrow-line" />A little letter, now and then
          </span>
          <h2>Be here for the <em>beginning.</em></h2>
          <p>
            New thoughts, first looks, and a note when the collection is ready.
            No noise — just the occasional good thing.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label htmlFor="newsletter-email">Your email address</label>
          <div className="newsletter-input-row">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setMessage('')
              }}
            />
            <button type="submit" aria-label="Join the BISBORA newsletter">
              <span>Keep me posted</span>
              <ArrowRight size={17} strokeWidth={1.7} />
            </button>
          </div>
          <p className="newsletter-disclaimer">
            This preview form isn’t connected to a mailing list yet.
          </p>
          <p className="newsletter-status" role="status" aria-live="polite">
            {message && <><Check size={15} />{message}</>}
          </p>
        </form>
        <span className="newsletter-flower" aria-hidden="true">✳</span>
      </div>
    </section>
  )
}

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs page-width" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 && <span className="breadcrumb-divider" aria-hidden="true">/</span>}
          {item.href && index < items.length - 1
            ? <a href={item.href}>{item.label}</a>
            : <span aria-current={index === items.length - 1 ? 'page' : undefined}>{item.label}</span>}
        </span>
      ))}
    </nav>
  )
}

function ProductCard({ product, index }) {
  const category = getPreviewCategory(product.category)

  return (
    <motion.a
      className="shop-product-card"
      href={`/products/${product.slug}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <div className="shop-product-image">
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className="shop-placeholder-badge">Preview placeholder</span>
        <span className="shop-card-arrow" aria-hidden="true">
          <ArrowUpRight size={17} strokeWidth={1.6} />
        </span>
      </div>
      <div className="shop-product-info">
        <div className="shop-product-topline">
          <span>{category?.name ?? 'Collection preview'}</span>
          <span>Not for sale</span>
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="shop-product-bottom">
          <span className="shop-product-price">Price to be announced</span>
          <span className="shop-view-link">
            View preview <ArrowRight size={15} strokeWidth={1.7} />
          </span>
        </div>
      </div>
    </motion.a>
  )
}

function ProductListing({ initialCategory = 'all' }) {
  const searchFromUrl = new URLSearchParams(window.location.search).get('q') ?? ''
  const [query, setQuery] = useState(searchFromUrl)
  const [categoryFilter, setCategoryFilter] = useState(initialCategory)
  const [sortOrder, setSortOrder] = useState('featured')
  const selectedCategory = getPreviewCategory(initialCategory)
  const visibleProducts = previewProducts
    .filter((product) => categoryFilter === 'all' || product.category === categoryFilter)
    .filter((product) => {
      const category = getPreviewCategory(product.category)
      const searchableText = `${product.name} ${product.description} ${category?.name ?? ''}`
      return searchableText.toLowerCase().includes(query.trim().toLowerCase())
    })
    .sort((a, b) => {
      if (sortOrder === 'name-asc') return a.name.localeCompare(b.name)
      if (sortOrder === 'name-desc') return b.name.localeCompare(a.name)
      return a.featured - b.featured
    })

  return (
    <main className="catalog-page">
      <Breadcrumbs
        items={selectedCategory
          ? [{ label: 'Home', href: '/' }, { label: 'Categories', href: '/categories' }, { label: selectedCategory.name }]
          : [{ label: 'Home', href: '/' }, { label: 'Shop all' }]}
      />
      <section className="catalog-intro page-width">
        <span className="eyebrow"><span className="eyebrow-line" />A BISBORA collection preview</span>
        <h1>{selectedCategory ? selectedCategory.name : 'Shop all'}</h1>
        <p>
          {selectedCategory
            ? selectedCategory.description
            : 'Explore the ideas taking shape at BISBORA. These are illustrative placeholders, not actual products.'}
        </p>
        <div className="catalog-notice" role="note">
          <Sparkles size={16} strokeWidth={1.5} />
          <span>
            <strong>Preview only.</strong> Product imagery and names are placeholders.
            No real catalog, stock, or prices have been added.
          </span>
        </div>
      </section>

      <section className="catalog-results page-width" aria-label="Browse preview products">
        <div className="catalog-toolbar">
          <div className="catalog-result-count" aria-live="polite">
            <strong>{visibleProducts.length}</strong> preview {visibleProducts.length === 1 ? 'item' : 'items'}
          </div>
          <div className="catalog-controls">
            <label className="catalog-search">
              <Search size={16} strokeWidth={1.7} aria-hidden="true" />
              <span className="visually-hidden">Search preview products</span>
              <input
                type="search"
                placeholder="Search the previews"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <label className="catalog-select">
              <span className="visually-hidden">Filter by category</span>
              <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                <option value="all">All categories</option>
                {previewCategories.map((category) => (
                  <option value={category.slug} key={category.slug}>{category.name} preview</option>
                ))}
              </select>
              <ChevronDown size={15} aria-hidden="true" />
            </label>
            <label className="catalog-select catalog-sort">
              <span className="visually-hidden">Sort preview products</span>
              <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
                <option value="featured">Featured preview</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <ChevronDown size={15} aria-hidden="true" />
            </label>
          </div>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="shop-product-grid">
            {visibleProducts.map((product, index) => (
              <ProductCard product={product} index={index} key={product.slug} />
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <span className="eyebrow"><span className="eyebrow-line" />Nothing here just yet</span>
            <h2>No previews match that search.</h2>
            <p>Try a different term or browse all collection directions.</p>
            <button
              className="button button-primary"
              type="button"
              onClick={() => {
                setQuery('')
                setCategoryFilter('all')
              }}
            >
              Clear search and filters <ArrowRight size={16} />
            </button>
          </div>
        )}
      </section>

      <section className="catalog-category-strip">
        <div className="page-width">
          <span className="eyebrow"><span className="eyebrow-line" />Browse by direction</span>
          <div className="category-chip-list">
            <a className={categoryFilter === 'all' ? 'is-selected' : ''} href="/shop">All previews</a>
            {previewCategories.map((category) => (
              <a
                className={categoryFilter === category.slug ? 'is-selected' : ''}
                href={`/categories/${category.slug}`}
                key={category.slug}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function CategoriesPage() {
  return (
    <main className="catalog-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Categories' }]} />
      <section className="catalog-intro page-width">
        <span className="eyebrow"><span className="eyebrow-line" />Ideas in the making</span>
        <h1>Choose a direction.</h1>
        <p>
          These category names are exploratory previews, not a confirmed BISBORA product taxonomy.
          Select one to see its illustrative placeholder.
        </p>
      </section>
      <section className="directory-grid page-width" aria-label="Preview categories">
        {previewCategories.map((category, index) => (
          <motion.a
            className="directory-card"
            href={`/categories/${category.slug}`}
            key={category.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <div className="directory-card-image">
              <img src={category.image} alt={category.alt} loading="lazy" />
              <span className="shop-placeholder-badge">Category preview</span>
              <span className="shop-card-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </div>
            <span className="directory-card-index">0{index + 1} / 03</span>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <span className="shop-view-link">Explore this direction <ArrowRight size={15} /></span>
          </motion.a>
        ))}
      </section>
      <div className="catalog-browse-all page-width">
        <a className="button button-primary" href="/shop">See all previews <ArrowRight size={16} /></a>
      </div>
    </main>
  )
}

function ProductDetailPage({ slug }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const product = getPreviewProduct(slug)
  if (!product) return <NotFoundPage />

  const category = getPreviewCategory(product.category)
  const relatedProducts = (product.relatedSlugs ?? [])
    .map(getPreviewProduct)
    .filter(Boolean)

  const placeholderFaqs = [
    {
      question: 'Can I purchase this item?',
      answer: 'No. This page is an illustrative placeholder, not a live product listing. There is no checkout or payment action for it.',
    },
    {
      question: 'Is this a digital product?',
      answer: 'The product type and fulfillment method have not been confirmed. BISBORA cannot promise a digital file, compatibility, or instant delivery.',
    },
    {
      question: 'What is included, and what does it cost?',
      answer: 'The real product contents and price have not been provided. Those details will be published only after the actual catalog is ready.',
    },
  ]

  return (
    <main className="catalog-page product-detail-page">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop all', href: '/shop' },
          { label: category.name, href: `/categories/${category.slug}` },
          { label: product.name },
        ]}
      />
      <section className="product-detail page-width">
        <div className="product-gallery">
          <div className="product-detail-image">
            <img
              src={product.gallery?.[selectedImageIndex]?.image ?? product.image}
              alt={product.gallery?.[selectedImageIndex]?.alt ?? product.alt}
              fetchPriority="high"
            />
            <span className="shop-placeholder-badge">Illustrative placeholder image</span>
            <span className="gallery-index">
              0{selectedImageIndex + 1} <span>/</span> 0{product.gallery?.length ?? 1}
            </span>
          </div>
          {product.gallery?.length > 1 && (
            <div className="product-gallery-thumbnails" aria-label="Product image gallery">
              {product.gallery.map((image, index) => (
                <button
                  type="button"
                  className={index === selectedImageIndex ? 'is-selected' : ''}
                  aria-label={`View image ${index + 1}: ${image.caption}`}
                  aria-pressed={index === selectedImageIndex}
                  onClick={() => setSelectedImageIndex(index)}
                  key={image.image}
                >
                  <img src={image.image} alt="" />
                </button>
              ))}
            </div>
          )}
          <p className="gallery-caption">
            {product.gallery?.[selectedImageIndex]?.caption ?? 'Illustrative collection direction — not a product photograph.'}
          </p>
        </div>
        <div className="product-detail-copy">
          <span className="eyebrow"><span className="eyebrow-line" />{category.name} collection preview</span>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-price-panel">
            <span>Price</span>
            <strong>To be announced</strong>
          </div>
          <div className="catalog-notice product-notice" role="note">
            <Sparkles size={16} strokeWidth={1.5} />
            <span>
              <strong>Preview only.</strong> This is not a real listing. Product information,
              price, and fulfillment are not confirmed.
            </span>
          </div>
          <button className="button product-unavailable-button" type="button" disabled>
            Purchases aren’t available yet
          </button>
          <p className="purchase-unavailable-note">
            No PayPal checkout is connected. We’ll enable purchases after BISBORA’s
            real catalog and payment setup are ready.
          </p>
          <a className="text-link product-return-link" href="/shop">
            <ArrowRight className="back-arrow" size={16} /> Return to Shop All
          </a>
          <div className="product-detail-meta">
            <div><span>Category</span><a href={`/categories/${category.slug}`}>{category.name} preview</a></div>
            <div><span>Availability</span><strong>Preview only</strong></div>
            <div><span>Product information</span><strong>To be confirmed</strong></div>
          </div>
        </div>
      </section>

      <section className="product-information page-width" aria-label="Product information">
        <div className="product-information-heading">
          <span className="eyebrow"><span className="eyebrow-line" />Before this becomes a product</span>
          <h2>Details matter.</h2>
          <p>
            These sections are ready for verified product information. We won’t
            fill them with assumptions.
          </p>
        </div>

        <div className="product-information-grid">
          <ProductInformationSection
            number="01"
            title="What’s included"
            value={product.included}
            pending="The contents of a real purchase have not been provided."
          />
          <ProductInformationSection
            number="02"
            title="Benefits & features"
            value={product.benefits}
            pending="Product benefits and specifications are awaiting confirmation."
          />
          <ProductInformationSection
            number="03"
            title="Formats & compatibility"
            value={product.formats ?? product.compatibility}
            pending="Product format, requirements, and compatibility have not been confirmed."
          />
          <ProductInformationSection
            number="04"
            title="How it works"
            value={product.howItWorks ?? product.fulfillment}
            pending="The purchase and fulfillment process will be explained when confirmed."
          />
        </div>
      </section>

      <section className="product-faq page-width">
        <div className="product-faq-heading">
          <span className="eyebrow"><span className="eyebrow-line" />Good to know</span>
          <h2>Questions, honestly answered.</h2>
          <p>These answers apply to this preview page, not to a future product listing.</p>
        </div>
        <div className="product-faq-list">
          {(product.faqs ?? placeholderFaqs).map((faq, index) => (
            <details className="product-faq-item" key={faq.question}>
              <summary>
                <span className="faq-number">0{index + 1}</span>
                <span>{faq.question}</span>
                <ChevronDown size={17} strokeWidth={1.5} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="related-previews page-width">
        <div className="related-previews-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" />Keep exploring</span>
            <h2>Other collection directions.</h2>
          </div>
          <a className="text-link" href="/shop">See all previews <ArrowRight size={15} /></a>
        </div>
        <div className="related-product-grid">
          {relatedProducts.map((relatedProduct, index) => (
            <ProductCard product={relatedProduct} index={index} key={relatedProduct.slug} />
          ))}
        </div>
      </section>
    </main>
  )
}

function ProductInformationSection({ number, title, value, pending }) {
  const entries = Array.isArray(value) ? value : value ? [value] : []

  return (
    <article className="product-information-card">
      <span className="product-information-number">{number}</span>
      <h3>{title}</h3>
      {entries.length > 0 ? (
        <ul>
          {entries.map((entry) => <li key={entry}>{entry}</li>)}
        </ul>
      ) : (
        <p>{pending}</p>
      )}
      {entries.length === 0 && (
        <span className="information-pending-label">Awaiting confirmed details</span>
      )}
    </article>
  )
}

function AboutPage() {
  const principles = [
    {
      number: '01',
      title: 'Useful first',
      text: 'Digital products should make something clearer, easier, or more satisfying to do. Usefulness comes before novelty.',
    },
    {
      number: '02',
      title: 'Made with intention',
      text: 'A thoughtful point of view belongs in the details: what a product does, how it feels to use, and what it leaves out.',
    },
    {
      number: '03',
      title: 'Honest by design',
      text: 'Clear descriptions, confirmed compatibility, and straightforward terms matter as much as visual polish.',
    },
  ]

  return (
    <main className="support-page about-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About BISBORA' }]} />
      <section className="about-hero page-width">
        <div className="about-hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" />A small beginning</span>
          <h1>A more thoughtful way to make things <em>useful.</em></h1>
          <p>
            BISBORA is being built around useful digital products, considered
            design, and the belief that everyday tools can feel a little more
            human.
          </p>
          <p className="about-hero-note">
            We’re at the beginning. No products are available yet; this is the
            point of view guiding what comes next.
          </p>
          <a className="button button-primary" href="/shop">
            Explore the previews <ArrowRight size={16} />
          </a>
        </div>
        <div className="about-hero-image">
          <img
            src="/images/bisbora-collection-paper.jpg"
            alt="A notebook and pen on a natural wood surface"
            fetchPriority="high"
          />
          <span>A note on making with intention</span>
        </div>
      </section>

      <section className="about-purpose">
        <div className="page-width about-purpose-inner">
          <span className="about-purpose-mark" aria-hidden="true"><Leaf size={29} strokeWidth={1.2} /></span>
          <div>
            <span className="eyebrow eyebrow-light"><span className="eyebrow-line" />Our purpose</span>
            <h2>Thoughtful design should do more than look good.</h2>
          </div>
          <p>
            Our aim is to create digital products that solve real needs without
            adding unnecessary noise. Useful, considered, and easy to understand
            — not a promise of products already for sale, but the standard we
            intend to build toward.
          </p>
        </div>
      </section>

      <section className="about-principles page-width">
        <div className="support-section-heading">
          <span className="eyebrow"><span className="eyebrow-line" />The way we want to work</span>
          <h2>A few things we’ll keep close.</h2>
        </div>
        <div className="about-principle-grid">
          {principles.map((principle) => (
            <article className="about-principle-card" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-next page-width">
        <div>
          <span className="eyebrow"><span className="eyebrow-line" />Still taking shape</span>
          <h2>We’ll share the real thing when it’s ready.</h2>
          <p>
            Product details, formats, pricing, and support information will be
            published only when they’re confirmed.
          </p>
        </div>
        <div className="about-next-links">
          <a className="button button-primary" href="/faq">Read the FAQs <ArrowRight size={16} /></a>
          <a className="text-link" href="/contact">Contact information <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </main>
  )
}

function ContactPage() {
  return (
    <main className="support-page contact-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <section className="support-page-intro page-width">
        <span className="eyebrow"><span className="eyebrow-line" />We’re at the beginning</span>
        <h1>Let’s keep the conversation <em>thoughtful.</em></h1>
        <p>
          We want to make it easy to get in touch, and we also want to be
          honest: BISBORA does not yet have a verified support email address or
          a connected contact form.
        </p>
      </section>
      <section className="contact-content page-width">
        <div className="contact-information">
          <span className="contact-icon"><ArrowUpRight size={20} strokeWidth={1.4} /></span>
          <span className="eyebrow"><span className="eyebrow-line" />Contact details</span>
          <h2>A real way to reach us is coming.</h2>
          <p>
            No contact address has been supplied for publication. We won’t
            display a made-up email or collect a message that cannot be
            delivered. Please check back when BISBORA’s contact channel is
            announced.
          </p>
          <div className="contact-status">
            <span className="status-dot" />
            Direct support: not configured yet
          </div>
        </div>
        <div className="contact-help-card">
          <span className="eyebrow"><span className="eyebrow-line" />In the meantime</span>
          <h2>Looking for an answer?</h2>
          <p>
            Our FAQs explain what is and isn’t available in this preview,
            including products, payment, digital access, and compatibility.
          </p>
          <a className="button button-primary" href="/faq">Visit the FAQs <ArrowRight size={16} /></a>
          <a className="contact-secondary-link" href="/shop">Browse collection previews <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </main>
  )
}

const faqGroups = [
  {
    title: 'Products & availability',
    questions: [
      {
        question: 'Are BISBORA products available to buy?',
        answer: 'Not yet. The products currently shown are illustrative previews, not items for sale. There are no confirmed listings, prices, or stock.',
      },
      {
        question: 'What will BISBORA make?',
        answer: 'BISBORA intends to create useful digital products with a thoughtful design approach. The actual product range has not been confirmed or launched.',
      },
    ],
  },
  {
    title: 'Access, downloads & compatibility',
    questions: [
      {
        question: 'Will products be available as digital downloads?',
        answer: 'The product formats and fulfillment methods have not been confirmed. We cannot promise downloads or instant access until the actual products and delivery system are ready.',
      },
      {
        question: 'Which file formats or devices will be supported?',
        answer: 'No formats, software, device, operating-system, or accessibility requirements have been confirmed. We will publish compatibility details on real product pages before a purchase is possible.',
      },
      {
        question: 'How would I receive a digital product?',
        answer: 'Digital fulfillment is not configured in this preview. No files are delivered by this website.',
      },
    ],
  },
  {
    title: 'Orders, payments & refunds',
    questions: [
      {
        question: 'Can I pay with PayPal?',
        answer: 'PayPal has not been connected to the website. No payments or orders can currently be placed.',
      },
      {
        question: 'Has my payment or order gone through?',
        answer: 'There is no payment or order flow on this preview. It does not collect payment or create orders.',
      },
      {
        question: 'What is the refund policy for digital products?',
        answer: 'A legally reviewed refund and digital-product policy has not been supplied. No products are currently sold, and no refund terms should be inferred from this preview. Final terms will be published before sales begin.',
      },
    ],
  },
  {
    title: 'Support & privacy',
    questions: [
      {
        question: 'How can I contact BISBORA?',
        answer: 'A verified customer-support email or contact form has not yet been provided. The Contact page explains the current status; no message form is shown because there is no configured recipient.',
      },
      {
        question: 'What happens to information I enter on this preview?',
        answer: 'The newsletter preview does not submit or store the entered address; it only displays an on-page notice. A complete privacy notice and hosting/data-processing details still need to be verified before launch.',
      },
    ],
  },
]

function FAQPage() {
  return (
    <main className="support-page faq-page">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
      <section className="support-page-intro page-width">
        <span className="eyebrow"><span className="eyebrow-line" />Clear answers, no guesswork</span>
        <h1>Good questions deserve <em>honest answers.</em></h1>
        <p>
          BISBORA is still being prepared. These answers describe this preview
          accurately; product, payment, and support details will be updated
          when confirmed.
        </p>
      </section>
      <div className="faq-groups page-width">
        {faqGroups.map((group, groupIndex) => (
          <section className="faq-group" key={group.title}>
            <div className="faq-group-heading">
              <span className="faq-number">0{groupIndex + 1}</span>
              <h2>{group.title}</h2>
            </div>
            <div className="product-faq-list">
              {group.questions.map((faq, index) => (
                <details className="product-faq-item" key={faq.question}>
                  <summary>
                    <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span>{faq.question}</span>
                    <ChevronDown size={17} strokeWidth={1.5} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="faq-contact page-width">
        <div>
          <span className="eyebrow"><span className="eyebrow-line" />Still wondering?</span>
          <h2>Support details are coming.</h2>
          <p>We’ll publish a verified way to contact BISBORA before products are available.</p>
        </div>
        <a className="button button-primary" href="/contact">Contact information <ArrowRight size={16} /></a>
      </section>
    </main>
  )
}

const policyContent = {
  privacy: {
    title: 'Privacy policy',
    eyebrow: 'Your information matters',
    intro: 'This preview does not include a complete, verified privacy policy. The final notice must be based on BISBORA’s actual business, website hosting, analytics, payment, support, and data-retention practices and the laws that apply.',
    sections: [
      {
        title: 'What this preview currently does',
        paragraphs: [
          'The newsletter field on the homepage is a front-end demonstration. Submitting it displays an on-page message; this interface does not send the address to a mailing service.',
          'The current preview does not provide account registration, checkout, payment processing, or digital delivery.',
          'Web fonts are requested from Google Fonts. The provider may receive technical request data when a page loads; this use must be reviewed and described in the final privacy notice.',
        ],
      },
      {
        title: 'What still needs to be disclosed',
        paragraphs: [
          'Before launch, BISBORA must verify and document the data collected by the hosting provider and any analytics, cookies, embedded media, contact tools, newsletter service, or payment provider. Those practices are not established by this prototype.',
          'The published notice must identify the responsible legal entity and contact channel, explain purposes and lawful bases where required, retention periods, recipients/processors, international transfers, user rights and how to exercise them, and any region-specific disclosures.',
        ],
      },
      {
        title: 'Questions and updates',
        paragraphs: [
          'A privacy contact and effective date have not been supplied. Do not rely on this draft as a final notice or as a complete description of production data practices.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms and conditions',
    eyebrow: 'A clear foundation',
    intro: 'These terms are not yet a sales agreement. BISBORA has no verified seller identity, product catalog, pricing, payment integration, or fulfillment service in this preview.',
    sections: [
      {
        title: 'Preview website only',
        paragraphs: [
          'Product cards and product-detail pages are illustrative placeholders. They are not offers for sale, have no confirmed price or availability, and cannot be purchased through this site.',
          'The preview does not create orders, accept payments, or deliver physical or digital products. No PayPal checkout is connected.',
        ],
      },
      {
        title: 'Terms required before launch',
        paragraphs: [
          'Before accepting orders, BISBORA must publish terms that identify the contracting business and address eligibility, order acceptance, accurate product descriptions, prices and taxes, payment, fulfillment, cancellations, intellectual property, acceptable use, liability, dispute handling, governing law, and any mandatory consumer rights.',
          'The final terms must be reviewed against the actual products and the laws in each selling region. The governing jurisdiction and effective date have not been provided.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'A verified business and legal contact address has not been supplied. See the Contact page for the current support status.',
        ],
      },
    ],
  },
  refunds: {
    title: 'Refund & digital product policy',
    eyebrow: 'No unclear promises',
    intro: 'BISBORA is not currently selling products. A final refund policy must be written for the actual product types, delivery model, and selling regions before any purchase is enabled.',
    sections: [
      {
        title: 'Current status',
        paragraphs: [
          'This preview has no active checkout, payment collection, orders, or digital-product delivery. The sample products are not purchasable; there are no preview-site purchases to refund.',
          'This is not a blanket statement that future digital purchases will be non-refundable. No future refund eligibility, withdrawal rights, exceptions, or time limits are established here.',
        ],
      },
      {
        title: 'What the final policy must explain',
        paragraphs: [
          'The final policy must state the cancellation and refund process, applicable timelines and eligibility, what happens when a digital product is defective or inaccessible, and any required consent or acknowledgment for digital delivery. It must distinguish physical goods from digital products if BISBORA offers both.',
          'Any limits or exceptions must comply with mandatory consumer rights in each applicable jurisdiction. The business identity, jurisdiction, support contact, product formats, delivery method, and legal requirements have not been supplied.',
        ],
      },
      {
        title: 'Before a purchase is offered',
        paragraphs: [
          'BISBORA must publish its verified policy and provide a working support channel before enabling payment. Do not rely on this preview as the final contractual refund policy.',
        ],
      },
    ],
  },
}

function PolicyPage({ policyKey }) {
  const policy = policyContent[policyKey]
  if (!policy) return <NotFoundPage />

  return (
    <main className="support-page policy-page">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Information', href: '/faq' },
          { label: policy.title },
        ]}
      />
      <article className="policy-document page-width">
        <header className="policy-document-header">
          <span className="eyebrow"><span className="eyebrow-line" />{policy.eyebrow}</span>
          <h1>{policy.title}</h1>
          <p className="policy-status">Pre-launch draft · Not a final legal policy</p>
          <p className="policy-intro">{policy.intro}</p>
        </header>
        <div className="policy-draft-notice" role="note">
          <Sparkles size={17} strokeWidth={1.5} />
          <p>
            Important: business identity, jurisdiction, and operational details
            have not been provided. This draft intentionally avoids inventing
            legal terms and must be completed and reviewed before launch.
          </p>
        </div>
        <div className="policy-sections">
          {policy.sections.map((section, index) => (
            <section className="policy-section" key={section.title}>
              <span className="faq-number">0{index + 1}</span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <footer className="policy-document-footer">
          Effective date: not set <span aria-hidden="true">·</span> Last updated: not set
        </footer>
        <a className="policy-contact-link" href="/contact">Contact information <ArrowUpRight size={15} /></a>
      </article>
    </main>
  )
}

function CommerceUnavailablePage({ section }) {
  const isCheckout = section === 'checkout'

  return (
    <main className="catalog-page commerce-unavailable-page">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: isCheckout ? 'Checkout' : 'Shopping bag' },
        ]}
      />
      <div className="not-found-content page-width">
        <span className="eyebrow"><span className="eyebrow-line" />BISBORA is not taking orders</span>
        <h1>{isCheckout ? 'Checkout isn’t available yet.' : 'The shopping bag isn’t live yet.'}</h1>
        <p>
          BISBORA has no verified products, prices, or configured PayPal checkout.
          No order, payment, or download can be started from this preview.
        </p>
        <div className="commerce-unavailable-actions">
          <a className="button button-primary" href="/shop">
            Browse collection previews <ArrowRight size={16} />
          </a>
          <a className="text-link" href="/">Return home <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </main>
  )
}

function NotFoundPage() {
  return (
    <main className="catalog-page not-found-page">
      <div className="not-found-content page-width">
        <span className="eyebrow"><span className="eyebrow-line" />A little detour</span>
        <h1>This page isn’t here yet.</h1>
        <p>That preview may have moved. Browse the current collection directions instead.</p>
        <a className="button button-primary" href="/shop">Explore Shop All <ArrowRight size={16} /></a>
      </div>
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="page-width">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p>A thoughtful world, taking shape.</p>
            <a className="footer-note-link" href="/">
              Back to the beginning <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="footer-column">
            <h2>Discover</h2>
            <a href="/shop">Shop all</a>
            <a href="/categories">Categories</a>
            <a href="/#first-look">A first look</a>
          </div>
          <div className="footer-column">
            <h2>Help & about</h2>
            <a href="/about">About BISBORA</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-column footer-policies" id="policies">
            <h2>Policies</h2>
            <a href="/policies/privacy">Privacy policy</a>
            <a href="/policies/terms">Terms and conditions</a>
            <a href="/policies/refunds-digital">Refund & digital products</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BISBORA. A new beginning.</span>
          <span>Thoughtfully imagined, with room to grow.</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const categoryMatch = pathname.match(/^\/categories\/([^/]+)$/)
  const productMatch = pathname.match(/^\/products\/([^/]+)$/)
  let page

  useEffect(() => {
    document.title = getPageTitle(pathname)
  }, [pathname])

  if (pathname === '/') {
    page = (
      <>
        <Hero />
        <IntroBand />
        <Collections />
        <FirstLook />
        <WhyBisbora />
        <Story />
        <Newsletter />
      </>
    )
  } else if (pathname === '/shop') {
    page = <ProductListing />
  } else if (pathname === '/categories') {
    page = <CategoriesPage />
  } else if (pathname === '/cart' || pathname === '/checkout') {
    page = <CommerceUnavailablePage section={pathname.slice(1)} />
  } else if (pathname === '/about') {
    page = <AboutPage />
  } else if (pathname === '/contact') {
    page = <ContactPage />
  } else if (pathname === '/faq') {
    page = <FAQPage />
  } else if (pathname === '/policies/privacy') {
    page = <PolicyPage policyKey="privacy" />
  } else if (pathname === '/policies/terms') {
    page = <PolicyPage policyKey="terms" />
  } else if (pathname === '/policies/refunds-digital') {
    page = <PolicyPage policyKey="refunds" />
  } else if (categoryMatch) {
    page = getPreviewCategory(categoryMatch[1])
      ? <ProductListing initialCategory={categoryMatch[1]} />
      : <NotFoundPage />
  } else if (productMatch) {
    page = <ProductDetailPage slug={productMatch[1]} />
  } else {
    page = <NotFoundPage />
  }

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-shell">
        <Header />
        <motion.div
          id="main-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36, ease: [0.2, 0.7, 0.3, 1] }}
        >
          {page}
        </motion.div>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
