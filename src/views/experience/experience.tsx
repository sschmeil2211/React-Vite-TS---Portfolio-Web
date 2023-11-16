import { useState, useEffect } from "react";

import styles from "./experience.module.css";
import { getImageUrl } from "../../utils/utils";
import ExperienceModel from "../../models/experience_model";
import ExperienceRepository from "../../view_models/repositories/experience_repository";

export const Experience = () => {

    const [experiences, setExperiences] = useState<ExperienceModel[]>([]);
    const experiencesRepository = new ExperienceRepository();

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const experiencesFromFirestore = await experiencesRepository.getExperiences();
                setExperiences(experiencesFromFirestore);
            } catch (error) {
                // Handle error
            }
        };

        fetchExperiences();
    }, [experiencesRepository]);

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <ul className={styles.history}>
                {experiences.map((experience, id) => {
                    return (
                        <li key={id} className={styles.historyItem}>
                            <div className={styles.historyItemDetails}>
                                <div className={styles.experienceTitleRow}>
                                    <img
                                        src={getImageUrl(`history/${experience.project}.png`)}
                                        alt={`${experience.organization} Logo`}
                                    />
                                    <div className={styles.experienceTitle}>
                                        <h3>{`${experience.role}, ${experience.organization}`}</h3>
                                        <p>{`${experience.startDate} - ${experience.endDate}`}</p>
                                    </div>
                                </div>
                                <ul>
                                    {experience.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                    })}
                                </ul>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};