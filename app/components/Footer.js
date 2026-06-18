import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';
import { SITE_NAME } from '../../lib/seo/siteSeo';

export default function Footer({ style }) {
  return (
    <footer className="footer" style={style}>
      <div className="container">
        <div className="footer-top-row">
          <nav className="footer-listing-icons" aria-label="Listings and reviews">
            <a
              href="https://local.yahoo.com/info-240067504-printer-support-bloomfield-hills/"
              className="footer-listing-icon footer-listing-icon-yahoo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE_NAME} on Yahoo Local`}
              title="Yahoo Local"
            >
              <span aria-hidden="true">Y!</span>
            </a>
            <a
              href="https://www.facebook.com/printercarepro"
              className="footer-listing-icon footer-listing-icon-facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE_NAME} on Facebook`}
              title="Facebook"
            >
              <span aria-hidden="true">f</span>
            </a>
            <a
              href="https://m.yelp.com/biz/printer-support-bloomfield-hills"
              className="footer-listing-icon footer-listing-icon-yelp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE_NAME} on Yelp`}
              title="Yelp"
            >
              <span aria-hidden="true">y</span>
            </a>
          </nav>

          <div className="footer-content">
            <div className="footer-section">
              <h3>{SITE_NAME}</h3>
              <p>Remote printer help for home and office. We troubleshoot HP LaserJet, OfficeJet, DeskJet, and Envy models by phone.</p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/hp-printer-customer-service">HP Printer Help</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/us">HP Support — United States</Link></li>
                <li><Link href="/canada">HP Support — Canada</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p>📧 <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></p>
                <p>📞 <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a></p>
                <p>
                  📍{' '}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3758+Wedgewood+Dr%2C+Bloomfield+Hills%2C+MI+48301"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    3758 Wedgewood Dr<br />
                    Bloomfield Hills, MI 48301
                  </a>
                </p>
                <p>🕒 24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
          <p>&copy; 2024 {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
