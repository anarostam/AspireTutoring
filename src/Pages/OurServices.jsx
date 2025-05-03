import React from "react";
import ContentSection from "../Backend/ContentSection";
import "../CSS_folder/ContentSection.css";
import ReviewSection from "../Backend/Reviews";

const OurServices = () => {
  return (
    <div className="container">
      <section className="Mathematics-container">
        <img
          src="https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg"
          alt="Aspire Tutoring Main Banner"
        />
        <h2 className="Languages-title">Welcome</h2>
        <p className="Languages-text">
          Discover the Aspire Tutoring difference. We offer personalised lessons
          with each student, catering to their specific needs. Located in
          Saint-Lazare, Quebec, we're committed to providing top-quality
          tutoring services to help you succeed.
        </p>
      </section>

      <ContentSection
        image="https://primary.jwwb.nl/pexels/70/7092491.jpeg"
        title="Math & Science Tutoring"
        text="Aspire Tutoring specializes in providing expert tutoring in Math, Chemistry, and Physics. Our tailored approach ensures students grasp complex concepts and excel in their studies."
        reverse
      />

      <ContentSection
        image="https://primary.jwwb.nl/pexels/69/6913219.jpeg"
        title="English & French Tutoring"
        text="Enhance your language skills with Aspire Tutoring. We offer comprehensive tutoring in English and French, suitable for all levels. Achieve fluency and confidence in your communication."
      />

      <ContentSection
        image="https://primary.jwwb.nl/pexels/62/6282020.jpeg"
        title="EUF Exam Preparation"
        text="Get ready for your French Exit Exam (EUF) with Aspire Tutoring. Our specialized preparation program for high school and CEGEP students ensures you are fully equipped to succeed."
        reverse
      />

      <ReviewSection
        name="Satisfied Student"
        text="Aspire Tutoring is better than all the rest! Personalised lessons catered to my needs made learning enjoyable and effective."
      />
    </div>
  );
};

export default OurServices;
