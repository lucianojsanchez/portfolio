import React, { useContext } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="background flex">
      <div className={`${styles.contact} ${styles[theme]}`}>
        <FontAwesomeIcon icon={faArrowUp} className={styles.arrowUp} />
        <div className={styles.textContainer}>
          <h1>Contact</h1>
          <p>Hooked? Contact me through these lines</p>
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
        <FontAwesomeIcon icon={faArrowDown} className={styles.arrowDown} />
      </div>
    </div>
  );
};

export default Contact;
