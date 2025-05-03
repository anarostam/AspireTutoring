import React from 'react';
import '../CSS_folder/Header.css';

export default function Header() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1 className="header-title">Aspire Tutoring</h1>
            </header>
        
            <nav className="nav">
                <div className="nav-container">
                    <ul className="nav-list">
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#home')}>Home</button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#ourservices')}>Our Services</button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#aboutus')}>About Us</button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#mathematics')}>Mathematics</button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#languages')}>Languages</button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#sciences')}>Sciences</button>
                        </li>
                        <li>
                            <button className="nav-button" onClick={() => handleNavigation('/#contactus')}>Contact Us</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
