// Structured data templates for different page types

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Printer Support",
  "image": "https://www.printerzsupport.com/hero-printer.svg",
  "@id": "https://www.printerzsupport.com",
  "url": "https://www.printerzsupport.com",
  "telephone": "+1-888-423-7757",
  "email": "support@printerzsupport.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressLocality": "United States",
    "addressRegion": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
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
  "serviceType": "Printer Support Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Printer Support"
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
          "name": "Wireless Printer Setup",
          "description": "Expert wireless printer setup and configuration service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Printer Repair",
          "description": "Professional printer repair and troubleshooting services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Printer Installation",
          "description": "Complete printer installation and setup service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Printer Maintenance",
          "description": "Regular printer maintenance and optimization services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Printer Troubleshooting",
          "description": "Expert troubleshooting for all printer issues"
        }
      }
    ]
  }
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Printer Support",
  "url": "https://www.printerzsupport.com",
  "logo": "https://www.printerzsupport.com/favicon.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-423-7757",
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
  "name": "Printer Support",
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

