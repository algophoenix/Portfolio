import React, { useState } from 'react';
import { Server, Globe, Layout, Database, Cloud, Settings, PenTool } from 'lucide-react';
import './Skills.css';

interface Skill {
    name: string;
    icon?: string;
}

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        id: 'backend',
        title: 'Backend Engineering',
        icon: <Server size={20} />,
        skills: [
            { name: 'Java' }, { name: 'Spring Boot' }, { name: 'Spring Data JPA' },
            { name: 'Spring MVC' }, { name: 'Hibernate' }
        ]
    },
    {
        id: 'api',
        title: 'API Architecture',
        icon: <Globe size={20} />,
        skills: [
            { name: 'RESTful API' }, { name: 'Microservices' }, { name: 'OpenAPI/Swagger' },
            { name: 'Postman' }
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend Stack',
        icon: <Layout size={20} />,
        skills: [
            { name: 'React (TypeScript)' }, { name: 'Javascript' }, { name: 'HTML5/CSS3' },
            { name: 'Tailwind/Vanilla' }
        ]
    },
    {
        id: 'data',
        title: 'Data Persistence',
        icon: <Database size={20} />,
        skills: [
            { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'Liquibase' },
            { name: 'Database Optimization' }
        ]
    },
    {
        id: 'cloud',
        title: 'Cloud & DevOps',
        icon: <Cloud size={20} />,
        skills: [
            { name: 'AWS S3' }, { name: 'Docker' }, { name: 'Kubernetes' },
            { name: 'GitHub Actions' }, { name: 'CI/CD' }
        ]
    },
    {
        id: 'tools',
        title: 'Dev Tools',
        icon: <Settings size={20} />,
        skills: [
            { name: 'Git/GitHub' }, { name: 'Maven' }, { name: 'Jira' },
            { name: 'IntelliJ IDEA' }, { name: 'SonarQube' }
        ]
    },
    {
        id: 'practices',
        title: 'Best Practices',
        icon: <PenTool size={20} />,
        skills: [
            { name: 'Agile/Scrum' }, { name: 'TDD' }, { name: 'Code Reviews' },
            { name: 'Unit Testing' }
        ]
    }
];

export const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        if (window.innerWidth < 768) {
            setActiveCategory(activeCategory === id ? null : id);
        }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <h2 className="section-title text-center">
                    Technical <span className="text-accent">Skills</span>
                </h2>
                <div className="section-divider center-divider"></div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`skill-category-card animate-scale-in`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => toggleCategory(category.id)}
                        >
                            <div className="skill-category-header">
                                <div className="skill-icon-wrapper">
                                    {category.icon}
                                </div>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>

                            <div className={`skill-tags ${activeCategory === category.id ? 'active' : ''}`}>
                                {category.skills.map((skill) => (
                                    <span key={skill.name} className="skill-tag">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
