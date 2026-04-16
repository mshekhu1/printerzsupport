import { blogPosts } from '../../../lib/data/blogPosts';
import { getCanonicalSlug } from '../../../lib/data/blogAliases';

export default async function Head({ params }) {
  const { slug } = await params;
  const canonicalSlug = getCanonicalSlug(slug);
  const post = canonicalSlug ? blogPosts.find((p) => p.slug === canonicalSlug) : null;
  const href = post
    ? `https://www.printerzsupport.com/blog/${post.slug}`
    : `https://www.printerzsupport.com/blog/${slug}`;

  return <link rel="canonical" href={href} />;
}
