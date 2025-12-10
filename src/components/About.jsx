import React from 'react';

const About = ({ data }) => {
    // About section is now integrated into the Hero, so this is optional
    // Can be used for additional content if needed
    if (!data?.text) return null;

    return (
        <section id="about" className="section">
            <div className="container">
                <p style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.8,
                    color: 'var(--color-text-secondary)',
                    maxWidth: '800px'
                }}>
                    {data.text}
                </p>
            </div>
        </section>
    );
};

export default About;
