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
          <h1 className={styles.h1}>Recipe search</h1>
        </div>
      </header>
    </>
  );
}

export default Home;
