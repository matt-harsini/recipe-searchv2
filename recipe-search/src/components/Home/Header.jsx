import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

function Header() {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <header className={styles.header}>
      <div className={styles.landing}>
        <motion.div
          variants={cardVariants}
          viewport={{ once: true }}
          className={styles.info}
        >
          <h1 className={styles.h1}>Recipe search</h1>
          <p className={styles.p}>
            Indulge in a culinary journey with our recipe website
          </p>
          <button className={styles.headerBtn}>Learn more</button>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
