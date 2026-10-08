/**
 * Per-URL last-modified tracking for non-blog pages.
 *
 * - Static routes: update STATIC_PAGE_LAST_MODIFIED[path] when that page changes.
 * - Data-driven routes: update the entity's `lastModified` field in its data file.
 * - Forum threads: derived from discussion/answer dates (see sitemap).
 * - Blog posts: use getBlogDateModified from blogSeo.js.
 */

/** @type {Record<string, string>} YYYY-MM-DD per pathname */
export const STATIC_PAGE_LAST_MODIFIED = {
  '/': '2026-09-26',
  '/about': '2026-09-24',
  '/contact': '2026-09-24',
  '/faq': '2026-09-24',
  '/drivers': '2026-09-05',
  '/hp-printer-customer-service': '2026-09-24',
  '/services': '2026-09-24',
  '/brands': '2026-09-24',
  '/us': '2026-09-24',
  '/canada': '2026-09-24',
  '/forum': '2026-06-19',
  '/blog': '2026-09-05',
  '/privacy-policy': '2026-05-17',
  '/terms-conditions': '2026-05-17',
  '/refund-policy': '2026-05-17',
};

export function getStaticPageLastModified(pathname) {
  return STATIC_PAGE_LAST_MODIFIED[pathname] || null;
}

/** Prefer entity.lastModified; fall back only when seeding is incomplete. */
export function getEntityLastModified(entity, fallback) {
  return entity?.lastModified || fallback || null;
}

/** Latest YYYY-MM-DD among a list of dates (ignores null/undefined). */
export function latestDate(...dates) {
  const valid = dates.filter(Boolean).sort();
  return valid.at(-1) || null;
}
