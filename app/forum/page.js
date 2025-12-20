'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumb from '../components/Breadcrumb';
import { forumDiscussions, categories } from '../data/forumDiscussions';
import { getOrganizationSchema } from '../../src/utils/structuredData';
import '../../src/page-styles/Forum.css';

export default function ForumPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Forum', url: 'https://www.printerzsupport.com/forum' }
  ];

  const filteredDiscussions = useMemo(() => {
    let filtered = forumDiscussions;

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(d => 
        d.title.toLowerCase().includes(query) ||
        d.question.toLowerCase().includes(query) ||
        d.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [selectedCategory, searchQuery]);

  const structuredData = useMemo(() => {
    try {
      return getOrganizationSchema();
    } catch (error) {
      console.error('Error generating structured data:', error);
      return null;
    }
  }, []);

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <div className="forum-container">
        <Breadcrumb items={breadcrumbItems} />
        <div className="container">
          <div className="forum-header">
            <h1>Printer Support Forum</h1>
            <p>Ask questions, share solutions, and help others with printer problems</p>
          </div>

          <div className="forum-controls">
            <div className="forum-search">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="forum-filters">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-filter"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="forum-stats">
            <div className="stat-item">
              <span className="stat-number">{forumDiscussions.length}</span>
              <span className="stat-label">Discussions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {forumDiscussions.reduce((sum, d) => sum + d.replies, 0)}
              </span>
              <span className="stat-label">Total Replies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {forumDiscussions.filter(d => d.solved).length}
              </span>
              <span className="stat-label">Solved</span>
            </div>
          </div>

          <div className="discussions-list">
            {filteredDiscussions.length > 0 ? (
              filteredDiscussions.map((discussion) => (
                <Link
                  key={discussion.id}
                  href={`/forum/${discussion.id}`}
                  className="discussion-card"
                >
                  <div className="discussion-header">
                    <div className="discussion-title-section">
                      {discussion.solved && (
                        <span className="solved-badge">✓ Solved</span>
                      )}
                      <h3 className="discussion-title">{discussion.title}</h3>
                    </div>
                    <div className="discussion-meta">
                      <span className="discussion-category">{discussion.category}</span>
                    </div>
                  </div>
                  <p className="discussion-question-preview">
                    {discussion.question.substring(0, 150)}...
                  </p>
                  <div className="discussion-footer">
                    <div className="discussion-author">
                      <span className="author-name">{discussion.author}</span>
                      <span className="author-role">{discussion.authorRole}</span>
                      <span className="discussion-date">{discussion.date}</span>
                    </div>
                    <div className="discussion-stats">
                      <span className="stat">
                        <i className="fas fa-eye"></i> {discussion.views}
                      </span>
                      <span className="stat">
                        <i className="fas fa-comments"></i> {discussion.replies}
                      </span>
                    </div>
                  </div>
                  <div className="discussion-tags">
                    {discussion.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              ))
            ) : (
              <div className="no-results">
                <p>No discussions found. Try adjusting your search or filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

