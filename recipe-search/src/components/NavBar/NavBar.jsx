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
  open: ({ height, x, y }) => {
    return {
      clipPath: `circle(${height * 2 + 200}px at ${x}px ${y}px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    };
  },
  closed: {
    clipPath: "circle(30px at 100% 0)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Navbar({ innerRef }) {
  const size = useWindowSize();
  const btn = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  useLayoutEffect(() => {
    let x, y;
    const btnDimensions = btn.current.getBoundingClientRect();
    x = btnDimensions.x;
    y = btnDimensions.y;
    navbar.open.clipPath = `circle(${height * 2 + 200}px at ${x}px ${y}px)`;
    console.log(x, y);
  }, [size]);

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
        <motion.div className={styles.background} variants={navbar}>
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
