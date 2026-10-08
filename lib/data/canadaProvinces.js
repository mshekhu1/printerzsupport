// Canadian Provinces data for location pages

import {
  getLocationPageTitle,
  getLocationMetaDescription,
  getLocationKeywords,
  generateHpLocationContent,
  CA_LOCAL_AREAS,
} from '../seo/locationSeo';

export const canadaProvinces = [
  { name: 'Alberta', code: 'ab', slug: 'alberta', lastModified: '2026-09-24' },
  { name: 'British Columbia', code: 'bc', slug: 'british-columbia', lastModified: '2026-09-24' },
  { name: 'Manitoba', code: 'mb', slug: 'manitoba', lastModified: '2026-09-24' },
  { name: 'New Brunswick', code: 'nb', slug: 'new-brunswick', lastModified: '2026-09-24' },
  { name: 'Newfoundland and Labrador', code: 'nl', slug: 'newfoundland-and-labrador', lastModified: '2026-09-24' },
  { name: 'Northwest Territories', code: 'nt', slug: 'northwest-territories', lastModified: '2026-09-24' },
  { name: 'Nova Scotia', code: 'ns', slug: 'nova-scotia', lastModified: '2026-09-24' },
  { name: 'Nunavut', code: 'nu', slug: 'nunavut', lastModified: '2026-09-24' },
  { name: 'Ontario', code: 'on', slug: 'ontario', lastModified: '2026-09-24' },
  { name: 'Prince Edward Island', code: 'pe', slug: 'prince-edward-island', lastModified: '2026-09-24' },
  { name: 'Quebec', code: 'qc', slug: 'quebec', lastModified: '2026-09-24' },
  { name: 'Saskatchewan', code: 'sk', slug: 'saskatchewan', lastModified: '2026-09-24' },
  { name: 'Yukon', code: 'yt', slug: 'yukon', lastModified: '2026-09-24' },
];

export const getProvinceBySlug = (slug) => {
  return canadaProvinces.find(province => province.slug === slug);
};

export const getProvincePageTitle = (provinceName) => getLocationPageTitle(provinceName);

export const getProvinceLinkLabel = (provinceName) => getLocationPageTitle(provinceName);

export const getProvinceMetaDescription = (provinceName, slug = '') =>
  getLocationMetaDescription(provinceName, ', Canada', slug);

export const getProvinceKeywords = (provinceName, slug = '') =>
  getLocationKeywords(provinceName, ', Canada', slug);

export const generateProvinceContent = (slug, provinceName) =>
  generateHpLocationContent({
    slug,
    placeName: provinceName,
    countrySuffix: ', Canada',
    areasMap: CA_LOCAL_AREAS,
  });
