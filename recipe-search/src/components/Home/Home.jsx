import React from "react";

import styles from "./Home.module.css";
import { motion } from "framer-motion";
function Home() {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.landing}>
          <div className={styles.info}>
            <h1 className={styles.h1}>Recipe search</h1>
            <p className={styles.p}>
              Indulge in a culinary journey with our recipe website
            </p>
            <button className={styles.headerBtn}>Learn more</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
