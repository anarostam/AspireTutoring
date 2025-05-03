import React from 'react';
import '../CSS_folder/ContactUs.css';

function ContactUs() {
    return (
    
        <div className="container">

      
      <section className="ContactUs-container">
        <img
          src="https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg"
          alt="Aspire Tutoring Main Banner"
        />
      </section>
      <section className="ContactUs-content">
        <div className="ContactUs-text-section">
          <h1 className="ContactUs-title">Contact Us</h1>
          <p className="ContactUs-text">Feel free to reach out with any questions!

        The best ways to contact Aspire Tutoring are via email or phone.

        Common question: How do I book sessions? Simply give me a call, text or send an email, and I'll respond ASAP :)</p>  

        <div className = "contact-section">
            <h3>Contact Information</h3>
            <p>Email: <a href="mailto:contact@yourdomain.com">joshua.almaleh@aspiretutors.ca</a></p>
             <p>Phone: <a href="tel:+1234567890">+1 (514) 629-3631</a></p>
            
                </div>
        </div>

        <div className = "ContactUs-text-section">
            

        </div>
      </section>


      </div>

);
};

export default ContactUs;