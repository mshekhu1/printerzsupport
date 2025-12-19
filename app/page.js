import Home from './components/Home';
import { getLocalBusinessSchema, getOrganizationSchema, getReviewSchema } from '../src/utils/structuredData';

export const metadata = {
  title: 'Expert Printer Support - Fast & Reliable Help for All Printer Brands',
  description: 'Get expert printer support for all major brands. Fast, friendly, and reliable help to install, repair, and optimize your printers. 24/7 technical support available.',
  keywords: 'Printer Support, Printer Setup, Printer Installation, Printer Troubleshooting, HP Printer, Canon Printer, Epson Printer, Brother Printer, Wireless Printer Setup',
  openGraph: {
    title: 'Expert Printer Support - Fast & Reliable Help',
    description: 'Get expert printer support for all major brands. Fast, friendly, and reliable help to install, repair, and optimize your printers.',
    url: 'https://www.printerzsupport.com',
    type: 'website',
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

