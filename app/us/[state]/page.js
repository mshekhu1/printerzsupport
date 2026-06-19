import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import {
  usStates,
  getStateBySlug,
  generateStateContent,
  getStatePageTitle,
  getStateMetaDescription,
  getStateKeywords,
} from '../../../lib/data/usStates';
import { getLocationFaqSchema } from '../../../lib/seo/locationSeo';
import { getOrganizationSchema } from '../../../lib/utils/structuredData';
import '../../../styles/pages/About.css';

export async function generateStaticParams() {
  return usStates.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateData = getStateBySlug(state);
  
  if (!stateData) {
    return {
      title: 'State Not Found',
    };
  }

  const pageTitle = getStatePageTitle(stateData.name);

  return {
    title: pageTitle,
    description: getStateMetaDescription(stateData.name, stateData.slug),
    keywords: getStateKeywords(stateData.name, stateData.slug),
    openGraph: {
      title: pageTitle,
      description: getStateMetaDescription(stateData.name, stateData.slug),
      url: `https://www.printerzsupport.com/us/${stateData.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.printerzsupport.com/us/${stateData.slug}`,
    },
  };
}

export default async function StatePage({ params }) {
  const { state } = await params;
  const stateData = getStateBySlug(state);

  if (!stateData) {
    notFound();
  }

  const pageUrl = `https://www.printerzsupport.com/us/${stateData.slug}`;
  const structuredData = [
    {
      ...getOrganizationSchema(),
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "HP Printer Repair & Support",
      "areaServed": {
        "@type": "State",
        "name": stateData.name
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": pageUrl,
        "servicePhone": "+18884237757"
      }
    },
    getLocationFaqSchema(stateData.slug, stateData.name, pageUrl),
  ];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'United States', url: 'https://www.printerzsupport.com/us' },
    { name: getStatePageTitle(stateData.name), url: `https://www.printerzsupport.com/us/${stateData.slug}` }
  ];

  const content = generateStateContent(stateData.slug, stateData.name);

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

