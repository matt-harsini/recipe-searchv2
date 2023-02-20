import React from "react";
import styles from "./Main.module.css";

function Main({ innerRef }) {
  return (
    <main className={styles.main} ref={innerRef}>
      <div className={styles.info}></div>
    </main>
  );
}

export default Main;
