# Next.js Migration Guide

This document outlines the migration from React.js (Create React App) to Next.js 14 with App Router.

## Migration Status

✅ **Completed:**
- Next.js project structure created
- Layout with metadata API for SEO
- Navbar component (client-side)
- Footer component
- Home component (client-side)
- ScrollAnimation component (client-side)
- AnimatedCounter component (client-side)

⏳ **In Progress:**
- Other pages (About, Services, Contact, Blog, FAQ)
- Blog post dynamic routes
- Sitemap generation
- Robots.txt
- Structured data integration

## Next Steps

### 1. Install Next.js Dependencies

```bash
# Backup current package.json
cp package.json package-react.json

# Install Next.js
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom eslint eslint-config-next
```

### 2. Update package.json Scripts

Replace the scripts section with:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 3. Complete Page Migrations

Create the following pages in the `app/` directory:
- `app/about/page.js` - About page
- `app/services/page.js` - Services page
- `app/contact/page.js` - Contact page
- `app/blog/page.js` - Blog listing
- `app/blog/[slug]/page.js` - Individual blog posts
- `app/faq/page.js` - FAQ page

### 4. SEO Optimizations

Next.js provides built-in SEO features:
- ✅ Metadata API (already implemented in layout.js)
- ✅ Automatic sitemap generation (need to create)
- ✅ robots.txt (need to create)
- ✅ Structured data (need to integrate)

### 5. File Structure

```
app/
├── layout.js          ✅ Root layout with metadata
├── page.js            ✅ Home page
├── about/
│   └── page.js        ⏳ To be created
├── services/
│   └── page.js        ⏳ To be created
├── contact/
│   └── page.js        ⏳ To be created
├── blog/
│   ├── page.js        ⏳ Blog listing
│   └── [slug]/
│       └── page.js    ⏳ Individual posts
├── faq/
│   └── page.js        ⏳ To be created
└── components/
    ├── Navbar.js      ✅
    ├── Footer.js      ✅
    ├── Home.js        ✅
    ├── ScrollAnimation.js ✅
    └── AnimatedCounter.js ✅
```

## Key Differences: React Router vs Next.js

### Routing
- **React Router:** `<Route path="/about" element={<About />} />`
- **Next.js:** File-based routing - `app/about/page.js` automatically creates `/about` route

### Links
- **React Router:** `<Link to="/about">About</Link>`
- **Next.js:** `<Link href="/about">About</Link>`

### Client Components
- **React Router:** All components are client-side by default
- **Next.js:** Server components by default, use `'use client'` for interactivity

### SEO
- **React Router:** Need react-helmet-async
- **Next.js:** Built-in Metadata API (better for SEO)

## Benefits of Next.js

1. **Better SEO:**
   - Server-side rendering (SSR)
   - Built-in metadata API
   - Automatic sitemap generation
   - Better performance scores

2. **Performance:**
   - Automatic code splitting
   - Image optimization
   - Font optimization
   - Built-in compression

3. **Developer Experience:**
   - File-based routing
   - API routes
   - Middleware support
   - Better TypeScript support

## Migration Checklist

- [x] Create Next.js project structure
- [x] Set up layout with metadata
- [x] Migrate Navbar component
- [x] Migrate Footer component
- [x] Migrate Home page
- [ ] Migrate About page
- [ ] Migrate Services page
- [ ] Migrate Contact page
- [ ] Migrate Blog listing page
- [ ] Migrate Blog post pages
- [ ] Migrate FAQ page
- [ ] Set up sitemap.xml
- [ ] Set up robots.txt
- [ ] Test all pages
- [ ] Build and verify
- [ ] Deploy

## Notes

- Keep the `src/` directory for now (contains original React code)
- CSS files can be imported directly in Next.js
- Client components need `'use client'` directive
- Server components are better for SEO (use when possible)

