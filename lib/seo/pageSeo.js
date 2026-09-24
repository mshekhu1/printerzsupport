/**
 * Page metadata — each section uses a different repair-focused phrase.
 */

import { PHONE_DISPLAY } from '../constants/phone';
import {
  SITE_URL,
  SITE_NAME,
  HP_SUPPORT_ISSUES,
  HP_MODELS,
} from './siteSeo';

function buildMetadata({ title, description, keywords, path, ogTitle, ogDescription }) {
  const canonical = `${SITE_URL}${path}`;
  const og = ogTitle || `${title} | ${SITE_NAME}`;

  return {
    title,
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
    description: `Meet our authorised HP repair team. For 10+ years, our printer technicians have provided support for ${HP_SUPPORT_ISSUES} on ${HP_MODELS}.`,
    keywords: 'authorised HP printer repair, support from HP repair technicians, about printer repair',
    path: '/about',
  }),

  contact: buildMetadata({
    title: 'Contact Us',
    description: `Contact our authorised HP repair team at ${PHONE_DISPLAY}. Get printer support by phone or email for ${HP_SUPPORT_ISSUES}.`,
    keywords: 'HP printer repair number, printer support from HP technicians, HP repair phone',
    path: '/contact',
  }),

  customerService: buildMetadata({
    title: 'HP Printer Customer Service',
    description: `Get authorised HP repair by phone, 24/7. Our printer technicians offer customer support for ${HP_SUPPORT_ISSUES} on ${HP_MODELS}.`,
    keywords: 'HP printer customer service, 24/7 repair support for HP, HP printer repair number',
    path: '/hp-printer-customer-service',
    ogTitle: 'HP Printer Customer Service — 24/7 Repair Help',
  }),

  us: buildMetadata({
    title: 'HP Printer Authorised Repair — United States',
    description: `Authorised repair for HP printers across all 50 US states. Get remote support for ${HP_SUPPORT_ISSUES} on ${HP_MODELS}.`,
    keywords: 'HP printer authorised repair USA, printer support for HP repairs, fix HP printer error',
    path: '/us',
  }),

  canada: buildMetadata({
    title: 'Authorised HP Printer Repair — Canada',
    description: `Authorised HP repair in every Canadian province. Our printer specialists provide support for ${HP_SUPPORT_ISSUES} on ${HP_MODELS}.`,
    keywords: 'HP printer repair service, repair support for HP in Canada, fix HP printer error',
    path: '/canada',
  }),

  brands: buildMetadata({
    title: 'HP Printer Repair by Brand',
    description: `Authorised repair for HP ${HP_MODELS} printers, plus service for other brands. Get support with errors, jams, and driver faults.`,
    keywords: 'HP printer authorised repair, printer support from HP specialists, HP OfficeJet service',
    path: '/brands',
  }),

  faq: buildMetadata({
    title: 'HP Printer Repair FAQ',
    description: `Answers about authorised HP repair, 24/7 customer service, and printer support for ${HP_SUPPORT_ISSUES}.`,
    keywords: 'HP printer repair FAQ, 24/7 support for HP repairs, HP printer technicians',
    path: '/faq',
  }),

  blog: buildMetadata({
    title: 'HP Printer Repair Guides',
    description: 'Authorised HP repair guidance with step-by-step printer support for setup, drivers, WiFi, troubleshooting, and common faults.',
    keywords: 'HP printer repair guides, printer support for HP owners, HP printer troubleshooting',
    path: '/blog',
  }),

  forum: buildMetadata({
    title: 'HP Printer Repair Forum',
    description: 'Discuss HP repair questions in our printer community and get peer support for jams, drivers, WiFi faults, and error codes.',
    keywords: 'HP printer repair community, printer support forum for HP, HP printer help',
    path: '/forum',
  }),

  services: buildMetadata({
    title: 'Authorised HP Printer Repair Services',
    description: `Authorised HP repair services with printer support for wireless setup, driver faults, troubleshooting, and maintenance on ${HP_MODELS}.`,
    keywords: 'HP printer repair technicians, support for authorised HP repair, HP printer repair',
    path: '/services',
  }),

  drivers: buildMetadata({
    title: 'HP Printer Driver Repair',
    description: `Authorised HP repair assistance and printer support for driver installation or update errors on Windows and Mac, covering ${HP_MODELS}.`,
    keywords: 'HP printer driver repair, driver support for HP printers, HP printer driver error',
    path: '/drivers',
  }),
};

export { buildMetadata };
