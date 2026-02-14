import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import './Certificates.css';
import aiFluencyCertificate from '../assets/AI Fluency Framework & Foundations- Certificate.png';
import mcpBadgeImgCertificate from '../assets/Model Context Protocol certification badge- Certificate.png';
import mcpBadgeImg from '../assets/Model Context Protocol certification badge.png';
import claudeCodeImg from '../assets/Claude Code in Action Badge.png';
import claudeCodeImgCertificate from '../assets/Claude Code in Action Badge- Certificate.png';
import aiFluencyImg from '../assets/AI Fluency Framework & Foundations.png';


interface Certificate {
    id: string;
    title: string;
    issuer: string;
    image: string;
    verificationUrl: string;
    description: string;
}

const certificates: Certificate[] = [
    {
        id: 'ai-fluency',
        title: 'AI Fluency: Framework & Foundations',
        issuer: 'Anthropic',
        image: aiFluencyImg,
        verificationUrl: aiFluencyCertificate,
        description: 'Comprehensive understanding of AI fundamentals, LLM architecture, and responsible AI development practices.'
    },
    {
        id: 'mcp-advanced',
        title: 'Model Context Protocol: Advanced Topics',
        issuer: 'Anthropic',
        image: mcpBadgeImg,
        verificationUrl: mcpBadgeImgCertificate,
        description: 'Deep dive into the Model Context Protocol, enabling seamless integration between AI models and external data/tools.'
    },
    {
        id: 'claude-code',
        title: 'Claude Code in Action',
        issuer: 'Anthropic',
        image: claudeCodeImg,
        verificationUrl: claudeCodeImgCertificate,
        description: 'Practical application of Claude for coding tasks, including refactoring, debugging, and feature implementation.'
    }
];

export const Certificates: React.FC = () => {
    return (
        <section id="certificates" className="certificates-section">
            <div className="certificates-container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="section-divider center-divider"></div>
                    <p className="section-subtitle">
                        Continuous learning and validation of expertise in cutting-edge technologies.
                    </p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="certificate-card animate-slide-up"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="certificate-image-container">
                                <div className="certificate-image-wrapper">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="certificate-image"
                                    />
                                </div>
                                <div className="certificate-overlay">
                                    <a
                                        href={cert.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-certificate-btn"
                                    >
                                        <ExternalLink size={20} />
                                        <span>View Credential</span>
                                    </a>
                                </div>
                            </div>

                            <div className="certificate-content">
                                <div className="certificate-meta">
                                    <span className="certificate-issuer">
                                        <Award size={14} />
                                        {cert.issuer}
                                    </span>
                                </div>

                                <h3 className="certificate-title">{cert.title}</h3>
                                <p className="certificate-description">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
