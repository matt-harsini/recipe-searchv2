import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { AiFillFire } from "react-icons/ai";
function Card(props) {
  return (
    <motion.div ref={props.innerRef} className={styles.meals}>
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
    </motion.div>
  );
}

export default Card;
