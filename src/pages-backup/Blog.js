import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

function Blog() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Blog', url: 'https://www.printerzsupport.com/blog' }
  ];
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
    { id: 'setup', name: 'Setup & Installation' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'installation', name: 'Installation' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Printer Support Blog",
    "description": "Expert guides and tips for printer troubleshooting, setup, installation, and maintenance",
    "url": "https://www.printerzsupport.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Printer Support"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Printer Support"
      },
      "url": `https://www.printerzsupport.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="blog-container">
      <Breadcrumb items={breadcrumbItems} />
      <SEO
        title="Printer Support Blog - Expert Guides & Troubleshooting Tips"
        description="Expert printer guides, troubleshooting tips, and step-by-step tutorials. Learn how to fix printer issues, set up wireless printers, install drivers, and maintain your printer for optimal performance."
        keywords="printer blog, printer guides, printer troubleshooting tips, printer setup guides, printer installation help, printer maintenance tips, HP printer guide, Canon printer guide"
        structuredData={blogSchema}
      />

      <div className="blog-header">
        <div className="container">
          <h1>Printer Support Blog</h1>
          <p className="blog-subtitle">
            Expert guides, troubleshooting tips, and step-by-step tutorials to help you get the most out of your printer
          </p>
        </div>
      </div>

      <div className="container">
        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-header">
                <span className="blog-category">{categories.find(c => c.id === post.category)?.name}</span>
                <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <h2 className="blog-card-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-read-time">{post.readTime}</span>
                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

