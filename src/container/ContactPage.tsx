import './ContactPage.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/scrollReveal';
import SocialCard from '../components/SocialCard/socialCard';
import type { SocialCardProps } from '../components/SocialCard/socialCard';

const socials: SocialCardProps[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'balaji@example.com',
        href: 'mailto:balaji@example.com',
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
        value: 'github.com/balajinr',
        href: 'https://github.com/balajinr',
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

                <div className="contact-socials">
                    {socials.map((social, i) => (
                        <ScrollReveal key={social.label} delay={200 + i * 100}>
                            <SocialCard {...social} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
