/**
 * Page metadata — indexed SERP titles preserved via absoluteTitle.
 *
 * Query ownership (on-page H1/body; meta titles unchanged):
 *   /                           → HP printer support, HP printer help
 *   /hp-printer-customer-service → HP printer customer service, 24/7 customer service
 *   /contact                    → HP printer support number, contact
 *   /services                   → HP printer technical support
 *   /forum                      → HP printer customer support (community)
 *   /blog                       → HP printer troubleshooting, how-to guides
 *   /drivers                    → HP printer drivers, driver errors
 *   /us, /canada, /[state]      → geo-modified HP printer support
 *   /brands, /brands/hp         → HP LaserJet / OfficeJet / brand support
 *   /faq                        → HP printer support FAQ (overview)
 */

import { PHONE_DISPLAY } from '../constants/phone';
import {
  SITE_URL,
  SITE_NAME,
  HP_SUPPORT_ISSUES,
  HP_MODELS,
} from './siteSeo';

function buildMetadata({ title, description, keywords, path, ogTitle, ogDescription, absoluteTitle }) {
  const canonical = `${SITE_URL}${path}`;
  const og = ogTitle || absoluteTitle || `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords,
    openGraph: {
      title: og,
      description: ogDescription || description,
      url: canonical,
      type: 'website',
    },
    alternates: {
      canonical,
    },
  };
}

export const pageSeo = {
  about: buildMetadata({
    title: 'About Us',
    description: `HP printer technical support team with 10+ years fixing ${HP_SUPPORT_ISSUES} on ${HP_MODELS} printers — remotely, around the clock.`,
    keywords: 'HP printer technical support, HP printer support, about printer support',
    path: '/about',
  }),

  contact: buildMetadata({
    absoluteTitle: 'Contact Us - Printer Support | Get Help Now | Printer Support',
    title: 'Contact Us',
    description: `Contact Printer Support for expert help with your printer. Call us at ${PHONE_DISPLAY} or email support@printerzsupport.com. 24/7 support available.`,
    keywords: 'HP printer support number, contact HP printer help, Contact Printer Support, Printer Support Phone Number',
    path: '/contact',
  }),

  customerService: buildMetadata({
    title: 'HP Printer Customer Service',
    description: `24/7 HP printer customer service by phone. Talk to a technician about ${HP_SUPPORT_ISSUES} on ${HP_MODELS} models.`,
    keywords: 'HP printer customer service, 24/7 customer service, HP printer support number',
    path: '/hp-printer-customer-service',
    ogTitle: 'HP Printer Customer Service — 24/7 Help | Printer Support',
  }),

  us: buildMetadata({
    absoluteTitle: 'Online Printer Support in United States - Expert Remote Printer Services | Printer Support',
    title: 'Online Printer Support in United States',
    description:
      'Get expert online printer support services across all US states. Remote printer installation, troubleshooting, and maintenance for businesses and homes throughout the United States.',
    keywords: 'printer support USA, online printer support United States, remote printer support US, printer services America',
    path: '/us',
  }),

  canada: buildMetadata({
    absoluteTitle: 'HP Printer Help in Canada | HP Printer Support',
    title: 'HP Printer Help in Canada',
    description:
      'We provide remote printer support to residents and businesses in every province and territory. Whether you have a LaserJet, OfficeJet, DeskJet, or Envy, our technicians can help fix jams, offline errors, driver problems, and WiFi issues — usually in one session.',
    keywords: 'HP printer help Canada, HP printer support by province, HP printer repair Canada',
    path: '/canada',
  }),

  brands: buildMetadata({
    absoluteTitle: 'HP Printer Brand Support | HP Printer Support',
    title: 'HP Printer Brand Support',
    description:
      'We provide remote printer support for HP LaserJet, OfficeJet, DeskJet, and Envy models — plus Canon, Epson, Brother, and other major brands.',
    keywords: 'HP printer support, HP LaserJet help, HP OfficeJet support, HP DeskJet troubleshooting',
    path: '/brands',
  }),

  faq: buildMetadata({
    absoluteTitle: 'FAQ - Printer Support | Common Questions & Answers | Printer Support',
    title: 'FAQ',
    description: 'Find answers to common printer questions',
    keywords: 'HP printer support FAQ, printer FAQ, printer troubleshooting FAQ, 24/7 customer service, HP printer technical support',
    path: '/faq',
  }),

  blog: buildMetadata({
    absoluteTitle: 'Printer Support Blog - Expert Guides & Troubleshooting Tips | Printer Support',
    title: 'Printer Support Blog',
    description: 'Expert guides, tips, and tutorials for all your printer needs',
    keywords: 'HP printer troubleshooting, HP printer technical support, HP printer support, printer guides, printer setup tutorials',
    path: '/blog',
  }),

  forum: buildMetadata({
    absoluteTitle: 'Forum | HP Printer Support',
    title: 'Forum',
    description: 'Ask questions, share solutions, and help others with printer problems',
    keywords: 'HP printer customer support, HP printer support forum, HP printer help',
    path: '/forum',
  }),

  services: buildMetadata({
    absoluteTitle: 'Our Services | HP Printer Support',
    title: 'Our Services',
    description: 'Comprehensive printer support services to meet all your printing needs. Select a service to learn more.',
    keywords: 'HP printer technical support, HP printer support services, Printer Services, Wireless Printer Setup, Printer Repair, Printer Troubleshooting',
    path: '/services',
  }),

  drivers: buildMetadata({
    absoluteTitle: 'Printer Drivers & Manuals | HP Printer Support',
    title: 'Printer Drivers & Manuals',
    description: 'Download the latest drivers and instruction manuals for your printer model',
    keywords: 'printer drivers, printer manuals, HP printer drivers, download printer drivers',
    path: '/drivers',
  }),
};

export { buildMetadata };
