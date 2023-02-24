import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";

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
          className={`${styles.container} ${styles.infoRecipes} ${styles.cardContainer}`}
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
                </li>
              </ul>
            </div>
          </div>
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
                </li>
              </ul>
            </div>
          </div>
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
      <section>
        <div className={styles.testimonials}>
          <div className={styles.testimonialsContainer}>
            <span className={styles.subheading}>Testimonials</span>
            <h2 className={styles.heading}>
              Once you try it, you can't go back
            </h2>
            <div className={styles.quotes}>
              <figure>
                <img
                  className={styles.testimonialImg}
                  alt="Photo of user Dave Bryson"
                  src="../../../src/assets/dave.jpg"
                  loading="lazy"
                />
                <blockquote className={styles.testimonialText}>
                  Finding vegan recipes has never been easier! Feeling healthier
                  and energetic thanks to Recipe Search.
                </blockquote>
                <p className={styles.testimonialName}>— Dave Bryson</p>
              </figure>
              <figure>
                <img
                  className={styles.testimonialImg}
                  alt="Photo of user Ben Hadley"
                  src="../../../src/assets/ben.jpg"
                  loading="lazy"
                />
                <blockquote className={styles.testimonialText}>
                  The amount of recipe options is crazy good. The wife and kids
                  are already impressed with my cooking repertoire.
                </blockquote>
                <p className={styles.testimonialName}>— Ben Hadley</p>
              </figure>
              <figure>
                <img
                  className={styles.testimonialImg}
                  alt="Photo of user Steve Miller"
                  src="../../../src/assets/steve.jpg"
                  loading="lazy"
                />
                <blockquote className={styles.testimonialText}>
                  Recipe Search is a life saver! I am impressed with the amount
                  of Gluten-Free options.
                </blockquote>
                <p className={styles.testimonialName}>— Steve Miller</p>
              </figure>
              <figure>
                <img
                  className={styles.testimonialImg}
                  alt="Photo of user Hannah Smith"
                  src="../../../src/assets/hannah.jpg"
                  loading="lazy"
                />
                <blockquote className={styles.testimonialText}>
                  Having an array of healthy options is helping me achieve my
                  fitness goals!
                </blockquote>
                <p className={styles.testimonialName}>— Hannah Smith</p>
              </figure>
            </div>
          </div>
          <div className={styles.imgGallery}>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
            <figure className={styles.imgItem}>
              <img
                src="../../../src/assets/gallery-1.jpg"
                alt="Photo of beautifully arranged food"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
