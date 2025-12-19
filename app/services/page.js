'use client';

import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import '../../src/page-styles/Services.css';

export default function ServicesPage() {
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
      ],
      color: "#3b82f6"
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
      ],
      color: "#ef4444"
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
      ],
      color: "#10b981"
    },
    {
      id: 4,
      title: "Printer Installation",
      description: "Our professional installation service ensures your printer is set up correctly and efficiently, so you can start printing without any hassle.",
      icon: "📦",
      features: [
        "Complete setup",
        "Driver installation",
        "Network configuration",
        "Testing and verification"
      ],
      color: "#8b5cf6"
    },
    {
      id: 5,
      title: "Printer Troubleshooting",
      description: "Get quick solutions to common printer problems with our expert troubleshooting service. We diagnose and fix issues efficiently.",
      icon: "🔍",
      features: [
        "Problem diagnosis",
        "Quick fixes",
        "Error resolution",
        "Performance tuning"
      ],
      color: "#f59e0b"
    },
    {
      id: 6,
      title: "24/7 Support",
      description: "Round-the-clock support for all your printer needs. Our team is always available to help you whenever you need assistance.",
      icon: "🕒",
      features: [
        "24/7 availability",
        "Remote assistance",
        "Phone support",
        "Email support"
      ],
      color: "#ec4899"
    }
  ];

  return (
    <div className="services-container">
      <div className="container">
        <ScrollAnimation animation="fadeInUp">
          <div className="section-header">
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive printer support services to meet all your printing needs
            </p>
          </div>
        </ScrollAnimation>

        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollAnimation key={service.id} animation="scaleIn" delay={index * 100}>
              <div className="service-card">
                <div className="service-icon" style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <section className="why-choose-section">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">Why Choose Our Services?</h2>
          </ScrollAnimation>
          <div className="stats-grid">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <div className="stat-item">
                <span className="stat-number"><AnimatedCounter end={10000} suffix="+" /></span>
                <span className="stat-label">Satisfied Customers</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className="stat-item">
                <span className="stat-number"><AnimatedCounter end={99} suffix="%" /></span>
                <span className="stat-label">Success Rate</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </div>
  );
}

