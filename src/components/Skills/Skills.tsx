import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Skills.module.scss";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiCssmodules,
  SiBootstrap,
  SiBulma,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiRedux,
  SiReactrouter,
  SiSass,
  SiVite,
  SiPnpm,
  SiFirebase,
  SiFontawesome,
  SiMongodb,
  SiJquery,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className="background flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.skills} ${styles[theme]}`}>
        <Link to="/about">
          <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp} />
        </Link>
        <div className={styles.textContainer}>
          <h1>Skills</h1>
        </div>
        <div className={styles.cardAbout}>
          <div className={styles.skillSet}>
            <h3>Front-End</h3>
            <SiHtml5
              style={{ color: "#E34F26" }}
              title="HTML5"
              className={styles.icon}
            />
            <SiCss3
              style={{ color: "#1572B6" }}
              title="Css3"
              className={styles.icon}
            />
            <SiCssmodules title="Css Modules" className={styles.icon} />
            <SiReact
              style={{ color: "#61DAFB" }}
              title="React.Js"
              className={styles.icon}
            />
            <SiReactrouter
              style={{ color: "#CA4245" }}
              title="React Router"
              className={styles.icon}
            />
            <SiRedux
              style={{ color: "#764ABC" }}
              title="Redux"
              className={styles.icon}
            />
            <SiBootstrap
              style={{ color: "#7952B3" }}
              title="Bootstrap"
              className={styles.icon}
            />
            <SiBulma
              style={{ color: "#00D1B2" }}
              title="Bulma"
              className={styles.icon}
            />
            <SiFontawesome
              style={{ color: "#528DD7" }}
              title="FontAwesome"
              className={styles.icon}
            />
            <SiJavascript
              style={{ color: "#F7DF1E" }}
              title="JavaScript"
              className={styles.icon}
            />
            <SiSass
              style={{ color: "#CC6699" }}
              title="Sass"
              className={styles.icon}
            />
            <SiTypescript
              style={{ color: "#3178C6" }}
              title="TypeScript"
              className={styles.icon}
            />
            <SiVite
              style={{ color: "#646CFF" }}
              title="Vite"
              className={styles.icon}
            />
          </div>
          <div className={styles.skillSet}>
            <h3>Back-End</h3>
            <SiNodedotjs
              style={{ color: "#339933" }}
              title="Node.Js"
              className={styles.icon}
            />
            <SiExpress
              style={{ color: "#000000" }}
              title="Express"
              className={styles.icon}
            />
            <SiMysql
              style={{ color: "#4479A1" }}
              title="MySQL"
              className={styles.icon}
            />

            <SiPostgresql
              style={{ color: "#4169E1" }}
              title="PostgreSQL"
              className={styles.icon}
            />
            <SiSequelize
              style={{ color: "#52B0E7" }}
              title="Sequelize"
              className={styles.icon}
            />
            <SiFirebase
              style={{ color: "#FFCA28" }}
              title="Firebase"
              className={styles.icon}
            />
            <SiMongodb
              style={{ color: "#47A248" }}
              title="MongoDB"
              className={styles.icon}
            />
            <div className={styles.skillsOther}>
              <h3>Others</h3>
              <SiPnpm
                style={{ color: "#F69220" }}
                title="Pnpm"
                className={styles.icon}
              />
              <SiGit
                style={{ color: "#F05032" }}
                title="Git"
                className={styles.icon}
              />
              <SiGithub
                style={{ color: "#181717" }}
                title="GitHub"
                className={styles.icon}
              />
              <SiAdobephotoshop
                style={{ color: "#31A8FF" }}
                title="Adobe Photoshop"
                className={styles.icon}
              />
              <SiPostman
                style={{ color: "#FF6C37" }}
                title="Postman"
                className={styles.icon}
              />
            </div>
          </div>
        </div>
        <Link to="/projects">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Skills;
