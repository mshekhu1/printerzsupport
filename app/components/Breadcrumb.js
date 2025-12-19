'use client';

import Link from 'next/link';
import '../../src/components/Breadcrumb.css';

export default function Breadcrumb({ items }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            {items.map((item, index) => (
              <li key={index} className="breadcrumb-item">
                {index < items.length - 1 ? (
                  <Link href={item.url.replace('https://www.printerzsupport.com', '') || '/'}>
                    {item.name}
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}

