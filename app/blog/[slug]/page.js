import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import BlogPostSidebars from '../../components/BlogPostSidebars';
import { blogPosts } from '../../../lib/data/blogPosts';
import { getCanonicalSlug, getCanonicalBlogSlugs, isBlogAlias } from '../../../lib/data/blogAliases';
import {
  getBlogSeoTitle,
  getBlogOgImage,
  getBlogDateModified,
} from '../../../lib/seo/blogSeo';
import '../../../styles/blog/BlogPost.css';

// Only pre-built canonical URLs exist in static export; aliases rely on _redirects/.htaccess.
export const dynamicParams = false;

export async function generateStaticParams() {
  return getCanonicalBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalSlug(slug);
  if (!canonicalSlug) {
    return { title: 'Post Not Found' };
  }
  const post = blogPosts.find(p => p.slug === canonicalSlug);
  if (!post) return { title: 'Post Not Found' };

  const canonicalUrl = `https://www.printerzsupport.com/blog/${post.slug}`;
  const isAlternateUrl = slug !== post.slug || isBlogAlias(slug);
  const seoTitle = getBlogSeoTitle(post.title);
  const ogImage = getBlogOgImage(post.category);
  const dateModified = getBlogDateModified(post);

  return {
    title: seoTitle,
    description: post.excerpt,
    keywords: post.keywords,
    robots: isAlternateUrl
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
    openGraph: {
      title: seoTitle,
      description: post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: dateModified,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalSlug(slug);
  if (!canonicalSlug) notFound();
  const post = blogPosts.find(p => p.slug === canonicalSlug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 5);

  const canonicalBlogUrl = `https://www.printerzsupport.com/blog/${post.slug}`;
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Blog', url: 'https://www.printerzsupport.com/blog' },
    { name: post.title, url: canonicalBlogUrl }
  ];

  const categories = {
    'troubleshooting': 'Troubleshooting',
    'setup': 'Setup & Installation',
    'maintenance': 'Maintenance',
    'installation': 'Installation'
  };

  const ogImage = getBlogOgImage(post.category);
  const dateModified = getBlogDateModified(post);

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": ogImage,
    "datePublished": post.date,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Printer Support",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.printerzsupport.com/favicon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalBlogUrl
    },
    "articleSection": categories[post.category] || post.category,
    "keywords": post.keywords ? (Array.isArray(post.keywords) ? post.keywords.join(', ') : post.keywords) : '',
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <div className="blog-post-container">
        <Breadcrumb items={breadcrumbItems} />
        <article className="blog-post">
          <div className="blog-post-header">
            <div className="container">
              <div className="post-category">{categories[post.category] || post.category}</div>
              <h1>{post.title}</h1>
              <div className="post-meta">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </article>
        <BlogPostSidebars relatedPosts={relatedPosts}>
          <div className="blog-post-content-wrapper">
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </BlogPostSidebars>
      </div>
    </>
  );
}

