import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Printer Support</h3>
            <p>Your trusted partner for all printer-related issues. We provide fast, reliable, and professional printer support services.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></p>
              <p>📞 <a href="tel:+1-888-423-7757">+1-888-423-7757</a></p>
              <p>🕒 24/7 Support Available</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Printer Support. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
