import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "./Navbar.module.scss";
import { useDimensions } from "../../hooks/useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { Button } from "@chakra-ui/react";
import { GiMeatCleaver } from "react-icons/gi";
import { Link } from "react-router-dom";

export const NavbarContext = React.createContext();

const navbar = {
  open: (height = 1000) => {
    return {
      clipPath: `circle(${height * 2 + 500}px at 100% -10%)`,
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
      delay: 0.25,
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
          <div className={`${styles.layer} ${styles.clipPathBackground}`}></div>
          <div
            className={`${styles.layer2} ${styles.clipPathBackground}`}
          ></div>
          <NavbarContext.Provider value={() => toggleOpen()}>
            <Navigation />
          </NavbarContext.Provider>
        </motion.div>
        <MenuToggle btn={btn} toggle={() => toggleOpen()} />
        <div className={styles.navContainerLg}>
          <div className={styles.btnContainer}>
            <Link to="/">
              <Button
                size="lg"
                bg="#f1f3f5"
                color="#212529"
                _active={{
                  background: "#f03e3e",
                }}
                className={styles.navBtn}
              >
                <span className={styles.btnText}>Home</span>
              </Button>
            </Link>
            <Link to="/search-recipes">
              <Button
                size="lg"
                bg="#f1f3f5"
                className={styles.navBtn}
                color="#212529"
                _active={{
                  background: "#f03e3e",
                }}
              >
                <span className={styles.btnText}>Recipes</span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
