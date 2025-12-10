import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { portfolioConfig } from '../portfolio.config';

const CaseStudyPage = () => {
    const { slug } = useParams();
    const project = portfolioConfig.projects.find(p => p.slug === slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const getCategoryTags = (category) => {
        if (!category) return [];
        return category.split(/[\/,]/).map(tag => tag.trim()).filter(Boolean);
    };

    return (
        <article className="case-study">
            {/* Back Navigation */}
            <div className="case-study-nav">
                <div className="container">
                    <Link to="/" className="case-study-back">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Portfolio
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <header className="case-study-hero">
                <div className="container">
                    <div className="case-study-tags">
                        {getCategoryTags(project.category).map((tag, index) => (
                            <span key={index} className={`tag ${index === 0 ? 'tag-accent' : ''}`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="case-study-title">{project.title}</h1>
                    <p className="case-study-subtitle">{project.description}</p>
                </div>
            </header>

            {/* Hero Image */}
            {project.heroImage && (
                <div className="case-study-hero-image">
                    <div className="container">
                        <img src={project.heroImage} alt={project.title} />
                    </div>
                </div>
            )}

            {/* Project Info Grid */}
            <section className="case-study-section">
                <div className="container">
                    <div className="case-study-info-grid">
                        {project.companyType && (
                            <div className="case-study-info-item">
                                <span className="case-study-info-label">Company</span>
                                <span className="case-study-info-value">{project.companyType}</span>
                            </div>
                        )}
                        {project.role && (
                            <div className="case-study-info-item">
                                <span className="case-study-info-label">Role</span>
                                <span className="case-study-info-value">{project.role}</span>
                            </div>
                        )}
                        {project.duration && (
                            <div className="case-study-info-item">
                                <span className="case-study-info-label">Duration</span>
                                <span className="case-study-info-value">{project.duration}</span>
                            </div>
                        )}
                        {project.team && (
                            <div className="case-study-info-item">
                                <span className="case-study-info-label">Team</span>
                                <span className="case-study-info-value">{project.team}</span>
                            </div>
                        )}
                        {project.platform && (
                            <div className="case-study-info-item">
                                <span className="case-study-info-label">Platform</span>
                                <span className="case-study-info-value">{project.platform}</span>
                            </div>
                        )}
                    </div>

                    {/* Services */}
                    {project.services && project.services.length > 0 && (
                        <div className="case-study-services">
                            <span className="case-study-info-label">Services</span>
                            <div className="case-study-service-tags">
                                {project.services.map((service, index) => (
                                    <span key={index} className="tag tag-accent">{service}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Problem Section */}
            {project.problem && (
                <section className="case-study-section case-study-problem">
                    <div className="container">
                        <h2 className="case-study-section-title">The Problem</h2>
                        <div className="case-study-content">
                            <p>{project.problem}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Challenge Section */}
            {project.challenge && (
                <section className="case-study-section">
                    <div className="container">
                        <h2 className="case-study-section-title">The Challenge</h2>
                        <div className="case-study-content">
                            <p>{project.challenge}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Design Process */}
            {project.process && project.process.length > 0 && (
                <section className="case-study-section case-study-process-section">
                    <div className="container">
                        <h2 className="case-study-section-title">Design Process</h2>
                        <div className="case-study-process">
                            {project.process.map((step, index) => (
                                <div key={index} className="case-study-process-step">
                                    <div className="case-study-process-number">{index + 1}</div>
                                    <div className="case-study-process-label">{step}</div>
                                    {index < project.process.length - 1 && (
                                        <div className="case-study-process-arrow">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Design Process Content (detailed) */}
            {project.designProcessContent && (
                <section className="case-study-section">
                    <div className="container">
                        <div className="case-study-content">
                            <p>{project.designProcessContent}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Solution/Details */}
            {project.details && (
                <section className="case-study-section">
                    <div className="container">
                        <h2 className="case-study-section-title">Solution</h2>
                        <div className="case-study-content">
                            <p>{project.details}</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
                <section className="case-study-section case-study-gallery">
                    <div className="container">
                        <div className="case-study-images">
                            {project.images.map((image, index) => (
                                <figure key={index} className="case-study-figure">
                                    <img src={image.src} alt={image.alt || `${project.title} screenshot ${index + 1}`} />
                                    {image.caption && <figcaption>{image.caption}</figcaption>}
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Impact Metrics */}
            {project.impact && project.impact.length > 0 && (
                <section className="case-study-section case-study-impact">
                    <div className="container">
                        <h2 className="case-study-section-title">Impact</h2>
                        <div className="case-study-impact-grid">
                            {project.impact.map((metric, index) => (
                                <div key={index} className="case-study-impact-item">
                                    <div className="case-study-impact-value">{metric.value}</div>
                                    <div className="case-study-impact-label">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Achievements Timeline */}
            {project.achievements && project.achievements.length > 0 && (
                <section className="case-study-section">
                    <div className="container">
                        <h2 className="case-study-section-title">Key Achievements</h2>
                        <div className="case-study-timeline">
                            {project.achievements.map((achievement, index) => (
                                <div key={index} className="case-study-timeline-item">
                                    <div className="case-study-timeline-marker"></div>
                                    <div className="case-study-timeline-content">
                                        <span className="case-study-timeline-date">{achievement.date}</span>
                                        <span className="case-study-timeline-title">{achievement.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Next Project CTA */}
            <section className="case-study-section case-study-cta">
                <div className="container">
                    <Link to="/" className="btn btn-primary">
                        View More Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </article>
    );
};

export default CaseStudyPage;
