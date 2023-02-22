import React from "react";
import styles from "./Main.module.css";

function Main({ innerRef }) {
  return (
    <main className={styles.main} ref={innerRef}>
      <div className={`${styles.container}`}>
        <span className={styles.subheading}>Plan meals</span>
        <h2 className={styles.heading}>
          Search a recipe database of over 2.3 million recipes
        </h2>
      </div>
      <section className={`${styles.container} ${styles.info}`}>
        <div>
          <p className={styles.stepNum}>01</p>
          <h3 className={styles.headingTertiary}>
            500+ top web recipe sources
          </h3>
          <p className={styles.text}>
            Our search algorithm returns the most relevant recipes from the most
            popular and best recipes sources on the web. We order recipes by
            their cookability and quality, so you can always count on getting
            the best recipes!
          </p>
        </div>
        <div className={styles.stepImg}>
          <img
            className={styles.img}
            src="../../../src/assets/159041840_l.jpg"
            alt="Mushroom curry"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
