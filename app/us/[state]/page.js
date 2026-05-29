import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import {
  usStates,
  getStateBySlug,
  generateStateContent,
  getStatePageTitle,
} from '../../../lib/data/usStates';
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

  return {
    title: getStatePageTitle(stateData.name),
    description: `Expert HP printer assistance in ${stateData.name}. Fix HP LaserJet, OfficeJet, DeskJet & Envy — offline errors, jams, drivers, WiFi & print quality. 24/7 remote HP printer assistance.`,
    keywords: `HP printer assistance ${stateData.name}, HP printer fix ${stateData.name}, HP LaserJet assistance ${stateData.name}, HP OfficeJet assistance ${stateData.name}, HP printer support ${stateData.name}`,
    openGraph: {
      title: `HP Printer Assistance in ${stateData.name} | Printer Support`,
      description: `Professional HP printer assistance in ${stateData.name}. Remote fix for jams, offline errors, drivers, and WiFi on all HP models.`,
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
    "serviceType": "HP Printer Assistance",
    "areaServed": {
      "@type": "State",
      "name": stateData.name
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.printerzsupport.com/us/${stateData.slug}`,
      "servicePhone": "+18884237757"
    }
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'United States', url: 'https://www.printerzsupport.com/us' },
    { name: `HP Printer Assistance in ${stateData.name}`, url: `https://www.printerzsupport.com/us/${stateData.slug}` }
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

