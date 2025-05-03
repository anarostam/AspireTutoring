import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../CSS_folder/Header.css';

export default function Header() {
    return (
        <div className="home-container">
     
      <header className="header">
        <h1 className="header-title">Aspire Tutoring</h1>
      </header>

      
      <nav className="nav">
        <div className="nav-container">
          <ul className="nav-list">
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/home'}>Home</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/ourservices'}>Our Services</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/aboutus'}>About Us</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/mathematics'}>Mathematics</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/languages'}>Languages</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/sciences'}>Sciences</button>
            </li>
            <li>
              <button className="nav-button" onClick={() => window.location.href = '/contactus'}>Contact Us</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
}