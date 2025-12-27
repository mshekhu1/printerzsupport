// Utility functions for linking printer brands in content

import { printerBrands } from '../data/printerBrands';

/**
 * Creates a link to a brand support page
 * @param {string} brandName - Brand name (HP, Canon, Epson, etc.)
 * @param {string} linkText - Text to display in the link (optional, defaults to brand name)
 * @returns {string} HTML link string
 */
export const createBrandLink = (brandName, linkText = null) => {
  const brand = printerBrands.find(
    b => b.name.toLowerCase() === brandName.toLowerCase() || 
         b.fullName.toLowerCase() === brandName.toLowerCase()
  );
  
  if (!brand) {
    return linkText || brandName;
  }
  
  const text = linkText || brand.name;
  return `<a href="/brands/${brand.slug}" title="${brand.fullName} Printer Support">${text}</a>`;
};

/**
 * Processes HTML content and automatically links brand mentions
 * @param {string} content - HTML content string
 * @returns {string} HTML content with brand links
 */
export const linkBrandsInContent = (content) => {
  let processedContent = content;
  
  // Create a map of brand names and their slugs
  const brandMap = {};
  printerBrands.forEach(brand => {
    brandMap[brand.name.toLowerCase()] = brand.slug;
    brandMap[brand.fullName.toLowerCase()] = brand.slug;
  });
  
  // Link brand mentions (case-insensitive, whole word only)
  printerBrands.forEach(brand => {
    // Match brand name not already in a link
    const brandRegex = new RegExp(`(?!<a[^>]*>)(?<![a-zA-Z])(${brand.name})(?![a-zA-Z])(?![^<]*</a>)`, 'gi');
    processedContent = processedContent.replace(brandRegex, (match) => {
      return createBrandLink(brand.name, match);
    });
  });
  
  return processedContent;
};

/**
 * Get popular printer models by brand
 * @param {string} brandName - Brand name
 * @returns {Array} Array of popular model examples
 */
export const getPopularModels = (brandName) => {
  const models = {
    'HP': [
      'HP LaserJet Pro M404dn',
      'HP OfficeJet Pro 9015e',
      'HP DeskJet 3755',
      'HP Envy 6055',
      'HP LaserJet Pro M15w'
    ],
    'Canon': [
      'Canon PIXMA TR8620',
      'Canon PIXMA G6020',
      'Canon imageCLASS MF445dw',
      'Canon MAXIFY MB2720',
      'Canon PIXMA TS3322'
    ],
    'Epson': [
      'Epson EcoTank ET-2720',
      'Epson Expression Home XP-4100',
      'Epson WorkForce Pro WF-3720',
      'Epson EcoTank ET-2760',
      'Epson Expression ET-2750'
    ],
    'Brother': [
      'Brother MFC-L2750DW',
      'Brother HL-L2350DW',
      'Brother DCP-L2550DW',
      'Brother MFC-J995DW',
      'Brother HL-L2300D'
    ]
  };
  
  return models[brandName] || [];
};

/**
 * Get brand series information
 * @param {string} brandName - Brand name
 * @returns {Object} Brand object with series info
 */
export const getBrandInfo = (brandName) => {
  return printerBrands.find(
    b => b.name.toLowerCase() === brandName.toLowerCase() || 
         b.fullName.toLowerCase() === brandName.toLowerCase()
  );
};

