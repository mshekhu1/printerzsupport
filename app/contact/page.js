import '../../src/page-styles/Contact.css';
import { getLocalBusinessSchema } from '../../src/utils/structuredData';

export const metadata = {
  title: 'Contact Us - Printer Support | Get Help Now',
  description: 'Contact Printer Support for expert help with your printer. Call us at +1-888-423-7757 or email support@printerzsupport.com. 24/7 support available.',
  keywords: 'Contact Printer Support, Printer Help, Printer Support Phone Number, Printer Support Email',
  openGraph: {
    title: 'Contact Us - Printer Support',
    description: 'Get in touch with Printer Support for expert printer help.',
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
          <p>Phone: <a href="tel:+1-888-423-7757">+1-888-423-7757</a></p>
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

