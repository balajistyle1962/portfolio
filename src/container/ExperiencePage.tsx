import './ExperiencePage.css';
import ScrollReveal from '../components/ScrollReveal/scrollReveal';
import WorkExperienceCard from '../components/WorkExperienceCard/workExperienceCard';
import type { ExperienceData } from '../components/WorkExperienceCard/workExperienceCard';

const experiences: ExperienceData[] = [
    {
        role: 'React Native Developer',
        company: 'Professional Experience',
        period: '2022 – 2026',
        points: [
            'Built cross-platform mobile apps serving thousands of users on iOS and Android',
            'Integrated RESTful APIs, Firebase Cloud Messaging, and real-time sync',
            'Implemented push notifications and deep linking for engagement',
            'Optimized performance with lazy loading, memoization, and Redux',
            'Collaborated in agile sprints to deliver features on schedule',
        ],
    },
    {
        role: 'Angular Developer',
        company: 'Web Development',
        period: 'Project-Based',
        points: [
            'Developed reusable component libraries with Angular best practices',
            'Built responsive enterprise dashboards with real-time visualization',
            'Applied RxJS for complex async workflows and state management',
        ],
    }
];

const ExperiencePage = () => {
    return (
        <section id="experience" className="experience-page">
            <div className="experience-container">
                <ScrollReveal>
                    <div className="experience-page-header">
                        <span className="experience-page-index">04</span>
                        <h2 className="experience-page-title">Experience</h2>
                        <div className="experience-page-line" />
                    </div>
                </ScrollReveal>

                <div className="experience-page-grid">
                    {experiences.map((exp, i) => (
                        <ScrollReveal key={exp.role} delay={i * 150}>
                            <WorkExperienceCard data={exp} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperiencePage;
