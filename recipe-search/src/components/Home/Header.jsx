import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.landing}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.info}
        >
          <h1 className={styles.h1}>Recipe search</h1>
          <p className={styles.p}>
            Indulge in a culinary journey with our recipe website
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.headerBtn}
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
