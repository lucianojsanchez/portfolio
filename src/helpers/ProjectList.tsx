import { FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
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
import looking from "../assets/looking.png";
import rawg from "../assets/rawg.png";
import styles from "../components/Skills/Skills.module.scss";

export const ProjectList = [
  {
    name: "LookingPlace (Booking)",
    image: looking,
    skills: [
      {
        name: "JavaScript",
        icon: (
          <SiJavascript
            style={{ color: "#F7DF1E" }}
            title="JavaScript"
            className={styles.icon}
          />
        ),
      },
      {
        name: "CSS",
        icon: (
          <SiCss3
            style={{ color: "#1572B6" }}
            title="Css3"
            className={styles.icon}
          />
        ),
      },
      {
        name: "HTML",
        icon: (
          <SiHtml5
            style={{ color: "#E34F26" }}
            title="HTML5"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Bulma",
        icon: (
          <SiBulma
            style={{ color: "#00D1B2" }}
            title="Bulma"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Redux Toolkit",
        icon: (
          <SiRedux
            style={{ color: "#764ABC" }}
            title="Redux"
            className={styles.icon}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <SiReact
            style={{ color: "#61DAFB" }}
            title="React.Js"
            className={styles.icon}
          />
        ),
      },
      {
        name: "React Router",
        icon: (
          <SiReactrouter
            style={{ color: "#CA4245" }}
            title="React Router"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Node.Js",
        icon: (
          <SiNodedotjs
            style={{ color: "#339933" }}
            title="Node.Js"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Sequelize",
        icon: (
          <SiSequelize
            style={{ color: "#52B0E7" }}
            title="Sequelize"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <SiExpress
            style={{ color: "#000000" }}
            title="Express"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Firebase",
        icon: (
          <SiFirebase
            style={{ color: "#FFCA28" }}
            title="Firebase"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Vite",
        icon: (
          <SiVite
            style={{ color: "#646CFF" }}
            title="Vite"
            className={styles.icon}
          />
        ),
      },
    ],
    githubLink: "https://github.com/felduque/lookingplace",
  },
  {
    name: "Videogames Web (RAWG API)",
    image: rawg,
    skills: [
      {
        name: "JavaScript",
        icon: (
          <SiJavascript
            style={{ color: "#F7DF1E" }}
            title="JavaScript"
            className={styles.icon}
          />
        ),
      },
      {
        name: "CSS Modules",
        icon: (
          <SiCssmodules
            style={{ color: "#000000" }}
            title="Css Modules"
            className={styles.icon}
          />
        ),
      },
      {
        name: "CSS",
        icon: (
          <SiCss3
            style={{ color: "#1572B6" }}
            title="Css3"
            className={styles.icon}
          />
        ),
      },
      {
        name: "HTML",
        icon: (
          <SiHtml5
            style={{ color: "#E34F26" }}
            title="HTML5"
            className={styles.icon}
          />
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <SiPostgresql
            style={{ color: "#4169E1" }}
            title="PostgreSQL"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Redux",
        icon: (
          <SiRedux
            style={{ color: "#764ABC" }}
            title="Redux"
            className={styles.icon}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <SiReact
            style={{ color: "#61DAFB" }}
            title="React.Js"
            className={styles.icon}
          />
        ),
      },
      {
        name: "React Router",
        icon: (
          <SiReactrouter
            style={{ color: "#CA4245" }}
            title="React Router"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Node.Js",
        icon: (
          <SiNodedotjs
            style={{ color: "#339933" }}
            title="Node.Js"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Sequelize",
        icon: (
          <SiSequelize
            style={{ color: "#52B0E7" }}
            title="Sequelize"
            className={styles.icon}
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <SiExpress
            style={{ color: "#000000" }}
            title="Express"
            className={styles.icon}
          />
        ),
      },
    ],
  },
];
