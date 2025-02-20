import React from 'react';
import './Services.css'; // Import the CSS file for styling

function Services() {
  return (
    <div className="services-page">
      <nav className="navbar">
        {/* Navigation bar content */}
      </nav>
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <ul className="services-list">
          <li className="service-item">
            <h2>Printer Setup</h2>
            <p>We provide professional printer setup services to ensure your printer is ready to use.</p>
          </li>
          <li className="service-item">
            <h2>Printer Repair</h2>
            <p>Our experts can repair any printer issues quickly and efficiently.</p>
          </li>
          <li className="service-item">
            <h2>Printer Maintenance</h2>
            <p>Regular maintenance services to keep your printer in top condition.</p>
          </li>
          <li className="service-item">
            <h2>Technical Support</h2>
            <p>24/7 technical support to assist you with any printer-related problems.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
