import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (Link: string) => {
    setShowMenu(false);
    setActiveLink(Link);
  };

  return (
    <div className={`${styles.nav} ${styles[theme]}`}>
      <button onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <li>
          <Link
            onClick={() => handleLinkClick("Home")}
            to="/"
            className={activeLink === "Home" ? styles.active : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("About Me")}
            to="/about"
            className={activeLink === "About Me" ? styles.active : ""}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("Skills")}
            to="/skills"
            className={activeLink === "Skills" ? styles.active : ""}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("Projects")}
            to="/projects"
            className={activeLink === "Projects" ? styles.active : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleLinkClick("Contact")}
            to="/contact"
            className={activeLink === "Contact" ? styles.active : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
      <Switch
        className={styles.switchClass}
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        onColor="#333333"
        offColor="#BFD7FE"
        onHandleColor="#FFFFFF"
        handleDiameter={24}
        uncheckedIcon={
          <FaSun
            style={{
              color: "#FFA300",
              paddingTop: "2px",
              paddingLeft: "5px",
            }}
          />
        }
        checkedIcon={
          <FaMoon
            style={{
              fontSize: "15px",
              paddingTop: "2.7px",
              paddingLeft: "5px",
              color: "#F5F3CE",
            }}
          />
        }
        height={20}
        width={48}
      />
    </div>
  );
};

export default NavBar;
