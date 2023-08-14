import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from "./NavBar.module.scss";
import { links } from "../../data";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export function Navigation() {
  return (
    <motion.ul variants={variants} className={styles.ul}>
      {links.map(({ id, url, text }, index) => (
        <MenuItem i={index} url={url} text={text} key={id} />
      ))}
    </motion.ul>
  );
}

const itemIds = [0, 1, 2, 3, 4];
