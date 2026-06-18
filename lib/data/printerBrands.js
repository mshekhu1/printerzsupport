// Printer Brands data for brand support pages

export const printerBrands = [
  {
    name: 'HP',
    fullName: 'Hewlett-Packard',
    slug: 'hp',
    description: '24/7 HP printer support for LaserJet, OfficeJet, DeskJet, and Envy printers',
    series: ['LaserJet', 'OfficeJet', 'DeskJet', 'Envy', 'PageWide', 'DesignJet'],
    commonIssues: ['HP printer offline', 'HP printer not printing', 'HP error codes', 'HP driver issues', 'HP wireless setup'],
    supportTools: ['HP Smart', 'HP Printer Assistant', 'HP Support Assistant']
  },
  {
    name: 'Canon',
    fullName: 'Canon',
    slug: 'canon',
    description: 'Canon Printer Support - Professional help for Canon PIXMA, imageCLASS, and MAXIFY printers',
    series: ['PIXMA', 'imageCLASS', 'MAXIFY', 'SELPHY', 'imagePROGRAF'],
    commonIssues: ['Canon printer offline', 'Canon printer not printing', 'Canon error codes', 'Canon driver installation', 'Canon wireless setup'],
    supportTools: ['Canon PRINT', 'Canon Easy-WebPrint EX', 'Canon IJ Printer Utility']
  },
  {
    name: 'Epson',
    fullName: 'Epson',
    slug: 'epson',
    description: 'Epson Printer Support - Expert assistance for Epson EcoTank, Expression, and WorkForce printers',
    series: ['EcoTank', 'Expression', 'WorkForce', 'SureColor', 'Stylus'],
    commonIssues: ['Epson printer offline', 'Epson error codes', 'Epson waste ink pad', 'Epson driver issues', 'Epson wireless setup'],
    supportTools: ['Epson Connect', 'Epson Printer Utility', 'Epson Service Utility']
  },
  {
    name: 'Brother',
    fullName: 'Brother',
    slug: 'brother',
    description: 'Brother Printer Support - Professional help for Brother MFC, HL, and DCP printers',
    series: ['MFC', 'HL', 'DCP', 'QL', 'PT'],
    commonIssues: ['Brother printer offline', 'Brother printer not printing', 'Brother error codes', 'Brother driver issues', 'Brother network setup'],
    supportTools: ['Brother iPrint&Scan', 'Brother Printer Utility', 'Brother ControlCenter']
  },
  {
    name: 'Lexmark',
    fullName: 'Lexmark',
    slug: 'lexmark',
    description: 'Lexmark Printer Support - Expert help for Lexmark office and home printers',
    series: ['MS', 'CS', 'MX', 'XC', 'XC8000'],
    commonIssues: ['Lexmark printer offline', 'Lexmark printer not printing', 'Lexmark error codes', 'Lexmark driver issues', 'Lexmark network setup'],
    supportTools: ['Lexmark Print Release', 'Lexmark Printer Software', 'Lexmark Smart Solutions']
  },
  {
    name: 'Xerox',
    fullName: 'Xerox',
    slug: 'xerox',
    description: 'Xerox Printer Support - Professional assistance for Xerox office and enterprise printers',
    series: ['VersaLink', 'WorkCentre', 'Phaser', 'AltaLink', 'Brenva'],
    commonIssues: ['Xerox printer offline', 'Xerox printer not printing', 'Xerox error codes', 'Xerox driver issues', 'Xerox network configuration'],
    supportTools: ['Xerox Print Drivers', 'Xerox CentreWare', 'Xerox Mobile Print']
  },
  {
    name: 'Samsung',
    fullName: 'Samsung',
    slug: 'samsung',
    description: 'Samsung Printer Support - Expert help for Samsung laser and inkjet printers',
    series: ['Xpress', 'ProXpress', 'CLP', 'ML'],
    commonIssues: ['Samsung printer offline', 'Samsung printer not printing', 'Samsung error codes', 'Samsung driver issues', 'Samsung wireless setup'],
    supportTools: ['Samsung Printer Software', 'Samsung Mobile Print', 'Samsung Easy Printer Manager']
  },
  {
    name: 'Dell',
    fullName: 'Dell',
    slug: 'dell',
    description: 'Dell Printer Support - Professional assistance for Dell laser and inkjet printers',
    series: ['B1160', 'B1260', 'C1760nw', 'S2825cdn'],
    commonIssues: ['Dell printer offline', 'Dell printer not printing', 'Dell error codes', 'Dell driver issues', 'Dell network setup'],
    supportTools: ['Dell Printer Software', 'Dell SupportAssist']
  },
  {
    name: 'Ricoh',
    fullName: 'Ricoh',
    slug: 'ricoh',
    description: 'Ricoh Printer Support - Expert help for Ricoh office and multifunction printers',
    series: ['SP', 'MP', 'Aficio', 'IM'],
    commonIssues: ['Ricoh printer offline', 'Ricoh printer not printing', 'Ricoh error codes', 'Ricoh driver issues', 'Ricoh network configuration'],
    supportTools: ['Ricoh Printer Drivers', 'Ricoh SmartDeviceMonitor', 'Ricoh Print&Scan']
  },
  {
    name: 'Konica Minolta',
    fullName: 'Konica Minolta',
    slug: 'konica-minolta',
    description: 'Konica Minolta Printer Support - Professional assistance for Konica Minolta office printers',
    series: ['bizhub', 'Accurio', 'magicolor'],
    commonIssues: ['Konica Minolta printer offline', 'Konica Minolta printer not printing', 'Konica Minolta error codes', 'Konica Minolta driver issues'],
    supportTools: ['Konica Minolta Printer Drivers', 'Konica Minolta PageScope']
  },
  {
    name: 'OKI',
    fullName: 'OKI',
    slug: 'oki',
    description: 'OKI Printer Support - Expert help for OKI color and monochrome printers',
    series: ['B400', 'B600', 'C800', 'MC'],
    commonIssues: ['OKI printer offline', 'OKI printer not printing', 'OKI error codes', 'OKI driver issues', 'OKI network setup'],
    supportTools: ['OKI Printer Drivers', 'OKI Printer Utility']
  },
  {
    name: 'Kyocera',
    fullName: 'Kyocera',
    slug: 'kyocera',
    description: 'Kyocera Printer Support - Professional assistance for Kyocera office printers',
    series: ['ECOSYS', 'TASKalfa', 'FS'],
    commonIssues: ['Kyocera printer offline', 'Kyocera printer not printing', 'Kyocera error codes', 'Kyocera driver issues'],
    supportTools: ['Kyocera Printer Drivers', 'Kyocera Print&Scan']
  }
];

export const getBrandBySlug = (slug) => {
  return printerBrands.find(brand => brand.slug === slug);
};

function getGetStartedCallHtml(brand) {
  if (brand.slug === 'hp') {
    return `Call us at <a href="tel:+18884237757">(888) 423-7757</a> / <a href="tel:+18004746836">1-800-474-6836</a> / <a href="tel:+17864002878">1-786-400-2878</a>`;
  }
  return `Call us at <a href="tel:+18884237757">(888) 423-7757</a>`;
}

export const generateBrandContent = (brand) => {
  return `
    <h2>${brand.name} Printer Support</h2>
    <p>Need help with a ${brand.name} printer? We support ${brand.series.join(', ')} and other ${brand.name} models — setup, troubleshooting, drivers, and WiFi configuration, all handled remotely.</p>

    <h2>What We Help With</h2>
    <ul>
      <li><strong>Setup &amp; installation</strong> — USB, wireless, and network printers</li>
      <li><strong>Troubleshooting</strong> — offline errors, paper jams, print quality, connectivity</li>
      <li><strong>Drivers</strong> — install and update on Windows, Mac, and Linux</li>
      <li><strong>Network configuration</strong> — WiFi setup and shared printing</li>
      <li><strong>Maintenance</strong> — cleaning, firmware updates, and performance tuning</li>
      <li><strong>Error codes</strong> — ${brand.name}-specific messages and fixes</li>
    </ul>

    <h3>${brand.name} Series We Support</h3>
    <ul>
      ${brand.series.map(series => `<li><strong>${brand.name} ${series}</strong> — setup, repair, and driver help</li>`).join('')}
    </ul>

    <h3>Common ${brand.name} Issues</h3>
    <ul>
      ${brand.commonIssues.map(issue => `<li>${issue}</li>`).join('')}
      <li>Paper jams and feeding problems</li>
      <li>Poor print quality (faded prints, streaks, blurry text)</li>
      <li>Ink or toner problems</li>
      <li>Print spooler errors</li>
      <li>Printer not detected by computer</li>
    </ul>

    <h3>${brand.name} Software We Work With</h3>
    <ul>
      ${brand.supportTools.map(tool => `<li><strong>${tool}</strong> — install, configure, and troubleshoot</li>`).join('')}
    </ul>

    <h3>How It Works</h3>
    <ol>
      <li><strong>Call us</strong> and describe your ${brand.name} printer problem.</li>
      <li><strong>We diagnose</strong> the issue — often remotely via secure screen sharing.</li>
      <li><strong>We fix it</strong> and verify your printer is working before we hang up.</li>
    </ol>

    <h3>Why Choose Us for ${brand.name}?</h3>
    <ul>
      <li>Fast remote support — no shop visit required</li>
      <li>Available 24/7 for urgent print jobs</li>
      <li>Transparent pricing with no hidden fees</li>
      <li>Experienced with ${brand.name} inkjet, laser, and multifunction models</li>
    </ul>

    <h3>Business ${brand.name} Support</h3>
    <p>For offices with multiple ${brand.name} printers, we help with fleet setup, print server configuration, driver deployment, and ongoing maintenance.</p>

    <h3>Get ${brand.name} Help Today</h3>
    <p>Don't let a printer problem slow you down. Contact our team:</p>
    <ul>
      <li>${getGetStartedCallHtml(brand)}</li>
      <li>Available 24/7</li>
    </ul>
  `;
};

