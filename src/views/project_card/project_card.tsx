import { useState } from "react";

import styles from "./project_card.module.css";
import { getImageUrl } from "../../utils/utils"; 
import ProjectModel from "../../models/project_model";

interface ProjectCardProps {
    project: ProjectModel;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, projectType, description, skills, source } = project;
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    }; 

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.imageContainer}>
                    <img
                        src={getImageUrl(`projects/${projectType}.png`)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p
                    className={`${styles.description} ${isDescriptionExpanded ? styles.expanded : ''}`}
                    onClick={toggleDescription}
                >
                    {description}
                </p> 
                <ul className={styles.skills}>
                    {skills.map((skill, id) => { 
                        return (
                            <li key={id} className={styles.skill}>
                                <div className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img
                                            src={getImageUrl(`skills/${skill.toLowerCase()}.png`)}
                                            alt={"React Native"}
                                        />
                                    </div>
                                    <p>{skill}</p>
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