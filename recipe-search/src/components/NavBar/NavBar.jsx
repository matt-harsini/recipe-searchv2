import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  createContext,
} from "react";
import { NavLink } from "react-router-dom";
import { GiMeatCleaver } from "react-icons/gi";
import { links } from "../../data/data";
import { motion, useCycle } from "framer-motion";
import styles from "./Navbar.module.scss";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useWindowSize } from "../../hooks/useWindowSize";

export const NavbarContext = React.createContext();

const navbar = {
  open: (height = 1000) => {
    return {
      clipPath: `circle(${height * 2 + 200}px at 100% -10%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    };
  },
  closed: {
    clipPath: "circle(30px at 100% -10%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navbar({ innerRef }) {
  const btn = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className={styles.navContainer} ref={innerRef}>
      <motion.nav
        className={styles.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={{ height }}
        ref={containerRef}
        motion
      >
        <motion.div
          className={`${styles.background} ${styles.clipPath}`}
          variants={navbar}
        >
          <NavbarContext.Provider value={() => toggleOpen()}>
            <Navigation />
          </NavbarContext.Provider>
        </motion.div>
        <MenuToggle btn={btn} toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
}

export default Navbar;
