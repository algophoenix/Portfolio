import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';
import './Projects.css';
import project1 from '../assets/project_myaprc.png';
import project2 from '../assets/project_bally.png';

interface Project {
    id: string;
    title: string;
    type: string;
    description: string;
    image: string;
    techStack: string[];
    features: string[];
    metrics?: string[];
    githubUrl?: string;
    demoUrl?: string;
}

const projects: Project[] = [
    {
        id: 'myaprc',
        title: 'MYAPRC – Enterprise Platform',
        type: 'Internal Enterprise App',
        description: 'Comprehensive full-stack enterprise platform built for internal operations, handling critical business workflows with high availability.',
        image: project1,
        techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS'],
        features: [
            'Microservices architecture with Spring Boot',
            'Complex schema with Liquibase migration',
            'Automated CI/CD with GitHub Actions'
        ],
        metrics: ['99.9% Uptime', '50000+ Internal Users', 'Zero Critical Bugs']
    },
    {
        id: 'bally',
        title: 'Bally – E-Commerce Platform',
        type: 'B2C E-Commerce',
        description: 'Full-featured e-commerce platform with complex product catalogs, order management, and optimized user workflows.',
        image: project2,
        techStack: ['Java', 'Spring Boot', 'React', 'Hibernate', 'JUnit'],
        features: [
            'Enterprise-grade product catalog',
            'Scalable RESTful API layer',
            'Advanced search & filtering'
        ],
        metrics: ['1000+ Daily Trans.', 'Sub-second API', '15% Conv. Increase'],
        demoUrl: 'https://bally.in/'
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="section-title text-center">
                    Featured <span className="text-accent">Projects</span>
                </h2>
                <div className="section-divider center-divider"></div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            rightIcon={<ExternalLink size={16} />}
                                            href={project.demoUrl}
                                            target="_blank"
                                        >
                                            View Project
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <span className="project-type">{project.type}</span>
                                    <h3 className="project-title">{project.title}</h3>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    <ul>
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                {project.metrics && (
                                    <div className="project-metrics">
                                        {project.metrics.map((metric, idx) => (
                                            <span key={idx} className="metric-badge">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="project-tech">
                                    <div className="tech-stack-scroll">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="tech-pill">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
