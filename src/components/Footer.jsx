import React from 'react';

const Footer = ({ personalInfo }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-text">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                </p>
                <div className="footer-links">
                    <a href="#projects" className="footer-link">Portfolio</a>
                    <a href="#contact" className="footer-link">Contact</a>
                    {personalInfo.socials?.linkedin && (
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
                            LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
