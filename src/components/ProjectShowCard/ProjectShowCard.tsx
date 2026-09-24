import './ProjectShowCard.css';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

export interface ProjectData {
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

interface ProjectShowCardProps {
    data: ProjectData;
    index: number; // 1-based, shown as the "01" badge
}

const ProjectShowCard = ({ data, index }: ProjectShowCardProps) => {
    const { title, description, tags, githubUrl, liveUrl } = data;
    const titleHref = liveUrl ?? githubUrl;

    return (
        <article className="bento-card project-card">
            <div className="project-card-top">
                <span className="project-index">{String(index).padStart(2, '0')}</span>

                <div className="project-links">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={`${title} source code on GitHub`}
                        >
                            <Github size={16} />
                        </a>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={`${title} live demo`}
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="project-title">
                {titleHref ? (
                    <a href={titleHref} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                ) : (
                    title
                )}
                <ArrowUpRight size={18} className="project-title-arrow" />
            </h3>

            <p className="project-description">{description}</p>

            <ul className="project-tags">
                {tags.map((tag) => (
                    <li key={tag} className="project-tag">
                        {tag}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default ProjectShowCard;
