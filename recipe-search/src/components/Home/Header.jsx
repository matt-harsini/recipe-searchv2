import React from "react";
import styles from "./Header.module.css";
import { motion, useAnimationControls } from "framer-motion";
import { useAnimateOnView } from "./useAnimateOnView";

const options = {
  triggerOnce: true,
};

function Header() {
  const { ref: header, controls: control } = useAnimateOnView(
    {
      y: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.4,
      },
      opacity: 1,
    },
    { y: -2000 },
    options
  );

  return (
    <header className={styles.header}>
      <div className={styles.landing}>
        <motion.div
          ref={header}
          animate={control}
          transition={{
            opacity: { ease: "easeInOut" },
          }}
          initial={{ opacity: 0 }}
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
            <a href="#section1" className={styles.learnMoreBtn}>
              Learn more
            </a>
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
