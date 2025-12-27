import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { printerBrands } from '../../lib/data/printerBrands';
import { getOrganizationSchema } from '../../lib/utils/structuredData';
import '../../styles/pages/About.css';

export const metadata = {
  title: 'Printer Brand Support - Expert Support for All Printer Brands',
  description: 'Get expert printer support for all major printer brands including HP, Canon, Epson, Brother, Lexmark, Xerox, Samsung, and more. Professional remote printer support services.',
  keywords: 'printer brand support, HP printer support, Canon printer support, Epson printer support, Brother printer support, printer support by brand',
  openGraph: {
    title: 'Printer Brand Support - Expert Support for All Brands',
    description: 'Get expert printer support for all major printer brands. Professional remote printer support services.',
    url: 'https://www.printerzsupport.com/brands',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/brands',
  },
};

export default function BrandsPage() {
  const structuredData = getOrganizationSchema();
  
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Printer Brands', url: 'https://www.printerzsupport.com/brands' }
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
          <h1 className="animate__animated animate__fadeInDown">Printer Brand Support</h1>
          <p className="animate__animated animate__fadeInUp">
            Welcome to Printer Support - your trusted partner for comprehensive printer support services across all major printer brands. We provide expert remote printer support to help you resolve printer issues quickly and efficiently, regardless of your printer brand.
          </p>
          
          <h2 className="animate__animated animate__fadeInDown">Our Printer Brand Support Services</h2>
          <p className="animate__animated animate__fadeInUp">
            Our online printer support services are available for customers using any major printer brand. Whether you own an HP, Canon, Epson, Brother, Lexmark, Xerox, Samsung, or any other printer brand, we're here to help with:
          </p>
          <ul className="animate__animated animate__fadeInUp">
            <li>Remote printer installation and setup</li>
            <li>Printer troubleshooting and repair</li>
            <li>Driver installation and updates</li>
            <li>Wireless and network printer configuration</li>
            <li>Printer maintenance and optimization</li>
            <li>Brand-specific error code resolution</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown">Select Your Printer Brand for Specialized Support</h2>
          <p className="animate__animated animate__fadeInUp">
            Click on your printer brand below to learn more about our specialized support services for that brand:
          </p>
          
          <div className="state-link-grid">
            {printerBrands.map((brand) => (
              <Link 
                key={brand.slug} 
                href={`/brands/${brand.slug}`}
                className="state-link"
              >
                <strong>{brand.name}</strong>
                <div style={{ fontSize: '0.9em', color: '#666', marginTop: '0.5rem' }}>
                  {brand.description}
                </div>
              </Link>
            ))}
          </div>

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '3rem' }}>Why Choose Our Brand-Specific Printer Support?</h2>
          <ul className="animate__animated animate__fadeInUp">
            <li><strong>Expert Knowledge:</strong> Deep understanding of each printer brand's unique features and common issues</li>
            <li><strong>Fast Response:</strong> Get immediate assistance without waiting for on-site visits</li>
            <li><strong>Cost-Effective:</strong> Save money on travel costs and service fees</li>
            <li><strong>Convenient:</strong> Receive support from anywhere, at any time</li>
            <li><strong>Certified Technicians:</strong> Specialists trained on specific printer brands</li>
            <li><strong>24/7 Availability:</strong> Round-the-clock support for urgent issues</li>
            <li><strong>Brand-Specific Tools:</strong> Access to official manufacturer support tools and software</li>
          </ul>

          <h2 className="animate__animated animate__fadeInDown" style={{ marginTop: '2rem' }}>Get Started Today</h2>
          <p className="animate__animated animate__fadeInUp">
            Don't let printer problems disrupt your work or business. Our expert printer support team is ready to help you resolve any printer issue quickly and efficiently, regardless of your printer brand. Contact us today:
          </p>
          <p className="animate__animated animate__fadeInUp">
            <strong>Call us at <a href="tel:+1-888-423-7757" style={{ color: '#007bff' }}>+1-888-423-7757</a></strong> - Available 24/7
          </p>
        </div>
      </div>
    </>
  );
}

