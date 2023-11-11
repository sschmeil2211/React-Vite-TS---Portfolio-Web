import styles from "./Knowledge.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Knowledge = () => {
    return (
        <section className={styles.container} id="knowledge">
            <h2 className={styles.title}>Knowledge</h2>
            <div className={styles.content}>
                {skills.map((section, id) => (
                    <div key={id}>
                        <h3 className={styles.skillTitle}>{section.name}</h3>
                        <div className={styles.skills}>
                            {section.skills.map((skill, skillId) => (
                                <div key={skillId} className={styles.skill}>
                                    <div className={styles.skillImageContainer}>
                                        <img 
                                            src={getImageUrl(skill.imageSrc)} 
                                            alt={skill.title} 
                                        />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))} 
            </div>
        </section>
    );
};