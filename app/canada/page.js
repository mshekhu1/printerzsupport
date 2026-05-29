import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { canadaProvinces, getProvinceLinkLabel } from '../../lib/data/canadaProvinces';
import { getOrganizationSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'HP Printer Repair & Support in Canada',
  description: 'HP printer repair and assistance across all Canadian provinces and territories. Fix HP LaserJet, OfficeJet, DeskJet & Envy — jams, offline errors, drivers, WiFi & print quality. Find HP printer support in your province.',
  keywords: 'HP printer repair Canada, HP printer assistance Canada, HP printer fix Canada, HP LaserJet repair Canada, HP OfficeJet support Canada, HP printer support by province',
  openGraph: {
    title: 'HP Printer Repair & Support in Canada | Printer Support',
    description: 'Professional HP printer repair and assistance in every Canadian province and territory. Remote HP printer support for homes and businesses.',
    url: 'https://www.printerzsupport.com/canada',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/canada',
  },
};

export default function CanadaPage() {
  const structuredData = getOrganizationSchema();
  
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Canada', url: 'https://www.printerzsupport.com/canada' }
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
          <h1 className="animate__animated animate__fadeInDown">HP Printer Repair &amp; Support in Canada</h1>
          <p className="animate__animated animate__fadeInUp">
            Welcome to Printer Support — your trusted partner for HP printer repair and assistance across Canada. We help residents and businesses in all provinces and territories fix HP LaserJet, OfficeJet, DeskJet, and Envy printers with fast, expert remote support.
          </p>
          
          <h2 className="animate__animated animate__fadeInDown">HP Printer Repair &amp; Assistance Across Canada</h2>
          <p className="animate__animated animate__fadeInUp">
            Our HP printer repair and assistance services are available in every province and territory. Whether you're in Ontario, British Columbia, Quebec, Alberta, or anywhere else in Canada, we help with:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>HP printer offline and not printing issues</li>
            <li>HP paper jams and feed problems</li>
            <li>HP driver installation and repair</li>
            <li>HP WiFi and wireless setup repair</li>
            <li>HP print quality and toner/ink issues</li>
            <li>HP LaserJet, OfficeJet, DeskJet, and Envy models</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Select Your Province or Territory for HP Printer Repair &amp; Support</h2>
          <p className="animate__animated animate__fadeInUp">
            Click your province or territory below for HP printer repair and assistance in your area:
          </p>
          
          <div className="state-link-grid">
            {canadaProvinces.map((province) => (
              <Link 
                key={province.code} 
                href={`/canada/${province.slug}`}
                className="state-link"
              >
                {getProvinceLinkLabel(province.name)}
              </Link>
            ))}
          </div>

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '3rem' }}>Why Choose Our HP Printer Repair &amp; Support?</h2>
          <ul className="animate__animated animate__fadeInUp">
            <li><strong>Fast Response:</strong> Get immediate HP printer repair without waiting for on-site visits</li>
            <li><strong>Cost-Effective:</strong> Save money on travel costs and service fees</li>
            <li><strong>Convenient:</strong> Receive HP printer support from anywhere, at any time</li>
            <li><strong>Expert Technicians:</strong> HP-certified specialists with years of experience</li>
            <li><strong>24/7 Availability:</strong> Round-the-clock support for urgent HP printer issues</li>
            <li><strong>Secure:</strong> Safe and secure remote connection methods</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '2rem' }}>Get Started Today</h2>
          <p className="animate__animated animate__fadeInUp">
            Don't let a broken HP printer disrupt your work. Our HP printer repair and assistance team is ready to fix your LaserJet, OfficeJet, DeskJet, or Envy quickly. Contact us today:
          </p>
          <p className="animate__animated animate__fadeInUp">
            <strong>Call us at <a href="tel:+18884237757" style={{ color: '#007bff' }}>(888) 423-7757</a></strong> - Available 24/7
          </p>
        </div>
      </div>
    </>
  );
}
