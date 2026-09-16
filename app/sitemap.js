import { blogPosts } from '../lib/data/blogPosts';
import { usStates } from '../lib/data/usStates';
import { canadaProvinces } from '../lib/data/canadaProvinces';
import { printerBrands } from '../lib/data/printerBrands';
import { forumDiscussions } from '../lib/data/forumDiscussions';
import { printerServices } from '../lib/data/services';

export const dynamic = 'force-static';

const LAST_MODIFIED = {
  home: '2026-09-16',
  customerService: '2026-06-22',
  about: '2026-06-20',
  servicesIndex: '2026-05-31',
  servicePages: '2026-06-19',
  contact: '2026-06-20',
  blogIndex: '2026-09-05',
  faq: '2026-06-14',
  locationPages: '2026-06-20',
  brandsIndex: '2026-06-20',
  brandPages: '2026-09-05',
  hpBrand: '2026-09-16',
  drivers: '2026-09-05',
  forumIndex: '2026-06-19',
  legal: '2026-05-17',
};

function getForumLastModified(discussion) {
  return [discussion.date, ...(discussion.answers ?? []).map((answer) => answer.date)]
    .filter(Boolean)
    .sort()
    .at(-1);
}

export default function sitemap() {
  const baseUrl = 'https://www.printerzsupport.com';
  
  const routes = [
    {
      url: baseUrl,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/hp-printer-customer-service`,
      lastModified: LAST_MODIFIED.customerService,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: LAST_MODIFIED.about,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: LAST_MODIFIED.servicesIndex,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: LAST_MODIFIED.contact,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: LAST_MODIFIED.blogIndex,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: LAST_MODIFIED.faq,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/us`,
      lastModified: LAST_MODIFIED.locationPages,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/canada`,
      lastModified: LAST_MODIFIED.locationPages,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: LAST_MODIFIED.brandsIndex,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/drivers`,
      lastModified: LAST_MODIFIED.drivers,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/forum`,
      lastModified: LAST_MODIFIED.forumIndex,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: LAST_MODIFIED.legal,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: LAST_MODIFIED.legal,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: LAST_MODIFIED.legal,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const usStateRoutes = usStates.map((state) => ({
    url: `${baseUrl}/us/${state.slug}`,
    lastModified: LAST_MODIFIED.locationPages,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const canadaProvinceRoutes = canadaProvinces.map((province) => ({
    url: `${baseUrl}/canada/${province.slug}`,
    lastModified: LAST_MODIFIED.locationPages,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const serviceRoutes = printerServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: LAST_MODIFIED.servicePages,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const brandRoutes = printerBrands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified:
      brand.slug === 'hp' ? LAST_MODIFIED.hpBrand : LAST_MODIFIED.brandPages,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const forumRoutes = forumDiscussions.map((discussion) => ({
    url: `${baseUrl}/forum/${discussion.id}`,
    lastModified: getForumLastModified(discussion),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...routes,
    ...blogRoutes,
    ...usStateRoutes,
    ...canadaProvinceRoutes,
    ...serviceRoutes,
    ...brandRoutes,
    ...forumRoutes,
  ];
}

