import React from 'react';

const Contact = ({ personalInfo }) => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content">
                    <p className="contact-label">Get in Touch</p>
                    <h2 className="contact-title">Let's Create Something Amazing Together</h2>
                    <p className="contact-description">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <a href={`mailto:${personalInfo.email}`} className="contact-email">
                        {personalInfo.email}
                    </a>
                    {personalInfo.socials && Object.keys(personalInfo.socials).length > 0 && (
                        <div className="contact-socials">
                            {Object.entries(personalInfo.socials).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <SocialIcon platform={platform} />
                                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ platform }) => {
    const iconProps = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

    switch (platform.toLowerCase()) {
        case 'linkedin':
            return (
                <svg {...iconProps}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            );
        case 'instagram':
            return (
                <svg {...iconProps}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            );
        case 'behance':
            return (
                <svg {...iconProps}>
                    <path d="M22 7h-7" />
                    <path d="M2 12h7" />
                    <path d="M16 12c0 1.5.75 3 3 3s3-1 3-3-1-3-3-3-3 1.5-3 3z" />
                    <path d="M2 7h7c1 0 3 .5 3 3s-2 3-3 3H2V7z" />
                    <path d="M9 13H2v6h7c1 0 3-.5 3-3s-2-3-3-3z" />
                </svg>
            );
        case 'dribbble':
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
            );
        default:
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            );
    }
};

export default Contact;
