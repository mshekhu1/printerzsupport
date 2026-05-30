import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import BlogPostSidebars from '../../components/BlogPostSidebars';
import {
  printerServices,
  getServiceBySlug,
  generateServiceContent,
  getServicePageTitle,
} from '../../../lib/data/services';
import { getOrganizationSchema } from '../../../lib/utils/structuredData';
import '../../../styles/pages/About.css';

export async function generateStaticParams() {
  return printerServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  const pageTitle = getServicePageTitle(service);

  return {
    title: pageTitle,
    description: service.description,
    keywords: `${service.title}, ${service.title.toLowerCase()} service, printer ${service.slug.replace(/-/g, ' ')}, remote printer support`,
    openGraph: {
      title: pageTitle,
      description: service.description,
      url: `https://www.printerzsupport.com/services/${service.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://www.printerzsupport.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://www.printerzsupport.com/services/${service.slug}`;
  const structuredData = {
    ...getOrganizationSchema(),
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Printer Support',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: pageUrl,
      servicePhone: '+18884237757',
    },
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Services', url: 'https://www.printerzsupport.com/services' },
    { name: service.title, url: pageUrl },
  ];

  const content = generateServiceContent(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="about-container animate__animated animate__fadeIn">
        <Breadcrumb items={breadcrumbItems} />
        <BlogPostSidebars>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ marginTop: '2rem' }}
          />
        </BlogPostSidebars>
      </div>
    </>
  );
}
