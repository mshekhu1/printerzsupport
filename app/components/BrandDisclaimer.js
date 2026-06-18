import { BRAND_DISCLAIMER, BRAND_DISCLAIMER_SHORT } from '../../lib/constants/brand';

export default function BrandDisclaimer({ variant = 'full', className = '' }) {
  const text = variant === 'short' ? BRAND_DISCLAIMER_SHORT : BRAND_DISCLAIMER;

  return (
    <p className={`brand-disclaimer ${className}`.trim()} role="note">
      {text}
    </p>
  );
}
