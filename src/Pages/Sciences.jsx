import React from 'react';
import '../CSS_folder/Sciences.css';

const Sciences = () => {
    return (

        <div className="container">
        <section className="Sciences-container">
        <img
          src="https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg"
          alt="Aspire Tutoring Main Banner"
        />

      <h2 className = "Sciences-title">Inforamtion</h2>
        <p className = "Sciences-text">Aspire Tutoring offers personalized science lessons tailored to each student's unique needs. We pride ourselves on our adaptability and commitment to excellence in every aspect of our service. Explore what we have to offer and how we can contribute to your success in Physics, Chemistry, and Biology at all grade levels.</p>
     
      </section>
      <section className = "Sciences-content"> 
<div className="faq-container">
  <h2 className="faq-heading">Frequently Asked Questions</h2>
  <div className="faq-grid">
    <div className="faq-item">
      <p><strong>What specific science subjects do you offer tutoring for?</strong></p>
      <p>We offer tutoring for Physics, Chemistry, and Biology.
</p>
    </div>

    <div className="faq-item">
      <p><strong>What grade levels do you support for science tutoring?</strong></p>
      <p>We support all grade levels for science tutoring.
</p>
    </div>

    <div className="faq-item">
      <p><strong>Can you describe a time when your tutoring approach really helped a student grasp a difficult science concept?</strong></p>
      <p>We've helped students achieve their dreams of getting into the science program of their choice in cegep. It's truly rewarding when they let us know that they were accepted into the school they wanted to attend, studying in the field of general sciences
</p>
    </div>

    <div className="faq-item">
      <p><strong>Besides subject knowledge, what other skills do you help students develop in their science studies?</strong></p>
      <p>We help students develop an understanding of step by step how to solve a problem.
</p>
    </div>

    
    
  </div>
</div>
</section>
</div>
    )
}

export default Sciences;