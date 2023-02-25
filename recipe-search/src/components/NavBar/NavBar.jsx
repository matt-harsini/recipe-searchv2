import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { GiChickenOven } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { links, socials } from "./data";
import styles from "./NavBar.module.scss";

function NavBar({ navBar }) {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainer.current.style.height = `${linksHeight}px`;
      console.log(linkContainer.current.style.height);
    } else {
      linkContainer.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className={styles.nav} ref={navBar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className={styles.title}>
            <GiChickenOven style={{ width: "19.5px", height: "19.5px" }} />
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
                <div className={styles.buttonContainer} key={id}>
                  <NavLink
                    to={url}
                    onClick={() => setShowLinks((prevState) => !prevState)}
                    style={{ textDecoration: "none" }}
                    className={`${
                      text === "Home" ? styles.homeBtn : styles.buttonNav
                    }`}
                  >
                    {text}
                  </NavLink>
                </div>
              );
            })}

            {socials.map(({ id, url, icon }) => {
              return (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={id}
                  className={styles.motionButton}
                >
                  <a href={url} key={id} className={styles.iconLinks}>
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
