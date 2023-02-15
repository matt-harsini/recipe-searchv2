import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import styles from "./NavBar.module.css";
import { links } from "./data";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.title}>Recipe Search</div>
        <button className={styles.navToggle}>
          <FaBars />
        </button>
        <div className={styles.linkContainer}>
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
    </nav>
  );
}

export default NavBar;
