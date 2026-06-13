import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { getOrganizationSchema, getServiceSchema } from '../../lib/utils/structuredData';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'HP Printer Customer Service',
  description: 'Need help with your HP printer? Our team is available 24/7 to fix offline errors, paper jams, driver issues, WiFi setup, and print quality problems on LaserJet, OfficeJet, DeskJet, and Envy models.',
  keywords: 'HP printer customer service, HP printer help, HP printer support number, HP LaserJet support, HP OfficeJet support',
  openGraph: {
    title: 'HP Printer Customer Service — 24/7 Help',
    description: 'Talk to a real technician about your HP printer problem. Remote fixes for all major models, available around the clock.',
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
          <h1 className="animate__animated animate__fadeInDown">HP Printer Customer Service</h1>
          <p className="animate__animated animate__fadeInUp">
            Having trouble with your HP printer? Our support team is available 24/7 to help with LaserJet, OfficeJet, DeskJet, and Envy models. Whether it&apos;s an offline error, a paper jam, a driver that won&apos;t install, a WiFi connection that keeps dropping, or streaky print quality — we walk you through the fix remotely.
          </p>

          <h2 className="animate__animated animate__fadeInDown">What We Help With</h2>
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

          <h2 className="animate__animated animate__fadeInDown">Call Us Now</h2>
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
