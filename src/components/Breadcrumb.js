import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBreadcrumbSchema } from '../utils/structuredData';
import './Breadcrumb.css';

function Breadcrumb({ items }) {
  // Use provided items or create default
  const defaultItems = items || [
    { name: 'Home', url: 'https://www.printerzsupport.com/' }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(defaultItems);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            {defaultItems.map((item, index) => {
              const isLast = index === defaultItems.length - 1;
              const path = item.url.replace('https://www.printerzsupport.com', '') || '/';
              
              return (
                <li 
                  key={index} 
                  className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {isLast ? (
                    <span>{item.name}</span>
                  ) : (
                    <Link to={path}>{item.name}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

export default Breadcrumb;

