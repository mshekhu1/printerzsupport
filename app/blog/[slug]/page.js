import { notFound } from 'next/navigation';
import Breadcrumb from '../../components/Breadcrumb';
import BlogPostSidebars from '../../components/BlogPostSidebars';
import { blogPosts } from '../../../lib/data/blogPosts';
import '../../../styles/blog/BlogPost.css';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.printerzsupport.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: 'https://www.printerzsupport.com/hero-printer.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://www.printerzsupport.com/hero-printer.svg'],
    },
    alternates: {
      canonical: `https://www.printerzsupport.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 5);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Blog', url: 'https://www.printerzsupport.com/blog' },
    { name: post.title, url: `https://www.printerzsupport.com/blog/${post.slug}` }
  ];

  const categories = {
    'troubleshooting': 'Troubleshooting',
    'setup': 'Setup & Installation',
    'maintenance': 'Maintenance',
    'installation': 'Installation'
  };

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://www.printerzsupport.com/hero-printer.svg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Printer Support",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.printerzsupport.com/logo512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.printerzsupport.com/blog/${post.slug}`
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

