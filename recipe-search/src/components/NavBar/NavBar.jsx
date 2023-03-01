import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiMeatCleaver } from "react-icons/gi";

import { RxHamburgerMenu } from "react-icons/rx";
import { links } from "../../data/data";
import styles from "./NavBar.module.scss";

function Navbar({ navbar }) {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainer = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainer.current.style.height = `${linksHeight}px`;
    } else {
      linkContainer.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className={styles.nav} ref={navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div>
            <GiMeatCleaver className={styles.icon} />
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
