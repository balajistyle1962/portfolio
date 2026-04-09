import React from "react";
import "./experienceCard.css";
import PrimaryTag from "../PrimaryTag/primaryTag";

interface ExperienceCardProps {     
  value: string;
  title: string;
  tags: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ value, title, tags }) => {
    return(
        <div className="experience-card">
            <h1 className="experience-value">{value}</h1>

            <p className="experience-title">{title}</p>

            <div className="experience-tags">
                <PrimaryTag label={tags} />
            </div>
        </div>
    )
}


export default ExperienceCard;