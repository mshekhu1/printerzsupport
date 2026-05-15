/**
 * Writes static-host redirect files from blogSlugAliases.
 * Required because `output: 'export'` does not apply next.config redirects at runtime.
 */
import { writeFileSync } from 'fs';
import { blogSlugAliases } from '../lib/data/blogAliases.js';

const entries = Object.entries(blogSlugAliases).filter(([alias, target]) => alias !== target);

const netlify = [
  '# Auto-generated — do not edit by hand. Run: node scripts/generate-redirects.mjs',
  ...entries.map(([alias, target]) => `/blog/${alias}  /blog/${target}  301`),
  '',
].join('\n');

const htaccess = [
  '# Auto-generated — do not edit by hand. Run: node scripts/generate-redirects.mjs',
  '<IfModule mod_rewrite.c>',
  'RewriteEngine On',
  ...entries.map(
    ([alias, target]) =>
      `RewriteRule ^blog/${escapeRegex(alias)}/?$ /blog/${target} [R=301,L]`
  ),
  '</IfModule>',
  '',
].join('\n');

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const vercel = {
  redirects: entries.map(([alias, target]) => ({
    source: `/blog/${alias}`,
    destination: `/blog/${target}`,
    permanent: true,
  })),
};

writeFileSync(new URL('../public/_redirects', import.meta.url), netlify);
writeFileSync(new URL('../public/.htaccess', import.meta.url), htaccess);
writeFileSync(new URL('../vercel.json', import.meta.url), `${JSON.stringify(vercel, null, 2)}\n`);

console.log(
  `Wrote ${entries.length} redirects to public/_redirects, public/.htaccess, and vercel.json`
);
