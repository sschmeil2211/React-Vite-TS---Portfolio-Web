import styles from "./footer.module.css";
import { getImageUrl } from "../../utils/utils";

export const Footer = () => {
    return (
        <footer id="footer" className={styles.container}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/emailIcon.png")}
                        alt="Email icon"
                        height={40}
                    />
                    <a href="mailto:schmeil.sebastian97@gmail.com">schmeil.sebastian97@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                        height={40}
                    />
                    <a href="https://www.linkedin.com/in/sebastian-schmeil">linkedin.com/sebastian-schmeil</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/githubIcon.png")}
                        alt="Github icon"
                        height={40} />
                    <a href="https://github.com/sschmeil2211">github.com/sschmeil2211</a>
                </li>
            </ul>
        </footer>
    );
};