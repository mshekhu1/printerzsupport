// Canadian Provinces data for location pages

import {
  getLocationPageTitle,
  getLocationMetaDescription,
  getLocationKeywords,
  generateHpLocationContent,
  CA_LOCAL_AREAS,
} from '../seo/locationSeo';

export const canadaProvinces = [
  { name: 'Alberta', code: 'ab', slug: 'alberta' },
  { name: 'British Columbia', code: 'bc', slug: 'british-columbia' },
  { name: 'Manitoba', code: 'mb', slug: 'manitoba' },
  { name: 'New Brunswick', code: 'nb', slug: 'new-brunswick' },
  { name: 'Newfoundland and Labrador', code: 'nl', slug: 'newfoundland-and-labrador' },
  { name: 'Northwest Territories', code: 'nt', slug: 'northwest-territories' },
  { name: 'Nova Scotia', code: 'ns', slug: 'nova-scotia' },
  { name: 'Nunavut', code: 'nu', slug: 'nunavut' },
  { name: 'Ontario', code: 'on', slug: 'ontario' },
  { name: 'Prince Edward Island', code: 'pe', slug: 'prince-edward-island' },
  { name: 'Quebec', code: 'qc', slug: 'quebec' },
  { name: 'Saskatchewan', code: 'sk', slug: 'saskatchewan' },
  { name: 'Yukon', code: 'yt', slug: 'yukon' },
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
