import React, { useContext } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../Navbar/Navbar";
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
    width: "100%",
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
        <NavLink to={url} className={styles.navLink}>
          {text}
        </NavLink>
        <div className={styles.textPlaceholder} style={style} />
      </button>
    </motion.li>
  );
}
