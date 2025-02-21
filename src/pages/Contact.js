import React from 'react';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-container mt-nav">
      <h1>Contact Us</h1>
      <p>If you have any questions or need support, please contact us at:</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></p>
        <p>Phone: +1-786-753-8470</p>
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
