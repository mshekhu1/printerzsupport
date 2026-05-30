'use client';

import Link from 'next/link';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import { printerServices } from '../../lib/data/services';
import { PHONE_TEL_HREF, PHONE_DISPLAY } from '../../lib/constants/phone';
import '../../styles/pages/Services.css';

export default function ServicesPage() {
  return (
    <div className="services-container">
      <div className="container">
        <ScrollAnimation animation="fadeInUp">
          <div className="section-header">
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive printer support services to meet all your printing needs. Select a service to learn more.
            </p>
          </div>
        </ScrollAnimation>

        <div className="services-grid">
          {printerServices.map((service, index) => (
            <ScrollAnimation key={service.id} animation="scaleIn" delay={index * 100}>
              <article className="service service-card">
                <div
                  className="service-icon"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                  }}
                >
                  {service.icon}
                </div>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="service-cta">
                  <Link href={`/services/${service.slug}`} className="service-btn">
                    Learn more
                  </Link>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>

        <section className="why-choose-section">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Need help now? Call{' '}
              <a href={PHONE_TEL_HREF} style={{ fontWeight: 700 }}>
                {PHONE_DISPLAY}
              </a>{' '}
              — available 24/7.
            </p>
          </ScrollAnimation>
          <div className="stats-grid">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter end={10000} suffix="+" />
                </span>
                <span className="stat-label">Satisfied Customers</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div className="stat-item">
                <span className="stat-number">
                  <AnimatedCounter end={99} suffix="%" />
                </span>
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
