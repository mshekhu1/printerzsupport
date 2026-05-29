import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import {
  canadaProvinces,
  getProvinceBySlug,
  generateProvinceContent,
  getProvincePageTitle,
} from '../../../lib/data/canadaProvinces';
import { getOrganizationSchema } from '../../../lib/utils/structuredData';
import '../../../styles/pages/About.css';

export async function generateStaticParams() {
  return canadaProvinces.map((province) => ({
    province: province.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { province } = await params;
  const provinceData = getProvinceBySlug(province);
  
  if (!provinceData) {
    return {
      title: 'Province Not Found',
    };
  }

  return {
    title: getProvincePageTitle(provinceData.name),
    description: `Expert HP printer repair in ${provinceData.name}, Canada. Fix HP LaserJet, OfficeJet, DeskJet & Envy — offline errors, jams, drivers, WiFi & print quality. 24/7 remote HP printer repair.`,
    keywords: `HP printer repair ${provinceData.name}, HP printer fix ${provinceData.name}, HP LaserJet repair ${provinceData.name}, HP OfficeJet repair ${provinceData.name}, HP printer support ${provinceData.name} Canada`,
    openGraph: {
      title: `HP Printer Repair in ${provinceData.name} | Printer Support`,
      description: `Professional HP printer repair in ${provinceData.name}, Canada. Remote fix for jams, offline errors, drivers, and WiFi on all HP models.`,
      url: `https://www.printerzsupport.com/canada/${provinceData.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.printerzsupport.com/canada/${provinceData.slug}`,
    },
  };
}

export default async function ProvincePage({ params }) {
  const { province } = await params;
  const provinceData = getProvinceBySlug(province);

  if (!provinceData) {
    notFound();
  }

  const structuredData = {
    ...getOrganizationSchema(),
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HP Printer Repair",
    "areaServed": {
      "@type": "State",
      "name": provinceData.name
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.printerzsupport.com/canada/${provinceData.slug}`,
      "servicePhone": "+18884237757"
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Canada', url: 'https://www.printerzsupport.com/canada' },
    { name: `HP Printer Repair in ${provinceData.name}`, url: `https://www.printerzsupport.com/canada/${provinceData.slug}` }
  ];

  const content = generateProvinceContent(provinceData.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="about-container animate__animated animate__fadeIn">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ marginTop: '2rem' }}
          />
        </div>
      </div>
    </>
  );
}

