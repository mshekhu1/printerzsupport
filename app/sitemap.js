import { blogPosts } from '../lib/data/blogPosts';
import { usStates } from '../lib/data/usStates';
import { canadaProvinces } from '../lib/data/canadaProvinces';
import { printerBrands } from '../lib/data/printerBrands';
import { forumDiscussions } from '../lib/data/forumDiscussions';
import { printerServices } from '../lib/data/services';
import { getBlogDateModified } from '../lib/seo/blogSeo';
import {
  getStaticPageLastModified,
  getEntityLastModified,
  latestDate,
} from '../lib/seo/pageLastModified';

export const dynamic = 'force-static';

function getForumLastModified(discussion) {
  return [discussion.date, ...(discussion.answers ?? []).map((answer) => answer.date)]
    .filter(Boolean)
    .sort()
    .at(-1);
}

function staticEntry(path, { changeFrequency, priority }) {
  return {
    url: `https://www.printerzsupport.com${path === '/' ? '' : path}`,
    lastModified: getStaticPageLastModified(path),
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const baseUrl = 'https://www.printerzsupport.com';

  const latestBlogModified = blogPosts
    .map((post) => getBlogDateModified(post))
    .sort()
    .at(-1);

  const latestBrandModified = latestDate(
    ...printerBrands.map((b) => b.lastModified)
  );
  const latestServiceModified = latestDate(
    ...printerServices.map((s) => s.lastModified)
  );
  const latestUsModified = latestDate(...usStates.map((s) => s.lastModified));
  const latestCaModified = latestDate(
    ...canadaProvinces.map((p) => p.lastModified)
  );
  const latestForumModified = latestDate(
    getStaticPageLastModified('/forum'),
    ...forumDiscussions.map((d) => getForumLastModified(d))
  );

  const routes = [
    staticEntry('/', { changeFrequency: 'daily', priority: 1 }),
    staticEntry('/hp-printer-customer-service', {
      changeFrequency: 'weekly',
      priority: 0.95,
    }),
    staticEntry('/about', { changeFrequency: 'monthly', priority: 0.8 }),
    {
      url: `${baseUrl}/services`,
      lastModified: latestDate(
        getStaticPageLastModified('/services'),
        latestServiceModified
      ),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    staticEntry('/contact', { changeFrequency: 'monthly', priority: 0.7 }),
    {
      url: `${baseUrl}/blog`,
      lastModified: latestDate(
        getStaticPageLastModified('/blog'),
        latestBlogModified
      ),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    staticEntry('/faq', { changeFrequency: 'monthly', priority: 0.8 }),
    {
      url: `${baseUrl}/us`,
      lastModified: latestDate(
        getStaticPageLastModified('/us'),
        latestUsModified
      ),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/canada`,
      lastModified: latestDate(
        getStaticPageLastModified('/canada'),
        latestCaModified
      ),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: latestDate(
        getStaticPageLastModified('/brands'),
        latestBrandModified
      ),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    staticEntry('/drivers', { changeFrequency: 'weekly', priority: 0.9 }),
    {
      url: `${baseUrl}/forum`,
      lastModified: latestForumModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    staticEntry('/privacy-policy', {
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
    staticEntry('/terms-conditions', {
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
    staticEntry('/refund-policy', {
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getBlogDateModified(post),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const usStateRoutes = usStates.map((state) => ({
    url: `${baseUrl}/us/${state.slug}`,
    lastModified: getEntityLastModified(state),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const canadaProvinceRoutes = canadaProvinces.map((province) => ({
    url: `${baseUrl}/canada/${province.slug}`,
    lastModified: getEntityLastModified(province),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const serviceRoutes = printerServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: getEntityLastModified(service),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const brandRoutes = printerBrands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.slug}`,
    lastModified: getEntityLastModified(brand),
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
