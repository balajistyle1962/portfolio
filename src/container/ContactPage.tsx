import './ContactPage.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/scrollReveal';
import SocialCard from '../components/SocialCard/socialCard';
import type { SocialCardProps } from '../components/SocialCard/socialCard';
import MessageComponent from '../components/MessageComponent/MessageComponent';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

const socials: SocialCardProps[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'balajinramesh@gmail.com',
        href: 'mailto:balajinramesh@gmail.com',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/balajinr',
        href: 'https://linkedin.com/in/balajinr',
        
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/balajistyle1962',
        href: 'https://github.com/balajistyle1962',
    },
];

const ContactPage = () => {
    return (
        <section id="contact" className="contact-page">
            <div className="contact-container">
                <ScrollReveal>
                    <div className="contact-page-header">
                        <span className="contact-page-index">05</span>
                        <h2 className="contact-page-title">Get in Touch</h2>
                        <div className="contact-page-line" />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <p className="contact-intro">
                        I&apos;m always open to new opportunities and interesting
                        projects. Let&apos;s build something great together.
                    </p>
                </ScrollReveal>

                <div className="contact-grid">
                    <div className="contact-socials">
                        {socials.map((social, i) => (
                            <ScrollReveal key={social.label} delay={200 + i * 100}>
                                <SocialCard {...social} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal delay={300} className="contact-message">
                        <MessageComponent accessKey={WEB3FORMS_KEY} />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
