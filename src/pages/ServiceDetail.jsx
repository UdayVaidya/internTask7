import React from 'react';
import './style.css';

const ServiceDetail = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback: "The web development team did an outstanding job on our website!"
    },
    {
      name: "Bob Smith",
      feedback: "Their expertise in React and Node.js made the development process seamless."
    },
  ];

  const caseStudies = [
    { title: "E-commerce Platform", description: "Developed a scalable e-commerce website using React and Node.js." },
    { title: "Portfolio Website", description: "Created a dynamic portfolio website for showcasing art and designs." },
  ];

  return (
    <div className="service-detail-page">
      <h1 className="service-detail-title">Web Development</h1>
      <img
        src="https://imgs.search.brave.com/ihFa0q2Ut9CJ_XGdJ8UIsXcsROMNpUe8qyDAIHLIuZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mdWxsc3RhY2st/ZGV2ZWxvcG1lbnRf/MTMyNzQ2NS0xMzYx/MC5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
        alt="Web Development"
        className="service-detail-image"
      />
      <p className="service-detail-content">
        We offer top-notch web development services tailored to your needs.
      </p>
      <h2>Technologies We Use</h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
      <h2>Our Process</h2>
      <p>We follow a systematic approach to ensure quality and timely delivery.</p>
      
      <h2>Client Testimonials</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p>"{testimonial.feedback}"</p>
            <p><strong>- {testimonial.name}</strong></p>
          </div>
        ))}
      </div>

      <h2>Case Studies</h2>
      <ul className="case-study-list">
        {caseStudies.map((caseStudy, index) => (
          <li key={index} className="case-study-item">
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.description}</p>
          </li>
        ))}
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <h3>How long does a typical web development project take?</h3>
        <p>Project duration varies depending on complexity but usually ranges from 4 to 12 weeks.</p>
        
        <h3>Do you provide support after the project is completed?</h3>
        <p>Yes, we offer ongoing support and maintenance services after project delivery.</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
