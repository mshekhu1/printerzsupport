import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { getOrganizationSchema, getServiceSchema } from '../../lib/utils/structuredData';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';
import { pageSeo } from '../../lib/seo/pageSeo';
import '../../styles/pages/About.css';

export const metadata = pageSeo.customerService;

export default function HPPrinterCustomerServicePage() {
  const structuredData = [getOrganizationSchema(), getServiceSchema()];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'HP Printer Customer Service', url: 'https://www.printerzsupport.com/hp-printer-customer-service' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="about-container animate__animated animate__fadeIn">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="animate__animated animate__fadeInDown">HP Printer Customer Service &amp; Technical Support</h1>
          <p className="animate__animated animate__fadeInUp">
            Need help with your HP printer? Our HP printer customer service team provides 24/7 technical support for LaserJet, OfficeJet, DeskJet, and Envy models. Whether you are dealing with offline errors, paper jams, driver problems, WiFi setup issues, or poor print quality, our certified technicians offer fast remote assistance.
          </p>

          <h2 className="animate__animated animate__fadeInDown">HP Printer Customer Service</h2>
          <p className="animate__animated animate__fadeInUp">
            Our HP printer customer service helpline connects you with experts who understand HP hardware and software. We help home users and businesses resolve printer errors, install drivers, configure wireless printing, and restore normal operation without an on-site visit.
          </p>

          <h2 className="animate__animated animate__fadeInDown">HP Printer Technical Support</h2>
          <p className="animate__animated animate__fadeInUp">
            HP printer technical support covers diagnostics, firmware and driver updates, network troubleshooting, spooler errors, and advanced repair guidance. We support all major HP series including LaserJet, OfficeJet, DeskJet, Envy, PageWide, and DesignJet printers.
          </p>

          <h2 className="animate__animated animate__fadeInDown">Common Issues We Fix</h2>
          <ul className="animate__animated animate__fadeInUp">
            <li>HP printer offline or not responding</li>
            <li>Paper jams and feeding problems</li>
            <li>Driver installation and update errors</li>
            <li>WiFi and wireless setup failures</li>
            <li>Print quality, streaking, and alignment issues</li>
            <li>Error codes and spooler problems</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Call HP Printer Customer Service Now</h2>
          <p className="animate__animated animate__fadeInUp">
            <strong>24/7 Helpline:</strong>{' '}
            <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <p className="animate__animated animate__fadeInUp">
            You can also explore our <Link href="/blog/hp-printer-troubleshooting-guide">HP printer troubleshooting guide</Link>, <Link href="/brands/hp">HP brand support page</Link>, or <Link href="/contact">contact us</Link> for more help.
          </p>
        </div>
      </div>
    </>
  );
}
