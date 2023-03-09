import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Home.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <motion.div
      className="background flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.home} ${styles[theme]}`}>
        <div className={styles.textContainer}>
          <h2>Hi!, My name is</h2>
          <h1>Luciano Sanchez.</h1>
        </div>
        <div className={styles.prompt}>
          <h3>I'm a Full Stack Web Developer</h3>
          <a href="https://github.com/lucianojsanchez" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucianojsanchez/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="mailto:lucianojoelsanchez@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <Link to="/about">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
