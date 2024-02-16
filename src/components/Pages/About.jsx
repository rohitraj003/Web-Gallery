import React from 'react';
import './About.css'; 
import bgimg from './images/bg.jpg';

const About = () => {
  return (
    <div className="landing-page">
      <div className="cover-image">
        <img
          src={bgimg} 
          alt="Cover"
          className="img-fluid"
        />
        <div className="overlay">
          <h1 className="welcome-heading">Welcome to our Image Gallery!</h1>
          <p className="welcome-text">
            Explore the beauty captured through pixels. Our web app is your gateway to a visual journey where each image tells a unique story. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;