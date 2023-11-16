import { useState, useEffect } from "react";

import styles from "./projects.module.css";
import { ProjectCard } from "../project_card/project_card";
import ProjectModel from "../../models/project_model";
import ProjectsRepository from "../../view_models/repositories/project_repository";

export const Projects = () => { 

    const [projects, setProjects] = useState<ProjectModel[]>([]);
    const projectRepository = new ProjectsRepository();

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const projectsFromFirestore = await projectRepository.getProjects();
            setProjects(projectsFromFirestore);
          } catch (error) {
            // Handle error
          }
        };
    
        fetchProjects();
      }, [projectRepository]); 

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