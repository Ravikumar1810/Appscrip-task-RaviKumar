# Appscrip-task-Ravi

A Product Listing Page (PLP) built for the Appscrip frontend assessment.

## Live Demo
🔗 [https://appscrip-task-ravi-kumar.vercel.app/]

## Tech Stack
- **Next.js 14** (App Router) — React framework with SSR
- **Plain CSS Modules** — No Tailwind, no Bootstrap
- **FakeStore API** — Mock product data via SSR fetch
- **Google Fonts** — Cormorant Garamond + Work Sans

## Features
- ✅ **Server Side Rendering (SSR)** — Products fetched on server at build/request time
- ✅ **Responsive** — Mobile, Tablet, Desktop layouts
- ✅ **Filter Sidebar** — Show/Hide toggle, expandable filter sections with checkboxes
- ✅ **Sort Dropdown** — Recommended, Newest First, Popular, Price High→Low, Price Low→High
- ✅ **Wishlist** — Heart icon toggles pink fill per product
- ✅ **Product Badges** — NEW PRODUCT, OUT OF STOCK
- ✅ **SEO** — Page title, meta description, H1/H2, JSON-LD schema, alt text, SEO-friendly image names
- ✅ **Minimal packages** — Only next, react, react-dom

## SEO Implementation
- `<title>` and `<meta description>` in layout.js metadata
- `H1` on hero section, `H2` on each product card title
- JSON-LD `CollectionPage` schema in `<head>`
- `alt` text on all product images
- SEO-friendly image title attributes derived from product names

## Project Structure
```
appscrip-task-ravi/
├── app/
│   ├── layout.js           # Root layout with SEO metadata & schema
│   ├── page.js             # SSR page - fetches FakeStore API
│   ├── components/
│   │   ├── Header.js       # Announcement bar, nav, icons
│   │   ├── FilterSidebar.js# Collapsible filter sections
│   │   ├── ProductCard.js  # Card with wishlist toggle
│   │   ├── ProductListingPage.js  # Main client page with state
│   │   └── Footer.js       # Newsletter, links, payments, social
│   └── styles/
│       ├── globals.css
│       ├── Header.module.css
│       ├── FilterSidebar.module.css
│       ├── ProductCard.module.css
│       ├── ProductListingPage.module.css
│       └── Footer.module.css
├── next.config.js
└── package.json
```

## Local Setup

```bash
# Clone the repo
git clone https://github.com/Ravikumar1810/Appscrip-task-RaviKumar.git
cd Appscrip-task-Ravi

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## API Used
[FakeStore API](https://fakestoreapi.com/) — `GET /products`

---
Built by **Ravikumar N K** for Appscrip Frontend Assessment 2026