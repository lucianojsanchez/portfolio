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
  const [showMenu, setShowMenu] = useState(false); // add state for showing/hiding menu

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // toggle the showMenu state
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // add code to toggle dark and light mode here
  };

  return (
    <div className={`${styles.nav} ${styles[theme]}`}>
      <button onClick={handleMenuClick}>
        {/* add onClick event listener */}
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`${styles.menu} ${showMenu ? styles.show : ""}`}>
        {" "}
        {/* add show/hide class based on showMenu state */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch
        className={styles.switchClass}
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        onColor="#100f0f"
        onHandleColor="#FFFFFF"
        handleDiameter={24}
        uncheckedIcon={
          <FaMoon
            style={{
              fontSize: "15px",
              paddingTop: "2.7px",
              paddingLeft: "5px",
              color: "#F5F3CE",
            }}
          />
        }
        checkedIcon={
          <FaSun
            style={{
              color: "#F28C38",
              paddingTop: "1.7px",
              paddingLeft: "5px",
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
