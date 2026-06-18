import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { usStates, getStateLinkLabel } from '../../lib/data/usStates';
import { getOrganizationSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'HP Printer Help — United States',
  description: '24/7 HP printer support in all 50 US states. Fix offline errors, jams, driver failures, WiFi issues, and error codes on LaserJet, OfficeJet, DeskJet, and Envy.',
  keywords: 'HP printer support USA, HP printer help by state, fix HP printer error United States',
  openGraph: {
    title: 'HP Printer Help — United States | Printer Support',
    description: '24/7 HP printer support in every US state.',
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
          <h1 className="animate__animated animate__fadeInDown">HP Printer Help — United States</h1>
          <p className="animate__animated animate__fadeInUp">
            We provide remote printer support to residents and businesses in all 50 states. Whether you have a LaserJet, OfficeJet, DeskJet, or Envy, our technicians can help fix jams, offline errors, driver problems, and WiFi issues — usually in one session.
          </p>
          
          <h2 className="animate__animated animate__fadeInDown">Nationwide Remote Support</h2>
          <p className="animate__animated animate__fadeInUp">
            Our services are available in every state. Whether you&apos;re in California, New York, Texas, Florida, or anywhere else, we help with:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>Printer offline and not printing issues</li>
            <li>Paper jams and feed problems</li>
            <li>Driver installation and updates</li>
            <li>WiFi and wireless setup</li>
            <li>Print quality and toner/ink issues</li>
            <li>LaserJet, OfficeJet, DeskJet, and Envy models</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Select Your State</h2>
          <p className="animate__animated animate__fadeInUp">
            Click your state below to see local support details:
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

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '3rem' }}>Why Choose Us?</h2>
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
            Don&apos;t let a broken printer disrupt your work. Our team is ready to help with LaserJet, OfficeJet, DeskJet, or Envy issues. Contact us today:
          </p>
          <p className="animate__animated animate__fadeInUp">
            <strong>Call us at <a href="tel:+18884237757" style={{ color: '#007bff' }}>(888) 423-7757</a></strong> - Available 24/7
          </p>
        </div>
      </div>
    </>
  );
}

