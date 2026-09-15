import { blogPosts } from '../lib/data/blogPosts';
import { usStates } from '../lib/data/usStates';
import { canadaProvinces } from '../lib/data/canadaProvinces';
import { printerBrands } from '../lib/data/printerBrands';
import { forumDiscussions } from '../lib/data/forumDiscussions';
import { printerServices } from '../lib/data/services';
import { SITE_UPDATED_ISO } from '../lib/seo/siteSeo';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://www.printerzsupport.com';
  const lastModified = new Date(SITE_UPDATED_ISO);
  
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/hp-printer-customer-service`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/us`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/canada`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/drivers`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/forum`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const usStateRoutes = usStates.map((state) => ({
    url: `${baseUrl}/us/${state.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const canadaProvinceRoutes = canadaProvinces.map((province) => ({
    url: `${baseUrl}/canada/${province.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const serviceRoutes = printerServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const brandRoutes = printerBrands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const forumRoutes = forumDiscussions.map((discussion) => ({
    url: `${baseUrl}/forum/${discussion.id}`,
    lastModified,
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

