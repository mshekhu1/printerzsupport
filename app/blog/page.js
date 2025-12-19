'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../../src/data/blogPosts';
import '../../src/page-styles/Blog.css';

export default function BlogPage() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="blog-container">
        <Breadcrumb items={breadcrumbItems} />
        <div className="blog-header">
          <h1>Printer Support Blog</h1>
          <p>Expert guides, tips, and tutorials for all your printer needs</p>
        </div>

        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="blog-posts">
          {filteredPosts.map((post, index) => (
            <article key={post.id} className="blog-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="blog-card-header">
                <span className="blog-category">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2 className="blog-card-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-read-time">{post.author}</span>
                <Link href={`/blog/${post.slug}`} className="blog-read-more">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

