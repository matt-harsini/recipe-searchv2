import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { links } from "./data";
function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      console.log(linksHeight);
      linkContainer.current.style.height = `${linksHeight}px`;
      console.log(linkContainer.current.style.height);
    } else {
      linkContainer.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.title}>Recipe Search</div>
          <button
            className={styles.navToggle}
            onClick={() => setShowLinks((prevState) => !prevState)}
          >
            <FaBars />
          </button>
        </div>
        <div className={styles.linkContainer} ref={linkContainer}>
          <div className={styles.links} ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <NavLink
                  key={id}
                  to={url}
                  className={`${styles.navLink} ${
                    text === "Recipes" ? styles.recipeBtn : ""
                  }`}
                >
                  {text}
                </NavLink>
              );
            })}
            <a href="https://github.com/mk975025" className={styles.iconLinks}>
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-kim-667392206/"
              className={styles.iconLinks}
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
