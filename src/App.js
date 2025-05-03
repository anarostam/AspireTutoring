import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Languages from './Pages/Languages';
import Sciences from './Pages/Sciences';
import Mathematics from './Pages/Mathematics';
import OurServices from './Pages/OurServices';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/sciences" element={<Sciences />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/ourservices" element={<OurServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
