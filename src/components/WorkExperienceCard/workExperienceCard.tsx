import './workExperienceCard.css';
import React from "react";
import { Briefcase, Calendar } from "lucide-react";



export interface ExperienceData {
  role: string;
  company: string;
  period: string;
  points: string[];
}

interface ExperienceCardProps {
  data: ExperienceData;
}


const WorkExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const { role, company, period, points } = data;

  return (
    <div className="bento-card experience-card">

      {/* Header */}
      <div className="experience-header">

        <div className="experience-icon">
          <Briefcase size={18} />
        </div>

        <div>
          <h3 className="experience-role">{role}</h3>
          <p className="experience-company">{company}</p>
        </div>

      </div>

      {/* Period */}
      <div className="experience-period">
        <Calendar size={12} />
        <span>{period}</span>
      </div>

      {/* Points */}
      <ul className="experience-list">
        {points.map((point, index) => (
          <li key={index} className="experience-item">
            <span className="dot" />
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default WorkExperienceCard;