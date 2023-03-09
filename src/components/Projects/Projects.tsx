import React, { useContext } from "react";
import styles from "./Projects.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

import ProjectItem from "./ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className="background flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.project} ${styles[theme]}`}>
        <Link to="/skills">
          <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp} />
        </Link>
        <div className={styles.textContainer}>
          <h1>Projects</h1>
        </div>
        <div className={styles.cardAbout}>
          <div className={styles.projectList}>
            {ProjectList.map((project, idx) => {
              return (
                <ProjectItem
                  id={idx}
                  name={project.name}
                  image={project.image}
                />
              );
            })}
          </div>
          <h3 style={{ paddingTop: "1em" }}>More projects are comming!</h3>
        </div>
        <Link to="/contact">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Projects;
