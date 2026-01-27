import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import './Contact.css';

export const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title text-center">
                    Get In <span className="text-accent">Touch</span>
                </h2>
                <div className="section-divider center-divider"></div>

                <div className="contact-content">
                    <div className="contact-cards">
                        <a href="mailto:rizwan.aiexpert@gmail.com" className="contact-card">
                            <div className="contact-icon bg-email">
                                <Mail size={24} />
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-label">Email</h3>
                                <p className="contact-value">rizwan.aiexpert@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/rizwan-s-a017aa309/" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <div className="contact-icon bg-linkedin">
                                <Linkedin size={24} />
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-label">LinkedIn</h3>
                                <p className="contact-value">Let's Connect</p>
                            </div>
                        </a>

                        <a href="https://github.com/algophoenix" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <div className="contact-icon bg-github">
                                <Github size={24} />
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-label">GitHub</h3>
                                <p className="contact-value">Explore Repositories</p>
                            </div>
                        </a>

                        <div className="contact-card">
                            <div className="contact-icon bg-location">
                                <MapPin size={24} />
                            </div>
                            <div className="contact-info">
                                <h3 className="contact-label">Location</h3>
                                <p className="contact-value">Bangalore, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <div className="form-card">
                            <h3 className="form-title">Send a Message</h3>

                            {showSuccess ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>Message Sent!</h3>
                                    <p>Thanks for reaching out. I'll get back to you soon.</p>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        onClick={() => setShowSuccess(false)}
                                        className="mt-4"
                                    >
                                        Send Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" id="name" required placeholder="Your Name" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" required placeholder="your.email@example.com" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" required placeholder="Your message..." rows={3}></textarea>
                                    </div>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        isLoading={isSubmitting}
                                        rightIcon={!isSubmitting && <Send size={16} />}
                                        className="w-full justify-center"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <p className="footer-text">
                        © {new Date().getFullYear()} Mohammed Rizwan S. All rights reserved.
                    </p>
                </footer>
            </div>
        </section >
    );
};
