import { pageSeo } from '../../lib/seo/pageSeo';

export const metadata = pageSeo.faq;

export default function FAQLayout({ children }) {
  return children;
}
