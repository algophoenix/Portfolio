import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    highlights: string[];
    techStack: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: 'exp1',
        role: 'Software Engineer | Full-Stack Developer',
        company: 'O2F Info Solutions',
        duration: '06/2024 – Present',
        location: 'Bangalore, India',
        description: 'Client: Société Générale (Banking Sector). Architecting and maintaining high-availability banking systems.',
        highlights: [
            'Architecting RESTful APIs with Spring Boot & Spring Data JPA',
            'Building responsive React frontends integrated with backend services',
            'Containerizing microservices using Docker & orchestrating with Kubernetes',
            'Implementing CI/CD pipelines with GitHub Actions'
        ],
        techStack: ['Java', 'Spring Boot', 'React', 'Docker', 'Kubernetes', 'AWS S3']
    },
    {
        id: 'exp2',
        role: 'Software Engineer | Full-Stack Developer',
        company: 'Realkey Software Solution',
        duration: '03/2023 – 06/2024',
        location: 'Bangalore, India',
        description: 'Designed & developed full-stack enterprise applications and managed database migrations.',
        highlights: [
            'Designed & developed full-stack applications with Java & React',
            'Implementing database migrations & version control with Liquibase',
            'Building robust REST APIs with Hibernate ORM',
            'Collaborating with design & product teams in Agile environments'
        ],
        techStack: ['Java', 'Spring Boot', 'React (TS)', 'PostgreSQL', 'Liquibase', 'Jira']
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <h2 className="section-title text-center">
                    Professional <span className="text-accent">Experience</span>
                </h2>
                <div className="section-divider center-divider"></div>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-dot"></div>
                            <div className="experience-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="exp-header">
                                    <div className="exp-role-company">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <div className="exp-company">
                                            <Briefcase size={16} className="exp-icon" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="exp-meta">
                                        <div className="exp-date">
                                            <Calendar size={14} className="mr-1" />
                                            {exp.duration}
                                        </div>
                                        <div className="exp-location">
                                            <MapPin size={14} className="mr-1" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <p className="exp-description">{exp.description}</p>

                                <ul className="exp-highlights">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx}>{highlight}</li>
                                    ))}
                                </ul>

                                <div className="exp-tech-stack">
                                    {exp.techStack.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
