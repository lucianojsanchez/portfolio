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

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className={`${styles.nav} ${styles[theme]}`}>
      <button onClick={handleMenuClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        <li>
          <Link onClick={handleLinkClick} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/contact">
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
