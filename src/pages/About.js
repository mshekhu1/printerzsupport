import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="container mt-5 about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">We are a team of dedicated professionals providing top-notch printer support services.</p>
      <div className="about-team">
        <h2>Our Team</h2>
        <p>Meet the experts who make it all happen.</p>
        {/* Add more content about the team */}
      </div>
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>To deliver exceptional printer support services that exceed our clients' expectations.</p>
        {/* Add more content about the mission */}
      </div>
      <div className="about-history">
        <h2>Our History</h2>
        <p>Learn about our journey and how we started.</p>
        {/* Add more content about the history */}
      </div>
      <div className="about-contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any queries or support.</p>
        {/* Add contact information */}
      </div>
    </div>
  );
}

export default About;
