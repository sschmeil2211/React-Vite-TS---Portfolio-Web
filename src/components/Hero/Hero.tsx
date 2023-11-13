import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

    const redirectToEmail = () => {
        window.location.href = 'mailto:schmeil.sebastian97@gmail.com';
    };

    const redirectToLinkedIn = () => {
        window.location.href = 'https://www.linkedin.com/in/sebastian-schmeil';
    };

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sebastian</h1>
                <p className={styles.description}>
                    I'm a mobile developer with 2+ years of experience using Flutter and React Native. Also Unity game developer.
                    Contact me if you want to know more about me
                </p>
                <ul className={styles.links}>
                    <button
                        className={styles.link}
                        type="button"
                        onClick={redirectToEmail}
                    >
                        <img
                            src={getImageUrl("contact/emailIcon.png")}
                            height={40}
                            alt="Email icon"
                        />
                        <a>schmeil.sebastian97@gmail.com</a>
                    </button>
                    <button
                        className={styles.link}
                        type="button"
                        onClick={redirectToLinkedIn}
                    >
                        <img
                            src={getImageUrl("contact/linkedinIcon.png")}
                            height={40}
                            alt="LinkedIn icon"
                        />
                        <a>linkedin.com/sebastian-schmeil</a>
                    </button>
                </ul>
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