'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL_HREF } from '../../lib/constants/phone';
import { homeFaqs } from '../../lib/data/homeFaqs';
import { DEFAULT_HERO_ALT, DEFAULT_HERO_HEADING } from '../../lib/seo/siteSeo';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import AnimatedCounter from './AnimatedCounter';
import '../../styles/pages/Home.css';
import '../../styles/pages/FAQ.css';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const features = [
    {
      id: 1,
      title: "Fast HP Printer Support",
      description: "Get quick and reliable HP printer support with 24/7 customer service and technical support.",
      icon: "⚡",
      color: "#FFD700"
    },
    {
      id: 2,
      title: "Certified Technicians",
      description: "Our team knows HP hardware and software inside out, from LaserJet fleets to home DeskJet models.",
      icon: "👨‍💻",
      color: "#667eea"
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description: "We offer competitive prices for our top-notch services without compromising quality.",
      icon: "💰",
      color: "#10b981"
    },
    {
      id: 4,
      title: "24/7 Customer Service",
      description: "Round-the-clock HP printer customer service and customer support when you need help.",
      icon: "🕒",
      color: "#f59e0b"
    },
    {
      id: 5,
      title: "Wireless Setup",
      description: "We connect your HP printer to WiFi and configure printing from phones, tablets, and laptops.",
      icon: "📶",
      color: "#3b82f6"
    },
    {
      id: 6,
      title: "Customer Satisfaction",
      description: "We prioritize customer satisfaction and ensure the best service experience.",
      icon: "😊",
      color: "#ec4899"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "HP Printer Support has been a lifesaver! Their quick and efficient service is unmatched.",
      avatar: "https://th.bing.com/th?id=OIP.4vZ2x-GGaYuXq5b6y_WalgHaE8&w=125&h=104&c=7&bgcl=ecd846&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I highly recommend HP Printer Support for their professional and affordable services.",
      avatar: "https://th.bing.com/th?id=OIP.AQtvP5FcfiEMQpu14ueJCgHaGU&w=98&h=104&c=7&bgcl=2bf252&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "The best HP printer customer support I have ever used. Their technical support team fixed my issue fast!",
      avatar: "https://th.bing.com/th?id=OIP.UidYXknATm9TVaVDAEDm6AHaE8&w=125&h=104&c=7&bgcl=ea3ff9&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    },
    {
      id: 4,
      name: "Bob Brown",
      text: "Excellent HP printer technical support and customer service. Very professional — will use again.",
      avatar: "https://th.bing.com/th?id=OIP.xcKD3w58xiM1l9211ExZMwHaE8&w=127&h=104&c=7&bgcl=393163&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <h1 className="hero-title">
                  {DEFAULT_HERO_HEADING}
                </h1>
                <p className="hero-subtitle">
                  HP Printer Support with 24/7 Customer Service by phone. We fix offline errors, jams, driver problems, and WiFi issues — usually in one session.
                </p>
                <div className="hero-actions">
                  <a href={PHONE_TEL_HREF} className="hero-phone">
                    📞 Call Now: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="hero-image-container animate__animated animate__fadeInRight">
                  <Image 
                    src="/hero-printer.svg" 
                    alt={DEFAULT_HERO_ALT} 
                    width={600}
                    height={400}
                    priority
                    className="hero-image" 
                  />
                  <div className="floating-card">
                    <div className="card-icon">💬</div>
                    <div className="card-content">
                      <h6>Live Support</h6>
                      <p>Get help instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-resources-section" aria-labelledby="home-customer-service-heading">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 id="home-customer-service-heading" className="section-title">
              Help for Every Common HP Printer Problem
            </h2>
            <p className="section-subtitle">
              LaserJet, OfficeJet, DeskJet, and Envy — phone support for offline errors, paper jams, driver issues, WiFi setup, and print quality. Call our 24/7 HP printer support helpline for fast remote assistance.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* SEO internal links — guides, services, locations */}
      <section className="home-resources-section" aria-labelledby="home-resources-heading">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 id="home-resources-heading" className="section-title">HP Printer Help &amp; Resources</h2>
            <p className="section-subtitle">
              Step-by-step guides, nationwide coverage, and phone support when you need a hand.
            </p>
            <div className="home-resources-grid">
              <div className="home-resources-card">
                <h3>Top troubleshooting guides</h3>
                <ul className="home-resources-links">
                  <li>
                    <Link href="/blog/how-to-fix-printer-offline-issues-troubleshooting">
                      Fix printer offline issues
                    </Link>
                  </li>
                  <li>
                    <Link href="/hp-printer-customer-service">
                      HP printer customer service
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/hp-printer-troubleshooting-guide">
                      HP printer troubleshooting
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/hp-printer-paper-jam-fix">
                      Fix HP paper jams
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/hp-printer-not-printing-fix">
                      HP printer not printing
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/hp-printer-wifi-not-connecting">
                      HP WiFi not connecting
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/hp-printer-error-codes-guide">
                      HP error codes explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/printer-customer-support-phone-number">
                      HP printer customer support phone number
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      HP printer support number
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      HP printer technical support
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/wireless-printer-setup-guide">
                      Wireless printer setup
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/install-printer-drivers-windows-11-setup">
                      Install printer drivers on Windows 11
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/printer-maintenance-tips">
                      Printer maintenance tips
                    </Link>
                  </li>
                </ul>
                <Link href="/blog" className="home-resources-more">View all blog guides →</Link>
              </div>
              <div className="home-resources-card">
                <h3>HP support by location</h3>
                <p>Remote HP printer repair and assistance in every US state and Canadian province.</p>
                <ul className="home-resources-links">
                  <li><Link href="/us">HP printer support — United States</Link></li>
                  <li><Link href="/canada">HP printer support — Canada</Link></li>
                </ul>
              </div>
              <div className="home-resources-card">
                <h3>Our services</h3>
                <p>HP printer setup, repair, drivers, and WiFi technical support for home and business.</p>
                <ul className="home-resources-links">
                  <li><Link href="/services">HP printer support services</Link></li>
                  <li><Link href="/drivers">Printer drivers &amp; downloads</Link></li>
                  <li><Link href="/brands/hp">HP printer brand support</Link></li>
                  <li><Link href="/contact">Contact support</Link></li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="section-header">
              <h2 className="section-title">
                Why Choose Us
              </h2>
              <p className="section-subtitle">
                Reliable remote HP printer support with a focus on getting you back to printing quickly.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="feature-grid">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.id} animation="scaleIn" delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon" style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}>
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 className="section-title" style={{ color: 'white' }}>
              Our Impact
            </h2>
          </ScrollAnimation>
          <div className="stats-grid">
            <ScrollAnimation animation="fadeInUp" delay={0}>
              <div className="stat-item">
                <span className="stat-number"><AnimatedCounter end={10000} suffix="+" /></span>
                <span className="stat-label">Happy Customers</span>
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
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div className="stat-item">
                <span className="stat-number"><AnimatedCounter end={15} suffix="min" /></span>
                <span className="stat-label">Average Response</span>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="section-header">
              <h2 className="section-title">
                What Our Customers Say
              </h2>
              <p className="section-subtitle">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="col-md-6 mb-4">
                <ScrollAnimation animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} delay={index * 100}>
                  <div className="testimonial-card">
                    <div className="testimonial-rating">
                      {'⭐'.repeat(testimonial.rating)}
                    </div>
                    <Image 
                      src={testimonial.avatar} 
                      alt={`${testimonial.name} - Customer testimonial`}
                      width={80}
                      height={80}
                      className="testimonial-avatar"
                      loading="lazy"
                      unoptimized
                    />
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-author">- {testimonial.name}</p>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-resources-section" aria-labelledby="home-faq-heading">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <h2 id="home-faq-heading" className="section-title">HP Printer Support FAQs</h2>
            <p className="section-subtitle">
              Common questions about HP printer customer service, customer support, and technical support.
            </p>
            <div className="faq-list">
              {homeFaqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="section-subtitle" style={{ marginTop: '1.5rem' }}>
              <Link href="/faq">View all FAQs →</Link>
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">Call now for expert HP printer support — most issues fixed in one session.</p>
              <div className="cta-buttons">
                <a href={PHONE_TEL_HREF} className="btn-cta-primary">
                  📞 Call Now: {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className="btn-cta-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

