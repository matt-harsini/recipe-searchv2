import React from "react";
import { motion } from "framer-motion";
import styles from "./Card.module.css";
function Card({ children, innerRef }) {
  return (
    <motion.div ref={innerRef} className={styles.meals}>
      {children}
    </motion.div>
  );
}

export default Card;
