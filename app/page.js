import Home from './components/Home';
import { getLocalBusinessSchema, getOrganizationSchema, getReviewSchema } from '../lib/utils/structuredData';

export const metadata = {
  title: 'HP Printer Repair & Support',
  description: 'Expert HP printer repair and assistance for LaserJet, OfficeJet, DeskJet, and Envy. Fix offline errors, jams, drivers, WiFi, and print quality. 24/7 remote HP printer support.',
  keywords: 'HP printer repair, HP printer support, HP printer assistance, HP LaserJet repair, HP OfficeJet support, HP printer offline fix, HP printer driver help',
  openGraph: {
    title: 'HP Printer Repair & Support | Printer Support',
    description: 'Expert HP printer repair and assistance. Remote help for jams, offline errors, drivers, WiFi, and print quality on all HP models.',
    url: 'https://www.printerzsupport.com',
    type: 'website',
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

