import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { AiFillFire } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import { useFetchRecipe } from "../../hooks/useFetchRecipe";
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
        <Card animate={c1Control} innerRef={c1} initial={{ opacity: 0 }}>
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
              <li className={styles.mealCalories}>
                <AiFillFire className={styles.mealIcon} />
                <span className={styles.calories}>
                  <strong>650 </strong>
                  calories
                </span>
              </li>
              <li className={styles.newGridRow}>
                <ul className={styles.mealMacros}>
                  <li className={styles.mealAttribute}>
                    <div className={styles.label}>
                      <RxDotFilled
                        className={styles.mealProtein}
                        viewBox="2.75 2.5 10 10"
                      />
                      <span className={styles.macroLabel}>Protein</span>
                    </div>
                    <span className={styles.mealGrams}>42g</span>
                  </li>
                  <li className={styles.mealAttribute}>
                    <div className={styles.label}>
                      <RxDotFilled
                        className={styles.mealFat}
                        viewBox="2.75 2.5 10 10"
                      />
                      <span className={styles.macroLabel}>Fat</span>
                    </div>
                    <span className={styles.mealGrams}>42g</span>
                  </li>
                  <li className={styles.mealAttribute}>
                    <div className={styles.label}>
                      <RxDotFilled
                        className={styles.mealCarbs}
                        viewBox="2.75 2.5 10 10"
                      />
                      <span className={styles.macroLabel}>Carbs</span>
                    </div>
                    <span className={styles.mealGrams}>42g</span>
                  </li>
                </ul>
              </li>
              <li className={styles.newGridRow2}>
                <ul className={styles.mealMicros}>
                  <li className={styles.justifyContent}>
                    <span>Cholesterol</span>
                    <span className={styles.mealMicroGrams}>25mg</span>
                  </li>
                  <li className={styles.justifyContent}>
                    <span>Sodium</span>
                    <span className={styles.mealMicroGrams}>625mg</span>
                  </li>
                  <li className={styles.justifyContent}>
                    <span>Calcium</span>
                    <span className={styles.mealMicroGrams}>44mg</span>
                  </li>
                  <li className={styles.justifyContent}>
                    <span>Magnesium</span>
                    <span className={styles.mealMicroGrams}>34mg</span>
                  </li>
                  <li className={styles.justifyContent}>
                    <span>Potassium</span>
                    <span className={styles.mealMicroGrams}>172mg</span>
                  </li>
                  <li className={styles.justifyContent}>
                    <span>Iron</span>
                    <span className={styles.mealMicroGrams}>2mg</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>
        <Card animate={c2Control} innerRef={c2} initial={{ opacity: 0 }}>
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
        </Card>
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
