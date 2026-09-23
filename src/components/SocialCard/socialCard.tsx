import './socialCard.css';
import type { ElementType } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface SocialCardProps {
    icon: ElementType;
    label: string;
    value: string;
    href: string;
}

const SocialCard = ({ icon: Icon, label, value, href }: SocialCardProps) => {
    const isExternal = href.startsWith('http');

    return (
        <a
            href={href}
            className="bento-card social-card"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
        >
            <div className="social-icon">
                <Icon size={20} />
            </div>

            <div className="social-content">
                <p className="social-label">{label}</p>
                <p className="social-text">{value}</p>
            </div>

            <ArrowUpRight size={18} className="social-arrow" />
        </a>
    );
};

export default SocialCard;
