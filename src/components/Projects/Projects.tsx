import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};

/* 
,
  {
    "title": "Nationalizations Desktop",
    "imageSrc": "projects/project.png",
    "description": "This is a project made to learn the latest languages by building an app.",
    "skills": ["Flutter"],
    "source": "https://github.com/sschmeil2211/Flutter---Nationalizations-Desktop"
  } 
*/