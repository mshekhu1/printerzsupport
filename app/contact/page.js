import '../../styles/pages/Contact.css';
import { getLocalBusinessSchema } from '../../lib/utils/structuredData';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';

export const metadata = {
  title: 'Contact Us',
  description: `Reach our support team by phone at ${PHONE_DISPLAY} or email support@printerzsupport.com. We are available 24/7 to help with HP printer setup, repair, and troubleshooting.`,
  keywords: 'contact HP printer support, HP printer help phone number, printer support contact',
  openGraph: {
    title: 'Contact Us | HP Printer Support',
    description: 'Call or email us for expert remote HP printer help — available 24/7.',
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
        <p>If you have any questions or need support, please contact us at:</p>
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

