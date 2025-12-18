import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../data/blogPosts';
import './BlogPost.css';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">Back to Blog</Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Blog', url: 'https://www.printerzsupport.com/blog' },
    { name: post.title, url: `https://www.printerzsupport.com/blog/${post.slug}` }
  ];

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
    }
  };

  const categories = {
    'troubleshooting': 'Troubleshooting',
    'setup': 'Setup & Installation',
    'maintenance': 'Maintenance',
    'installation': 'Installation'
  };

  return (
    <div className="blog-post-container">
      <Breadcrumb items={breadcrumbItems} />
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        structuredData={blogPostSchema}
      />

      <article className="blog-post">
        <div className="container">
          <div className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-category">{categories[post.category]}</span>
              <span className="blog-post-date">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="blog-post-read-time">{post.readTime}</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-author">By {post.author}</p>
          </div>

          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blog-post-footer">
            <div className="blog-post-tags">
              <strong>Tags:</strong>
              {post.keywords.split(', ').map((keyword, index) => (
                <span key={index} className="blog-tag">{keyword}</span>
              ))}
            </div>
            <div className="blog-post-cta">
              <h3>Need Help with Your Printer?</h3>
              <p>Our expert technicians are available 24/7 to assist you.</p>
              <a href="tel:+1-888-423-7757" className="btn-call">
                📞 Call Now: +1-888-423-7757
              </a>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h2>Related Articles</h2>
              <div className="related-posts-grid">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="related-post-card">
                    <span className="related-post-category">
                      {categories[relatedPost.category]}
                    </span>
                    <h3>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p>{relatedPost.excerpt}</p>
                    <Link to={`/blog/${relatedPost.slug}`} className="read-more-link">
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="blog-post-navigation">
            <Link to="/blog" className="back-to-blog">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;

