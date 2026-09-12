import './HomePage.css';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import PrimaryButton from '../components/PrimaryButton/primaryButton';
import PrimaryTag from '../components/PrimaryTag/primaryTag';
import type { TagItem } from '../components/PrimaryTag/primaryTag';

const heroTags: (string | TagItem)[] = [
    'React Native',
    'Angular',
    { label: 'Generative AI', icon: Sparkles },
];

const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const HomePage = () => {
    return (
        <section id="hero" className="home-page">
            <div className="hero-container">
                <div className="hero-content">
                    <span className="hero-badge">
                        <span className="hero-badge-dot" />
                        Available for new opportunities
                    </span>

                    <h1 className="hero-name">
                        Balaji
                        <br />
                        <span className="hero-name-accent">N R.</span>
                    </h1>

                    <div className="hero-tags">
                        <PrimaryTag label={heroTags} />
                    </div>

                    <p className="hero-description">
                        Building high-performance mobile experiences and exploring the
                        edge of AI-driven solutions. 2.8 years of crafting products that
                        users love.
                    </p>

                    <div className="hero-actions">
                        <PrimaryButton
                            label="View Projects"
                            onClick={() => scrollToSection('#projects')}
                            icons
                            iconName={ArrowRight}
                        />
                        <PrimaryButton
                            label="Download Resume"
                            onClick={() => scrollToSection('#contact')}
                            icons
                            iconName={Download}
                            variant="secondary"
                            iconPosition="left"
                        />
                    </div>
                </div>

                <div className="hero-graphic">
                    <div className="hero-graphic-square hero-graphic-square--outer" />
                    <div className="hero-graphic-square hero-graphic-square--inner">
                        <span>BNR</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
