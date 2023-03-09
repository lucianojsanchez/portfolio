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
          <Link to="/about">
            <FontAwesomeIcon icon={faArrowDown} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
