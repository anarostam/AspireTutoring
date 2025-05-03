import React from "react";
import "../CSS_folder/ReviewSection.css";

const ReviewSection = ({ name, text }) => {
  return (
    <section className="review-section">
      <h2 className="review-title">What Our Students Say</h2>
      <div className="review-card">
        <p className="review-text">“{text}”</p>
        <p className="review-name">– {name}</p>
      </div>
    </section>
  );
};

export default ReviewSection;
