import React, { useState } from 'react';
import './style.css';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Process form submission logic
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to get in touch with us by filling out the form below.</p>
      </header>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@ourwebsite.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
      </div>

      <div className="map-container">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096797!2d144.95373531531854!3d-37.81627997975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12b257%3A0x5045675218cee10!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1610102251281!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <ul>
            <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fi fi-brands-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fi fi-brands-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fi fi-brands-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fi fi-brands-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <footer>
        <p>Our team will get back to you as soon as possible.</p>
      </footer>
    </div>
  );
};

export default Contact;
