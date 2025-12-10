import React from 'react';

const Navbar = ({ personalInfo }) => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#hero" className="navbar-logo">
                    {personalInfo.name}
                </a>
                <div className="navbar-links">
                    <a href="#projects" className="navbar-link">Portfolio</a>
                    <a href="#contact" className="navbar-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
