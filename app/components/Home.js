'use client';

import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';
import AnimatedCounter from './AnimatedCounter';
import '../../styles/pages/Home.css';

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Fast Support",
      description: "Get quick and reliable support for your printer issues with our 24/7 availability.",
      icon: "⚡",
      color: "#FFD700"
    },
    {
      id: 2,
      title: "Expert Technicians",
      description: "Our team of certified experts are here to help you with any printer problem.",
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
      title: "24/7 Availability",
      description: "We are available round the clock to assist you with your printer needs.",
      icon: "🕒",
      color: "#f59e0b"
    },
    {
      id: 5,
      title: "Wireless Setup",
      description: "Get your printer wirelessly connected to your network with expert configuration.",
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
      text: "Printer Support has been a lifesaver! Their quick and efficient service is unmatched.",
      avatar: "https://th.bing.com/th?id=OIP.4vZ2x-GGaYuXq5b6y_WalgHaE8&w=125&h=104&c=7&bgcl=ecd846&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I highly recommend Printer Support for their professional and affordable services.",
      avatar: "https://th.bing.com/th?id=OIP.AQtvP5FcfiEMQpu14ueJCgHaGU&w=98&h=104&c=7&bgcl=2bf252&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "The best printer support service I have ever used. Highly recommended!",
      avatar: "https://th.bing.com/th?id=OIP.UidYXknATm9TVaVDAEDm6AHaE8&w=125&h=104&c=7&bgcl=ea3ff9&r=0&o=6&cb=15&pid=13.1",
      rating: 5
    },
    {
      id: 4,
      name: "Bob Brown",
      text: "Excellent service and very professional. Will use again.",
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
                  Expert Printer Support
                </h1>
                <p className="hero-subtitle">
                  Fast, friendly, and reliable help to install, repair, and optimize your printers.
                </p>
                <div className="hero-actions">
                  <a href="tel:+1-888-423-7757" className="hero-phone">
                    📞 Call Now: +1-888-423-7757
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="hero-image-container animate__animated animate__fadeInRight">
                  <Image 
                    src="/hero-printer.svg" 
                    alt="Printer illustration" 
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

      {/* Features Section */}
      <section className="feature-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="section-header">
              <h2 className="section-title">
                Why Choose Us
              </h2>
              <p className="section-subtitle">
                We provide the best printer support services with a focus on customer satisfaction and quality.
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollAnimation animation="fadeInUp">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">Contact us today and experience the best printer support service!</p>
              <div className="cta-buttons">
                <a href="tel:+1-888-423-7757" className="btn-cta-primary">
                  📞 Call Now: +1-888-423-7757
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

