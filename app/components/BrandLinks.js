'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BrandLinks({ brands = null }) {
  const [printerBrands, setPrinterBrands] = useState([]);

  useEffect(() => {
    fetch('/data/printerBrands.json').then(r => r.json()).then(setPrinterBrands);
  }, []);

  // If specific brands provided, use those; otherwise show all major brands
  const displayBrands = brands 
    ? printerBrands.filter(b => brands.includes(b.name.toLowerCase()))
    : printerBrands.slice(0, 4); // Show top 4 brands by default

  if (displayBrands.length === 0) return null;

  return (
    <div className="brand-links-section" style={{ 
      marginTop: '3rem', 
      marginBottom: '3rem',
      padding: '4rem 2rem', 
      background: '#f8f9fa', 
      borderRadius: '12px',
      border: '1px solid #e9ecef'
    }}>
      <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: '#333' }}>
        Need Help with Your Printer Brand?
      </h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem' 
      }}>
        {displayBrands.map((brand) => (
          <Link 
            key={brand.slug}
            href={`/brands/${brand.slug}`}
            style={{
              display: 'block',
              padding: '1rem',
              background: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#667eea';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#dee2e6';
            }}
          >
            <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              {brand.name} Printer Support
            </div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              {brand.series.slice(0, 3).join(', ')} series
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

