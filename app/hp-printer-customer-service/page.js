import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { getOrganizationSchema, getServiceSchema } from '../../lib/utils/structuredData';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'HP Printer Customer Service',
  description: '24/7 HP printer customer service and technical support by phone. Fix offline errors, paper jams, driver failures, WiFi issues, and error codes on LaserJet, OfficeJet, DeskJet, and Envy.',
  keywords: '24/7 HP printer support, HP printer customer service, HP printer technical support, HP printer support number',
  openGraph: {
    title: 'HP Printer Customer Service | Printer Support',
    description: '24/7 HP printer customer service and technical support for errors, jams, drivers, and WiFi.',
    url: 'https://www.printerzsupport.com/hp-printer-customer-service',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/hp-printer-customer-service',
  },
};

export default function HPPrinterCustomerServicePage() {
  const structuredData = [getOrganizationSchema(), getServiceSchema()];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'HP Printer Help', url: 'https://www.printerzsupport.com/hp-printer-customer-service' },
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
          <h1 className="animate__animated animate__fadeInDown">HP Printer Customer Service</h1>
          <p className="animate__animated animate__fadeInUp">
            Printer showing an error or refusing to print? Call and talk to someone who knows HP hardware — we fix most issues remotely on LaserJet, OfficeJet, DeskJet, and Envy models.
          </p>

          <h2 className="animate__animated animate__fadeInDown">Problems we handle every day</h2>
          <p className="animate__animated animate__fadeInUp">
            Offline printers, paper jams, bad drivers, WiFi dropouts, print quality issues, and error codes. We help home users and small offices get back to printing without a shop visit.
          </p>

          <h2 className="animate__animated animate__fadeInDown">What to expect on a call</h2>
          <p className="animate__animated animate__fadeInUp">
            We diagnose the issue, guide you through driver updates, network checks, or spooler fixes, and confirm a test page prints before we hang up.
          </p>

          <h2 className="animate__animated animate__fadeInDown">Common issues</h2>
          <ul className="animate__animated animate__fadeInUp">
            <li>Printer showing offline or not responding</li>
            <li>Paper jams and feeding problems</li>
            <li>Driver installation and update errors</li>
            <li>WiFi and wireless setup failures</li>
            <li>Print quality, streaking, and alignment issues</li>
            <li>Error codes and spooler problems</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Call now</h2>
          <p className="animate__animated animate__fadeInUp">
            <strong>Helpline:</strong>{' '}
            <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <p className="animate__animated animate__fadeInUp">
            Prefer to read first? See our <Link href="/blog/hp-printer-troubleshooting-guide">troubleshooting guide</Link>, <Link href="/brands/hp">HP help page</Link>, or <Link href="/contact">contact form</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
