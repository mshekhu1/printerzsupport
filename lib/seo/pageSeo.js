/**
 * Page metadata — each section leads with a different support variant.
 *
 * Query ownership (avoid cannibalization):
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
    description: `HP printer technical support team with 10+ years fixing ${HP_SUPPORT_ISSUES} on ${HP_MODELS} printers — remotely, around the clock.`,
    keywords: 'HP printer technical support, HP printer support, about printer support',
    path: '/about',
  }),

  contact: buildMetadata({
    title: 'Contact Us',
    description: `HP printer support number — call ${PHONE_DISPLAY} or email. Help with ${HP_SUPPORT_ISSUES}.`,
    keywords: 'HP printer support number, contact HP printer help, HP printer support phone',
    path: '/contact',
  }),

  customerService: buildMetadata({
    title: 'HP Printer Customer Service & Technical Support',
    description: `24/7 HP printer customer service and technical support for ${HP_MODELS}. Fix ${HP_SUPPORT_ISSUES} with expert remote help.`,
    keywords: 'HP printer customer service, HP printer technical support, HP printer support number, HP printer customer service phone number, HP LaserJet support, HP OfficeJet support',
    path: '/hp-printer-customer-service',
    ogTitle: 'HP Printer Customer Service & Technical Support | Printer Support',
    ogDescription: '24/7 HP printer customer service and technical support for all HP printer models.',
  }),

  us: buildMetadata({
    title: 'HP Printer Support — United States',
    description: `HP Printer Support in all 50 US states. Fix ${HP_SUPPORT_ISSUES} on ${HP_MODELS}.`,
    keywords: 'HP printer support USA, HP printer support, fix HP printer error',
    path: '/us',
  }),

  canada: buildMetadata({
    title: 'HP Printer Support — Canada',
    description: `Customer Support for HP printers in every Canadian province. Fix ${HP_SUPPORT_ISSUES} on ${HP_MODELS}.`,
    keywords: 'HP printer customer support, HP printer support Canada, fix HP printer error',
    path: '/canada',
  }),

  brands: buildMetadata({
    title: 'HP Printer Support by Brand',
    description: `HP Printer Support for ${HP_MODELS} — plus Canon, Epson, Brother, and other brands. Fix error codes, offline issues, jams, and drivers.`,
    keywords: 'HP printer support, HP LaserJet support, HP OfficeJet support',
    path: '/brands',
  }),

  faq: buildMetadata({
    title: 'HP Printer Support FAQ',
    description: `Answers about HP Printer Support, 24/7 Customer Service, and technical support — ${HP_SUPPORT_ISSUES}.`,
    keywords: 'HP printer support FAQ, 24/7 customer service, HP printer technical support',
    path: '/faq',
  }),

  blog: buildMetadata({
    title: 'HP Printer Support Guides',
    description: 'Step-by-step HP printer guides — technical support tips for setup, troubleshooting, drivers, and WiFi.',
    keywords: 'HP printer technical support, HP printer support, HP printer troubleshooting',
    path: '/blog',
  }),

  forum: buildMetadata({
    title: 'HP Printer Support Forum',
    description: 'Customer Support community for HP printer problems — jams, drivers, WiFi, and error codes.',
    keywords: 'HP printer customer support, HP printer support forum, HP printer help',
    path: '/forum',
  }),

  services: buildMetadata({
    title: 'HP Printer Support Services',
    description: `HP printer technical support for wireless setup, driver repair, troubleshooting, and maintenance on ${HP_MODELS}.`,
    keywords: 'HP printer technical support, HP printer support services, HP printer repair',
    path: '/services',
  }),

  drivers: buildMetadata({
    title: 'HP Printer Driver Support',
    description: `HP printer technical support for driver install and update errors on Windows and Mac. ${HP_MODELS} models supported.`,
    keywords: 'HP printer technical support, HP printer drivers, HP printer driver error',
    path: '/drivers',
  }),
};

export { buildMetadata };
