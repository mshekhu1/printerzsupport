// Structured data templates for different page types

import { PHONE_E164 } from '../constants/phone';
import { SITE_NAME } from '../seo/siteSeo';

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_NAME,
  "description": "24/7 third-party HP printer support for LaserJet, OfficeJet, DeskJet, and Envy. Help with offline errors, jams, drivers, WiFi, and error codes.",
  "image": "https://www.printerzsupport.com/hero-printer.svg",
  "@id": "https://www.printerzsupport.com",
  "url": "https://www.printerzsupport.com",
  "telephone": PHONE_E164,
  "email": "support@printerzsupport.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3758 Wedgewood Dr",
    "addressLocality": "Bloomfield Hills",
    "addressRegion": "MI",
    "postalCode": "48301",
    "addressCountry": "US"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://www.twitter.com",
    "https://www.linkedin.com",
    "https://www.instagram.com"
  ]
  // Note: Update with actual social media profile URLs when available
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "HP printer support",
  "provider": {
    "@type": "LocalBusiness",
    "name": SITE_NAME
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Printer Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HP Wireless Printer Setup",
          "description": "Wireless printer setup and network configuration for HP printers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HP Printer Repair",
          "description": "Remote printer repair and troubleshooting for jams, offline errors, and print quality"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HP Printer Installation",
          "description": "Complete printer installation and first-time setup"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HP Printer Maintenance",
          "description": "Regular maintenance and performance optimization for HP printers"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HP Printer Troubleshooting",
          "description": "Expert troubleshooting for all common HP printer issues"
        }
      }
    ]
  }
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "description": "24/7 third-party HP printer support for home and business users across the United States.",
  "url": "https://www.printerzsupport.com",
  "logo": "https://www.printerzsupport.com/favicon.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3758 Wedgewood Dr",
    "addressLocality": "Bloomfield Hills",
    "addressRegion": "MI",
    "postalCode": "48301",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": PHONE_E164,
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://www.twitter.com",
    "https://www.linkedin.com",
    "https://www.instagram.com"
  ]
  // Note: Update with actual social media profile URLs when available
});

export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getReviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString()
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewBody": review.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }))
});

