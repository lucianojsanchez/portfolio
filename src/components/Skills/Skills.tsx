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
          <h3>Front-End</h3>
          <div className={styles.skillSet}>
            <div className={styles.skill}>
              <SiHtml5
                style={{ color: "#E34F26" }}
                title="HTML5"
                className={styles.icon}
              />
              <p>HTML5</p>
            </div>
            <div className={styles.skill}>
              <SiCss3
                style={{ color: "#1572B6" }}
                title="Css3"
                className={styles.icon}
              />
              <p>CSS3</p>
            </div>
            <div className={styles.skill}>
              <SiCssmodules title="Css Modules" className={styles.icon} />
              <p>CSS Modules</p>
            </div>
            <div className={styles.skill}>
              <SiReact
                style={{ color: "#61DAFB" }}
                title="React.Js"
                className={styles.icon}
              />
              <p>ReactJS</p>
            </div>
            <div className={styles.skill}>
              <SiReactrouter
                style={{ color: "#CA4245" }}
                title="React Router"
                className={styles.icon}
              />
              <p>React Router</p>
            </div>
            <div className={styles.skill}>
              <SiRedux
                style={{ color: "#764ABC" }}
                title="Redux"
                className={styles.icon}
              />
              <p>Redux/Toolkit</p>
            </div>
            <div className={styles.skill}>
              <SiBootstrap
                style={{ color: "#7952B3" }}
                title="Bootstrap"
                className={styles.icon}
              />

              <p>Bootstrap</p>
            </div>
            <div className={styles.skill}>
              <SiBulma
                style={{ color: "#00D1B2" }}
                title="Bulma"
                className={styles.icon}
              />
              <p>Bulma</p>
            </div>
            <div className={styles.skill}>
              <SiFontawesome
                style={{ color: "#528DD7" }}
                title="FontAwesome"
                className={styles.icon}
              />
              <p>FontAwesome</p>
            </div>
            <div className={styles.skill}>
              <SiJavascript
                style={{ color: "#F7DF1E" }}
                title="JavaScript"
                className={styles.icon}
              />
              <p>Javascript</p>
            </div>
            <div className={styles.skill}>
              <SiSass
                style={{ color: "#CC6699" }}
                title="Sass"
                className={styles.icon}
              />
              <p>Sass</p>
            </div>
            <div className={styles.skill}>
              <SiTypescript
                style={{ color: "#3178C6" }}
                title="TypeScript"
                className={styles.icon}
              />
              <p>Typescript</p>
            </div>
            <div className={styles.skill}>
              <SiVite
                style={{ color: "#646CFF" }}
                title="Vite"
                className={styles.icon}
              />
              <p>Vite</p>
            </div>
          </div>
          <h3>Back-End</h3>
          <div className={styles.skillSet}>
            <div className={styles.skill}>
              <SiNodedotjs
                style={{ color: "#339933" }}
                title="Node.Js"
                className={styles.icon}
              />
              <p>NodeJs</p>
            </div>
            <div className={styles.skill}>
              <SiExpress
                style={{ color: "#000000" }}
                title="Express"
                className={styles.icon}
              />
              <p>Express</p>
            </div>
            <div className={styles.skill}>
              <SiMysql
                style={{ color: "#4479A1" }}
                title="MySQL"
                className={styles.icon}
              />
              <p>MySQL</p>
            </div>
            <div className={styles.skill}>
              <SiPostgresql
                style={{ color: "#4169E1" }}
                title="PostgreSQL"
                className={styles.icon}
              />
              <p>PostgreSQL</p>
            </div>
            <div className={styles.skill}>
              <SiSequelize
                style={{ color: "#52B0E7" }}
                title="Sequelize"
                className={styles.icon}
              />
              <p>Sequelize</p>
            </div>
            <div className={styles.skill}>
              <SiFirebase
                style={{ color: "#FFCA28" }}
                title="Firebase"
                className={styles.icon}
              />
              <p>Firebase</p>
            </div>
            <div className={styles.skill}>
              <SiMongodb
                style={{ color: "#47A248" }}
                title="MongoDB"
                className={styles.icon}
              />
              <p>MongoDB</p>
            </div>
          </div>
          <h3>Others</h3>
          <div className={styles.skillSet}>
            <div className={styles.skill}>
              <SiPnpm
                style={{ color: "#F69220" }}
                title="Pnpm"
                className={styles.icon}
              />
              <p>Pnpm</p>
            </div>
            <div className={styles.skill}>
              <SiGit
                style={{ color: "#F05032" }}
                title="Git"
                className={styles.icon}
              />
              <p>Git</p>
            </div>
            <div className={styles.skill}>
              <SiGithub
                style={{ color: "#181717" }}
                title="GitHub"
                className={styles.icon}
              />
              <p>GitHub</p>
            </div>

            <div className={styles.skill}>
              <SiPostman
                style={{ color: "#FF6C37" }}
                title="Postman"
                className={styles.icon}
              />
              <p>Postman</p>
            </div>
            <div className={styles.skill}>
              <SiAdobephotoshop
                style={{ color: "#31A8FF" }}
                title="Adobe Photoshop"
                className={styles.icon}
              />
              <p>Photoshop</p>
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
