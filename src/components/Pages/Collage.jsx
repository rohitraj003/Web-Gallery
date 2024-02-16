import React from 'react';
import './Collage.css';

const imageUrls = [
  'https://source.unsplash.com/400x600/?nature',
  'https://source.unsplash.com/800x400/?city', 
  'https://source.unsplash.com/250x350/?technology',
  'https://source.unsplash.com/400x400/?art',
  'https://source.unsplash.com/350x200/?food',
];

export const Collage = () => {
  return (
    <div className="collage-container">
      {imageUrls.map((url, index) => (
        <div key={index} className={`collage-item ${index === 1 ? 'span-two-columns' : ''}`}>
          <img src={url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};



