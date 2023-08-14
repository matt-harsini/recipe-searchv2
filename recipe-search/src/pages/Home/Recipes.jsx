import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import { useFetchRecipe } from "../../hooks/useFetchRecipe";

function Recipes() {
  const { ref: s2Heading, controls: s2Control } = useAnimateOnView();
  const { ref: h2Heading, controls: h2Control } = useAnimateOnView();
  const { data: data } = useFetchRecipe("Tacos");
  return (
    <section className={`${styles.recipes}`}>
      <div
        className={`${styles.container} ${styles.headingRecipes} ${styles.paddingTop} ${styles.centerText} ${styles.overflowAuto}`}
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
      <div className={`${styles.container}  ${styles.cardContainer}`}>
        {data.hits.length &&
          data.hits.slice(0, 2).map((recipe) => {
            return (
              <Card
                initial={{ opacity: 0 }}
                recipe={recipe.recipe}
                key={recipe.recipe.uri}
              />
            );
          })}
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
      <div className={`${styles.center} ${styles.relative}`}>
        <Link to="/search-recipes" className={styles.startSearchingBtn}>
          See all recipes →
        </Link>
      </div>
    </section>
  );
}

export default Recipes;
