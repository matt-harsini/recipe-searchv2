import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { links, socials } from "./data";
import styles from "./NavBar.module.css";
import { GiChickenOven } from "react-icons/gi";
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
          <div className={styles.title}>
            <GiChickenOven />
          </div>
          <button
            className={styles.navToggle}
            onClick={() => setShowLinks((prevState) => !prevState)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
        <div className={styles.linkContainer} ref={linkContainer}>
          <div className={styles.links} ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={id}
                  className={`${styles.navLink} ${
                    text === "Recipes" ? styles.recipeBtn : ""
                  }`}
                >
                  <NavLink
                    to={url}
                    onClick={() => setShowLinks((prevState) => !prevState)}
                  >
                    {text}
                  </NavLink>
                </motion.button>
              );
            })}
            {socials.map(({ id, url, icon }) => {
              return (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={id}
                  className={styles.iconLinks}
                >
                  <a href={url} key={id}>
                    {icon}
                  </a>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
