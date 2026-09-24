import './ProjectsPage.css';
import ScrollReveal from '../components/ScrollReveal/scrollReveal';
import ProjectShowCard from '../components/ProjectShowCard/ProjectShowCard';
import type { ProjectData } from '../components/ProjectShowCard/ProjectShowCard';

const GITHUB_PROFILE = 'https://github.com/balajistyle1962';

const projects: ProjectData[] = [
    {
        title: 'Ennisai - People\'s Choice',
        description:
            'Feature-rich mobile app where listeners can mark their favorite lines and vibe to their favorite line in their favorite song.',
        tags: ['React Native', 'Redux', ' Firebase', 'PostgreSQL', 'Node.js'],
        githubUrl: GITHUB_PROFILE,
    },
    {
        title: 'InterviewAce',
        description:
            'Ace your interviews with an AI-powered app that provides curated questions, mock interview simulations, and performance analytics.',
        tags: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'LLM APIs'],
        githubUrl: GITHUB_PROFILE,
    },
    {
        title: 'Hand Gesture Recognition',
        description:
            'gesture detection to help identify common ASL gestures.',
        tags: ['Html', 'TypeScript', 'CSS', 'Python'],
        githubUrl: GITHUB_PROFILE,
    },
];

const ProjectsPage = () => {
    return (
        <section id="projects" className="projects-page">
            <div className="projects-container">
                <ScrollReveal>
                    <div className="projects-page-header">
                        <span className="projects-page-index">03</span>
                        <h2 className="projects-page-title">Featured Work</h2>
                        <div className="projects-page-line" />
                    </div>
                </ScrollReveal>

                <div className="projects-page-grid">
                    {projects.map((project, i) => (
                        <ScrollReveal key={project.title} delay={i * 150}>
                            <ProjectShowCard data={project} index={i + 1} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
