import React, { useState, useEffect } from 'react';

export default function Carousel() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    'oleo1.png',
    'oleo2.png',
    'oleo3.png',
    'oleo4.png',
    'oleo5.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image-container ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={(`./public/${image}`)} alt="carousel image" />
          <img src={(`./public/${image}`)} alt="carousel image" />
          <img src={(`./public/${image}`)} alt="carousel image" />
          <img src={(`./public/${image}`)} alt="carousel image" />
          <img src={(`./public/${image}`)} alt="carousel image" />
          <img src={(`./public/${image}`)} alt="carousel image" />
          <img src={(`./public/${image}`)} alt="carousel image" />
        </div>
      ))}
    </div>
  );
}




