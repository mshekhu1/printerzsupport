import { pageSeo } from '../../lib/seo/pageSeo';

export const metadata = pageSeo.blog;

export default function BlogLayout({ children }) {
  return children;
}
