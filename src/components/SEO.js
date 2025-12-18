import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  structuredData 
}) {
  const location = useLocation();
  const siteUrl = 'https://www.printerzsupport.com';
  const canonicalUrl = `${siteUrl}${location.pathname}`;
  const defaultImage = `${siteUrl}/hero-printer.svg`;

  const fullTitle = title 
    ? `${title} | Printer Support - Expert Help for All Major Printer Brands`
    : 'Printer Support - Expert Help for All Major Printer Brands | 24/7 Support';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || 'Get expert printer support for all major brands. We offer comprehensive services including printer troubleshooting, setup, installation, and wireless configuration. 24/7 technical support available.'} />
      <meta name="keywords" content={keywords || 'Printer Support, Printer Setup, Printer Installation, Printer Connect with wifi, Wireless Printer Setup, Printer Troubleshooting, HP Printer, Canon Printer, Epson Printer, Brother Printer, Printer Driver Download, Fix Printer Offline, Printer Not Printing'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'Professional printer support services for all major brands. Get help with printer setup, installation, and troubleshooting.'} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Printer Support" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || 'Professional printer support services for all major brands.'} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Printer Support" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      {/* Structured Data */}
      {structuredData && (
        <>
          {Array.isArray(structuredData) || structuredData["@graph"] ? (
            // Handle multiple schemas
            (structuredData["@graph"] || structuredData).map((schema, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          ) : (
            // Single schema
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )}
        </>
      )}
    </Helmet>
  );
}

export default SEO;

