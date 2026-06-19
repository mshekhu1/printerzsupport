/** Shared SEO copy for US state and Canada province location pages. */

const HP_GUIDES = [
  { slug: 'how-to-fix-printer-offline-issues-troubleshooting', label: 'How to fix printer offline issues' },
  { slug: 'hp-printer-troubleshooting-guide', label: 'HP printer troubleshooting guide' },
  { slug: 'wireless-printer-setup-guide', label: 'Wireless printer setup guide' },
  { slug: 'install-printer-drivers-windows-11-setup', label: 'Install printer drivers on Windows 11' },
  { slug: 'hp-laserjet-pro-m404dn-driver-setup', label: 'HP LaserJet Pro M404dn driver setup' },
  { slug: 'hp-officejet-pro-9015e-driver-setup', label: 'HP OfficeJet Pro 9015e setup' },
  { slug: 'hp-officejet-pro-8035e-driver-setup', label: 'HP OfficeJet Pro 8035e setup' },
  { slug: 'hp-deskjet-plus-4100e-driver-setup', label: 'HP DeskJet Plus 4100e setup' },
  { slug: 'printer-maintenance-tips', label: 'Printer maintenance tips' },
];

const US_LOCAL_AREAS = {
  alabama: 'Birmingham, Montgomery, and Huntsville',
  alaska: 'Anchorage, Fairbanks, and Juneau',
  arizona: 'Phoenix, Tucson, and Mesa',
  arkansas: 'Little Rock, Fayetteville, and Fort Smith',
  california: 'Los Angeles, San Francisco, San Diego, and Sacramento',
  colorado: 'Denver, Colorado Springs, and Aurora',
  connecticut: 'Hartford, New Haven, and Stamford',
  delaware: 'Wilmington, Dover, and Newark',
  florida: 'Miami, Tampa, Orlando, and Jacksonville',
  georgia: 'Atlanta, Savannah, and Augusta',
  hawaii: 'Honolulu, Pearl City, and Hilo',
  idaho: 'Boise, Meridian, and Nampa',
  illinois: 'Chicago, Aurora, and Naperville',
  indiana: 'Indianapolis, Fort Wayne, and Evansville',
  iowa: 'Des Moines, Cedar Rapids, and Davenport',
  kansas: 'Wichita, Overland Park, and Kansas City',
  kentucky: 'Louisville, Lexington, and Bowling Green',
  louisiana: 'New Orleans, Baton Rouge, and Shreveport',
  maine: 'Portland, Lewiston, and Bangor',
  maryland: 'Baltimore, Columbia, and Silver Spring',
  massachusetts: 'Boston, Worcester, and Springfield',
  michigan: 'Detroit, Grand Rapids, and Ann Arbor',
  minnesota: 'Minneapolis, Saint Paul, and Rochester',
  mississippi: 'Jackson, Gulfport, and Hattiesburg',
  missouri: 'Kansas City, St. Louis, and Springfield',
  montana: 'Billings, Missoula, and Great Falls',
  nebraska: 'Omaha, Lincoln, and Bellevue',
  nevada: 'Las Vegas, Henderson, and Reno',
  'new-hampshire': 'Manchester, Nashua, and Concord',
  'new-jersey': 'Newark, Jersey City, and Trenton',
  'new-mexico': 'Albuquerque, Las Cruces, and Santa Fe',
  'new-york': 'New York City, Buffalo, and Rochester',
  'north-carolina': 'Charlotte, Raleigh, and Greensboro',
  'north-dakota': 'Fargo, Bismarck, and Grand Forks',
  ohio: 'Columbus, Cleveland, and Cincinnati',
  oklahoma: 'Oklahoma City, Tulsa, and Norman',
  oregon: 'Portland, Salem, and Eugene',
  pennsylvania: 'Philadelphia, Pittsburgh, and Allentown',
  'rhode-island': 'Providence, Warwick, and Cranston',
  'south-carolina': 'Charleston, Columbia, and Greenville',
  'south-dakota': 'Sioux Falls, Rapid City, and Aberdeen',
  tennessee: 'Nashville, Memphis, and Knoxville',
  texas: 'Houston, Dallas, Austin, and San Antonio',
  utah: 'Salt Lake City, West Valley City, and Provo',
  vermont: 'Burlington, Essex, and South Burlington',
  virginia: 'Virginia Beach, Norfolk, and Richmond',
  washington: 'Seattle, Spokane, and Tacoma',
  'west-virginia': 'Charleston, Huntington, and Morgantown',
  wisconsin: 'Milwaukee, Madison, and Green Bay',
  wyoming: 'Cheyenne, Casper, and Laramie',
};

export const CA_LOCAL_AREAS = {
  alberta: 'Calgary, Edmonton, and Red Deer',
  'british-columbia': 'Vancouver, Surrey, and Victoria',
  manitoba: 'Winnipeg, Brandon, and Steinbach',
  'new-brunswick': 'Moncton, Saint John, and Fredericton',
  'newfoundland-and-labrador': "St. John's, Mount Pearl, and Corner Brook",
  'northwest-territories': 'Yellowknife, Hay River, and Inuvik',
  'nova-scotia': 'Halifax, Dartmouth, and Sydney',
  nunavut: 'Iqaluit, Rankin Inlet, and Arviat',
  ontario: 'Toronto, Ottawa, and Mississauga',
  'prince-edward-island': 'Charlottetown, Summerside, and Stratford',
  quebec: 'Montreal, Quebec City, and Laval',
  saskatchewan: 'Saskatoon, Regina, and Prince Albert',
  yukon: 'Whitehorse, Dawson City, and Watson Lake',
};

function hashSlug(slug) {
  return [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

const LOCATION_FAQ_POOL = [
  {
    question: (place) => `Do you offer remote HP printer help in ${place}?`,
    answer: (place) =>
      `Yes. We provide remote support throughout ${place}. Most LaserJet, OfficeJet, DeskJet, and Envy issues are fixed in one session without an in-person visit.`,
  },
  {
    question: (place) => `How fast can you fix a printer offline error in ${place}?`,
    answer: (place) =>
      `Most offline and not-printing issues in ${place} are diagnosed within minutes. We walk you through driver, spooler, and network checks until your printer is working again.`,
  },
  {
    question: (place) => `Which HP printer models do you support in ${place}?`,
    answer: (place) =>
      `We support LaserJet Pro and Enterprise, OfficeJet and OfficeJet Pro, DeskJet, DeskJet Plus, and Envy models for customers in ${place} — including WiFi setup, driver install, and jam repair.`,
  },
  {
    question: (place) => `Can you help with WiFi setup in ${place}?`,
    answer: (place) =>
      `Yes. We help ${place} customers connect HP printers to WiFi, configure HP Smart, and resolve wireless printing problems on Windows, Mac, and mobile devices.`,
  },
  {
    question: (place) => `Can businesses in ${place} get fleet printer support?`,
    answer: (place) =>
      `We assist ${place} offices with multiple printers — network printing, print server issues, driver deployment, and ongoing maintenance for LaserJet and OfficeJet fleets.`,
  },
  {
    question: (place) => `What does printer support cost in ${place}?`,
    answer: (place) =>
      `Pricing depends on your model and issue. Call our ${place} support line for a quick quote. Remote help is often more affordable than local shop visits because there is no travel fee.`,
  },
  {
    question: (place) => `Do you help with driver installation in ${place}?`,
    answer: (place) =>
      `We install, update, and reinstall HP printer drivers for Windows 11, Windows 10, and Mac for customers in ${place}, including full driver cleanup when installs fail.`,
  },
  {
    question: (place) => `Are you available 24/7 in ${place}?`,
    answer: (place) =>
      `Yes. Our team is available around the clock for urgent print jobs and business downtime anywhere in ${place}.`,
  },
];

function getLocationFaqsHtml(slug, placeName) {
  const start = hashSlug(slug) % LOCATION_FAQ_POOL.length;
  const picked = [
    LOCATION_FAQ_POOL[start],
    LOCATION_FAQ_POOL[(start + 3) % LOCATION_FAQ_POOL.length],
  ];

  const items = picked
    .map(
      (faq) =>
        `<h3>${faq.question(placeName)}</h3><p>${faq.answer(placeName)}</p>`
    )
    .join('');

  return `
    <h2>HP Printer FAQs — ${placeName}</h2>
    ${items}
  `;
}

export function getLocationFaqSchema(slug, placeName, pageUrl) {
  const start = hashSlug(slug) % LOCATION_FAQ_POOL.length;
  const picked = [
    LOCATION_FAQ_POOL[start],
    LOCATION_FAQ_POOL[(start + 3) % LOCATION_FAQ_POOL.length],
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: picked.map((faq) => ({
      '@type': 'Question',
      name: faq.question(placeName),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer(placeName),
      },
    })),
    url: pageUrl,
  };
}

export function getLocationPageTitle(placeName) {
  return `Printer Help in ${placeName}`;
}

export function getLocationMetaDescription(placeName, countrySuffix = '') {
  return `24/7 HP printer customer service and technical support in ${placeName}${countrySuffix}. Fix offline errors, jams, drivers, and WiFi on HP printers.`;
}

export function getLocationKeywords(placeName, countrySuffix = '') {
  const country = countrySuffix ? ' Canada' : '';
  return `HP printer help ${placeName}, printer support ${placeName}, fix HP printer error${country}`;
}

function getGuideLinksHtml(slug) {
  const start = hashSlug(slug) % HP_GUIDES.length;
  const guides = [
    HP_GUIDES[start],
    HP_GUIDES[(start + 3) % HP_GUIDES.length],
  ];
  const items = guides
    .map(
      (g) =>
        `<li><a href="/blog/${g.slug}">${g.label}</a></li>`
    )
    .join('');
  return `
    <h3>Helpful HP Printer Guides</h3>
    <p>Popular step-by-step resources for ${guides[0].label.toLowerCase().includes('hp') ? 'HP owners' : 'printer owners'}:</p>
    <ul>${items}</ul>
  `;
}

function getLocalIntroHtml(slug, placeName, areasMap, countrySuffix = '') {
  const cities = areasMap[slug];
  if (cities) {
    return `<p><strong>Local support in ${placeName}:</strong> We help customers in ${cities}, and statewide${countrySuffix}, with fast remote assistance for home offices and businesses.</p>`;
  }
  return `<p><strong>Support across ${placeName}:</strong> We help remote workers, small businesses, and teams statewide${countrySuffix} with expert troubleshooting and setup.</p>`;
}

export function generateHpLocationContent({
  slug,
  placeName,
  countrySuffix = '',
  areasMap = US_LOCAL_AREAS,
}) {
  const inPlace = countrySuffix ? `${placeName}${countrySuffix}` : placeName;

  return `
    <h1>Printer Help in ${placeName}</h1>
    <p>Stuck with a printer that won't print in ${inPlace}? We help remotely with HP LaserJet, OfficeJet, DeskJet, and Envy models — jams, offline errors, bad drivers, and WiFi setup.</p>

    ${getLocalIntroHtml(slug, placeName, areasMap, countrySuffix)}

    <h2>Why customers in ${placeName} call us</h2>
    <p>Most problems are fixed in one remote session — no shop visit. We work with home offices and small businesses across ${placeName}.</p>

    <h3>Services We Offer</h3>
    <p>Comprehensive printer support for ${placeName} customers:</p>
    <ul>
      <li><strong>Offline Fix:</strong> Resolve printers showing offline on Windows and Mac, including network and WiFi models.</li>
      <li><strong>Paper Jam &amp; Feed Repair:</strong> Clear jams and fix feed issues on LaserJet and OfficeJet devices.</li>
      <li><strong>Print Quality:</strong> Fix faded prints, streaks, smudges, and alignment on inkjet and laser printers.</li>
      <li><strong>Driver Installation:</strong> Install, update, or reinstall drivers for Windows 11, Mac, and older systems.</li>
      <li><strong>Wireless &amp; WiFi:</strong> Set up WiFi printing, fix HP Smart connection issues, and troubleshoot network printing.</li>
      <li><strong>Error Codes:</strong> Resolve error codes and firmware issues on LaserJet, OfficeJet, and DeskJet models.</li>
    </ul>

    ${getGuideLinksHtml(slug)}

    <h3>Why Customers in ${placeName} Choose Us</h3>
    <ul>
      <li><strong>HP Specialists:</strong> LaserJet, OfficeJet, DeskJet, Envy, and PageWide expertise.</li>
      <li><strong>Full Remote Support:</strong> Setup, repair, and maintenance — all handled over the phone.</li>
      <li><strong>Fast Service:</strong> Most issues resolved in one session.</li>
      <li><strong>24/7 Availability:</strong> Help when you need it, not just during business hours.</li>
    </ul>

    <h3>Common Problems We Fix in ${placeName}</h3>
    <ul>
      <li>Printer offline or not printing</li>
      <li>Paper jams and feed failures</li>
      <li>Poor print quality, streaks, and faded output</li>
      <li>Driver errors and installation failures</li>
      <li>WiFi and wireless connection problems</li>
      <li>Ink or toner recognition issues</li>
      <li>HP Smart app and setup issues</li>
    </ul>

    <h3>Models We Support in ${placeName}</h3>
    <ul>
      <li><strong>LaserJet Pro &amp; Enterprise</strong> — M404, M428, MFP series and more</li>
      <li><strong>OfficeJet &amp; OfficeJet Pro</strong> — 8025e, 9015e, 8130e, and related models</li>
      <li><strong>DeskJet &amp; DeskJet Plus</strong> — Home and small office inkjet support</li>
      <li><strong>Envy</strong> — Wireless all-in-one setup and repair</li>
    </ul>

    <h3>How It Works</h3>
    <ol>
      <li><strong>Contact Us:</strong> Call and describe your printer problem.</li>
      <li><strong>Remote Diagnosis:</strong> We identify the issue on your device.</li>
      <li><strong>Fix &amp; Verify:</strong> We resolve drivers, connectivity, and software faults, then confirm printing works.</li>
    </ol>

    <h3>Business Printer Support in ${placeName}</h3>
    <p>For ${placeName} offices with multiple printers, we offer fleet support, network printer troubleshooting, print server help, and maintenance for LaserJet and OfficeJet deployments.</p>

    ${getLocationFaqsHtml(slug, placeName)}

    <h3>Get help in ${placeName}</h3>
    <p>Call <a href="tel:+18884237757">(888) 423-7757</a> — we're here around the clock for setup, repair, and troubleshooting.</p>

    <p>From LaserJet paper jams to OfficeJet WiFi drops, we can walk you through it from anywhere in ${inPlace}.</p>
  `;
}
