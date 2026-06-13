import Home from './components/Home';
import { getLocalBusinessSchema, getOrganizationSchema, getServiceSchema, getFAQSchema } from '../lib/utils/structuredData';
import { homeFaqs } from '../lib/data/homeFaqs';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_HERO_ALT,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_DESCRIPTION,
  DEFAULT_TITLE,
} from '../lib/seo/siteSeo';

export const metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS.join(', '),
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_OG_DESCRIPTION,
    url: 'https://www.printerzsupport.com',
    type: 'website',
    images: [
      {
        url: '/hero-printer.svg',
        width: 1200,
        height: 630,
        alt: DEFAULT_HERO_ALT,
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

