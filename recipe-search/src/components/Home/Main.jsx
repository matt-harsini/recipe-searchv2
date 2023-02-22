import React from "react";
import styles from "./Main.module.css";

function Main({ innerRef }) {
  return (
    <main className={styles.main} ref={innerRef}>
      <div className={`${styles.container}`}>
        <span className={styles.subheading}>Plan meals</span>
        <h2 className={styles.heading}>
          Search millions of recipes with nutritional info and step-by-step
          instructions
        </h2>
      </div>
      <section className={`${styles.container} ${styles.info}`}>
        <div className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          ipsum qui sed ad in cum tempora illum ipsam voluptates sit omnis error
          quasi voluptatibus, facilis deleniti aperiam beatae rerum mollitia!
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default Main;
