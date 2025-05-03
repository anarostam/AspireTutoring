import React from "react";
import "../CSS_folder/ContentSection.css";

const ContentSection = ({ image, title, text }) => {
  return (
    <div className="section">
      <div className="section-image">
        <img src={image} alt={title} />
      </div>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContentSection;
