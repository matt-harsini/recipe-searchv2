import React, { useEffect } from "react";
import styles from "./Header.module.css";
import { motion, useAnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const options = {
  triggerOnce: true,
};

const variants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

function Header() {
  const [ref, inView] = useInView(options);
  const control = useAnimationControls();

  useEffect(() => {
    if (inView) {
      control.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.4,
        },
        opacity: 1,
      });
    }
    if (!inView) {
      control.start({ y: -10000 });
    }
  }, [inView]);

  return (
    <header className={styles.header}>
      <div className={styles.landing}>
        <motion.div
          ref={ref}
          animate={control}
          layout="position"
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
            variants={variants}
            whileHover="hover"
            whileTap="tap"
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
