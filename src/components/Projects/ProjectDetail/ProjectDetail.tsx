import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../../helpers/ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Projects.module.scss";
import { ThemeContext } from "../../../context/ThemeContext";
import { SiBentley, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = ProjectList[Number(id)];
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className="background flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.project} ${styles[theme]}`}>
        <Link to="/projects">
          <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp} />
        </Link>
        <div className={styles.textContainer}>
          <h1>{project.name}</h1>
        </div>
        <div className={styles.cardAbout}>
          <div className={styles.project}>
            <a href="https://front-looking.vercel.app/">
              <img src={project.image} alt={project.name} />
            </a>
            <p>
              <div className={styles.skills}>
                {project.skills.map((skill) => (
                  <div className={styles.skill} key={skill.name}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
                <a href={project.githubLink} className={styles.githubLink}>
                  <SiGithub
                    className={styles.gitHub}
                    style={{ stroke: "white", strokeWidth: "0.5px" }}
                  />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
