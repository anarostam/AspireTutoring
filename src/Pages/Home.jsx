import React from 'react';
import '../CSS_folder/Home.css';
import { FAQ } from '../Backend/FAQ';
import { Services } from '../Backend/Services';
function Home() {
  return (
   <><section
          className="hero">
          <div className="hero-content"
              style={{ backgroundImage: `url('https://primary.jwwb.nl/unsplash/Hcfwew744z4.jpg')` }}>
              <h1 className="hero-title">Unlocking Your Potential, One Lesson at a Time</h1>
              <button className="hero-button">Learn More</button>
          </div>


      </section><section className="Welcome">
        <div className="container">
              <div className="Welcome">
                  <h1 className="Welcome-title">Welcome to Aspire Tutoring</h1>
                  <p className="Welcome-content">At Aspire Tutoring, we believe in providing personalised lessons that cater to the unique needs of each student. Our goal is to help students unlock their full potential and achieve academic success.</p>
              </div>
              </div>
          </section><section id = "Services" className = "Services">
          <div className="container">
            <Services />

          </div></section>
          <section className = "FAQ">
            <div className="container">
                <FAQ />
            </div>
            </section></>
  );
}

export default Home;
