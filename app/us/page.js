import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { usStates, getStateLinkLabel } from '../../lib/data/usStates';
import { getOrganizationSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'HP Printer Repair & Support in United States',
  description: 'HP printer repair and assistance across all 50 US states. Fix HP LaserJet, OfficeJet, DeskJet & Envy — jams, offline errors, drivers, WiFi & print quality. Find HP printer support in your state.',
  keywords: 'HP printer repair USA, HP printer assistance USA, HP printer fix United States, HP LaserJet repair, HP OfficeJet support, HP printer support by state',
  openGraph: {
    title: 'HP Printer Repair & Support in United States | Printer Support',
    description: 'Professional HP printer repair and assistance in every US state. Remote HP printer support for homes and businesses.',
    url: 'https://www.printerzsupport.com/us',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/us',
  },
};

export default function USPage() {
  const structuredData = getOrganizationSchema();
  
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'United States', url: 'https://www.printerzsupport.com/us' }
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
          <h1 className="animate__animated animate__fadeInDown">HP Printer Repair &amp; Support in United States</h1>
          <p className="animate__animated animate__fadeInUp">
            Welcome to Printer Support — your trusted partner for HP printer repair and assistance across the United States. We help residents and businesses in all 50 states fix HP LaserJet, OfficeJet, DeskJet, and Envy printers with fast, expert remote support.
          </p>
          
          <h2 className="animate__animated animate__fadeInDown">HP Printer Repair &amp; Assistance Nationwide</h2>
          <p className="animate__animated animate__fadeInUp">
            Our HP printer repair and assistance services are available in every state. Whether you're in California, New York, Texas, Florida, or anywhere else, we help with:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>HP printer offline and not printing issues</li>
            <li>HP paper jams and feed problems</li>
            <li>HP driver installation and assistance</li>
            <li>HP WiFi and wireless setup assistance</li>
            <li>HP print quality and toner/ink issues</li>
            <li>HP LaserJet, OfficeJet, DeskJet, and Envy models</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Select Your State for HP Printer Repair &amp; Support</h2>
          <p className="animate__animated animate__fadeInUp">
            Click your state below for HP printer repair and assistance in your area:
          </p>
          
          <div className="state-link-grid">
            {usStates.map((state) => (
              <Link 
                key={state.code} 
                href={`/us/${state.slug}`}
                className="state-link"
              >
                {getStateLinkLabel(state.name)}
              </Link>
            ))}
          </div>

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '3rem' }}>Why Choose Our HP Printer Repair &amp; Support?</h2>
          <ul className="animate__animated animate__fadeInUp">
            <li><strong>Fast Response:</strong> Get immediate assistance without waiting for on-site visits</li>
            <li><strong>Cost-Effective:</strong> Save money on travel costs and service fees</li>
            <li><strong>Convenient:</strong> Receive support from anywhere, at any time</li>
            <li><strong>Expert Technicians:</strong> Certified specialists with years of experience</li>
            <li><strong>24/7 Availability:</strong> Round-the-clock support for urgent issues</li>
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

