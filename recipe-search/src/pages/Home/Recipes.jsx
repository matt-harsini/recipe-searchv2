import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
function Recipes() {
  const { ref: c1, controls: c1Control } = useAnimateOnView();
  const { ref: c2, controls: c2Control } = useAnimateOnView({
    transition: {
      type: "spring",
      delay: 0.3,
    },
    opacity: 1,
  });
  const { ref: s2Heading, controls: s2Control } = useAnimateOnView(
    {
      x: 0,
      transition: {
        delay: 1,
        type: "spring",
      },
      opacity: 1,
    },
    { x: 200 },
    { threshold: 0.3, triggerOnce: true }
  );
  const { ref: h2Heading, controls: h2Control } = useAnimateOnView(
    {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
      },
      opacity: 1,
    },
    { x: -300 },
    { threshold: 0.3, triggerOnce: true }
  );

  return (
    <section className={`${styles.recipes}`}>
      <div
        className={`${styles.container} ${styles.recipes} ${styles.paddingTop} ${styles.centerText} ${styles.overflowAuto}`}
        ref={s2Heading}
      >
        <motion.span
          className={styles.subheadingRecipe}
          animate={s2Control}
          initial={{ opacity: 0 }}
          ref={h2Heading}
        >
          Recipes
        </motion.span>
        <motion.h2
          className={styles.headingRecipe}
          animate={h2Control}
          initial={{ opacity: 0 }}
        >
          Find your next favorite recipe in seconds
        </motion.h2>
      </div>
      <div
        className={`${styles.container} ${styles.infoRecipes} ${styles.cardContainer}`}
      >
        <Card innerRef={c1} animate={c1Control} initial={{ opacity: 0 }} />
        <Card innerRef={c2} animate={c2Control} initial={{ opacity: 0 }} />
        <div className={styles.diet}>
          <h3 className={styles.headingDiet}>Works with any diet:</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Vegetarian</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Vegan</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Pescetarian</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Gluten-Free</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Dairy-Free</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Keto-Friendly</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Paleo</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>FODMAP-Free</span>
            </li>
            <li className={styles.listItem}>
              <IoCheckmarkOutline className={styles.checkmark} />
              <span>Kidney-Friendly</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.center}>
        <Link to="/search-recipes" className={styles.startSearchingBtn}>
          See all recipes →
        </Link>
      </div>
    </section>
  );
}

export default Recipes;
