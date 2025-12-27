import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import { canadaProvinces, getProvinceBySlug, generateProvinceContent } from '../../../lib/data/canadaProvinces';
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
    title: `Online Printer Support in ${provinceData.name} - Expert Remote Printer Services`,
    description: `Get expert online printer support services in ${provinceData.name}, Canada. Remote printer installation, troubleshooting, and maintenance for businesses and homes in ${provinceData.name}.`,
    keywords: `printer support ${provinceData.name}, online printer support ${provinceData.name}, remote printer support ${provinceData.name}, printer services ${provinceData.name} Canada`,
    openGraph: {
      title: `Online Printer Support in ${provinceData.name}`,
      description: `Expert online printer support services in ${provinceData.name}, Canada. Remote printer installation, troubleshooting, and maintenance.`,
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
    "serviceType": "Online Printer Support",
    "areaServed": {
      "@type": "State",
      "name": provinceData.name
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.printerzsupport.com/canada/${provinceData.slug}`,
      "servicePhone": "+1-888-423-7757"
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Canada', url: 'https://www.printerzsupport.com/canada' },
    { name: provinceData.name, url: `https://www.printerzsupport.com/canada/${provinceData.slug}` }
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

