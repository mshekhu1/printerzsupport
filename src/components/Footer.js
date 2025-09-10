import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Printer Support</h3>
            <p>Your trusted partner for all printer-related issues. We provide fast, reliable, and professional printer support services.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="/services">Printer Setup</a></li>
              <li><a href="/services">Repair & Maintenance</a></li>
              <li><a href="/services">Troubleshooting</a></li>
              <li><a href="/services">Wireless Configuration</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 <a href="mailto:support@printerzsupport.com">support@printerzsupport.com</a></p>
              <p>📞 <a href="tel:+1-888-423-7757">+1-888-423-7757</a></p>
              <p>🕒 24/7 Support Available</p>
              <p>🌍 Worldwide Service</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Printer Support. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
