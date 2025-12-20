import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { usStates } from '../data/usStates';
import { getOrganizationSchema } from '../../src/utils/structuredData';
import '../../src/page-styles/About.css';

export const metadata = {
  title: 'Online Printer Support in United States - Expert Remote Printer Services',
  description: 'Get expert online printer support services across all US states. Remote printer installation, troubleshooting, and maintenance for businesses and homes throughout the United States.',
  keywords: 'printer support USA, online printer support United States, remote printer support US, printer services America',
  openGraph: {
    title: 'Online Printer Support in United States',
    description: 'Expert online printer support services across all US states. Remote printer installation, troubleshooting, and maintenance.',
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
          <h1 className="animate__animated animate__fadeInDown">Online Printer Support in United States</h1>
          <p className="animate__animated animate__fadeInUp">
            Welcome to Printer Support - your trusted partner for comprehensive online printer support services across the United States. We provide expert remote printer support to help residents and businesses in all 50 states resolve printer issues quickly and efficiently.
          </p>
          
          <h2 className="animate__animated animate__fadeInDown">Our Services Across the United States</h2>
          <p className="animate__animated animate__fadeInUp">
            Our online printer support services are available to customers in every state across America. Whether you're in California, New York, Texas, Florida, or any other state, we're here to help with:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>Remote printer installation and setup</li>
            <li>Printer troubleshooting and repair</li>
            <li>Driver installation and updates</li>
            <li>Wireless and network printer configuration</li>
            <li>Printer maintenance and optimization</li>
            <li>Brand-specific support (HP, Canon, Epson, Brother, and more)</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Select Your State for Localized Support</h2>
          <p className="animate__animated animate__fadeInUp">
            Click on your state below to learn more about our online printer support services in your area:
          </p>
          
          <div className="state-link-grid">
            {usStates.map((state) => (
              <Link 
                key={state.code} 
                href={`/us/${state.slug}`}
                className="state-link"
              >
                {state.name}
              </Link>
            ))}
          </div>

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '3rem' }}>Why Choose Our Online Printer Support?</h2>
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
            Don't let printer problems disrupt your work or business. Our expert online printer support team is ready to help you resolve any printer issue quickly and efficiently. Contact us today:
          </p>
          <p className="animate__animated animate__fadeInUp">
            <strong>Call us at <a href="tel:+1-888-423-7757" style={{ color: '#007bff' }}>+1-888-423-7757</a></strong> - Available 24/7
          </p>
        </div>
      </div>
    </>
  );
}

