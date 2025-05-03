import React from 'react';
import '../CSS_folder/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">

      
      <section className="AboutUs-container">
        <img
          src="https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg"
          alt="Aspire Tutoring Main Banner"
        />
      </section>

      
      <section className="AboutUs-content">
        
        
        <div className="AboutUs-text-section">
          <h1 className="AboutUs-title">About Us</h1>
          <p className="AboutUs-text">
            Aspire Tutoring was born from the experience of an engineering student in Hudson, Quebec, Canada who once struggled academically. 
            Through perseverance, effective study habits were developed, leading to university success. 
            This transformation ignited a passion to assist other students. The name "Aspire Tutoring" reflects our commitment to helping students reach their academic goals. 
            Aspire Tutoring offers personalized lessons with students and caters to their needs.
          </p>
        </div>

       
        <img
          src="https://primary.jwwb.nl/public/z/p/m/temp-uuydvxewyytvfhxbttyu/img_4710-2-high.jpg" 
          alt="Aspire Tutoring Session"
          className="AboutUs-image"
        />

      </section>

    </div>
  );
};

export default AboutUs;
