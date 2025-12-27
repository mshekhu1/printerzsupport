import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { canadaProvinces } from '../../lib/data/canadaProvinces';
import { getOrganizationSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'Online Printer Support in Canada - Expert Remote Printer Services',
  description: 'Get expert online printer support services across all Canadian provinces. Remote printer installation, troubleshooting, and maintenance for businesses and homes throughout Canada.',
  keywords: 'printer support Canada, online printer support Canada, remote printer support Canada, printer services Canada',
  openGraph: {
    title: 'Online Printer Support in Canada',
    description: 'Expert online printer support services across all Canadian provinces. Remote printer installation, troubleshooting, and maintenance.',
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
          <h1 className="animate__animated animate__fadeInDown">Online Printer Support in Canada</h1>
          <p className="animate__animated animate__fadeInUp">
            Welcome to Printer Support - your trusted partner for comprehensive online printer support services across Canada. We provide expert remote printer support to help residents and businesses in all provinces and territories resolve printer issues quickly and efficiently.
          </p>
          
          <h2 className="animate__animated animate__fadeInDown">Our Services Across Canada</h2>
          <p className="animate__animated animate__fadeInUp">
            Our online printer support services are available to customers in every province and territory across Canada. Whether you're in Ontario, British Columbia, Quebec, Alberta, or any other province, we're here to help with:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>Remote printer installation and setup</li>
            <li>Printer troubleshooting and repair</li>
            <li>Driver installation and updates</li>
            <li>Wireless and network printer configuration</li>
            <li>Printer maintenance and optimization</li>
            <li>Brand-specific support (HP, Canon, Epson, Brother, and more)</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Select Your Province or Territory for Localized Support</h2>
          <p className="animate__animated animate__fadeInUp">
            Click on your province or territory below to learn more about our online printer support services in your area:
          </p>
          
          <div className="state-link-grid">
            {canadaProvinces.map((province) => (
              <Link 
                key={province.code} 
                href={`/canada/${province.slug}`}
                className="state-link"
              >
                {province.name}
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

