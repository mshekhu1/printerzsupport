import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { getLocalBusinessSchema } from '../utils/structuredData';

function Contact() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.printerzsupport.com/' },
    { name: 'Contact', url: 'https://www.printerzsupport.com/contact' }
  ];

  return (
    <div className="contact-container mt-nav">
      <Breadcrumb items={breadcrumbItems} />
      <SEO
        title="Contact Us - Get Printer Support Help"
        description="Contact Printer Support for expert help with your printer issues. Call +1-888-423-7757 or email support@printerzsupport.com. 24/7 support available for all printer brands."
        keywords="contact printer support, printer support phone number, printer support email, printer help contact, printer support customer service"
        structuredData={getLocalBusinessSchema()}
      />
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
  );
}

export default Contact;
