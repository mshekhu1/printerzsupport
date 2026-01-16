'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '../components/Breadcrumb';
import '../../styles/pages/Blog.css';

function BlogPageContent() {
  const searchParams = useSearchParams();
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Blog', url: 'https://www.printerzsupport.com/blog' }
  ];
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
    { id: 'setup', name: 'Setup & Installation' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'installation', name: 'Installation' }
  ];

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('/data/blogPosts.json')
      .then(res => res.json())
      .then(setBlogPosts);
  }, []);

  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    let posts = selectedCategory === 'all' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory);
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      posts = posts.filter(post => {
        // Remove HTML tags from content for searching
        const contentText = post.content ? post.content.replace(/<[^>]*>/g, '').toLowerCase() : '';
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          (post.keywords && post.keywords.toLowerCase().includes(query)) ||
          contentText.includes(query)
        );
      });
    }
    
    return posts;
  }, [selectedCategory, searchQuery]);

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

        <div className="blog-search-container" role="search" aria-label="Blog search">
          <div className="blog-search-wrapper">
            <label htmlFor="blog-search-input" className="sr-only">
              Search all blog posts by title, keywords, or content
            </label>
            <input
              id="blog-search-input"
              type="search"
              className="blog-search-input"
              placeholder="Search all blog posts by title, keywords, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search all blog posts"
              aria-describedby={searchQuery ? "search-results-count" : undefined}
            />
            <span className="blog-search-icon" aria-hidden="true">🔍</span>
          </div>
          {searchQuery && (
            <div id="search-results-count" className="blog-search-results-count" role="status" aria-live="polite">
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} for "{searchQuery}"
            </div>
          )}
        </div>

        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category.id);
                if (category.id === 'all') {
                  setSearchQuery('');
                }
              }}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="blog-posts">
          {filteredPosts.map((post, index) => (
            <article key={post.slug} className="blog-card" style={{ animationDelay: `${index * 0.1}s` }}>
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

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="blog-container">
        <Breadcrumb items={[
          { name: 'Home', url: 'https://www.printerzsupport.com/' },
          { name: 'Blog', url: 'https://www.printerzsupport.com/blog' }
        ]} />
        <div className="blog-header">
          <h1>Printer Support Blog</h1>
          <p>Expert guides, tips, and tutorials for all your printer needs</p>
        </div>
      </div>
    }>
      <BlogPageContent />
    </Suspense>
  );
}

