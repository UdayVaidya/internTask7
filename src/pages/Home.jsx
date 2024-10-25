import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Our Website!</h1>
      <p className="home-description">Your satisfaction is our priority.</p>
      <img src="https://imgs.search.brave.com/WIZfd_fTVKN05lhGRn9iUdBZrQhOlIxxR-au8AYdyaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE0Lzc2LzI3/LzM2MF9GXzIxNDc2/MjcyMV9jNGxkVUtM/Sm4yQ3EzUW9JbExS/NVRQVXdIRVZhRTYy/Zy5qcGc" alt="Welcome" />

      <h2>Why Choose Us?</h2>
      <ul className='services-list'>
        <li>Expert Team</li>
        <li>Quality Assurance</li>
        <li>24/7 Support</li>
      </ul>

      <h2>Our Services</h2>
      <p>We provide a range of services tailored to meet your needs:</p>
      <ul className="services-list">
        <li>Web Development</li>
        <li>App Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
      </ul>

      <h2>Testimonials</h2>
      <div className="testimonials">
        <blockquote>
          <p>"Their team exceeded our expectations! Highly recommend."</p>
          <cite>- Happy Customer</cite>
        </blockquote>
        <blockquote>
          <p>"Professional and timely service. We will work with them again!"</p>
          <cite>- Satisfied Client</cite>
        </blockquote>
      </div>

      <h2>Get Started Today!</h2>
      <p>If you're ready to elevate your business, contact us today!</p>
      <button className="cta-button">Contact Us</button>
    </div>
  );
};

export default Home;
