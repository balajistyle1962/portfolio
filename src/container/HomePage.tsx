import PrimaryBtn from "../components/PrimaryButton/primaryButton";
import { ArrowRight } from "lucide-react";
import { User } from "lucide-react";
import { Code } from "lucide-react";
import PrimaryTag from "../components/PrimaryTag/primaryTag";
import ExperienceCard from "../components/ExperienceCard/experienceCard";
import InfoCard from "../components/InfoCard/infoCard";
import Skills from "../components/SkillsCard/skillsCard";
import type { ExperienceData } from "../components/WorkExperienceCard/workExperienceCard";
import ScrollReveal from "../components/ScrollReveal/scrollReveal";
import WorkExperienceCard from "../components/WorkExperienceCard/workExperienceCard";

const HomePage = () =>{
    const onClick = () =>{
        console.log("Click")
    }

    const tags = ["React", "TypeScript", "CSS"];

    interface Skill {
      name: string;
      level: number;
      category: string;
    }
    
    const skills: Skill[] = [
      { name: "React Native", level: 90, category: "Mobile" },
      { name: "JavaScript / TypeScript", level: 88, category: "Language" },
      { name: "Redux / Context API", level: 82, category: "State" },
      { name: "Firebase / FCM", level: 80, category: "Backend" },
      { name: "REST API Integration", level: 85, category: "Backend" },
      { name: "Angular", level: 70, category: "Web" },
      { name: "Git", level: 78, category: "Tools" },
      { name: "Generative AI / LLM APIs", level: 60, category: "AI" },
    ];

    //Experience Card Data
    const experiences: ExperienceData[] = [
    {
        role: "React Native Developer",
        company: "Professional Experience",
        period: "2022 – Present",
        points: [
        "Built cross-platform mobile apps serving thousands of users",
        "Integrated REST APIs, Firebase & real-time sync",
        "Implemented push notifications and deep linking",
        "Optimized performance with Redux & memoization",
        "Worked in agile sprints",
        ],
    },
    {
        role: "Angular Developer",
        company: "Web Development",
        period: "Project-Based",
        points: [
        "Built reusable Angular component libraries",
        "Developed enterprise dashboards",
        "Used RxJS for async workflows",
        ],
    },
    ];


    return(
        <>
            <PrimaryBtn
                label="View Projects"
                onClick={onClick}
                icons={true}
                iconName={ArrowRight}
            />
            <PrimaryBtn
                label="Resume"
                onClick={onClick}
                icons={false}
            />
            <div style={{}}>
                <PrimaryTag label={tags} />
            </div>

            <ExperienceCard
                value="2.8"
                title="Years of Experience"
                tags={["iOS", "Android", "Web"]}
            />

            <InfoCard
                icon={User}
                value="2.8 Years"
                title="Cross-platform mobile development"
            />
           <InfoCard
                icon={Code}
                value="Clean Code"
                title="Scalable architecture & maintainable code"
            />
            <InfoCard
                icon={Code}
                value="Performance"
                title="Optimized rendering, lazy loading & bundle sizes"
            />
           <InfoCard
                icon={Code}
                value="Clean Code"
                title="Scalable architecture & maintainable code"
            />

            <Skills skillsData={skills} />

            <div className="experience-grid">
            {experiences.map((exp, i) => (
                <ScrollReveal key={exp.role} delay={i * 150}>
                    <WorkExperienceCard data={exp} />
                </ScrollReveal>
            ))}
        </div>


        </>
    )
}

export default HomePage;