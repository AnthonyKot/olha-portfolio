import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id, e) => {
        // Don't toggle if clicking a link
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        setExpandedId(expandedId === id ? null : id);
    };

    const getCategoryTags = (category) => {
        if (!category) return [];
        return category.split(/[\/,]/).map(tag => tag.trim()).filter(Boolean);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Selected Work</h2>
                        <p className="section-subtitle">Featured projects from my portfolio</p>
                    </div>
                </div>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card ${expandedId === project.id ? 'expanded' : ''}`}
                            onClick={(e) => toggleExpand(project.id, e)}
                        >
                            <div className="project-thumbnail">
                                {project.thumbnail ? (
                                    <img src={project.thumbnail} alt={project.title} />
                                ) : (
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.875rem'
                                    }}>
                                        No image
                                    </div>
                                )}
                                <div className="project-overlay">
                                    <span className="project-overlay-text">
                                        {expandedId === project.id ? 'Click to collapse' : 'Click for preview'}
                                    </span>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-tags">
                                    {getCategoryTags(project.category).slice(0, 3).map((tag, index) => (
                                        <span key={index} className={`tag ${index === 0 ? 'tag-accent' : ''}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                {(project.role || project.platform) && (
                                    <div className="project-meta">
                                        {project.role && (
                                            <span className="project-meta-item">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="7" r="4" />
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                </svg>
                                                {project.role}
                                            </span>
                                        )}
                                        {project.platform && (
                                            <span className="project-meta-item">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="2" y="3" width="20" height="14" rx="2" />
                                                    <path d="M8 21h8M12 17v4" />
                                                </svg>
                                                {project.platform}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* View Full Case Study Link - Always visible */}
                                {project.slug && (
                                    <div style={{ marginTop: 'var(--spacing-md)' }}>
                                        <Link
                                            to={`/project/${project.slug}`}
                                            className="btn btn-primary"
                                            style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                                        >
                                            View Case Study
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                )}

                                {/* Expanded Content Preview */}
                                {expandedId === project.id && (
                                    <div className="project-expanded" onClick={(e) => e.stopPropagation()}>
                                        {/* Quick Stats */}
                                        {(project.companyType || project.team || project.duration) && (
                                            <div className="project-detail-grid">
                                                {project.companyType && (
                                                    <div className="project-detail-item">
                                                        <div className="project-detail-label">Company</div>
                                                        <div className="project-detail-value">{project.companyType}</div>
                                                    </div>
                                                )}
                                                {project.team && (
                                                    <div className="project-detail-item">
                                                        <div className="project-detail-label">Team</div>
                                                        <div className="project-detail-value">{project.team}</div>
                                                    </div>
                                                )}
                                                {project.duration && (
                                                    <div className="project-detail-item">
                                                        <div className="project-detail-label">Duration</div>
                                                        <div className="project-detail-value">{project.duration}</div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Problem Preview */}
                                        {project.problem && (
                                            <div className="project-problem">
                                                <h4>The Problem</h4>
                                                <p style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}>
                                                    {project.problem}
                                                </p>
                                            </div>
                                        )}

                                        {/* Process Tags */}
                                        {project.process && project.process.length > 0 && (
                                            <div className="project-process">
                                                <h4>Process</h4>
                                                <div className="process-steps">
                                                    {project.process.map((step, index) => (
                                                        <span key={index} className="process-step">
                                                            <span className="process-step-number">{index + 1}</span>
                                                            {step}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Impact Metrics (if available) */}
                                        {project.impact && project.impact.length > 0 && (
                                            <div style={{
                                                display: 'flex',
                                                gap: 'var(--spacing-sm)',
                                                marginTop: 'var(--spacing-md)',
                                                flexWrap: 'wrap'
                                            }}>
                                                {project.impact.map((metric, index) => (
                                                    <div key={index} style={{
                                                        padding: '0.5rem 1rem',
                                                        background: 'var(--color-accent-subtle)',
                                                        borderRadius: 'var(--border-radius-sm)',
                                                        textAlign: 'center'
                                                    }}>
                                                        <div style={{
                                                            fontSize: '1.25rem',
                                                            fontWeight: 700,
                                                            color: 'var(--color-accent)'
                                                        }}>
                                                            {metric.value}
                                                        </div>
                                                        <div style={{
                                                            fontSize: '0.7rem',
                                                            color: 'var(--color-text-secondary)'
                                                        }}>
                                                            {metric.label}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
