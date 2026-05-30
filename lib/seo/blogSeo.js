/** Blog SEO helpers — short SERP titles, OG images, dates */

const MAX_SEO_TITLE_LENGTH = 55;
const SITE = 'https://www.printerzsupport.com';

const CATEGORY_OG_IMAGES = {
  troubleshooting: `${SITE}/og/troubleshooting.svg`,
  setup: `${SITE}/og/setup.svg`,
  maintenance: `${SITE}/og/maintenance.svg`,
  installation: `${SITE}/og/installation.svg`,
};

const DEFAULT_OG_IMAGE = `${SITE}/hero-printer.svg`;

/**
 * Short title for <title> / Open Graph (full title stays on-page h1).
 */
export function getBlogSeoTitle(title) {
  let shortened = title
    .replace(/\s*-\s*(Complete\s+)?(.+?\s+Guide\s*)?2026\s*$/i, '')
    .replace(/\s*-\s*Fix\s*&\s*Solutions\s*2026\s*$/i, '')
    .replace(/\s*-\s*Setup\s*&\s*Troubleshooting\s*2026\s*$/i, '')
    .replace(/\s*2026\s*$/i, '')
    .trim();

  if (shortened.length <= MAX_SEO_TITLE_LENGTH) {
    return shortened;
  }

  const cut = shortened.slice(0, MAX_SEO_TITLE_LENGTH);
  const lastSpace = cut.lastIndexOf(' ');
  if (lastSpace > 28) {
    return `${cut.slice(0, lastSpace).trim()}…`;
  }
  return `${cut.trim()}…`;
}

export function getBlogOgImage(category) {
  return CATEGORY_OG_IMAGES[category] || DEFAULT_OG_IMAGE;
}

export function getBlogDateModified(post) {
  return post.dateModified || post.date;
}
