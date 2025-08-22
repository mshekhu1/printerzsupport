import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title animate__animated animate__fadeInUp">
                  Professional Printer Support
                </h1>
                <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
                  Get expert help for all your printer issues. Fast, reliable, and dedicated support services.
                </p>


                <div className="hero-phone animate__animated animate__fadeInUp animate__delay-2s">
                  <i className="fas fa-phone-alt"></i>
                  <span className="phone-number">+1-888-423-7747</span>
                  <span className="phone-label">Call Now for Support</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container animate__animated animate__fadeInRight animate__delay-1s">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional Printer" 
                  className="hero-image"
                />
                <div className="floating-card">
                  <div className="card-icon">
                    <i className="fas fa-headset"></i>
                  </div>
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

      {/* Rest of the content */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fast Support</h5>
                <p className="card-text">Get quick and reliable support for your printer issues.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expert Technicians</h5>
                <p className="card-text">Our team of experts are here to help you with any problem.</p>
              </div>
            </div>
          </div>
                        <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Dedicated Support</h5>
                    <p className="card-text">We offer dedicated support for all your printer needs.</p>
                  </div>
                </div>
              </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">24/7 Availability</h5>
                <p className="card-text">We are available round the clock to assist you with your printer needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wireless Connection</h5>
                <p className="card-text">Get your printer wirelessly connected to your wifi</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Customer Satisfaction</h5>
                <p className="card-text">We prioritize customer satisfaction and ensure the best service experience.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="animate__animated animate__fadeInUp">Why Choose Us</h2>
              <p className="animate__animated animate__fadeInUp">We provide the best printer support services with a focus on customer satisfaction and quality.</p>
              <p className="animate__animated animate__fadeInUp">Our team is dedicated to providing timely and effective solutions to all your printer problems.</p>
              <p className="animate__animated animate__fadeInUp">We use the latest technology and tools to ensure your printer is running smoothly.</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="animate__animated animate__fadeInUp">Our Mission</h2>
              <p className="animate__animated animate__fadeInUp">To deliver exceptional printer support services that exceed customer expectations.</p>
              <p className="animate__animated animate__fadeInUp">We aim to build long-term relationships with our clients by providing reliable and efficient services.</p>
              <p className="animate__animated animate__fadeInUp">Our mission is to be the leading provider of printer support services in the industry.</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="animate__animated animate__fadeInUp">Testimonials</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="card animate__animated animate__fadeInLeft mb-3">
                    <div className="card-body">
                      <img src="https://th.bing.com/th?id=OIP.4vZ2x-GGaYuXq5b6y_WalgHaE8&w=125&h=104&c=7&bgcl=ecd846&r=0&o=6&cb=15&pid=13.1" className="card-img-top rounded-circle" alt="John Doe" style={{ width: '100px', height: '100px' }} />
                      <p className="card-text mt-3">"Printer Support has been a lifesaver! Their quick and efficient service is unmatched." - John Doe</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card animate__animated animate__fadeInRight mb-3">
                    <div className="card-body">
                      <img src="https://th.bing.com/th?id=OIP.AQtvP5FcfiEMQpu14ueJCgHaGU&w=98&h=104&c=7&bgcl=2bf252&r=0&o=6&cb=15&pid=13.1" className="card-img-top rounded-circle" alt="Jane Smith" style={{ width: '100px', height: '100px' }} />
                      <p className="card-text mt-3">"I highly recommend Printer Support for their professional and dedicated services." - Jane Smith</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card animate__animated animate__fadeInLeft mb-3">
                    <div className="card-body">
                      <img src="https://th.bing.com/th?id=OIP.UidYXknATm9TVaVDAEDm6AHaE8&w=125&h=104&c=7&bgcl=ea3ff9&r=0&o=6&cb=15&pid=13.1" className="card-img-top rounded-circle" alt="Alice Johnson" style={{ width: '100px', height: '100px' }} />
                      <p className="card-text mt-3">"The best printer support service I have ever used. Highly recommended!" - Alice Johnson</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card animate__animated animate__fadeInRight mb-3">
                    <div className="card-body">
                      <img src="https://th.bing.com/th?id=OIP.xcKD3w58xiM1l9211ExZMwHaE8&w=127&h=104&c=7&bgcl=393163&r=0&o=6&cb=15&pid=13.1" className="card-img-top rounded-circle" alt="Bob Brown" style={{ width: '100px', height: '100px' }} />
                      <p className="card-text mt-3">"Excellent service and very professional. Will use again." - Bob Brown</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="animate__animated animate__fadeInUp">Our Services</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Printer Repair</h5>
                      <p className="card-text">We provide comprehensive printer repair services to get your printer back in working condition.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Maintenance Services</h5>
                      <p className="card-text">Regular maintenance services to keep your printer running smoothly and efficiently.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Troubleshooting</h5>
                      <p className="card-text">Expert troubleshooting to diagnose and fix any printer issues you may encounter.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="animate__animated animate__fadeInUp">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
