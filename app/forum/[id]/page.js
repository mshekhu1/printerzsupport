import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';
import { forumDiscussions, getDiscussionById } from '../../../lib/data/forumDiscussions';
import { getOrganizationSchema } from '../../../lib/utils/structuredData';
import '../../../styles/pages/Forum.css';

export async function generateStaticParams() {
  return forumDiscussions.map((discussion) => ({
    id: discussion.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const discussion = getDiscussionById(id);
  
  if (!discussion) {
    return {
      title: 'Discussion Not Found',
    };
  }

  return {
    title: `${discussion.title} - Printer Support Forum`,
    description: discussion.question.substring(0, 160),
    keywords: discussion.tags.join(', '),
    openGraph: {
      title: discussion.title,
      description: discussion.question.substring(0, 160),
      url: `https://www.printerzsupport.com/forum/${id}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://www.printerzsupport.com/forum/${id}`,
    },
  };
}

export default async function DiscussionPage({ params }) {
  const { id } = await params;
  const discussion = getDiscussionById(id);

  if (!discussion) {
    notFound();
  }

  const structuredData = {
    ...getOrganizationSchema(),
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    "headline": discussion.title,
    "description": discussion.question,
    "datePublished": discussion.date,
    "author": {
      "@type": "Person",
      "name": discussion.author
    },
    "comment": discussion.answers.map(answer => ({
      "@type": "Comment",
      "text": answer.content,
      "dateCreated": answer.date,
      "author": {
        "@type": "Person",
        "name": answer.author
      }
    }))
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Forum', url: 'https://www.printerzsupport.com/forum' },
    { name: discussion.title, url: `https://www.printerzsupport.com/forum/${id}` }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="forum-container">
        <Breadcrumb items={breadcrumbItems} />
        <div className="container">
          <Link href="/forum" className="back-link">
            ← Back to Forum
          </Link>

          <div className="discussion-detail">
            <div className="discussion-header-detail">
              <div className="discussion-title-section">
                {discussion.solved && (
                  <span className="solved-badge">✓ Solved</span>
                )}
                <h1 className="discussion-title-main">{discussion.title}</h1>
              </div>
              <div className="discussion-meta-detail">
                <span className="discussion-category">{discussion.category}</span>
                <div className="discussion-stats-detail">
                  <span><i className="fas fa-eye"></i> {discussion.views} views</span>
                  <span><i className="fas fa-comments"></i> {discussion.replies} replies</span>
                </div>
              </div>
            </div>

            <div className="discussion-tags-detail">
              {discussion.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="question-section">
              <div className="post-card question-card">
                <div className="post-header">
                  <div className="post-author">
                    <div className="author-avatar">
                      {discussion.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <span className="author-name">{discussion.author}</span>
                      <span className="author-role">{discussion.authorRole}</span>
                      <span className="post-date">{discussion.date}</span>
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-label">Question:</h3>
                  <p className="post-text">{discussion.question}</p>
                </div>
              </div>
            </div>

            <div className="answers-section">
              <h2 className="answers-title">
                Answers ({discussion.answers.length})
              </h2>
              {discussion.answers.map((answer) => (
                <div key={answer.id} className="post-card answer-card">
                  <div className="post-header">
                    <div className="post-author">
                      <div className="author-avatar expert">
                        {answer.author.charAt(0)}
                      </div>
                      <div className="author-info">
                        <span className="author-name">
                          {answer.author}
                          {answer.verified && (
                            <span className="verified-badge">✓ Verified Expert</span>
                          )}
                        </span>
                        <span className="author-role">{answer.authorRole}</span>
                        <span className="post-date">{answer.date}</span>
                      </div>
                    </div>
                    <div className="answer-helpful">
                      <span className="helpful-count">
                        <i className="fas fa-thumbs-up"></i> {answer.helpful} helpful
                      </span>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-text" style={{ whiteSpace: 'pre-line' }}>
                      {answer.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="discussion-actions">
              <p className="help-text">
                Have a similar problem or additional information? 
                <Link href="/contact"> Contact our support team</Link> for personalized help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

