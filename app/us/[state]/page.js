import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import { usStates, getStateBySlug, generateStateContent } from '../../data/usStates';
import { getOrganizationSchema } from '../../../src/utils/structuredData';
import '../../../src/page-styles/About.css';

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

  return {
    title: `Online Printer Support in ${stateData.name} - Expert Remote Printer Services`,
    description: `Get expert online printer support services in ${stateData.name}. Remote printer installation, troubleshooting, and maintenance for businesses and homes in ${stateData.name}.`,
    keywords: `printer support ${stateData.name}, online printer support ${stateData.name}, remote printer support ${stateData.name}, printer services ${stateData.name}`,
    openGraph: {
      title: `Online Printer Support in ${stateData.name}`,
      description: `Expert online printer support services in ${stateData.name}. Remote printer installation, troubleshooting, and maintenance.`,
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

  const structuredData = {
    ...getOrganizationSchema(),
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Online Printer Support",
    "areaServed": {
      "@type": "State",
      "name": stateData.name
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.printerzsupport.com/us/${stateData.slug}`,
      "servicePhone": "+1-888-423-7757"
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'United States', url: 'https://www.printerzsupport.com/us' },
    { name: stateData.name, url: `https://www.printerzsupport.com/us/${stateData.slug}` }
  ];

  const content = generateStateContent(stateData.name);

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

