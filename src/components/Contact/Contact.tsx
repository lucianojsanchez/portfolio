import React, { useContext } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SiHandshake } from "react-icons/si";
import { motion } from "framer-motion";
const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      className="background flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.contact} ${styles[theme]}`}>
        <Link to="/projects">
          <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp} />
        </Link>
        <div className={styles.textContainer}>
          <h1>Contact</h1>
          <h2>Hooked? Contact me through these lines</h2>
        </div>
        <div className={styles.cardContact}>
          <div className={styles.contactCard}>
            <button>
              <a
                href="https://github.com/lucianojsanchez"
                target="_blank"
                className=""
              >
                <p>/lucianojsanchez</p>
                <FaGithub />
              </a>
            </button>
            <button className="">
              <a href="https://github.com/lucianojsanchez" target="_blank">
                <p>/lucianojsanchez</p>
                <FaLinkedin />
              </a>
            </button>
            <button>
              <a href="https://wa.link/m8rzyf" target="_blank">
                <p>(+54)0381 624-1914</p>
                <FaWhatsapp />
              </a>
            </button>
            <button>
              <a href="mailto:lucianojoelsanchez@gmail.com" target="_blank">
                <p>lucianojoelsanchez@gmail.com</p>
                <FaEnvelope />
              </a>
            </button>
          </div>
        </div>
        <div>
          <h3 style={{ paddingTop: "1em" }}>
            Thanks for your time!, I hope we can talk soon...
          </h3>
          <SiHandshake className={styles.handShake} />
        </div>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
