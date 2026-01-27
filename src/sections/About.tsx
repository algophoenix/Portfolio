import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, Globe, Database } from 'lucide-react';
import './About.css';

const StatCard: React.FC<{ label: string; value: string; icon: React.ReactNode; delay: number }> = ({ label, value, icon, delay }) => {
    return (
        <div className="stat-card animate-slide-up" style={{ animationDelay: `${delay}s` }}>
            <div className="stat-icon-wrapper">
                {icon}
            </div>
            <div className="stat-content">
                <h3 className="stat-value">{value}</h3>
                <p className="stat-label">{label}</p>
            </div>
        </div>
    );
};

export const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-container">
                <div className={`about-content ${isVisible ? 'visible' : ''}`}>
                    <div className="about-text-column">
                        <h2 className="section-title">
                            About <span className="text-accent">Me</span>
                        </h2>
                        <div className="section-divider"></div>

                        <p className="about-description">
                            I am a <span className="highlight">Software Engineer</span> with 3+ years of experience architecting and
                            scaling full-stack applications. Specialized in backend systems using
                            <span className="highlight"> Java, Spring Boot</span>, and cloud-native technologies.
                        </p>

                        <p className="about-description">
                            Proven expertise in designing resilient REST APIs, optimizing database performance, and
                            delivering mission-critical features in high-velocity Agile environments.
                        </p>

                        <p className="about-cta">
                            Actively seeking challenging full-stack/backend roles where I can drive
                            technical excellence and system reliability.
                        </p>
                    </div>

                    <div className="about-stats-column">
                        <div className="stats-grid">
                            <StatCard
                                value="3+"
                                label="Years Experience"
                                icon={<Server size={24} />}
                                delay={0.1}
                            />
                            <StatCard
                                value="15+"
                                label="Projects Delivered"
                                icon={<Code2 size={24} />}
                                delay={0.2}
                            />
                            <StatCard
                                value="8+"
                                label="Tech Stack"
                                icon={<Database size={24} />}
                                delay={0.3}
                            />
                            <StatCard
                                value="100%"
                                label="Commitment"
                                icon={<Globe size={24} />}
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
