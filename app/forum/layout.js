import { pageSeo } from '../../lib/seo/pageSeo';

export const metadata = pageSeo.forum;

export default function ForumLayout({ children }) {
  return children;
}
