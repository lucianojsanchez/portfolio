import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false); // add state for showing/hiding menu

  const handleMenuClick = () => {
    setShowMenu(!showMenu); // toggle the showMenu state
  };

  return (
    <div className={`${styles.nav} ${styles[theme]}`}>
      <button onClick={handleMenuClick}>
        {" "}
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
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={24}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
      />
    </div>
  );
};

export default NavBar;
