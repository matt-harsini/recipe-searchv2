import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { AiFillFire } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
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
        type: "spring",
        duration: 1,
        delay: 0.7,
      },
      opacity: 1,
    },
    { x: 250 },
    { threshold: 0.9, triggerOnce: true }
  );
  const { ref: h2Heading, controls: h2Control } = useAnimateOnView(
    {
      x: 0,
      transition: {
        type: "spring",
        duration: 1.4,
        delay: 1,
        bounce: 0.5,
      },
      opacity: 1,
    },
    { x: -250 },
    { threshold: 0.9, triggerOnce: true }
  );
  return (
    <section className={`${styles.recipes}`}>
      <div
        className={`${styles.container} ${styles.recipes} ${styles.paddingTop} ${styles.centerText}`}
      >
        <motion.span
          className={styles.subheadingRecipe}
          animate={s2Control}
          ref={s2Heading}
          initial={{ opacity: 0 }}
        >
          Recipes
        </motion.span>
        <motion.h2
          className={styles.headingRecipe}
          animate={h2Control}
          ref={h2Heading}
          initial={{ opacity: 0 }}
        >
          Find your next favorite recipe in seconds
        </motion.h2>
      </div>
      <div
        className={`${styles.container} ${styles.infoRecipes} ${styles.cardContainer}`}
      >
        <motion.div
          className={styles.meals}
          animate={c1Control}
          ref={c1}
          initial={{ opacity: 0 }}
        >
          <img
            className={styles.mealImg}
            src="../../../src/assets/meal-1.jpg"
            alt="Japanese Gyozas"
            loading="lazy"
          />
          <div className={styles.mealContent}>
            <div className={styles.mealTag}>
              <span className={`${styles.tag} ${styles.tagVegetarian}`}>
                Vegetarian
              </span>
            </div>
            <p className={styles.mealTitle}>
              Japanese Gyozas
              <span className={styles.servings}>14 servings</span>
            </p>
            <ul className={styles.mealAttributes}>
              <li className={styles.mealAttribute}>
                <AiFillFire className={styles.mealIcon} />
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className={styles.meals}
          animate={c2Control}
          ref={c2}
          initial={{ opacity: 0 }}
        >
          <img
            className={styles.mealImg}
            src="../../../src/assets/meal-1.jpg"
            alt="Japanese Gyozas"
            loading="lazy"
          />
          <div className={styles.mealContent}>
            <div className={styles.mealTag}>
              <span className={`${styles.tag} ${styles.tagVegetarian}`}>
                Vegetarian
              </span>
            </div>
            <p className={styles.mealTitle}>
              Japanese Gyozas
              <span className={styles.servings}>14 servings</span>
            </p>
            <ul className={styles.mealAttributes}>
              <li className={styles.mealAttribute}>
                <AiFillFire className={styles.mealIcon} />
              </li>
            </ul>
          </div>
        </motion.div>
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
