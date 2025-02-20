import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <>
            <h1 className="services-header">Our Services</h1>
            <div className="service">
                <h2>Wireless Printer Setup</h2>
                <p>Experience seamless printing with our expert wireless printer setup service. We ensure your printer is connected and ready to use with all your devices.</p>
            </div>
            <div className="service">
                <h2>Printer Repair</h2>
                <p>Our skilled technicians provide fast and reliable printer repair services to get your printer back in working order, minimizing downtime and maximizing productivity.</p>
            </div>
            <div className="service">
                <h2>Printer Maintenance</h2>
                <p>Keep your printer in top condition with our comprehensive maintenance services. Regular check-ups and cleaning ensure optimal performance and longevity.</p>
            </div>
            <div className="service">
                <h2>Printer Installation</h2>
                <p>Our professional installation service ensures your printer is set up correctly and efficiently, so you can start printing without any hassle.</p>
            </div>
            <div className="service">
                <h2>Printer Troubleshooting</h2>
                <p>We offer expert troubleshooting services to diagnose and resolve any printer issues, ensuring smooth and uninterrupted printing operations.</p>
            </div>
        </>
    );
};

export default Services;
