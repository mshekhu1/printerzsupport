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
    question: (place) => `Do you offer remote HP printer repair in ${place}?`,
    answer: (place) =>
      `Yes. We provide remote HP printer repair and assistance throughout ${place}. Most LaserJet, OfficeJet, DeskJet, and Envy issues are fixed in one session without an in-person visit.`,
  },
  {
    question: (place) => `How fast can you fix an HP printer offline error in ${place}?`,
    answer: (place) =>
      `Most HP offline and not-printing issues in ${place} are diagnosed within minutes. We walk you through driver, spooler, and network checks remotely until your HP printer prints again.`,
  },
  {
    question: (place) => `Which HP printer models do you support in ${place}?`,
    answer: (place) =>
      `We support HP LaserJet Pro and Enterprise, OfficeJet and OfficeJet Pro, DeskJet, DeskJet Plus, and Envy models for customers in ${place}—including WiFi setup, driver install, and jam repair.`,
  },
  {
    question: (place) => `Is HP printer WiFi setup available in ${place}?`,
    answer: (place) =>
      `Yes. We help ${place} customers connect HP printers to WiFi, configure HP Smart, and resolve wireless printing problems on Windows, Mac, and mobile devices.`,
  },
  {
    question: (place) => `Can businesses in ${place} get HP fleet printer support?`,
    answer: (place) =>
      `We assist ${place} offices with multiple HP printers—network printing, print server issues, driver deployment, and ongoing maintenance for LaserJet and OfficeJet fleets.`,
  },
  {
    question: (place) => `What does HP printer repair cost in ${place}?`,
    answer: (place) =>
      `Pricing depends on your HP model and issue. Call our ${place} support line for a quick quote. Remote repair is often more affordable than local shop visits because there is no travel fee.`,
  },
  {
    question: (place) => `Do you help with HP driver installation in ${place}?`,
    answer: (place) =>
      `We install, update, and reinstall HP printer drivers for Windows 11, Windows 10, and Mac for customers in ${place}, including full driver cleanup when installs fail.`,
  },
  {
    question: (place) => `Are you available 24/7 for HP printer help in ${place}?`,
    answer: (place) =>
      `Yes. Our HP printer repair and assistance team is available 24/7 for urgent print jobs and business downtime anywhere in ${place}.`,
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
    <h2>HP Printer Repair FAQs — ${placeName}</h2>
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
  return `HP Printer Repair & Support in ${placeName}`;
}

export function getLocationMetaDescription(placeName, countrySuffix = '') {
  return `HP printer repair and assistance in ${placeName}${countrySuffix}. Fix HP LaserJet, OfficeJet, DeskJet & Envy — offline errors, jams, drivers, WiFi & print quality. 24/7 remote HP printer support.`;
}

export function getLocationKeywords(placeName, countrySuffix = '') {
  const country = countrySuffix ? ' Canada' : ' USA';
  return `HP printer repair ${placeName}, HP printer assistance ${placeName}, HP printer fix ${placeName}, HP LaserJet repair ${placeName}, HP OfficeJet support ${placeName}${country}`;
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
    return `<p><strong>Local HP printer repair in ${placeName}:</strong> We help customers in ${cities}, and statewide${countrySuffix}, with fast remote HP printer repair and assistance for home offices and businesses.</p>`;
  }
  return `<p><strong>HP printer repair across ${placeName}:</strong> We support remote workers, small businesses, and teams statewide${countrySuffix} with expert HP printer repair, assistance, and troubleshooting.</p>`;
}

export function generateHpLocationContent({
  slug,
  placeName,
  countrySuffix = '',
  areasMap = US_LOCAL_AREAS,
}) {
  const inPlace = countrySuffix ? `${placeName}${countrySuffix}` : placeName;

  return `
    <h1>HP Printer Repair &amp; Support in ${placeName}</h1>
    <p>Welcome to HP Printer Support — your trusted partner for <strong>HP printer repair, support, and customer support</strong> in ${inPlace}. Whether you use an HP LaserJet, OfficeJet, DeskJet, or Envy, our certified technicians provide fast remote help for jams, offline errors, print quality issues, driver problems, and WiFi setup.</p>

    ${getLocalIntroHtml(slug, placeName, areasMap, countrySuffix)}

    <h2>Why Choose Our HP Printer Repair &amp; Support in ${placeName}?</h2>
    <p>Our HP printer repair and assistance services serve residents and businesses across ${placeName}. We diagnose and fix HP printers remotely — no shop visit required — so you can print again quickly.</p>

    <h3>HP Printer Repair &amp; Assistance Services</h3>
    <p>Comprehensive HP printer support for ${placeName} customers:</p>
    <ul>
      <li><strong>HP Printer Offline Fix:</strong> Repair HP printers showing offline on Windows and Mac, including network and WiFi models.</li>
      <li><strong>HP Paper Jam &amp; Feed Repair:</strong> Clear jams and fix feed issues on LaserJet and OfficeJet devices.</li>
      <li><strong>HP Print Quality Repair:</strong> Fix faded prints, streaks, smudges, and alignment on inkjet and laser HP printers.</li>
      <li><strong>HP Driver Repair &amp; Installation:</strong> Install, update, or reinstall HP printer drivers for Windows 11, Mac, and older systems.</li>
      <li><strong>HP Wireless &amp; WiFi Support:</strong> Repair HP printer WiFi setup, HP Smart connection issues, and network printing.</li>
      <li><strong>HP Error Code Help:</strong> Resolve HP error codes and firmware issues on LaserJet, OfficeJet, and DeskJet models.</li>
    </ul>

    ${getGuideLinksHtml(slug)}

    <h3>Benefits of HP Printer Repair in ${placeName}</h3>
    <ul>
      <li><strong>HP Specialists:</strong> LaserJet, OfficeJet, DeskJet, Envy, and PageWide expertise.</li>
      <li><strong>Repair &amp; Assistance:</strong> Full remote support — fix, setup, and maintain HP printers.</li>
      <li><strong>Fast Remote Service:</strong> Most issues resolved in one session.</li>
      <li><strong>24/7 Availability:</strong> HP printer repair and assistance when you need it.</li>
    </ul>

    <h3>Common HP Printer Problems We Fix in ${placeName}</h3>
    <ul>
      <li>HP printer offline or not printing</li>
      <li>HP paper jams and feed failures</li>
      <li>HP poor print quality, streaks, and faded output</li>
      <li>HP driver errors and installation failures</li>
      <li>HP WiFi and wireless connection problems</li>
      <li>HP ink or toner recognition issues</li>
      <li>HP Smart app and setup issues</li>
    </ul>

    <h3>HP Printer Models We Support in ${placeName}</h3>
    <ul>
      <li><strong>HP LaserJet Pro &amp; Enterprise</strong> — M404, M428, MFP series and more</li>
      <li><strong>HP OfficeJet &amp; OfficeJet Pro</strong> — 8025e, 9015e, 8130e, and related models</li>
      <li><strong>HP DeskJet &amp; DeskJet Plus</strong> — Home and small office inkjet repair</li>
      <li><strong>HP Envy</strong> — Wireless all-in-one repair and setup</li>
    </ul>

    <h3>How HP Printer Repair Works</h3>
    <ol>
      <li><strong>Contact Us:</strong> Call and describe your HP printer problem.</li>
      <li><strong>Remote Diagnosis:</strong> We identify the issue on your HP device.</li>
      <li><strong>Repair &amp; Assistance:</strong> We fix drivers, connectivity, and software faults.</li>
      <li><strong>Test &amp; Verify:</strong> We confirm your HP printer prints correctly.</li>
    </ol>

    <h3>Business HP Printer Support in ${placeName}</h3>
    <p>For ${placeName} offices with multiple HP printers, we offer fleet support, network printer repair, print server troubleshooting, and maintenance for LaserJet and OfficeJet deployments.</p>

    ${getLocationFaqsHtml(slug, placeName)}

    <h3>Get HP Printer Repair in ${placeName} Today</h3>
    <p>Don't let a broken HP printer slow you down in ${placeName}. Contact our HP printer repair and assistance team:</p>
    <ul>
      <li>Call us at <a href="tel:+18884237757">(888) 423-7757</a></li>
      <li>Available 24/7 for HP printer repair, assistance, and support</li>
    </ul>

    <p>Need <strong>HP printer repair</strong> or <strong>HP printer assistance</strong> in ${placeName}? From LaserJet paper jams to OfficeJet WiFi issues, we are here to help anywhere in ${inPlace}.</p>
  `;
}
