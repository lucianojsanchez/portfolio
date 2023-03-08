import React, { useContext } from "react";
import styles from "./Projects.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

import ProjectItem from "./ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
import looking from "../../assets/looking.png";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="background flex">
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
        </div>
        <Link to="/contact">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
