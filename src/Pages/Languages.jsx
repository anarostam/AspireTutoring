import React from 'react';
import '../CSS_folder/Languages.css';

const Languages = () => {
    return (

        <div className="container">
        <section className="Languages-container">
        <img
          src="https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg"
          alt="Aspire Tutoring Main Banner"
        />

      <h2 className = "Languages-title">Inforamtion</h2>
        <p className = "Languages-text">Aspire Tutoring, located in Saint-Lazare, Quebec, Canada, offers personalised lessons tailored to each student's unique needs. We pride ourselves on our adaptability and commitment to excellence in every aspect of our service. Explore what we have to offer and how we can contribute to your success in language learning.</p>
     
      </section>
      <section className = "Languages-content"> 
<div className="faq-container">
  <h2 className="faq-heading">Frequently Asked Questions</h2>
  <div className="faq-grid">
    <div className="faq-item">
      <p><strong>What specific languages do you tutor, and what levels do you cover?</strong></p>
      <p>We tutor everything from beginner English and French to advanced CEGEP/University English and French courses. We offer lessons in preparation for the college English exit exam and the French exit exam. The same applies for High School.
</p>
    </div>

    <div className="faq-item">
      <p><strong>Besides grammar and vocabulary, what other aspects of language learning do you emphasize?</strong></p>
      <p>We understand that language learning involves more than just grammar and vocabulary. We integrate cultural insights and practical conversation exercises into our lessons.</p>
    </div>

    <div className="faq-item">
      <p><strong>What's the biggest challenge students typically face when learning a new language?</strong></p>
      <p>Students find it challenging to grasp the fundamentals. At Aspire Tutoring, we emphasize learning verbs, conjugations, and spelling, which are crucial for language acquisition.</p>
    </div>

    <div className="faq-item">
      <p><strong>How do you integrate cultural understanding into language lessons?</strong></p>
      <p>We use a variety of resources, including authentic texts, videos, and discussions, to expose students to the cultural nuances of the languages they are learning.
</p>
    </div>

    <div className="faq-item">
      <p><strong>Do you focus on any particular language certifications or exams?</strong></p>
      <p>Yes, we prepare students for the Épreuve uniforme de français, English exit exam for college, High School French finals, and English finals.</p>
    </div>

    <div className="faq-item">
      <p><strong>Are your lessons personalized for each student?</strong></p>
      <p>Yes, Aspire Tutoring offers personalized lessons that cater to each student's unique needs and learning style. This is what makes us unique.</p>
    </div>
    <div className="faq-item">
      <p><strong>How do you prepare students for language certifications and exams?</strong></p>
      <p>Our lessons are specifically tailored to cover all necessary components of the exams, ensuring students are confident and well-prepared on test day.
</p>
    </div>
    <div className="faq-item">
      <p><strong>What teaching methods do you use to ensure students grasp the fundamentals of a language?</strong></p>
      <p>We employ a combination of traditional teaching methods, interactive exercises, and real-world applications to reinforce learning and ensure students understand the core components of each language.


</p>
    </div>
  </div>
</div>
</section>
</div>
    )
}

export default Languages;