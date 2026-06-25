import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import BlogPostSidebars from '../../components/BlogPostSidebars';
import { printerBrands, getBrandBySlug, generateBrandContent } from '../../../lib/data/printerBrands';
import { SITE_NAME } from '../../../lib/seo/siteSeo';
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

  const isHp = brandData.slug === 'hp';
  const hpTitle = 'HP Printer Support - Expert HP Printer Services | Printer Support';
  const brandTitle = `${brandData.name} Printer Support - Expert ${brandData.name} Printer Services | Printer Support`;
  const title = isHp ? { absolute: hpTitle } : { absolute: brandTitle };
  const keywords = isHp
    ? 'HP printer support, fix HP printer error, HP printer help, HP printer error code'
    : `${brandData.name} printer support, ${brandData.name} printer help, ${brandData.name} printer troubleshooting`;

  const pageTitle = isHp ? hpTitle : brandTitle;

  return {
    title,
    description: brandData.description,
    keywords,
    openGraph: {
      title: pageTitle,
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

  const isHp = brandData.slug === 'hp';
  const structuredData = {
    ...getOrganizationSchema(),
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": isHp ? 'HP printer support' : `${brandData.name} printer support`,
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.printerzsupport.com/brands/${brandData.slug}`,
      "servicePhone": "+18884237757"
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
        <Breadcrumb items={breadcrumbItems} />
        <BlogPostSidebars brand={brandData.name}>
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ marginTop: '2rem' }}
          />
        </BlogPostSidebars>
      </div>
    </>
  );
}

