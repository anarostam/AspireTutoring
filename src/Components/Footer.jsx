import React from 'react';
import '../CSS_folder/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Aspire Tutoring is dedicated to helping students reach their full potential through personalised lessons and tailored tutoring programs. Our experienced tutors are committed to providing high-quality education and support to every student.
          </p>
        </div>
        <div className="footer-links">
          <a href="/contactus" className="footer-link">Contact Us</a>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-text">© {new Date().getFullYear()} Aspire Tutoring. All rights reserved.</p>
      </div>
    </footer>
  );
}
