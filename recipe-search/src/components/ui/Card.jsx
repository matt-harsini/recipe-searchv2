import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { RxDotFilled } from "react-icons/rx";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { BiTachometer } from "react-icons/bi";
function Card(props) {
  const getImg = (img) => {
    if (img.LARGE)
      return {
        url: img.REGULAR.url,
      };
    return {
      url: img.REGULAR.url,
    };
  };
  const img = getImg(props.recipe.images);
  const { ref: card, controls: card_control } = useAnimateOnView();
  return (
    <motion.div className={styles.meals} ref={card} animate={card_control}>
      <img className={styles.open} src={props.recipe.images.THUMBNAIL.url} />
      <div className={styles.tagContainer}>
        {props.recipe.healthLabels.slice(0, 2).map((label) => {
          return (
            <div className={styles.mealTag} key={label}>
              <span className={`${styles.tag} ${styles.tagVegetarian}`}>
                <nobr>{label}</nobr>
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.mealContent}>
        <div className={styles.labels}>
          <p className={styles.mealTitle}>
            <span className={styles.servings}>
              {props.recipe.yield} servings
            </span>
            {props.recipe.label}
          </p>
        </div>
        <div className={styles.mealCalories}>
          <BiTachometer className={styles.mealIcon} />
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
                  {Math.round(
                    props.recipe.digest[2].total / props.recipe.yield
                  )}
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
                  {Math.round(
                    props.recipe.digest[0].total / props.recipe.yield
                  )}
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
                  {Math.round(
                    props.recipe.digest[1].total / props.recipe.yield
                  )}
                  {props.recipe.digest[1].unit}
                </span>
              </li>
            </ul>
          </li>
          <li className={styles.newGridRow2}>
            <ul className={styles.mealMicros}>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.CHOLE.label}</span>
                <span className={styles.mealMicrograms}>
                  {Math.round(
                    props.recipe.totalNutrients.CHOLE.quantity /
                      props.recipe.yield
                  ) + "mg"}
                </span>
              </li>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.NA.label}</span>
                <span className={styles.mealMicrograms}>
                  {Math.round(
                    props.recipe.totalNutrients.NA.quantity / props.recipe.yield
                  ) + "mg"}
                </span>
              </li>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.CA.label}</span>
                <span className={styles.mealMicrograms}>
                  {Math.round(
                    props.recipe.totalNutrients.CA.quantity / props.recipe.yield
                  ) + "mg"}
                </span>
              </li>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.MG.label}</span>
                <span className={styles.mealMicrograms}>
                  {Math.round(
                    props.recipe.totalNutrients.MG.quantity / props.recipe.yield
                  ) + "mg"}
                </span>
              </li>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.K.label}</span>
                <span className={styles.mealMicrograms}>
                  {Math.round(
                    props.recipe.totalNutrients.K.quantity / props.recipe.yield
                  ) + "mg"}
                </span>
              </li>
              <li className={styles.justifyContent}>
                <span>{props.recipe.totalNutrients.FE.label}</span>
                <span className={styles.mealMicrograms}>
                  {Math.round(
                    props.recipe.totalNutrients.FE.quantity / props.recipe.yield
                  ) + "mg"}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Card;
