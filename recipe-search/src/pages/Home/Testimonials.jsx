import React from "react";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { img_gallery } from "../../data";
function Testimonials() {
  const { ref: t1, controls: t1Control } = useAnimateOnView();
  const { ref: t2, controls: t2Control } = useAnimateOnView();
  const { ref: t3, controls: t3Control } = useAnimateOnView();
  const { ref: t4, controls: t4Control } = useAnimateOnView();

  return (
    <section>
      <div className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <span className={styles.subheading}>Testimonials</span>
          <h2 className={styles.heading}>Hear from our users</h2>
          <div className={styles.quotes}>
            <motion.figure
              className={styles.figure}
              ref={t1}
              animate={t1Control}
              initial={{ opacity: 0 }}
            >
              <img
                className={styles.testimonialImg}
                alt="Photo of user Dave Bryson"
                src="/dave.jpg"
                loading="lazy"
              />
              <blockquote className={styles.testimonialText}>
                Finding vegan recipes has never been easier! Feeling healthier
                and energetic thanks to Recipe Search.
              </blockquote>
              <p className={styles.testimonialName}>— Dave Bryson</p>
            </motion.figure>
            <motion.figure
              className={styles.figure}
              ref={t2}
              animate={t2Control}
              initial={{ opacity: 0 }}
            >
              <img
                className={styles.testimonialImg}
                alt="Photo of user Ben Hadley"
                src="/ben.jpg"
                loading="lazy"
              />
              <blockquote className={styles.testimonialText}>
                The amount of recipe options is crazy good. The wife and kids
                are already impressed with my cooking repertoire.
              </blockquote>
              <p className={styles.testimonialName}>— Ben Hadley</p>
            </motion.figure>
            <motion.figure
              className={styles.figure}
              ref={t3}
              animate={t3Control}
              initial={{ opacity: 0 }}
            >
              <img
                className={styles.testimonialImg}
                alt="Photo of user Steve Miller"
                src="/steve.jpg"
                loading="lazy"
              />
              <blockquote className={styles.testimonialText}>
                Recipe Search is a life saver! I am impressed with the amount of
                Gluten-Free options.
              </blockquote>
              <p className={styles.testimonialName}>— Steve Miller</p>
            </motion.figure>
            <motion.figure
              className={styles.figure}
              ref={t4}
              animate={t4Control}
              initial={{ opacity: 0 }}
            >
              <img
                className={styles.testimonialImg}
                alt="Photo of user Hannah Smith"
                src="/hannah.jpg"
                loading="lazy"
              />
              <blockquote className={styles.testimonialText}>
                Having an array of healthy recipes is helping me achieve my
                fitness goals!
              </blockquote>
              <p className={styles.testimonialName}>— Hannah Smith</p>
            </motion.figure>
          </div>
        </div>
        <motion.div className={styles.imgGallery}>
          {img_gallery.map((img, i) => {
            return (
              <motion.figure
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: (i) => ({
                    opacity: 1,
                    transition: {
                      delay: i * 0.05,
                    },
                  }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={styles.imgItem}
              >
                <img
                  src={img}
                  alt="Photo of beautifully arranged food"
                  loading="lazy"
                />
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
