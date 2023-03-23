import React, { useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";
import Loading from "../loading/Loading";
import styles from "./Navbar.module.scss";

function NavbarOutlet() {
  const navbar = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.015,
  });
  useEffect(() => {
    const navigationHeight = navbar.current.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
    document.getElementById("home").addEventListener("click", function () {
      navbar.current.classList.remove(`${styles.bgColor}`);
    });
    document
      .getElementById("search-recipes")
      .addEventListener("click", function () {
        navbar.current.classList.add(`${styles.bgColor}`);
      });
  }, []);
  useEffect(() => {
    if (!inView) {
      navbar.current.classList.remove(`${styles.bgColor}`);
    } else {
      navbar.current.classList.add(`${styles.bgColor}`);
    }
  }, [inView]);
  return (
    <div>
      <Navbar innerRef={navbar} />
      <Suspense fallback={<Loading />}>
        <Outlet context={[ref, navbar]} />
      </Suspense>
    </div>
  );
}

export default NavbarOutlet;
