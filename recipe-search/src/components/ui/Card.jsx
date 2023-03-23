import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { RxDotFilled } from "react-icons/rx";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { BiTachometer } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Accordion } from "@chakra-ui/react";
function Card(props) {
  return (
    <Link
      to={`/search-recipes/${props.recipe.label
        .replace("/s+/g", "-")
        .toLowerCase()}`}
      state={props.recipe}
      className={styles.link}
    >
      <motion.div className={styles.meals}>
        <img
          className={styles.open}
          src={props.recipe.images.THUMBNAIL.url}
          width="60"
        />

        <div className={styles.mealContent}>
          <div className={styles.labels}>
            <p className={styles.mealTitle}>
              <span className={styles.servings}>
                {props.recipe.yield > 1
                  ? `${props.recipe.yield} servings`
                  : `${props.recipe.yield} serving`}
              </span>
              <span className={styles.name}>{props.recipe.label}</span>
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
                      viewBox="2 2.5 10 10"
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
                      viewBox="2 2.5 10 10"
                      className={styles.mealFat}
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
                      viewBox="2 2.5 10 10"
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
                  <div className={styles.label}>
                    <BsDot viewBox="-1 4 10 10" />
                    <span>{props.recipe.totalNutrients.CHOLE.label}</span>
                  </div>
                  <span className={styles.mealMicrograms}>
                    {Math.round(
                      props.recipe.totalNutrients.CHOLE.quantity /
                        props.recipe.yield
                    ) + "mg"}
                  </span>
                </li>
                <li className={styles.justifyContent}>
                  <div className={styles.label}>
                    <BsDot viewBox="-1 4 10 10" />
                    <span>{props.recipe.totalNutrients.NA.label}</span>
                  </div>
                  <span className={styles.mealMicrograms}>
                    {Math.round(
                      props.recipe.totalNutrients.NA.quantity /
                        props.recipe.yield
                    ) + "mg"}
                  </span>
                </li>
                <li className={styles.justifyContent}>
                  <div className={styles.label}>
                    <BsDot viewBox="-1 4 10 10" />
                    <span>{props.recipe.totalNutrients.CA.label}</span>
                  </div>
                  <span className={styles.mealMicrograms}>
                    {Math.round(
                      props.recipe.totalNutrients.CA.quantity /
                        props.recipe.yield
                    ) + "mg"}
                  </span>
                </li>
                <li className={styles.justifyContent}>
                  <div className={styles.label}>
                    <BsDot viewBox="-1 4 10 10" />
                    <span>{props.recipe.totalNutrients.MG.label}</span>
                  </div>
                  <span className={styles.mealMicrograms}>
                    {Math.round(
                      props.recipe.totalNutrients.MG.quantity /
                        props.recipe.yield
                    ) + "mg"}
                  </span>
                </li>
                <li className={styles.justifyContent}>
                  <div className={styles.label}>
                    <BsDot viewBox="-1 4 10 10" />
                    <span>{props.recipe.totalNutrients.K.label}</span>
                  </div>
                  <span className={styles.mealMicrograms}>
                    {Math.round(
                      props.recipe.totalNutrients.K.quantity /
                        props.recipe.yield
                    ) + "mg"}
                  </span>
                </li>
                <li className={styles.justifyContent}>
                  <div className={styles.label}>
                    <BsDot viewBox="-1 4 10 10" />
                    <span>{props.recipe.totalNutrients.FE.label}</span>
                  </div>
                  <span className={styles.mealMicrograms}>
                    {Math.round(
                      props.recipe.totalNutrients.FE.quantity /
                        props.recipe.yield
                    ) + "mg"}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </motion.div>
    </Link>
  );
}

export default Card;
