import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Wireless Printer Setup",
            description: "Experience seamless printing with our expert wireless printer setup service. We ensure your printer is connected and ready to use with all your devices.",
            icon: "📶",
            features: [
                "WiFi network configuration",
                "Device compatibility check",
                "Security setup",
                "Mobile printing setup"
            ]
        },
        {
            id: 2,
            title: "Printer Repair",
            description: "Our skilled technicians provide fast and reliable printer repair services to get your printer back in working order, minimizing downtime and maximizing productivity.",
            icon: "🔧",
            features: [
                "Hardware diagnostics",
                "Parts replacement",
                "Software troubleshooting",
                "Performance optimization"
            ]
        },
        {
            id: 3,
            title: "Printer Maintenance",
            description: "Keep your printer in top condition with our comprehensive maintenance services. Regular check-ups and cleaning ensure optimal performance and longevity.",
            icon: "🛠️",
            features: [
                "Regular cleaning service",
                "Performance monitoring",
                "Preventive maintenance",
                "Health check reports"
            ]
        },
        {
            id: 4,
            title: "Printer Installation",
            description: "Our professional installation service ensures your printer is set up correctly and efficiently, so you can start printing without any hassle.",
            icon: "⚙️",
            features: [
                "Hardware installation",
                "Driver setup",
                "Network configuration",
                "Testing and calibration"
            ]
        },
        {
            id: 5,
            title: "Printer Troubleshooting",
            description: "We offer expert troubleshooting services to diagnose and resolve any printer issues, ensuring smooth and uninterrupted printing operations.",
            icon: "🔍",
            features: [
                "Issue diagnosis",
                "Remote support",
                "Step-by-step guidance",
                "Follow-up support"
            ]
        }
    ];

    return (
        <div className="services-container">
            <div className="services-header">
                <h1>Our Services</h1>
                <p className="lead">Professional printer support services to keep your business running smoothly</p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.id} className="service">
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <ul className="service-features">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <div className="service-cta">
                            <a href="/contact" className="service-btn">
                                Get Started
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="service-stats">
                <h3>Why Choose Our Services?</h3>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support Available</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">99%</span>
                        <span className="stat-label">Success Rate</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">15min</span>
                        <span className="stat-label">Average Response</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10k+</span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
