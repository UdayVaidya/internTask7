import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>
      <p className="about-content">We are dedicated to providing the best services to our clients.</p>

      <h2>Our Mission</h2>
      <p>To deliver high-quality solutions that drive success for our clients.</p>

      <h2>Our Vision</h2>
      <p>To be a leading provider of innovative services and solutions.</p>

      <h2>Our Values</h2>
      <ul className="values-list">
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Customer Focus</li>
        <li>Collaboration</li>
        <li>Excellence</li>
      </ul>

      <h2>Our Team</h2>
      <p>We have a diverse and talented team of professionals dedicated to helping you achieve your goals.</p>
      <div className="team-members">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>Mike Johnson</h3>
          <p>Project Manager</p>
        </div>
      </div>

      <h2>Our History</h2>
      <p>Founded in 2020, we have quickly established ourselves as a trusted partner for businesses around the world.</p>
      <p>Our journey began with a small team and a big vision, and today we are proud to have helped numerous clients succeed.</p>
    </div>
  );
};

export default About;
