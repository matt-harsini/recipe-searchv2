import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

function Header() {
  useEffect(() => {
    const appHeight = () =>
      document
        .getElementById("header")
        .style.setProperty("--app-height", `${window.innerHeight}px`);
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);
  return (
    <header className={styles.header} id="header">
      <div className={styles.landing}>
        <div className={styles.info}>
          <h1 className={styles.h1}>Recipe search</h1>
          <p className={styles.p}>
            Indulge in a culinary journey with our recipe website
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.headerBtn}
          >
            <motion.a
              href="#section1"
              id="scroll"
              className={styles.learnMoreBtn}
            >
              Learn more
            </motion.a>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default Header;
