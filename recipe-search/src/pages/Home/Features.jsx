import React from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import { useAnimateOnView } from "../../hooks/useAnimateOnView";
import { useOutletContext } from "react-router-dom";
function Features() {
  const ref = useOutletContext();
  const { ref: s1Heading, controls: s1Control } = useAnimateOnView(
    {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.5,
        duration: 1,
        bounce: 0.1,
      },
    },
    { y: -100 }
  );
  const { ref: h1Heading, controls: h1Control } = useAnimateOnView({
    opacity: 1,
    transition: { delay: 0.1 },
  });
  const { ref: f1, controls: f1Control } = useAnimateOnView();
  const { ref: f2, controls: f2Control } = useAnimateOnView();
  const { ref: f3, controls: f3Control } = useAnimateOnView();
  const { ref: f4, controls: f4Control } = useAnimateOnView();
  const { ref: f5, controls: f5Control } = useAnimateOnView();
  const { ref: img1, controls: img1Control } = useAnimateOnView();
  const { ref: img2, controls: img2Control } = useAnimateOnView();
  const { ref: img3, controls: img3Control } = useAnimateOnView();

  return (
    <section ref={ref}>
      <div className={`${styles.container}`}>
        <motion.span
          className={styles.subheading}
          ref={s1Heading}
          animate={s1Control}
          initial={{ opacity: 0 }}
          id="section1"
        >
          Three key features
        </motion.span>
        <motion.h2
          ref={h1Heading}
          animate={h1Control}
          initial={{ opacity: 0 }}
          className={styles.heading}
        >
          Search a recipe database of over 2.3 million recipes
        </motion.h2>
      </div>
      <div
        className={`${styles.container} ${styles.info} ${styles.paddingBottom}`}
      >
        <motion.div ref={f1} animate={f1Control} initial={{ opacity: 0 }}>
          <p className={styles.stepNum}>01</p>
          <h3 className={styles.headingTertiary}>
            500+ top web recipe sources
          </h3>
          <p className={styles.text}>
            Our search algorithm returns the most relevant recipes from the most
            popular and best recipes sources on the web. We order recipes by
            their cookability and quality, so you can always count on getting
            the best recipes!
          </p>
        </motion.div>
        <motion.div
          className={styles.stepImg}
          ref={img1}
          animate={img1Control}
          initial={{ opacity: 0 }}
        >
          <img
            loading="lazy"
            className={styles.img}
            src="../../../src/assets/pancakes.webp"
            alt="Pancakes topped with fruit and coffee on the side"
          />
        </motion.div>
        <motion.div
          className={styles.stepImg}
          ref={img2}
          animate={img2Control}
          initial={{ opacity: 0 }}
        >
          <img
            loading="lazy"
            className={styles.img}
            src="../../../src/assets/fish.webp"
            alt="Fish on a cutting board with salt and lemon"
          />
        </motion.div>
        <motion.div animate={f2Control} initial={{ opacity: 0 }} ref={f2}>
          <p className={styles.stepNum}>02</p>
          <h3 className={styles.headingTertiary}>
            Filter by diet or allergy restrictions
          </h3>
          <p className={styles.text}>
            We developed over 80 diet and health filters for your use. Choose
            and pick specific recipes that best work with your diet or health
            conditions.
          </p>
        </motion.div>
        <div>
          <motion.p
            className={styles.stepNum}
            animate={f3Control}
            ref={f3}
            initial={{ opacity: 0 }}
          >
            03
          </motion.p>
          <motion.h3
            className={styles.headingTertiary}
            animate={f5Control}
            ref={f5}
            initial={{ opacity: 0 }}
          >
            Full nutrition for each recipe
          </motion.h3>
          <motion.p
            className={styles.text}
            animate={f4Control}
            ref={f4}
            initial={{ opacity: 0 }}
          >
            We have the most accurate automated nutrition analysis on the web.
            You get detailed nutrition breakdown of each recipe with 25+
            nutrients and appropriateness for all major diets for free!
          </motion.p>
        </div>
        <motion.div
          className={styles.stepImg}
          ref={img3}
          animate={img3Control}
          initial={{ opacity: 0 }}
        >
          <img
            loading="lazy"
            className={styles.img}
            src="../../../src/assets/mushroom_stew.webp"
            alt="Bowl of mushroom curry"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
