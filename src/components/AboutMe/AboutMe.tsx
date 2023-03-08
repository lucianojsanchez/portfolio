import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import styles from "./AboutMe.module.scss";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="background flex">
      <div className={`${styles.aboutMe} ${styles[theme]}`}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp} />
        </Link>
        <div className={styles.textContainer}>
          <h1>About Me</h1>
        </div>
        <div className={styles.cardAbout}>
          <p className="text">
            I've been fascinated with technology since I was a kid, and now I'm
            pursuing web development as a career. Over the past year, I've been
            expanding my knowledge in various programming languages and
            frameworks. As a full-stack developer, I enjoy solving complex
            problems and creating innovative solutions.
            <br />
            <br />
            I'm always eager to learn and stay up-to-date with the latest trends
            and technologies in the industry. I'm currently seeking my first job
            in the IT field and am excited about the opportunities and
            challenges that lie ahead. Outside of work, I enjoy spending time
            with family and friends, traveling, and exploring new technologies
            and programming languages.
            <br />
            <br />
            Feel free to reach out to me to discuss any projects or
            opportunities you may have.
          </p>
        </div>
        <div className={styles.arrowDown}>
          {" "}
          <Link to="/skills">
            <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
