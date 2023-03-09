import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
import { AiFillFire } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

function Card(props) {
  console.log(props.recipe.images.REGULAR.url);
  return (
    <motion.div
      ref={props.innerRef}
      className={styles.meals}
      animate={props.animate}
      initial={props.initial}
    >
      <img
        className={styles.mealImg}
        src="https://edamam-product-images.s3.amazonaws.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGc0bCSde0iGpUbEqgSny3iBN6mt5AdynrWQm87h3GQdAiB7WPbM%2Bhh%2Fqm2M6zhN9xO82XAYW57FNIJ%2FejadgCNqjSq5BQhjEAAaDDE4NzAxNzE1MDk4NiIM6HlM84Du79ujaTSIKpYFuZpl74cnzBxwaf9uvxGDvbuUWkztg0W5s4dijMcZfqyeEPC%2FbKVKe6l%2BBYXu90Cr75XV6%2Bg7SXBKeQlYanmOKlZPsNExG6S%2BNhvtISAjk%2F5jh10PDrrmpbsOeGX%2BhkOfb9AmUogH%2BTtxk1lAc7pXZn9dgwcGzoPkgaUvYETVZqSVQ97wy4Txlu8dJ80xoO7dSWHt3BDIFg0qqoXsUl8NJ9eL3YTGEJmU0%2FfQt2ncWJA8ZtY%2FwzhnFROlR01r8qsNLFatkwTidD0q3w8GTUM4M5oFre6oFi71PXY2ASUPe8tVdZqPjR8K1Mp1G2u6xcr9x44c4lVtRemUHZfdqvewtQWsAypEtd5WPCnoX%2FZWM9lY35481Q5KwQnDicVdQQxm4aNDwxxyIzrkgEE20o%2BQDhIJXYRhN3%2B8%2Bf3hGvcEUFmmZq1kJNaLP%2BnUaqQ7lKKOq35oCoFCYUTaImNQRSzZRyLJ49VDRYf6fqOwUoZl5cFrVKyvD7HlpLacb6N0S72ejHQ8tW%2FFjSStrlfWW%2BGiUfTOuVb0EGiedE6LfIoh1b3RQauQ7jKFsIOI3tgO0F0gZSTWbWWYJHLntf18qp37jjdViHzb6cO31scgQMGv4NkA9i6o6tM2cOOb9W6I5VV8LB71oZZss%2BKEk26RIY0h6%2F2SY4u9A3rAK12jsGH9kHvyWBx7VIDG7EH9bBFPTFZ2nGmUJJ91PNx6oKFBjczQz5YrWQFj5CJN1UGnIkLf69uFok2zeMcTaeXdYNyka40e0e8UqgF8%2BbuqAFRveslgQNIGBq4LYlI9ZnHosi6tTWKL8XJ8bLLDKetHPiaO2HPkRlqM1wsnx%2BctreSL2ahfbJRot52CilN7hqD1Fvm4McQOezvzLy0w87qooAY6sgEyjAX5kgdJEkBSyNmXxMBX5ODse6lI2u%2B%2FN1Zg%2FcRhvaQ9J5PsnbtXthV6n0NZWvCflE1z1OFajMuT4kFUpk9061B%2FcLyEOVnw%2B%2FCvDyof9thinCCxzhhWoPeze4VJ9IGG4zFcQIgSwMg5x3P9wi2JzEYjSPGXa%2BwtQ1GYmlM9r2vUu9u61LwS2xO7YC3GwlsYZdsWR8ADf8JyLf5ZyBXtg2xLGpbYzd0NVIj5BAl%2FpwX7&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230309T184437Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFBI4K56Q3%2F20230309%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cbacdcefc53a020447f22644e392a26c27c0a54e65ad5c82ad9297079e33629d"
        alt="Japanese Gyozas"
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
            <strong>650 </strong>
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
