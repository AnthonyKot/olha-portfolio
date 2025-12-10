import React from 'react';

const Hero = ({ data, personalInfo }) => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-label">
                        <span className="hero-label-dot"></span>
                        Available for new projects
                    </div>
                    <h1 className="hero-headline">
                        {data.headline}
                    </h1>
                    <p className="hero-subheadline">
                        {data.subheadline}
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get in Touch
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-value">8+</div>
                            <div className="hero-stat-label">Years Experience</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">50+</div>
                            <div className="hero-stat-label">Projects Delivered</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">$20M+</div>
                            <div className="hero-stat-label">Funding Raised</div>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        {data.image && <img src={data.image} alt={personalInfo?.name || 'Portfolio'} />}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
