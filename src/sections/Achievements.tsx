import React from 'react';
import { Award, Zap, Code, GraduationCap } from 'lucide-react';
import './Achievements.css';

interface Achievement {
    id: string;
    title: string;
    context: string;
    metric?: string;
    year: string;
    icon: React.ReactNode;
    color: string;
}

const achievements: Achievement[] = [
    {
        id: 'hackathon',
        title: 'Hackathon Champion',
        context: 'Won company-wide hackathon by delivering innovative full-stack solution.',
        metric: '1st Prize',
        year: '2024',
        icon: <Award size={32} />,
        color: 'from-yellow-400 to-orange-500'
    },
    {
        id: 'prod',
        title: 'Production Excellence',
        context: 'Resolved critical banking system issues, improving stability.',
        metric: '40% Stability',
        year: 'Ongoing',
        icon: <Zap size={32} />,
        color: 'from-blue-400 to-cyan-500'
    },
    {
        id: 'quality',
        title: 'Code Quality Champion',
        context: 'Maintained A-grade quality via SonarQube & rigorous review.',
        metric: 'Zero Debt',
        year: 'Ongoing',
        icon: <Code size={32} />,
        color: 'from-green-400 to-emerald-500'
    }
];

export const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="achievements-container">


                <div className="achievements-block">
                    <h2 className="section-title text-center">
                        Achievements & <span className="text-accent">Recognition</span>
                    </h2>
                    <div className="section-divider center-divider"></div>

                    <div className="achievements-grid">
                        {achievements.map((item, index) => (
                            <div
                                key={item.id}
                                className="achievement-card animate-slide-up"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className={`achievement-icon-bg bg-${item.id}`}>
                                    {item.icon}
                                </div>
                                <div className="achievement-content">
                                    <h3 className="achievement-title">{item.title}</h3>
                                    <p className="achievement-context">{item.context}</p>
                                    <div className="achievement-footer">
                                        <span className="achievement-metric">{item.metric}</span>
                                        <span className="achievement-year">{item.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="education-block">
                    <h3 className="education-heading">Education</h3>
                    <div className="education-card">
                        <div className="edu-icon">
                            <GraduationCap size={40} />
                        </div>
                        <div className="edu-details">
                            <h4 className="edu-degree">Bachelor of Engineering - Computer Science</h4>
                            <p className="edu-school">Hindusthan College of Engineering and Technology</p>
                            <p className="edu-meta">📍 Coimbatore, India • 08/2018 – 05/2022 • CGPA: 8.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
