import React, { useState } from 'react';
import '../CSS_folder/Home.css';
export const FAQ = () => {
    const [active, setActive] = useState(0);

    const toggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    const faqs = [
        {
            question: "What subjects do you offer tutoring in?",
            answer: "We offer tutoring in Mathematics, Chemistry, Physics, Languages and more!"
        },
        {
            question: "How are the lessons tailored to each student?",
            answer: "Our lessons are personalised based on each student's learning style, needs, and goals. "
        },
        {
            question: "What are the qualifications of your tutors?",
            answer: "Our tutors are highly qualified with degrees in mathematics, engineering, translation, politcal science etc.. and they all have years of tutoring experience."

        },
    ];
    return (
        
        <div className="faq-container">
            <div>
            <h2 className = "faq-title">Frequently Asked Questions</h2>
        </div>
          {faqs.map((faq, index) => (
            <div className = "faq-box" key={index}>
              <button
                className={`collapsible ${active === index ? 'active' : ''}`}
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className={`arrow ${active === index ? 'rotate' : ''}`}>
                  ^
                 </span>
              </button>
              <div
                className="content"
                style={{ maxHeight: active === index ? "500px" : "0px"}}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
