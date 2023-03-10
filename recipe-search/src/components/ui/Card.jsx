import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { AiFillFire } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

function Card(props) {
  const LABELS = [
    "Cholesterol",
    "Sodium",
    "Calcium",
    "Magnesium",
    "Potassium",
    "Iron",
  ];
  return (
    <motion.div
      ref={props.innerRef}
      className={styles.meals}
      animate={props.animate}
      initial={props.initial}
    >
      <img
        className={styles.mealImg}
        src={props.recipe.images.REGULAR.url}
        alt={props.recipe.label}
        loading="lazy"
      />
      <div className={styles.mealContent}>
        <div className={styles.tagLabels}>
          <div className={styles.mealTag}>
            <span className={`${styles.tag} ${styles.tagVegetarian}`}>
              Vegetarian
            </span>
          </div>
          <p className={styles.mealTitle}>
            <span className={styles.servings}>
              {props.recipe.yield} servings
            </span>
            {props.recipe.label}
          </p>
        </div>
        <div className={styles.mealCalories}>
          <AiFillFire className={styles.mealIcon} />
          <span className={styles.calories}>
            <strong>
              {Math.round(props.recipe.calories / props.recipe.yield) + " "}
            </strong>
            calories
          </span>
        </div>
        <ul className={styles.mealAttributes}>
          <li>
            <ul className={styles.mealMacros}>
              <li className={styles.mealAttribute}>
                <div className={styles.label}>
                  <RxDotFilled
                    className={styles.mealProtein}
                    viewBox="2.75 2.5 10 10"
                  />
                  <span className={styles.macroLabel}>
                    {props.recipe.digest[2].label}
                  </span>
                </div>
                <span className={styles.mealGrams}>
                  {Math.round(props.recipe.digest[2].total)}
                  {props.recipe.digest[2].unit}
                </span>
              </li>
              <li className={styles.mealAttribute}>
                <div className={styles.label}>
                  <RxDotFilled
                    className={styles.mealFat}
                    viewBox="2.75 2.5 10 10"
                  />
                  <span className={styles.macroLabel}>
                    {props.recipe.digest[0].label}
                  </span>
                </div>
                <span className={styles.mealGrams}>
                  {Math.round(props.recipe.digest[0].total)}
                  {props.recipe.digest[0].unit}
                </span>
              </li>
              <li className={styles.mealAttribute}>
                <div className={styles.label}>
                  <RxDotFilled
                    className={styles.mealCarbs}
                    viewBox="2.75 2.5 10 10"
                  />
                  <span className={styles.macroLabel}>
                    {props.recipe.digest[1].label}
                  </span>
                </div>
                <span className={styles.mealGrams}>
                  {Math.round(props.recipe.digest[1].total)}
                  {props.recipe.digest[1].unit}
                </span>
              </li>
            </ul>
          </li>
          <li className={styles.newGridRow2}>
            <ul className={styles.mealMicros}>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.CA.label}</span>
                <span className={styles.mealMicrograms}>25mg</span>
              </li>
              <li className={styles.justifyContent}>
                <span>Sodium</span>
                <span className={styles.mealMicrograms}>625mg</span>
              </li>
              <li className={styles.justifyContent}>
                <span>Calcium</span>
                <span className={styles.mealMicrograms}>44mg</span>
              </li>
              <li className={styles.justifyContent}>
                <span>Magnesium</span>
                <span className={styles.mealMicrograms}>34mg</span>
              </li>
              <li className={styles.justifyContent}>
                <span>Potassium</span>
                <span className={styles.mealMicrograms}>172mg</span>
              </li>
              <li className={styles.justifyContent}>
                <span>Iron</span>
                <span className={styles.mealMicrograms}>2mg</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Card;
