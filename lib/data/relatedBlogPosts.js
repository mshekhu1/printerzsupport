/** Problem / recovery pages that should surface next to HP articles. */
export const HP_PROBLEM_SLUGS = [
  'hp-easy-start-cannot-find-printer',
  'how-to-fix-printer-offline-issues-troubleshooting',
  'hp-printer-not-printing-fix',
  'hp-printer-wifi-not-connecting',
  'hp-printer-error-codes-guide',
  'hp-print-spooler-error-fix',
  'hp-invalid-wpa-passphrase',
  'hp-printer-paper-jam-fix',
  'hp-printer-event-74899',
  'hp-printer-event-69552',
  'hp-printer-maintenance-in-progress',
  'hp-auto-crossover-printer',
  'hp-pick-motor-stalled',
  'hp-cartridge-not-recognized-fix',
  'hp-designjet-support',
];

const RELATED_BY_SLUG = {
  'hp-designjet-support': [
    'hp-auto-crossover-printer',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-printer-wifi-not-connecting',
    'hp-printer-error-codes-guide',
  ],
  'hp-easy-start-cannot-find-printer': [
    'hp-invalid-wpa-passphrase',
    'hp-printer-wifi-not-connecting',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-printer-event-74899',
  ],
  'hp-printer-event-74899': [
    'hp-printer-event-69552',
    'hp-printer-error-codes-guide',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-print-spooler-error-fix',
  ],
  'hp-printer-event-69552': [
    'hp-printer-event-74899',
    'hp-printer-error-codes-guide',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-easy-start-cannot-find-printer',
  ],
  'hp-printer-maintenance-in-progress': [
    'hp-smart-tank-setup-guide',
    'hp-printer-printing-blank-pages',
    'hp-cartridge-not-recognized-fix',
    'hp-easy-start-cannot-find-printer',
  ],
  'hp-auto-crossover-printer': [
    'hp-designjet-support',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-laserjet-pro-m402dn-driver-setup',
    'hp-print-spooler-error-fix',
  ],
  'hp-pick-motor-stalled': [
    'hp-printer-paper-jam-fix',
    'hp-printer-not-printing-fix',
    'hp-printer-error-codes-guide',
    'hp-laserjet-pro-m402dn-driver-setup',
  ],
  'hp-invalid-wpa-passphrase': [
    'hp-printer-wifi-not-connecting',
    'hp-easy-start-cannot-find-printer',
    'wireless-printer-setup-guide',
    'hp-envy-7855-driver-setup',
  ],
  'hp-laserjet-pro-m402dn-driver-setup': [
    'hp-auto-crossover-printer',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-print-spooler-error-fix',
    'hp-pick-motor-stalled',
  ],
  'hp-laserjet-pro-m15w-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-invalid-wpa-passphrase',
    'hp-printer-wifi-not-connecting',
    'how-to-fix-printer-offline-issues-troubleshooting',
  ],
  'hp-laserjet-pro-m201dw-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-invalid-wpa-passphrase',
    'hp-auto-crossover-printer',
    'hp-pick-motor-stalled',
  ],
  'hp-officejet-pro-8710-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-printer-wifi-not-connecting',
    'hp-cartridge-not-recognized-fix',
    'hp-printer-maintenance-in-progress',
  ],
  'hp-envy-7855-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-printer-maintenance-in-progress',
    'hp-invalid-wpa-passphrase',
    'hp-envy-5000-driver-setup',
  ],
  'hp-envy-5000-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-invalid-wpa-passphrase',
    'hp-printer-maintenance-in-progress',
    'hp-envy-7855-driver-setup',
  ],
  'hp-laserjet-pro-mfp-m227fdw-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-auto-crossover-printer',
    'hp-invalid-wpa-passphrase',
    'hp-pick-motor-stalled',
  ],
  'hp-laserjet-pro-mfp-m477fdw-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-auto-crossover-printer',
    'hp-invalid-wpa-passphrase',
    'hp-pick-motor-stalled',
  ],
  'hp-laserjet-pro-mfp-m428fdw-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-auto-crossover-printer',
    'hp-invalid-wpa-passphrase',
    'hp-printer-wifi-not-connecting',
  ],
  'hp-smart-tank-driver-download-install': [
    'hp-smart-tank-setup-guide',
    'hp-printer-maintenance-in-progress',
    'hp-easy-start-cannot-find-printer',
    'hp-smart-tank-wifi-not-connecting',
  ],
  'hp-laserjet-pro-m234dw-driver-setup': [
    'hp-easy-start-cannot-find-printer',
    'hp-auto-crossover-printer',
    'hp-invalid-wpa-passphrase',
    'hp-pick-motor-stalled',
  ],
  'hp-printer-wifi-not-connecting': [
    'hp-invalid-wpa-passphrase',
    'hp-easy-start-cannot-find-printer',
    'how-to-fix-printer-offline-issues-troubleshooting',
    'wireless-printer-setup-guide',
  ],
  'how-to-fix-printer-offline-issues-troubleshooting': [
    'hp-print-spooler-error-fix',
    'hp-printer-not-printing-fix',
    'hp-easy-start-cannot-find-printer',
    'hp-auto-crossover-printer',
  ],
  'hp-printer-not-printing-fix': [
    'how-to-fix-printer-offline-issues-troubleshooting',
    'hp-print-spooler-error-fix',
    'hp-printer-paper-jam-fix',
    'hp-printer-error-codes-guide',
  ],
  'hp-printer-error-codes-guide': [
    'hp-printer-event-74899',
    'hp-printer-event-69552',
    'hp-pick-motor-stalled',
    'hp-printer-not-printing-fix',
  ],
};

const DRIVER_SETUP_RE = /driver-setup$|driver-download-install$/;

function brandPrefix(slug) {
  const match = slug.match(/^(hp|canon|epson|brother)-/);
  return match ? match[1] : null;
}

function byDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date);
}

/**
 * Related articles for a blog post: explicit siblings first, then HP problem
 * guides, then same-brand non-clone posts. Avoids filling the sidebar with
 * near-duplicate *-driver-setup pages.
 */
export function getRelatedBlogPosts(post, allPosts, limit = 5) {
  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
  const picked = [];
  const seen = new Set([post.slug]);

  const pushSlug = (slug) => {
    if (picked.length >= limit || seen.has(slug)) return;
    const next = bySlug.get(slug);
    if (!next) return;
    seen.add(slug);
    picked.push(next);
  };

  for (const slug of RELATED_BY_SLUG[post.slug] || []) {
    pushSlug(slug);
  }

  const brand = brandPrefix(post.slug);
  const isHp = brand === 'hp' || (post.keywords || '').toLowerCase().includes('hp ');
  if (isHp) {
    for (const slug of HP_PROBLEM_SLUGS) pushSlug(slug);
  }

  const rest = allPosts.filter((p) => !seen.has(p.slug));
  const sameBrand = brand
    ? rest.filter((p) => brandPrefix(p.slug) === brand)
    : rest;

  const fill = (candidates) => {
    for (const candidate of candidates) {
      if (picked.length >= limit) return;
      seen.add(candidate.slug);
      picked.push(candidate);
    }
  };

  fill(
    sameBrand
      .filter((p) => p.category === post.category && !DRIVER_SETUP_RE.test(p.slug))
      .sort(byDateDesc)
  );
  fill(
    sameBrand
      .filter((p) => !DRIVER_SETUP_RE.test(p.slug))
      .sort(byDateDesc)
  );
  fill(sameBrand.filter((p) => p.category === post.category).sort(byDateDesc));
  fill(rest.filter((p) => p.category === post.category).sort(byDateDesc));

  return picked.slice(0, limit);
}
