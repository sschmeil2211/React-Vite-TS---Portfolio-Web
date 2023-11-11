import styles from "./Experience.module.css"; 
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDetails}>
                                    <div className={styles.experienceTitleRow}>
                                        <img
                                            src={getImageUrl(historyItem.imageSrc)}
                                            alt={`${historyItem.organisation} Logo`}
                                        />
                                        <div className={styles.experienceTitle}>
                                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        </div>
                                    </div>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
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