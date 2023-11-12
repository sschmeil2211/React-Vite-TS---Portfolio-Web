import { getImageUrl } from "../../utils";
import styles from "./About.module.css";


export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                /> */}
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/mobile-development.png")}
                            alt="Mobile icon"
                            className={styles.aboutItemImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Mobile Developer</h3>
                            <p>
                                I'm a mobile developer with experience in Swift, React Native and Flutter.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/game-development.png")}
                            alt="Game icon"
                            className={styles.aboutItemImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Game Developer</h3>
                            <p>
                                I'm a game design and development student and I use Unity for my projects.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/game-designer.png")}
                            alt="Designer icon"
                            className={styles.aboutItemImage}
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Game Designer</h3>
                            <p>
                                I create 3D designs and models for video games and as a hobby.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};