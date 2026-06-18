import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import BrandDisclaimer from '../components/BrandDisclaimer';
import { getOrganizationSchema, getServiceSchema } from '../../lib/utils/structuredData';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'HP Printer Customer Service',
  description: '24/7 HP printer support by phone. Fix offline errors, paper jams, driver failures, WiFi issues, and error codes on LaserJet, OfficeJet, DeskJet, and Envy.',
  keywords: 'HP printer support, HP printer customer service, fix HP printer error, HP printer help, HP printer support number',
  openGraph: {
    title: 'HP Printer Customer Service | Printer Support',
    description: '24/7 HP printer support for errors, offline printers, jams, drivers, and WiFi.',
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
          <BrandDisclaimer className="page-disclaimer" />
          <h1 className="animate__animated animate__fadeInDown">HP Printer Help — Fix HP Printer Errors</h1>
          <p className="animate__animated animate__fadeInUp">
            Getting an HP printer error? Our 24/7 support team can help fix offline errors, paper jams, driver failures, WiFi issues, and error codes on LaserJet, OfficeJet, DeskJet, and Envy models.
          </p>

          <h2 className="animate__animated animate__fadeInDown">Common HP Printer Errors We Fix</h2>
          <p className="animate__animated animate__fadeInUp">
            When you call, you&apos;ll speak with someone who understands HP hardware and software. We help home users and businesses resolve printer errors, install drivers, set up wireless printing, and get back to normal — usually without an on-site visit.
          </p>

          <h2 className="animate__animated animate__fadeInDown">Technical Support Services</h2>
          <p className="animate__animated animate__fadeInUp">
            Our technicians handle diagnostics, firmware and driver updates, network troubleshooting, spooler errors, and step-by-step repair guidance. We support all major HP series including LaserJet, OfficeJet, DeskJet, Envy, PageWide, and DesignJet.
          </p>

          <h2 className="animate__animated animate__fadeInDown">Common Issues We Fix</h2>
          <ul className="animate__animated animate__fadeInUp">
            <li>Printer showing offline or not responding</li>
            <li>Paper jams and feeding problems</li>
            <li>Driver installation and update errors</li>
            <li>WiFi and wireless setup failures</li>
            <li>Print quality, streaking, and alignment issues</li>
            <li>Error codes and spooler problems</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Get Help Now</h2>
          <p className="animate__animated animate__fadeInUp">
            <strong>24/7 Helpline:</strong>{' '}
            <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <p className="animate__animated animate__fadeInUp">
            You can also browse our <Link href="/blog/hp-printer-troubleshooting-guide">troubleshooting guide</Link>, visit the <Link href="/brands/hp">HP printer help page</Link>, or <Link href="/contact">contact us</Link> online.
          </p>
        </div>
      </div>
    </>
  );
}
