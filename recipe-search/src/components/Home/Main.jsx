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
            loading="lazy"
            className={styles.img}
            src="../../../src/assets/159041840_l.webp"
            alt="Mushroom curry"
          />
        </div>
        <div className={styles.stepImg}>
          <img
            loading="lazy"
            className={styles.img}
            src="../../../src/assets/169516589_l.jpg"
            alt="Fish with spices"
          />
        </div>
        <div>
          <p className={styles.stepNum}>02</p>
          <h3 className={styles.headingTertiary}>
            Filter by diet or allergy restrictions
          </h3>
          <p className={styles.text}>
            We developed over 80 diet and health filters for your use. Choose
            and pick specific recipes that best work with your diet or health
            conditions.
          </p>
        </div>
        <div>
          <p className={styles.stepNum}>03</p>
          <h3 className={styles.headingTertiary}>
            Full nutrition for each recipe
          </h3>
          <p className={styles.text}>
            We have the most accurate automated nutrition analysis on the web.
            You get detailed nutrition breakdown of each recipe with 25+
            nutrients and appropriateness for all major diets for free!
          </p>
        </div>
        <div className={styles.stepImg}>
          <img
            loading="lazy"
            className={styles.img}
            src="../../../src/assets/167974639_l.webp"
            alt="Plates with shrimp and pasta"
          />
        </div>
      </section>
    </main>
  );
}

export default Main;
