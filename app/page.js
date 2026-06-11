import Home from './components/Home';
import { getLocalBusinessSchema, getOrganizationSchema } from '../lib/utils/structuredData';

export const metadata = {
  title: {
    absolute: 'HP® Printer Support | 24/7 Customer Support',
  },
  description: 'Expert HP printer support and HP printer customer support for LaserJet, OfficeJet, DeskJet, and Envy. Fix offline errors, jams, drivers, WiFi, and print quality. 24/7 remote help.',
  keywords: 'HP printer support, HP printer customer support, HP printer customer service, HP printer support number, HP printer repair, HP printer assistance, HP LaserJet support, HP OfficeJet support, HP printer offline fix, HP printer driver help',
  openGraph: {
    title: 'HP Printer Support | 24/7 Customer Support',
    description: 'Expert HP printer support and customer support. Remote help for jams, offline errors, drivers, WiFi, and print quality on all HP models.',
    url: 'https://www.printerzsupport.com',
    type: 'website',
    images: [
      {
        url: '/hero-printer.svg',
        width: 1200,
        height: 630,
        alt: 'HP printer repair and remote support',
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

