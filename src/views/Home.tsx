import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
import styles from "./Home.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="background flex">
      <div className={`${styles.home} ${styles[theme]}`}>
        <div className={styles.textContainer}>
          <h2 className="text">Hi!, My name is</h2>
          <h1>Luciano Sanchez.</h1>
        </div>
        <div className={styles.prompt}>
          <h3 className="text">I'm a Full Stack Web Developer</h3>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className={styles.arrow}>
          {" "}
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
};

export default Home;
