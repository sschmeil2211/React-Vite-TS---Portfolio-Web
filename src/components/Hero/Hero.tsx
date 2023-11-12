//import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sebastian</h1>
                <p className={styles.description}>
                    I'm a mobile developer with 3 years of experience using Flutter and React Native. Also Unity game developer.
                    Contact me if you want to know more about me
                </p>
                <a href="mailto:schmeil.sebastian97@gmail.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            {/* <img
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            /> */}
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};