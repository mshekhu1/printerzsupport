import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import { printerBrands, getBrandBySlug, generateBrandContent } from '../../../lib/data/printerBrands';
import { getOrganizationSchema } from '../../../lib/utils/structuredData';
import '../../../styles/pages/About.css';

export async function generateStaticParams() {
  return printerBrands.map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { brand } = await params;
  const brandData = getBrandBySlug(brand);
  
  if (!brandData) {
    return {
      title: 'Brand Not Found',
    };
  }

  return {
    title: `${brandData.name} Printer Support - Expert ${brandData.name} Printer Services`,
    description: brandData.description,
    keywords: `${brandData.name} printer support, ${brandData.name} printer troubleshooting, ${brandData.name} printer help, ${brandData.name} printer repair, ${brandData.name} printer setup`,
    openGraph: {
      title: `${brandData.name} Printer Support - Expert Services`,
      description: brandData.description,
      url: `https://www.printerzsupport.com/brands/${brandData.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.printerzsupport.com/brands/${brandData.slug}`,
    },
  };
}

export default async function BrandPage({ params }) {
  const { brand } = await params;
  const brandData = getBrandBySlug(brand);

  if (!brandData) {
    notFound();
  }

  const structuredData = {
    ...getOrganizationSchema(),
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${brandData.name} Printer Support`,
    "provider": {
      "@type": "Organization",
      "name": "Printer Support"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.printerzsupport.com/brands/${brandData.slug}`,
      "servicePhone": "+1-888-423-7757"
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Printer Brands', url: 'https://www.printerzsupport.com/brands' },
    { name: `${brandData.name} Support`, url: `https://www.printerzsupport.com/brands/${brandData.slug}` }
  ];

  const content = generateBrandContent(brandData);

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

