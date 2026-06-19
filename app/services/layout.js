import { pageSeo } from '../../lib/seo/pageSeo';

export const metadata = pageSeo.services;

export default function ServicesLayout({ children }) {
  return children;
}
