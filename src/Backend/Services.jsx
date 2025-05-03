import React from 'react';
import '../CSS_folder/Home.css';

export const Services = () => {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div>
            <h2 className="Services-title">Services</h2>
            <div className="Services-cards">
                <div className="Services-card">
                    <img
                        src="https://primary.jwwb.nl/unsplash/n8Qb1ZAkK88.jpg"
                        alt=""
                        className="card-icon"
                    />
                    <h3 className="card-title">Mathematics Tutoring</h3>
                    <p className="card-content">
                        Personalised Mathematics lessons with focus on problem-solving and foundation building.
                    </p>
                    <button
                        className="card-button"
                        onClick={() => handleNavigation('/#mathematics')}
                    >
                        More info
                    </button>
                </div>
                <div className="Services-card">
                    <img
                        src="https://primary.jwwb.nl/unsplash/gp8BLyaTaA0.jpg"
                        alt=""
                        className="card-icon"
                    />
                    <h3 className="card-title">Languages</h3>
                    <p className="card-content">
                        Interactive language lessons to improve reading, writing, and communication skills.
                    </p>
                    <button
                        className="card-button"
                        onClick={() => handleNavigation('/#languages')}
                    >
                        More info
                    </button>
                </div>
                <div className="Services-card">
                    <img
                        src="https://primary.jwwb.nl/unsplash/cPWUODAvXjk.jpg"
                        alt=""
                        className="card-icon"
                    />
                    <h3 className="card-title">Science Tutoring</h3>
                    <p className="card-content">
                        Comprehensive Science Tutoring covering various scientific subjects for deeper understanding.
                    </p>
                    <button
                        className="card-button"
                        onClick={() => handleNavigation('/#sciences')}
                    >
                        More info
                    </button>
                </div>
            </div>
        </div>
    );
};
