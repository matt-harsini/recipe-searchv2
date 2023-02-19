import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Header() {
  const [ref, inView] = useInView();
  const control = useAnimationControls();
  const boxVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <header className={styles.header}>
      <div className={styles.landing}>
        <motion.div
          ref={ref}
          animate={control}
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
