import React from "react";
import styles from "./Main.module.css";
import { AiFillFire } from "react-icons/ai";
function Main({ innerRef }) {
  return (
    <main className={styles.main} ref={innerRef}>
      <section>
        <div className={`${styles.container}`}>
          <span className={styles.subheading}>Three key features</span>
          <h2 className={styles.heading}>
            Search a recipe database of over 2.3 million recipes
          </h2>
        </div>
        <div
          className={`${styles.container} ${styles.info} ${styles.paddingBottom}`}
        >
          <div>
            <p className={styles.stepNum}>01</p>
            <h3 className={styles.headingTertiary}>
              500+ top web recipe sources
            </h3>
            <p className={styles.text}>
              Our search algorithm returns the most relevant recipes from the
              most popular and best recipes sources on the web. We order recipes
              by their cookability and quality, so you can always count on
              getting the best recipes!
            </p>
          </div>
          <div className={styles.stepImg}>
            <img
              loading="lazy"
              className={styles.img}
              src="../../../src/assets/pancakes.webp"
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
              src="../../../src/assets/159041840_l.webp"
              alt="Plates with shrimp and pasta"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.recipes}`}>
        <div
          className={`${styles.container} ${styles.recipes} ${styles.paddingTop} ${styles.centerText}`}
        >
          <span className={styles.subheadingRecipe}>Recipes</span>
          <h2 className={styles.headingRecipe}>
            Find your next favorite recipe in seconds
          </h2>
        </div>
        <div
          className={`${styles.container} ${styles.info} ${styles.cardContainer}`}
        >
          <div className={styles.meals}>
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
                  <span>
                    <strong className={styles.calories}>354</strong> kcal
                  </span>
                </li>
                <div className={styles.nutritionGrid}>
                  <div className={styles.nutritionMacros}>
                    <li className={styles.protein}>qweqwe</li>
                    <li className={styles.fat}></li>
                    <li className={styles.carb}></li>
                  </div>
                  <div className={styles.nutritionMicros}></div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
