import './AboutPage.css';
import type { ElementType } from 'react';
import { User, Code, Zap, Brain } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal/scrollReveal';
import ExperienceCard from '../components/ExperienceCard/experienceCard';
import InfoCard from '../components/InfoCard/infoCard';

interface AboutInfoItem {
    icon: ElementType;
    value: string;
    title: string;
}

const infoItems: AboutInfoItem[] = [
    {
        icon: User,
        value: '2.8 Years',
        title: 'Cross-platform mobile development with production apps',
    },
    {
        icon: Code,
        value: 'Clean Code',
        title: 'Scalable architecture & maintainable codebases',
    },
    {
        icon: Zap,
        value: 'Performance',
        title: 'Optimized rendering, lazy loading & bundle sizes',
    },
    {
        icon: Brain,
        value: 'AI Explorer',
        title: 'LLM integrations & Generative AI experiments',
    },
];

const AboutPage = () => {
    return (
        <section id="about" className="about-page">
            <div className="about-container">
                <ScrollReveal>
                    <div className="about-header">
                        <span className="about-index">01</span>
                        <h2 className="about-title">About Me</h2>
                        <div className="about-line" />
                    </div>
                </ScrollReveal>

                <div className="about-top-grid">
                    <ScrollReveal>
                        <div className="about-bio bento-card">
                            <p>
                                I&apos;m a dedicated <strong>React Native Developer</strong> with
                                nearly 3 years of professional experience crafting
                                cross-platform mobile applications that serve thousands of
                                users.
                            </p>
                            <p>
                                My expertise spans{' '}
                                <strong>JavaScript, TypeScript, Firebase, and REST APIs</strong>.
                                Beyond mobile, I build reusable Angular components and explore
                                Generative AI to create intelligent, user-centric solutions.
                            </p>
                            <p>
                                I believe in writing code that&apos;s not just functional — but
                                elegant, performant, and built to last.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={150}>
                        <ExperienceCard
                            value="3.2"
                            title="Years of Experience"
                            tags={['iOS', 'Android', 'Web']}
                        />
                    </ScrollReveal>
                </div>

                <div className="about-info-grid">
                    {infoItems.map((item, index) => (
                        <ScrollReveal key={item.value} delay={index * 100}>
                            <InfoCard
                                icon={item.icon}
                                value={item.value}
                                title={item.title}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
