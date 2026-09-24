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

// Served from public/, so it's available at the site root.
const RESUME_FILE_NAME = 'Balaji N R_Resume.pdf';
const RESUME_URL = `${import.meta.env.BASE_URL}${encodeURIComponent(RESUME_FILE_NAME)}`;

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = RESUME_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
};

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
                        <span className="hero-name-accent">Ramesh N</span>
                    </h1>

                    <div className="hero-tags">
                        <PrimaryTag label={heroTags} />
                    </div>

                    <p className="hero-description">
                        Building high-performance mobile experiences and exploring the
                        edge of AI-driven solutions. 3+ years of crafting products that
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
                            onClick={downloadResume}
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
