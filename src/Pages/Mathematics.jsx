import React from "react";
import ContentSection from "../Backend/ContentSection";
import "../CSS_folder/ContentSection.css";
import DiscountOffer from "../Backend/Discountoffer";
const Mathematics = () => {
  return (
    <div className="container">
        <section className="Mathematics-container">
        <img
          src="https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg"
          alt="Aspire Tutoring Main Banner"
        />
        </section>
      <ContentSection
        image="https://primary.jwwb.nl/pexels/59/5905840.jpeg" 
        title="Our Unique Approach to Math Tutoring"
        text="At Aspire Tutoring, located in Saint-Lazare, Quebec, Canada, we differentiate our math tutoring approach by helping students understand math as a language and visualize it. This unique method, combined with personalised lessons, caters to individual student needs and sets us apart from traditional school experiences."
      />
      <ContentSection
        image="https://primary.jwwb.nl/pexels/70/7092417.jpeg"
        title="Success Story: From Fear to 89% on a Math Exam"
        text="One student came to us with an upcoming exam and the fear of, if their grades don't improve by the end of the semester, they'll have to do summer classes. Their exam was a friday and this was wednesday evening. We were able to book them one session wih one of our exceptional tutors and they ended up getting a 89 percent on the math exam the day later. Aspire Tutoring, based in Saint-Lazare, Quebec, Canada, is dedicated to offering personalised lessons that cater to the unique needs of each student."
        reverse
      />
      <ContentSection
        image="https://primary.jwwb.nl/pexels/59/5905840.jpeg"
        title="Tailoring Math Tutoring to Your Needs"
        text="Aspire Tutoring, located in Saint-Lazare, Quebec, Canada, offers personalised lessons designed to cater to different learning styles and grade levels. Our approach ensures that each student receives the support they need to succeed. We offer personalised lessons with student and cater to their needs."
        reverse
      />

      <DiscountOffer />
    </div>
  );
};

export default Mathematics;
