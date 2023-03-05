import React, { useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";
import styles from "./Navbar.module.scss";

function NavbarOutlet() {
  const [ref, inView] = useInView({
    threshold: 0.05,
  });
  const navbar = useRef(null);
  const clipPath = useRef(null);
  useEffect(() => {
    const navigationHeight = navbar.current.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
  }, []);
  useEffect(() => {
    if (!inView) {
      navbar.current.style.background = "";
      clipPath.current.classList.toggle(`${styles.clipPath}`);
      return;
    }
    navbar.current.style.background = "#212529";
    clipPath.current.classList.toggle(`${styles.clipPath}`);
    return;
  }, [inView]);
  return (
    <div>
      <Navbar innerRef={navbar} clipPath={clipPath} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet context={ref} />
      </Suspense>
    </div>
  );
}

export default NavbarOutlet;
