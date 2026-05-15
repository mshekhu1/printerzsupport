/**
 * Regenerates blogSlugAliases so every target exists in blogPosts.js
 * and no canonical post slug is listed as an alias key.
 */
import { writeFileSync } from 'fs';
import { blogPosts } from '../lib/data/blogPosts.js';

const CANONICAL_SLUGS = blogPosts.map((p) => p.slug);
const CANONICAL_SET = new Set(CANONICAL_SLUGS);

// Import existing aliases from source file (dynamic import)
const { blogSlugAliases: OLD_ALIASES } = await import('../lib/data/blogAliases.js');

const MANUAL_TARGETS = {
  'epson-printer-error-codes-guide': 'epson-printer-error-codes-troubleshooting-guide',
  'printer-wifi-setup-troubleshooting-guide': 'wireless-printer-setup-guide',
  'install-printer-drivers-windows-11': 'install-printer-drivers-windows-11-setup',
  'printer-maintenance-tips-guide': 'printer-maintenance-tips',
  'hp-laserjet-pro-m15a-driver-usb-setup-guide': 'hp-laserjet-pro-m15a-driver-setup',
  'brother-printer-not-printing-troubleshooting-guide': 'brother-printer-not-printing-solutions',
  'hp-laserjet-pro-mfp-m428fdw-m428fdn-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m428fdw-driver-setup',
  'hp-laserjet-pro-mfp-m428-fdw-fdn-fnw-dw-dn-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m428fdw-driver-setup',
  'hp-laserjet-pro-mfp-m477fdw-m477fdn-m477fnw-m477dw-m477dn-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m477fdw-driver-setup',
  'hp-laserjet-pro-mfp-m477-fdw-fdn-fnw-dw-dn-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m477fdw-driver-setup',
  'hp-laserjet-pro-m234dn-m234dw-m234nw-m234sdw-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-m234dn-driver-setup',
  'hp-laserjet-pro-mfp-m227fdw-m227sdn-m227fdn-m227sdw-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m227fdw-driver-setup',
  'hp-laserjet-pro-m402dn-m402n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m402dn-driver-setup',
  'hp-laserjet-pro-m403dn-m403n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m403dn-driver-setup',
  'hp-laserjet-pro-m404dn-m404n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m404dn-driver-setup',
  'hp-laserjet-pro-m401-dn-n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m401dn-driver-setup',
  'hp-laserjet-pro-m402-dn-n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m402dn-driver-setup',
  'hp-laserjet-pro-m403-dn-n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m403dn-driver-setup',
  'hp-laserjet-pro-m404-dn-n-driver-installation-wifi-usb-setup-guide':
    'hp-laserjet-pro-m404dn-driver-setup',
  'hp-laserjet-pro-mfp-m227-fdw-sdn-fdn-sdw-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m227fdw-driver-setup',
  'hp-laserjet-pro-m234-dn-dw-nw-sdw-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-m234dn-driver-setup',
  'hp-laserjet-pro-m201dw-m202dw-m203dw-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-m201dw-driver-setup',
  'hp-laserjet-pro-m15-w-a-driver-installation-wifi-setup-guide':
    'hp-laserjet-pro-m15w-driver-setup',
  'hp-laserjet-pro-mfp-m283-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m227fdw-driver-setup',
  'hp-laserjet-pro-m234-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-m234sdw-driver-setup',
  'hp-laserjet-pro-m227-series-driver-setup':
    'hp-laserjet-pro-mfp-m227fdw-driver-setup',
  'hp-laserjet-pro-m477-series-driver-setup':
    'hp-laserjet-pro-mfp-m477fdw-driver-setup',
  'hp-laserjet-pro-m428-series-driver-setup':
    'hp-laserjet-pro-mfp-m428fdw-driver-setup',
  'hp-laserjet-pro-m15-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-m15w-driver-setup',
  'hp-laserjet-pro-m402-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-m402dn-driver-setup',
  'hp-laserjet-pro-m404-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-m404dn-driver-setup',
  'hp-laserjet-pro-mfp-m428-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m428fdw-driver-setup',
  'hp-laserjet-pro-mfp-m477-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m477fdw-driver-setup',
  'hp-laserjet-pro-mfp-m227-series-driver-wifi-setup-guide':
    'hp-laserjet-pro-mfp-m227fdw-driver-setup',
};

const SUFFIX_REPLACEMENTS = [
  '-driver-wifi-setup-troubleshooting-guide',
  '-driver-wifi-network-usb-setup-troubleshooting-guide',
  '-driver-network-usb-wifi-setup-troubleshooting-guide',
  '-driver-wifi-network-usb-setup-troubleshooting-guide',
  '-driver-network-usb-wifi-setup-troubleshooting-guide',
  '-driver-installation-wifi-setup-guide',
  '-driver-wifi-setup-guide',
  '-driver-download-install',
  '-driver-network-setup-troubleshooting-guide',
  '-driver-wifi-setup-troubleshooting-guide',
  '-driver-installation-troubleshooting',
  '-driver-wifi-setup',
  '-driver-ethernet-setup',
  '-driver-network-setup-troubleshooting-guide',
  '-driver-setup-guide',
  '-driver-setup-troubleshooting',
].map((suffix) => [suffix, '-driver-setup']);

const NON_MODEL_TOKENS = new Set([
  'hp', 'epson', 'canon', 'brother', 'printer', 'printers', 'pro', 'mfp',
  'driver', 'drivers', 'installation', 'install', 'download', 'setup',
  'wifi', 'wireless', 'network', 'usb', 'ethernet', 'guide',
  'troubleshooting', 'troubleshoot', 'fix', 'fixes', 'series', 'support',
]);

function normalizeToken(token) {
  const normalized = token.trim().toLowerCase();
  if (!normalized || /\d/.test(normalized)) return normalized;
  if (normalized.endsWith('ies') && normalized.length > 4) {
    return `${normalized.slice(0, -3)}y`;
  }
  if (normalized.endsWith('s') && normalized.length > 3) {
    return normalized.slice(0, -1);
  }
  return normalized;
}

function tokenizeSlug(slug) {
  return slug
    .split('-')
    .map((token) => normalizeToken(token))
    .filter(Boolean)
    .filter((token) => !NON_MODEL_TOKENS.has(token));
}

function scoreCandidate(sourceTokens, candidateTokens) {
  const candidateSet = new Set(candidateTokens);
  let score = 0;
  for (const token of sourceTokens) {
    if (candidateSet.has(token)) score += /\d/.test(token) ? 3 : 1;
  }
  return score;
}

function heuristicCanonical(slug) {
  const sourceTokens = tokenizeSlug(slug);
  if (sourceTokens.length === 0) return null;

  let bestSlug = null;
  let bestScore = 0;

  for (const candidate of CANONICAL_SLUGS) {
    const score = scoreCandidate(sourceTokens, tokenizeSlug(candidate));
    if (score > bestScore) {
      bestScore = score;
      bestSlug = candidate;
    }
  }

  return bestScore >= 4 ? bestSlug : null;
}

function applySuffixRules(slug) {
  for (const [from, to] of SUFFIX_REPLACEMENTS) {
    if (slug.endsWith(from)) {
      const candidate = `${slug.slice(0, -from.length)}${to}`;
      if (CANONICAL_SET.has(candidate)) return candidate;
    }
  }
  return null;
}

function resolveTarget(slug) {
  if (!slug) return null;
  if (MANUAL_TARGETS[slug]) return MANUAL_TARGETS[slug];
  if (CANONICAL_SET.has(slug)) return slug;

  const fromSuffix = applySuffixRules(slug);
  if (fromSuffix) return fromSuffix;

  // hp-8025e-setup → try matching officejet model posts
  const heuristic = heuristicCanonical(slug);
  if (heuristic) return heuristic;

  return null;
}

const newAliases = {};
const unresolved = [];

const allKeys = new Set([
  ...Object.keys(OLD_ALIASES),
  ...Object.keys(OLD_ALIASES).map((k) => OLD_ALIASES[k]),
]);

for (const alias of allKeys) {
  if (CANONICAL_SET.has(alias)) continue;

  const target =
    resolveTarget(OLD_ALIASES[alias]) ??
    resolveTarget(alias);

  if (!target || !CANONICAL_SET.has(target)) {
    unresolved.push(alias);
    continue;
  }
  if (alias === target) continue;

  newAliases[alias] = target;
}

const sortedEntries = Object.entries(newAliases).sort(([a], [b]) => a.localeCompare(b));

const aliasBlock = sortedEntries
  .map(([k, v]) => `  '${k}': '${v}',`)
  .join('\n');

const fileContent = `// Maps alternate/variant blog URL slugs to canonical post slugs.
// Used so all historical printerzsupport.com blog URLs resolve to the correct post
// while keeping a single canonical URL for SEO.

import { blogPosts } from './blogPosts.js';

const CANONICAL_SLUGS = new Set(blogPosts.map((p) => p.slug));

// Alias slug -> canonical slug (only for slugs that are NOT already in blogPosts)
export const blogSlugAliases = {
${aliasBlock}
};

const NON_MODEL_TOKENS = new Set([
  'hp', 'epson', 'canon', 'brother', 'printer', 'printers', 'pro', 'mfp',
  'driver', 'drivers', 'installation', 'install', 'download', 'setup',
  'wifi', 'wireless', 'network', 'usb', 'ethernet', 'guide',
  'troubleshooting', 'troubleshoot', 'fix', 'fixes', 'series', 'support'
]);

function normalizeToken(token) {
  const normalized = token.trim().toLowerCase();
  if (!normalized || /\\d/.test(normalized)) return normalized;

  // Lightweight singularization so plural variants map consistently.
  if (normalized.endsWith('ies') && normalized.length > 4) {
    return \`\${normalized.slice(0, -3)}y\`;
  }
  if (normalized.endsWith('s') && normalized.length > 3) {
    return normalized.slice(0, -1);
  }
  return normalized;
}

function tokenizeSlug(slug) {
  return slug
    .split('-')
    .map((token) => normalizeToken(token))
    .filter(Boolean)
    .filter((token) => !NON_MODEL_TOKENS.has(token));
}

function scoreCandidate(sourceTokens, candidateTokens) {
  const candidateSet = new Set(candidateTokens);
  let score = 0;
  for (const token of sourceTokens) {
    if (candidateSet.has(token)) score += /\\d/.test(token) ? 3 : 1;
  }
  return score;
}

function getHeuristicCanonicalSlug(slug) {
  const sourceTokens = tokenizeSlug(slug);
  if (sourceTokens.length === 0) return null;

  let bestSlug = null;
  let bestScore = 0;

  for (const candidate of CANONICAL_SLUGS) {
    const candidateTokens = tokenizeSlug(candidate);
    const score = scoreCandidate(sourceTokens, candidateTokens);
    if (score > bestScore) {
      bestScore = score;
      bestSlug = candidate;
    }
  }

  // Require a meaningful overlap before accepting fallback mapping.
  return bestScore >= 4 ? bestSlug : null;
}

/** Returns the canonical slug for a given slug (same slug if already canonical, or alias target). */
export function getCanonicalSlug(slug) {
  if (CANONICAL_SLUGS.has(slug)) return slug;
  return blogSlugAliases[slug] ?? getHeuristicCanonicalSlug(slug);
}

/** All blog slugs that should have a static page (canonical + aliases). */
export function getAllBlogSlugs() {
  const canonical = blogPosts.map((p) => p.slug);
  const aliases = Object.keys(blogSlugAliases).filter((s) => !CANONICAL_SLUGS.has(s));
  return [...canonical, ...aliases];
}
`;

writeFileSync(new URL('../lib/data/blogAliases.js', import.meta.url), fileContent);

console.log(
  JSON.stringify(
    {
      oldCount: Object.keys(OLD_ALIASES).length,
      newCount: sortedEntries.length,
      unresolvedCount: unresolved.length,
      unresolved: unresolved.slice(0, 30),
      brokenTargets: sortedEntries.filter(([, t]) => !CANONICAL_SET.has(t)).length,
      canonAsAliasKey: sortedEntries.filter(([a]) => CANONICAL_SET.has(a)).length,
    },
    null,
    2
  )
);
