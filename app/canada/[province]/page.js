import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import {
  canadaProvinces,
  getProvinceBySlug,
  generateProvinceContent,
  getProvincePageTitle,
  getProvinceMetaDescription,
  getProvinceKeywords,
} from '../../../lib/data/canadaProvinces';
import { getLocationFaqSchema } from '../../../lib/seo/locationSeo';
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

  const pageTitle = getProvincePageTitle(provinceData.name);

  return {
    title: pageTitle,
    description: getProvinceMetaDescription(provinceData.name, provinceData.slug),
    keywords: getProvinceKeywords(provinceData.name, provinceData.slug),
    openGraph: {
      title: pageTitle,
      description: getProvinceMetaDescription(provinceData.name, provinceData.slug),
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

  const pageUrl = `https://www.printerzsupport.com/canada/${provinceData.slug}`;
  const structuredData = [
    {
      ...getOrganizationSchema(),
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "HP Printer Repair & Support",
      "areaServed": {
        "@type": "State",
        "name": provinceData.name
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": pageUrl,
        "servicePhone": "+18884237757"
      }
    },
    getLocationFaqSchema(provinceData.slug, provinceData.name, pageUrl),
  ];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Canada', url: 'https://www.printerzsupport.com/canada' },
    { name: getProvincePageTitle(provinceData.name), url: `https://www.printerzsupport.com/canada/${provinceData.slug}` }
  ];

  const content = generateProvinceContent(provinceData.slug, provinceData.name);

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

