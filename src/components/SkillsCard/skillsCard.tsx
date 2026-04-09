import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../ScrollReveal/scrollReveal";
import "./skillsCard.css";


interface SkillBarProps {
  name: string;
  level: number;
  category: string;
}


    interface Skill {
      name: string;
      level: number;
      category: string;
    }

const SkillBar: React.FC<SkillBarProps> = ({ name, level, category }) => {
  const [width, setWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="bento-card skill-card">
      
      <div className="skill-header">
        <div>
          <h3 className="skill-title">{name}</h3>
          <span className="skill-category">{category}</span>
        </div>

        <span className="skill-percentage">{width}%</span>
      </div>

      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>

    </div>
  );
};

const Skills: React.FC<{ skillsData: Skill[] }> = ({ skillsData }) => {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-overlay" />

      <div className="skills-container">

        <ScrollReveal>
          <div className="skills-header">
            <span className="skills-index">02</span>
            <h2 className="skills-title">Tech Stack</h2>
            <div className="skills-line" />
          </div>
        </ScrollReveal>

        <div className="skills-grid">
          {skillsData.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 60}>
              <SkillBar {...skill} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;