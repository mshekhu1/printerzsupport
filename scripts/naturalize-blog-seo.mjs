/**
 * One-time / repeatable script to naturalize blog post SEO copy in blogPosts.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../lib/data/blogPosts.js');

let content = fs.readFileSync(filePath, 'utf8');
let changeCount = 0;

function replaceAll(pattern, replacement, label) {
  const before = content;
  content = content.replace(pattern, replacement);
  if (content !== before) {
    const matches = before.match(pattern)?.length ?? 1;
    changeCount += matches;
    console.log(`  ${label}: ${matches} replacement(s)`);
  }
}

console.log('Naturalizing blog SEO...\n');

// Shorten keyword meta strings to ~6 unique terms
content = content.replace(/^(\s+keywords:\s*")([^"]+)(")/gm, (_, prefix, keywords, suffix) => {
  const terms = keywords
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean);
  const seen = new Set();
  const unique = [];
  for (const term of terms) {
    const key = term.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(term);
    }
    if (unique.length >= 6) break;
  }
  const shortened = unique.join(', ');
  if (shortened !== keywords) changeCount++;
  return `${prefix}${shortened}${suffix}`;
});

// Driver/setup post CTAs
replaceAll(
  /<p>If you're experiencing ([^<]+?) driver issues, (?:Ethernet network connection problems|WiFi problems|USB connection problems), or need help with setup, our expert technicians can help\. We provide remote support to install, update, or troubleshoot ([^<]+?) printers\. <a href="tel:\+18884237757">Call \(888\) 423-7757<\/a> for 24\/7 assistance\.<\/p>/g,
  '<p>Still stuck on $1 setup? Our team can help remotely with drivers, connectivity, and configuration. <a href="tel:+18884237757">Call (888) 423-7757</a> — available 24/7.</p>',
  'Driver post CTAs'
);

// General "Need Professional Help?" sections
replaceAll(
  /<h2>Need Professional Help\?<\/h2>\s*<p>If your printer still shows offline after trying these solutions, there may be a hardware issue, network configuration problem, or driver conflict\. Our certified technicians can diagnose and fix printer offline issues remotely\. <a href="tel:\+18884237757">Call \(888\) 423-7757<\/a> for 24\/7 expert assistance\.<\/p>/g,
  '<h2>Still Offline?</h2>\n      <p>If none of these steps worked, you may have a deeper driver conflict or network issue. Our team can diagnose it remotely — <a href="tel:+18884237757">call (888) 423-7757</a> anytime.</p>',
  'Offline help CTA'
);

replaceAll(
  /<p>Wireless printer setup can be tricky with complex networks or older models\. Our certified technicians can configure your printer wirelessly, troubleshoot connections, set up multi-device printing, optimize your network, and install drivers\. <a href="tel:\+18884237757">Call \(888\) 423-7757<\/a> for 24\/7 assistance\.<\/p>/g,
  '<p>WiFi setup can be tricky on complex networks or older models. If you\'re stuck, our team can walk you through it remotely — <a href="tel:+18884237757">call (888) 423-7757</a> anytime.</p>',
  'WiFi setup CTA'
);

replaceAll(
  /<p>Our expert technicians offer comprehensive printer maintenance services to keep your printer running smoothly\. We can perform deep cleaning, component replacement, and optimization\. Call us at <a href="tel:\+18884237757">\(888\) 423-7757<\/a> to schedule maintenance\.<\/p>/g,
  '<p>Need a deeper clean or parts replaced? Our team can help with maintenance and optimization — <a href="tel:+18884237757">call (888) 423-7757</a> to get started.</p>',
  'Maintenance CTA'
);

// Remaining blog CTAs with alternate wording (M234 series, Canon, Brother, Windows 11)
replaceAll(
  /<p>If you're experiencing ([^<]+?) driver issues, [^<]+, our expert technicians can help\. We provide remote support to install, update, or troubleshoot ([^<]+?) printers\. <a href="tel:\+18884237757">Call \(888\) 423-7757<\/a> for 24\/7 assistance\.<\/p>/g,
  '<p>Still stuck on $1 setup? Our team can help remotely with drivers, connectivity, and configuration. <a href="tel:+18884237757">Call (888) 423-7757</a> — available 24/7.</p>',
  'Alternate driver post CTAs'
);

replaceAll(
  /<p>If you're experiencing difficulties installing your Canon printer, our expert technicians can help\. We provide remote support to guide you through the installation process or can troubleshoot any issues\. Call us at <a href="tel:\+18884237757">\(888\) 423-7757<\/a> for assistance\.<\/p>/g,
  '<p>Stuck on Canon installation? <a href="tel:+18884237757">Call (888) 423-7757</a> — we can walk you through setup remotely.</p>',
  'Canon install CTA'
);

replaceAll(
  /<p>If your Brother printer still won't print after trying these solutions, our expert technicians can help\. We specialize in Brother printer troubleshooting and can resolve even complex issues\. Call us at <a href="tel:\+18884237757">\(888\) 423-7757<\/a> for immediate assistance\.<\/p>/g,
  '<p>Brother still not printing? <a href="tel:+18884237757">Call (888) 423-7757</a> — we troubleshoot Brother models remotely.</p>',
  'Brother print CTA'
);

replaceAll(
  /<p>If you're having trouble installing printer drivers on Windows 11, our expert technicians can help\. We provide remote support to guide you through the installation process or can troubleshoot driver issues\. Call us at <a href="tel:\+18884237757">\(888\) 423-7757<\/a> for assistance\.<\/p>/g,
  '<p>Driver install failing on Windows 11? <a href="tel:+18884237757">Call (888) 423-7757</a> — we can help remotely.</p>',
  'Windows 11 driver CTA'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nDone. ~${changeCount} changes applied to blogPosts.js`);
