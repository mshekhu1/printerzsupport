'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { printerModels } from '../../lib/data/printerModels';
import { printerBrands } from '../../lib/data/printerBrands';
import '../../styles/pages/Drivers.css';

export default function DriversPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Drivers & Manuals', url: 'https://www.printerzsupport.com/drivers' }
  ];

  const filteredModels = useMemo(() => {
    let models = printerModels;

    // If search query exists, search first
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase().trim();
      models = printerModels.filter(model => 
        model.brand.toLowerCase().includes(lowerQuery) ||
        model.model.toLowerCase().includes(lowerQuery) ||
        model.series.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      models = models.filter(model => model.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    // Filter by type
    if (selectedType !== 'all') {
      models = models.filter(model => model.type.toLowerCase() === selectedType.toLowerCase());
    }

    // Sort results
    return models.sort((a, b) => {
      if (a.brand !== b.brand) {
        return a.brand.localeCompare(b.brand);
      }
      return a.model.localeCompare(b.model);
    });
  }, [searchQuery, selectedBrand, selectedType]);

  const getDriverDownloadUrl = (brand, model) => {
    // Point to brand product search pages for drivers
    const urls = {
      'HP': `https://support.hp.com/us-en/drivers/printers`,
      'Canon': `https://www.usa.canon.com/internet/portal/us/home/support/drivers-downloads`,
      'Epson': `https://epson.com/Support/Printers/sh/s1`,
      'Brother': `https://support.brother.com/g/b/productsearch.aspx?c=us&lang=en&content=dl`,
      'Lexmark': `https://support.lexmark.com/en_us/drivers-downloads.html`,
      'Xerox': `https://www.support.xerox.com/en-us`,
      'Samsung': `https://www.samsung.com/us/support/search`,
      'Dell': `https://www.dell.com/support/home/en-us/product-support/product-finder`,
      'Ricoh': `https://support.ricoh.com/`,
      'Konica Minolta': `https://www.konicaminolta.com/in-en/support/index.html`,
      'OKI': `https://www.oki.com/us/printing/support/drivers-and-utilities/`,
      'Kyocera': `https://www.kyoceradocumentsolutions.com/global/en/support-and-download.html`
    };

    return urls[brand] || `https://www.google.com/search?q=${encodeURIComponent(brand + ' ' + model + ' driver download')}`;
  };

  const getManualDownloadUrl = (brand, model) => {
    // Point to the same URLs as driver download (product search pages)
    const urls = {
      'HP': `https://support.hp.com/us-en/drivers/printers`,
      'Canon': `https://www.usa.canon.com/internet/portal/us/home/support/drivers-downloads`,
      'Epson': `https://epson.com/Support/Printers/sh/s1`,
      'Brother': `https://support.brother.com/g/b/productsearch.aspx?c=us&lang=en&content=dl`,
      'Lexmark': `https://support.lexmark.com/en_us/drivers-downloads.html`,
      'Xerox': `https://www.support.xerox.com/en-us`,
      'Samsung': `https://www.samsung.com/us/support/search`,
      'Dell': `https://www.dell.com/support/home/en-us/product-support/product-finder`,
      'Ricoh': `https://support.ricoh.com/`,
      'Konica Minolta': `https://www.konicaminolta.com/in-en/support/index.html`,
      'OKI': `https://www.oki.com/us/printing/support/drivers-and-utilities/`,
      'Kyocera': `https://www.kyoceradocumentsolutions.com/global/en/support-and-download.html`
    };

    return urls[brand] || `https://www.google.com/search?q=${encodeURIComponent(brand + ' ' + model + ' instruction manual')}`;
  };

  const brands = ['all', ...printerBrands.map(brand => brand.name)];
  const types = ['all', 'Laser', 'Inkjet'];

  return (
    <>
      <div className="drivers-page-container">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="drivers-header">
          <h1>Printer Drivers & Instruction Manuals</h1>
          <p>Download the latest drivers and instruction manuals for your printer model</p>
        </div>

        <div className="drivers-search-filters">
          <div className="drivers-search-wrapper">
            <input
              type="search"
              className="drivers-search-input"
              placeholder="Search by printer model, brand, or series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search printer models"
            />
            <span className="drivers-search-icon" aria-hidden="true">🔍</span>
          </div>

          <div className="drivers-filters">
            <div className="filter-group">
              <label htmlFor="brand-filter">Brand:</label>
              <select
                id="brand-filter"
                className="filter-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {brands.map(brand => (
                  <option key={brand} value={brand.toLowerCase()}>
                    {brand === 'all' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="type-filter">Type:</label>
              <select
                id="type-filter"
                className="filter-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {types.map(type => (
                  <option key={type} value={type.toLowerCase()}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {searchQuery && (
            <div className="drivers-results-count">
              Found {filteredModels.length} {filteredModels.length === 1 ? 'printer' : 'printers'} matching your search
            </div>
          )}
        </div>

        <div className="drivers-content">
          {filteredModels.length === 0 ? (
            <div className="drivers-no-results">
              <p>No printers found matching your criteria.</p>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="drivers-grid">
              {filteredModels.map((printer, index) => (
                <div key={`${printer.brand}-${printer.model}-${index}`} className="driver-card">
                  <div className="driver-card-header">
                    <h3 className="driver-model">{printer.model}</h3>
                    <span className="driver-brand">{printer.brand}</span>
                  </div>
                  <div className="driver-card-info">
                    <div className="driver-info-item">
                      <span className="driver-label">Series:</span>
                      <span className="driver-value">{printer.series}</span>
                    </div>
                    <div className="driver-info-item">
                      <span className="driver-label">Type:</span>
                      <span className="driver-value">{printer.type}</span>
                    </div>
                  </div>
                  <div className="driver-card-actions">
                    <a
                      href={getDriverDownloadUrl(printer.brand, printer.model)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="driver-btn driver-btn-primary"
                    >
                      <span>📥</span> Download Driver
                    </a>
                    <a
                      href={getManualDownloadUrl(printer.brand, printer.model)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="driver-btn driver-btn-secondary"
                    >
                      <span>📖</span> Instruction Manual
                    </a>
                  </div>
                  <div className="driver-card-footer">
                    <Link href={`/brands/${printerBrands.find(b => b.name === printer.brand)?.slug || 'hp'}`} className="driver-support-link">
                      Get Support for {printer.brand} Printers →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="drivers-help-section">
          <h2>Need Help Finding Your Driver?</h2>
          <p>If you can't find your printer model, our expert technicians can help you locate and install the correct drivers.</p>
          <div className="drivers-help-actions">
            <a href="tel:+1-888-423-7757" className="driver-help-btn">
              Call +1-888-423-7757
            </a>
            <Link href="/contact" className="driver-help-btn driver-help-btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

