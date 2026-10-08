// US States data for location pages

import {
  getLocationPageTitle,
  getLocationMetaDescription,
  getLocationKeywords,
  generateHpLocationContent,
} from '../seo/locationSeo';

export const usStates = [
  { name: 'Alabama', code: 'al', slug: 'alabama', lastModified: '2026-09-24' },
  { name: 'Alaska', code: 'ak', slug: 'alaska', lastModified: '2026-09-24' },
  { name: 'Arizona', code: 'az', slug: 'arizona', lastModified: '2026-09-24' },
  { name: 'Arkansas', code: 'ar', slug: 'arkansas', lastModified: '2026-09-24' },
  { name: 'California', code: 'ca', slug: 'california', lastModified: '2026-09-24' },
  { name: 'Colorado', code: 'co', slug: 'colorado', lastModified: '2026-09-24' },
  { name: 'Connecticut', code: 'ct', slug: 'connecticut', lastModified: '2026-09-24' },
  { name: 'Delaware', code: 'de', slug: 'delaware', lastModified: '2026-09-24' },
  { name: 'Florida', code: 'fl', slug: 'florida', lastModified: '2026-09-24' },
  { name: 'Georgia', code: 'ga', slug: 'georgia', lastModified: '2026-09-24' },
  { name: 'Hawaii', code: 'hi', slug: 'hawaii', lastModified: '2026-09-24' },
  { name: 'Idaho', code: 'id', slug: 'idaho', lastModified: '2026-09-24' },
  { name: 'Illinois', code: 'il', slug: 'illinois', lastModified: '2026-09-24' },
  { name: 'Indiana', code: 'in', slug: 'indiana', lastModified: '2026-09-24' },
  { name: 'Iowa', code: 'ia', slug: 'iowa', lastModified: '2026-09-24' },
  { name: 'Kansas', code: 'ks', slug: 'kansas', lastModified: '2026-09-24' },
  { name: 'Kentucky', code: 'ky', slug: 'kentucky', lastModified: '2026-09-24' },
  { name: 'Louisiana', code: 'la', slug: 'louisiana', lastModified: '2026-09-24' },
  { name: 'Maine', code: 'me', slug: 'maine', lastModified: '2026-09-24' },
  { name: 'Maryland', code: 'md', slug: 'maryland', lastModified: '2026-09-24' },
  { name: 'Massachusetts', code: 'ma', slug: 'massachusetts', lastModified: '2026-09-24' },
  { name: 'Michigan', code: 'mi', slug: 'michigan', lastModified: '2026-09-24' },
  { name: 'Minnesota', code: 'mn', slug: 'minnesota', lastModified: '2026-09-24' },
  { name: 'Mississippi', code: 'ms', slug: 'mississippi', lastModified: '2026-09-24' },
  { name: 'Missouri', code: 'mo', slug: 'missouri', lastModified: '2026-09-24' },
  { name: 'Montana', code: 'mt', slug: 'montana', lastModified: '2026-09-24' },
  { name: 'Nebraska', code: 'ne', slug: 'nebraska', lastModified: '2026-09-24' },
  { name: 'Nevada', code: 'nv', slug: 'nevada', lastModified: '2026-09-24' },
  { name: 'New Hampshire', code: 'nh', slug: 'new-hampshire', lastModified: '2026-09-24' },
  { name: 'New Jersey', code: 'nj', slug: 'new-jersey', lastModified: '2026-09-24' },
  { name: 'New Mexico', code: 'nm', slug: 'new-mexico', lastModified: '2026-09-24' },
  { name: 'New York', code: 'ny', slug: 'new-york', lastModified: '2026-09-24' },
  { name: 'North Carolina', code: 'nc', slug: 'north-carolina', lastModified: '2026-09-24' },
  { name: 'North Dakota', code: 'nd', slug: 'north-dakota', lastModified: '2026-09-24' },
  { name: 'Ohio', code: 'oh', slug: 'ohio', lastModified: '2026-09-24' },
  { name: 'Oklahoma', code: 'ok', slug: 'oklahoma', lastModified: '2026-09-24' },
  { name: 'Oregon', code: 'or', slug: 'oregon', lastModified: '2026-09-24' },
  { name: 'Pennsylvania', code: 'pa', slug: 'pennsylvania', lastModified: '2026-09-24' },
  { name: 'Rhode Island', code: 'ri', slug: 'rhode-island', lastModified: '2026-09-24' },
  { name: 'South Carolina', code: 'sc', slug: 'south-carolina', lastModified: '2026-09-24' },
  { name: 'South Dakota', code: 'sd', slug: 'south-dakota', lastModified: '2026-09-24' },
  { name: 'Tennessee', code: 'tn', slug: 'tennessee', lastModified: '2026-09-24' },
  { name: 'Texas', code: 'tx', slug: 'texas', lastModified: '2026-09-24' },
  { name: 'Utah', code: 'ut', slug: 'utah', lastModified: '2026-09-24' },
  { name: 'Vermont', code: 'vt', slug: 'vermont', lastModified: '2026-09-24' },
  { name: 'Virginia', code: 'va', slug: 'virginia', lastModified: '2026-09-24' },
  { name: 'Washington', code: 'wa', slug: 'washington', lastModified: '2026-09-24' },
  { name: 'West Virginia', code: 'wv', slug: 'west-virginia', lastModified: '2026-09-24' },
  { name: 'Wisconsin', code: 'wi', slug: 'wisconsin', lastModified: '2026-09-24' },
  { name: 'Wyoming', code: 'wy', slug: 'wyoming', lastModified: '2026-09-24' },
];

export const getStateBySlug = (slug) => {
  return usStates.find(state => state.slug === slug);
};

export const getStatePageTitle = (stateName) => getLocationPageTitle(stateName);

export const getStateLinkLabel = (stateName) => getLocationPageTitle(stateName);

export const getStateMetaDescription = (stateName, slug = '') =>
  getLocationMetaDescription(stateName, '', slug);

export const getStateKeywords = (stateName, slug = '') =>
  getLocationKeywords(stateName, '', slug);

export const generateStateContent = (slug, stateName) =>
  generateHpLocationContent({ slug, placeName: stateName });
