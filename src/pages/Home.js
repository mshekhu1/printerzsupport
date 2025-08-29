import React from 'react';
import './Home.css';

function Home() {
  const features = [
    {
      id: 1,
      title: "Fast Support",
      description: "Get quick and reliable support for your printer issues with our 24/7 availability.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "Expert Technicians",
      description: "Our team of certified experts are here to help you with any printer problem.",
      icon: "👨‍💻"
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description: "We offer competitive prices for our top-notch services without compromising quality.",
      icon: "💰"
    },
    {
      id: 4,
      title: "24/7 Availability",
      description: "We are available round the clock to assist you with your printer needs.",
      icon: "🕒"
    },
    {
      id: 5,
      title: "Wireless Setup",
      description: "Get your printer wirelessly connected to your network with expert configuration.",
      icon: "📶"
    },
    {
      id: 6,
      title: "Customer Satisfaction",
      description: "We prioritize customer satisfaction and ensure the best service experience.",
      icon: "😊"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Printer Support has been a lifesaver! Their quick and efficient service is unmatched.",
      avatar: "https://th.bing.com/th?id=OIP.4vZ2x-GGaYuXq5b6y_WalgHaE8&w=125&h=104&c=7&bgcl=ecd846&r=0&o=6&cb=15&pid=13.1"
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I highly recommend Printer Support for their professional and affordable services.",
      avatar: "https://th.bing.com/th?id=OIP.AQtvP5FcfiEMQpu14ueJCgHaGU&w=98&h=104&c=7&bgcl=2bf252&r=0&o=6&cb=15&pid=13.1"
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "The best printer support service I have ever used. Highly recommended!",
      avatar: "https://th.bing.com/th?id=OIP.UidYXknATm9TVaVDAEDm6AHaE8&w=125&h=104&c=7&bgcl=ea3ff9&r=0&o=6&cb=15&pid=13.1"
    },
    {
      id: 4,
      name: "Bob Brown",
      text: "Excellent service and very professional. Will use again.",
      avatar: "https://th.bing.com/th?id=OIP.xcKD3w58xiM1l9211ExZMwHaE8&w=127&h=104&c=7&bgcl=393163&r=0&o=6&cb=15&pid=13.1"
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
                <h1 className="hero-title animate__animated animate__fadeInUp">
                  Expert Printer Support
                </h1>
                <p className="hero-subtitle animate__animated animate__fadeInUp">
                  Fast, friendly, and reliable help to install, repair, and optimize your printers.
                </p>
                <a href="tel:+1-888-423-7747" className="hero-phone animate__animated animate__fadeInUp">
                  Call for support: +1-888-423-7747
                </a>
              </div>
              <div className="col-md-6 text-center">
                <img 
                  src="/hero-printer.svg" 
                  alt="Printer illustration" 
                  className="img-fluid animate__animated animate__fadeInRight" 
                  style={{ maxHeight: '320px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate__animated animate__fadeInUp">
              Why Choose Us
            </h2>
            <p className="section-subtitle animate__animated animate__fadeInUp">
              We provide the best printer support services with a focus on customer satisfaction and quality.
            </p>
          </div>
          
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={feature.id} className="feature-card animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title animate__animated animate__fadeInUp">
            Our Impact
          </h2>
          <div className="stats-grid">
            <div className="stat-item animate__animated animate__fadeInUp">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item animate__animated animate__fadeInUp">
              <span className="stat-number">99%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-item animate__animated animate__fadeInUp">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
            <div className="stat-item animate__animated animate__fadeInUp">
              <span className="stat-number">15min</span>
              <span className="stat-label">Average Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate__animated animate__fadeInUp">
              What Our Customers Say
            </h2>
            <p className="section-subtitle animate__animated animate__fadeInUp">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="col-md-6 mb-4">
                <div className={`testimonial-card animate__animated ${index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-avatar"
                  />
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title animate__animated animate__fadeInUp">
              Get In Touch
            </h2>
            <p className="section-subtitle animate__animated animate__fadeInUp">
              Ready to get your printer issues resolved? Contact us today!
            </p>
          </div>
          
          <form className="contact-form animate__animated animate__fadeInUp">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your name" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter your email" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="4" 
                placeholder="Tell us about your printer issue"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
