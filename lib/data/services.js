// Printer support services — shared data for index, landing pages, and nav

export const printerServices = [
  {
    id: 1,
    slug: 'wireless-printer-setup',
    title: 'Wireless Printer Setup',
    shortTitle: 'Wireless Setup',
    description:
      'Expert wireless printer setup for HP, Canon, Epson, Brother, and more. We connect your printer to WiFi and all your devices remotely.',
    metaTitle: 'Wireless Printer Setup Service',
    icon: '📶',
    color: '#3b82f6',
    features: [
      'WiFi network configuration',
      '2.4GHz and dual-band router setup',
      'Mobile and tablet printing',
      'Printer security settings',
    ],
    benefits: [
      'Print from phones, tablets, and laptops',
      'No cables cluttering your desk',
      'Secure home or office network',
      'Works with major brands',
    ],
    commonIssues: [
      'Printer not found on WiFi',
      'Printer keeps disconnecting from network',
      'Cannot print from phone or iPad',
      'Wrong network selected during setup',
      'WPS setup failing',
    ],
    relatedBlogSlugs: [
      { slug: 'wireless-printer-setup-guide', label: 'Wireless printer setup guide' },
      { slug: 'how-to-fix-printer-offline-issues-troubleshooting', label: 'Fix printer offline issues' },
    ],
  },
  {
    id: 2,
    slug: 'printer-repair',
    title: 'Printer Repair',
    shortTitle: 'Printer Repair',
    description:
      'Fast remote printer repair for paper jams, offline errors, print quality, and hardware faults on inkjet and laser printers.',
    metaTitle: 'Printer Repair Service',
    icon: '🔧',
    color: '#ef4444',
    features: [
      'Paper jam and feed repair',
      'Offline and not printing fixes',
      'Print quality troubleshooting',
      'Hardware and sensor diagnostics',
    ],
    benefits: [
      'Most issues fixed in one session',
      'No shop drop-off required',
      'HP, Canon, Epson, Brother expertise',
      'Home and business printers',
    ],
    commonIssues: [
      'Printer not printing',
      'Paper jams that keep returning',
      'Faded or streaky prints',
      'Grinding or unusual noises',
      'Scanner or ADF not working',
    ],
    relatedBlogSlugs: [
      { slug: 'hp-printer-troubleshooting-guide', label: 'HP printer troubleshooting' },
      { slug: 'printer-maintenance-tips', label: 'Printer maintenance tips' },
    ],
  },
  {
    id: 3,
    slug: 'printer-maintenance',
    title: 'Printer Maintenance',
    shortTitle: 'Maintenance',
    description:
      'Keep printers running smoothly with cleaning, calibration, firmware updates, and preventive maintenance for home and office devices.',
    metaTitle: 'Printer Maintenance Service',
    icon: '🛠️',
    color: '#10b981',
    features: [
      'Print head cleaning and alignment',
      'Firmware and software updates',
      'Preventive health checks',
      'Toner and ink system care',
    ],
    benefits: [
      'Fewer breakdowns over time',
      'Better print quality',
      'Longer printer lifespan',
      'Scheduled care for office fleets',
    ],
    commonIssues: [
      'Streaks or lines on prints',
      'Ink smearing or blotching',
      'Slow printing performance',
      'Warning lights after heavy use',
      'Dust buildup in laser printers',
    ],
    relatedBlogSlugs: [
      { slug: 'printer-maintenance-tips', label: 'Printer maintenance tips' },
      { slug: 'hp-printer-troubleshooting-guide', label: 'HP troubleshooting guide' },
    ],
  },
  {
    id: 4,
    slug: 'printer-installation',
    title: 'Printer Installation',
    shortTitle: 'Installation',
    description:
      'Professional printer installation including unboxing, driver setup, USB or network connection, and test printing on Windows and Mac.',
    metaTitle: 'Printer Installation Service',
    icon: '📦',
    color: '#8b5cf6',
    features: [
      'New printer setup end-to-end',
      'Driver download and install',
      'USB, Ethernet, or WiFi connection',
      'Test print and scan verification',
    ],
    benefits: [
      'Correct setup the first time',
      'All devices configured',
      'Default printer and queue setup',
      'Scan-to-email or cloud options',
    ],
    commonIssues: [
      'Drivers will not install',
      'Computer does not detect printer',
      'Cannot complete first-time setup',
      'Scan function not working after install',
      'Multiple printers conflicting',
    ],
    relatedBlogSlugs: [
      { slug: 'install-printer-drivers-windows-11-setup', label: 'Install drivers on Windows 11' },
      { slug: 'canon-printer-installation-guide', label: 'Canon printer installation' },
    ],
  },
  {
    id: 5,
    slug: 'printer-troubleshooting',
    title: 'Printer Troubleshooting',
    shortTitle: 'Troubleshooting',
    description:
      'Expert printer troubleshooting for error codes, spooler problems, driver conflicts, and connectivity issues on all major brands.',
    metaTitle: 'Printer Troubleshooting Service',
    icon: '🔍',
    color: '#f59e0b',
    features: [
      'Error code diagnosis',
      'Print spooler repair',
      'Driver conflict resolution',
      'Network and USB troubleshooting',
    ],
    benefits: [
      'Clear explanation of the problem',
      'Step-by-step remote fixes',
      'Windows, Mac, and mobile support',
      'Same-day help available',
    ],
    commonIssues: [
      'Printer offline in Windows or Mac',
      'Print jobs stuck in queue',
      'Unknown error codes on display',
      'Printer prints blank pages',
      'Software conflicts after updates',
    ],
    relatedBlogSlugs: [
      { slug: 'how-to-fix-printer-offline-issues-troubleshooting', label: 'Fix printer offline' },
      { slug: 'epson-printer-error-codes-troubleshooting-guide', label: 'Epson error codes guide' },
    ],
  },
  {
    id: 6,
    slug: '24-7-printer-support',
    title: '24/7 Printer Support',
    shortTitle: '24/7 Support',
    description:
      'Round-the-clock printer support by phone and remote session. Urgent help for offices, home users, and remote workers anytime.',
    metaTitle: '24/7 Printer Support',
    icon: '🕒',
    color: '#ec4899',
    features: [
      '24/7 phone and remote access',
      'Urgent business print recovery',
      'All brands and printer types',
      'Follow-up until issue is resolved',
    ],
    benefits: [
      'Help when deadlines matter',
      'No waiting for business hours',
      'One number for all printer issues',
      'Remote fix without a site visit',
    ],
    commonIssues: [
      'Printer down before a deadline',
      'Overnight batch print failures',
      'Remote employee cannot print',
      'Weekend office outage',
      'Critical invoice or label printing blocked',
    ],
    relatedBlogSlugs: [
      { slug: 'brother-printer-not-printing-solutions', label: 'Brother not printing fixes' },
      { slug: 'how-to-fix-printer-offline-issues-troubleshooting', label: 'Printer offline help' },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  printerServices.find((service) => service.slug === slug);

export const getServicePageTitle = (service) => service.metaTitle;

export function generateServiceContent(service) {
  const guideLinks = service.relatedBlogSlugs
    .map((g) => `<li><a href="/blog/${g.slug}">${g.label}</a></li>`)
    .join('');

  return `
    <h1>${service.title}</h1>
    <p>${service.description} Our certified technicians provide professional <strong>${service.title.toLowerCase()}</strong> for homes and businesses across the United States and Canada—with fast remote assistance so you can print again without visiting a repair shop.</p>

    <h2>What Our ${service.title} Includes</h2>
    <ul>
      ${service.features.map((f) => `<li><strong>${f}</strong></li>`).join('')}
    </ul>

    <h2>Benefits of Professional ${service.title}</h2>
    <ul>
      ${service.benefits.map((b) => `<li>${b}</li>`).join('')}
    </ul>

    <h2>Common Problems We Fix</h2>
    <p>Customers choose our ${service.title.toLowerCase()} when they experience issues such as:</p>
    <ul>
      ${service.commonIssues.map((issue) => `<li>${issue}</li>`).join('')}
    </ul>

    <h2>Brands We Support</h2>
    <p>Our ${service.title.toLowerCase()} covers all major printer manufacturers, including <a href="/brands/hp">HP</a>, <a href="/brands/canon">Canon</a>, <a href="/brands/epson">Epson</a>, <a href="/brands/brother">Brother</a>, Lexmark, Xerox, and more. Whether you have an inkjet, laser, or all-in-one device, we can help.</p>

    <h2>Helpful Guides</h2>
    <p>Related step-by-step articles from our blog:</p>
    <ul>${guideLinks}</ul>

    <h2>How It Works</h2>
    <ol>
      <li><strong>Call us</strong> at <a href="tel:+18884237757">(888) 423-7757</a> and describe your printer issue.</li>
      <li><strong>Remote diagnosis</strong> — we connect securely and identify the cause.</li>
      <li><strong>Fix and verify</strong> — we complete your ${service.title.toLowerCase()} and confirm printing works.</li>
    </ol>

    <h2>Business &amp; Home Users</h2>
    <p>From single home printers to small office fleets, our ${service.title.toLowerCase()} scales to your needs. We also support <a href="/us">printer support by state</a> and <a href="/canada">Canada</a> with localized help.</p>

    <h2>Get ${service.title} Today</h2>
    <p>Do not let printer problems slow you down. Contact Printer Support for expert ${service.title.toLowerCase()}—available 24/7:</p>
    <ul>
      <li>Phone: <a href="tel:+18884237757">(888) 423-7757</a></li>
      <li><a href="/contact">Contact form</a> for non-urgent requests</li>
      <li>Browse <a href="/services">all printer services</a></li>
    </ul>
  `;
}
