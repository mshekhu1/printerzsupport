import '../../styles/pages/Contact.css';
import { getLocalBusinessSchema } from '../../lib/utils/structuredData';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';

export const metadata = {
  title: 'Contact Us',
  description: `24/7 HP printer customer service and technical support — call ${PHONE_DISPLAY}. Help with offline printers, jams, drivers, WiFi, and error codes.`,
  keywords: '24/7 HP printer support, HP printer customer service, HP printer technical support, HP printer support number',
  openGraph: {
    title: 'Contact Us | Printer Support',
    description: '24/7 HP printer customer service and technical support by phone and email.',
    url: 'https://www.printerzsupport.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.printerzsupport.com/contact',
  },
};

export default function ContactPage() {
  const structuredData = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="contact-container mt-nav">
        <h1>Contact Us</h1>
        <p>Questions about your printer? Call or email — we&apos;re here around the clock.</p>
        <div className="contact-info">
          <p>Email: <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></p>
          <p>Phone: <a href={PHONE_TEL_HREF}>{PHONE_DISPLAY}</a></p>
          <p>
            Address:{' '}
            <a
              href="https://www.google.com/maps/search/?api=1&query=3758+Wedgewood+Dr%2C+Bloomfield+Hills%2C+MI+48301"
              target="_blank"
              rel="noopener noreferrer"
            >
              3758 Wedgewood Dr, Bloomfield Hills, MI 48301
            </a>
          </p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </>
  );
}
