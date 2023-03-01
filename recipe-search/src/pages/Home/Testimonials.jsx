import React from "react";
import styles from "./Home.module.css";

function Testimonials() {
  return (
    <section>
      <div className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <span className={styles.subheading}>Testimonials</span>
          <h2 className={styles.heading}>Hear from our users</h2>
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
                Recipe Search is a life saver! I am impressed with the amount of
                Gluten-Free options.
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
                Having an array of healthy recipes is helping me achieve my
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
              src="../../../src/assets/gallery-2.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/gallery-3.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/gallery-4.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/gallery-6.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/gallery-7.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/gallery-8.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/gallery-12.jpg"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/pexels-lina-kivaka-1813504.webp"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/pexels-alisha-mishra-1346345.webp"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/pexels-bp-2739250.webp"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
          <figure className={styles.imgItem}>
            <img
              src="../../../src/assets/pexels-mario-k-12755998.webp"
              alt="Photo of beautifully arranged food"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
