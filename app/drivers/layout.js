import { pageSeo } from '../../lib/seo/pageSeo';

export const metadata = pageSeo.drivers;

export default function DriversLayout({ children }) {
  return children;
}
