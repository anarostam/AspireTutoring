import React from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to="/home"><button className="nav-button">Home</button></Link>
                        </li>
                        <li>
                            <Link to="/ourservices"><button className="nav-button">Our Services</button></Link>
                        </li>
                        <li>
                            <Link to="/aboutus"><button className="nav-button">About Us</button></Link>
                        </li>
                        <li>
                            <Link to="/mathematics"><button className="nav-button">Mathematics</button></Link>
                        </li>
                        <li>
                            <Link to="/languages"><button className="nav-button">Languages</button></Link>
                        </li>
                        <li>
                            <Link to="/sciences"><button className="nav-button">Sciences</button></Link>
                        </li>
                        <li>
                            <Link to="/contactus"><button className="nav-button">Contact Us</button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
