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
          <h1>Welcome !!</h1>
          <p>Image Gallery web-app <br />
             to view your image</p>
        </div>
      </div>
    </div>
  );
};

export default About;
