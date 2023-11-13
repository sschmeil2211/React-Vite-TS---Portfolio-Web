import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

interface Skills {
    title: string;
    imageSrc: string;
}

interface Project {
    title: string;
    imageSrc: string;
    description: string;
    skills: Skills[];
    source: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, imageSrc, description, skills, source } = project;
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.imageContainer}>
                    <img
                        src={getImageUrl(imageSrc)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>
                                <div className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img
                                            src={getImageUrl(skill.imageSrc)}
                                            alt={"React Native"}
                                        />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.links}>
                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};