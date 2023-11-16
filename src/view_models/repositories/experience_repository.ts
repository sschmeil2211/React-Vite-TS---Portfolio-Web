import ExperienceModel from '../../models/experience_model';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { app } from '../../services/firebase';


const db = getFirestore(app); // Obtiene una instancia de Firestore usando la configuración de Firebase

class ExperienceRepository {

    async getExperiences(): Promise<ExperienceModel[]> {
        try {
            const experienceSnapshot = await getDocs(collection(db, 'experiences'));
            const experience: ExperienceModel[] = [];
            experienceSnapshot.forEach((doc) => {
                const projectData = doc.data() as ExperienceModel;
                experience.push(projectData);
            });
            return experience;
        } catch (error) {
            console.error('Error fetching experiences from Firestore:', error);
            throw error;
        }
    }
}

export default ExperienceRepository;