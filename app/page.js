import Home from './components/Home';
import { getLocalBusinessSchema, getOrganizationSchema, getServiceSchema, getFAQSchema } from '../lib/utils/structuredData';
import { homeFaqs } from '../lib/data/homeFaqs';

export const metadata = {
  title: {
    absolute: 'HP® Printer Support | Customer Service & Technical Support',
  },
  description: 'Expert HP printer support with 24/7 customer service, customer support, and technical support for LaserJet, OfficeJet, DeskJet, and Envy. Fix offline errors, jams, drivers, WiFi, and print quality.',
  keywords: 'HP printer support, HP printer customer service, HP printer customer support, HP printer technical support, HP printer support number, HP LaserJet support, HP OfficeJet support, HP printer offline fix, HP printer driver help',
  openGraph: {
    title: 'HP Printer Support | Customer Service & Technical Support',
    description: 'HP printer support with expert customer service, customer support, and technical support. Remote help for jams, offline errors, drivers, WiFi, and print quality on all HP models.',
    url: 'https://www.printerzsupport.com',
    type: 'website',
    images: [
      {
        url: '/hero-printer.svg',
        width: 1200,
        height: 630,
        alt: 'HP printer support, customer service, customer support, and technical support',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com',
  },
};

export default function HomePage() {
  const structuredData = [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getServiceSchema(),
    getFAQSchema(homeFaqs),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Home />
    </>
  );
}

