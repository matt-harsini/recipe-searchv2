import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../NavBar/NavBar";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#e03131", "#e8590c", "#9C1AFF", "#7700FF", "#4400FF"];

export function MenuItem({ i, url, text }) {
  const toggleOpen = useContext(NavbarContext);
  const style = {
    borderBottom: `2.5px solid ${colors[i]}`,
    display: "block",
    outline: "none",
  };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1, originX: 0 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={() => {
          toggleOpen();
        }}
        className={styles.btn}
      >
        <NavLink to={url} className={`${styles.navLink}`}>
          {text}
          <div className={styles.textPlaceholder} style={style} />
        </NavLink>
      </button>
    </motion.li>
  );
}
