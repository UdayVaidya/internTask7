import React from 'react';
import './style.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We create responsive and high-performance websites tailored to your business needs.',
      image: 'https://via.placeholder.com/150?text=Web+Development'
    },
    {
      title: 'App Development',
      description: 'Our team builds scalable and user-friendly mobile applications for both iOS and Android.',
      image: 'https://via.placeholder.com/150?text=App+Development'
    },
    {
      title: 'UI/UX Design',
      description: 'We design intuitive user interfaces and experiences to enhance user engagement and satisfaction.',
      image: 'https://via.placeholder.com/150?text=UI/UX+Design'
    },
    {
      title: 'Digital Marketing',
      description: 'Our digital marketing strategies help you reach a broader audience and grow your online presence.',
      image: 'https://via.placeholder.com/150?text=Digital+Marketing'
    },
  ];

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <p>We provide top-notch services tailored to your needs!</p>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-item-title">{service.title}</h2>
            <p className="service-item-description">{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
