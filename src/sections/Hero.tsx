import React from 'react';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { Button } from '../components/Button';
import './Hero.css';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/RIZWAN-S.pdf';

export const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="hero-blob blob-1"></div>
                <div className="hero-blob blob-2"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="hero-badge">
                            <span className="api-dot"></span> Available for new opportunities
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm <span className="text-gradient">Mohammed Rizwan S</span>
                        </h1>

                        <h2 className="hero-subtitle">
                            Full-Stack Engineer <span className="text-divider"></span> 
                        </h2>

                        <p className="hero-description">
                            Building scalable, high-performance systems with modern tech stacks.
                            Specialized in Java, Spring Boot, and cloud-native technologies.
                        </p>

                        <div className="hero-actions">
                            <Button
                                variant="primary"
                                size="lg"
                                leftIcon={<Download size={20} />}
                                href={resumePdf}
                                target="_blank"
                            >
                                Download Resume
                            </Button>

                            <Button
                                variant="secondary"
                                size="lg"
                                leftIcon={<MousePointer2 size={20} />}
                                onClick={() => scrollToSection('contact')}
                            >
                                Get In Touch
                            </Button>

                            <Button
                                variant="tertiary"
                                size="lg"
                                rightIcon={<ArrowRight size={20} />}
                                onClick={() => scrollToSection('projects')}
                            >
                                View Work
                            </Button>
                        </div>

                        <div className="hero-location">
                            📍 Bangalore, India
                        </div>
                    </div>

                    <div className="hero-visual animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="profile-container">
                            <div className="profile-glow"></div>
                            <img src={profileImg} alt="Mohammed Rizwan S" className="profile-image" />
                            <div className="profile-border-spinner"></div>
                        </div>

                        <div className="floating-badge badge-top-right animate-float">
                            <span className="badge-icon">☕</span>
                            <span className="badge-text">Java Expert</span>
                        </div>

                        <div className="floating-badge badge-bottom-left animate-float-delayed">
                            <span className="badge-icon">⚛️</span>
                            <span className="badge-text">Full Stack</span>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator animate-bounce">
                    <span className="scroll-text">Scroll Down</span>
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
