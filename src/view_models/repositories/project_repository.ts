import ProjectModel from '../../models/project_model';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from '../../services/firebase';


const db = getFirestore(app); // Obtiene una instancia de Firestore usando la configuración de Firebase

class ProjectsRepository {

    async getProjects(): Promise<ProjectModel[]> {
        try {
            const projectsSnapshot = await getDocs(collection(db, 'projects'));
            const projects: ProjectModel[] = [];
            projectsSnapshot.forEach((doc) => {
                const projectData = doc.data() as ProjectModel;
                projects.push(projectData);
            });
            return projects;
        } catch (error) {
            console.error('Error fetching projects from Firestore:', error);
            throw error;
        }
    }
}

export default ProjectsRepository;