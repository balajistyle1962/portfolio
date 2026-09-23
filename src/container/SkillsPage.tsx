import Skills from '../components/SkillsCard/skillsCard';
import type { Skill } from '../components/SkillsCard/skillsCard';

const skills: Skill[] = [
    { name: 'React Native', level: 90, category: 'Mobile' },
    { name: 'JavaScript / TypeScript', level: 88, category: 'Language' },
    { name: 'Redux / Context API', level: 82, category: 'State' },
    { name: 'Firebase / FCM', level: 80, category: 'Backend' },
    { name: 'REST API Integration', level: 85, category: 'Backend' },
    { name: 'Angular', level: 70, category: 'Web' },
    { name: 'Git', level: 78, category: 'Tools' },
    { name: 'Generative AI / LLM APIs', level: 60, category: 'AI' },
];

const SkillsPage = () => {
    return <Skills skillsData={skills} />;
};

export default SkillsPage;
