import React, { useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";
import Loading from "../loading/Loading";

function NavbarOutlet() {
  const navbar = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  useEffect(() => {
    const navigationHeight = navbar.current.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
  }, []);
  useEffect(() => {
    document
      .getElementById("search-recipes")
      .addEventListener("click", function () {
        document.getElementById("nav-container").style.background = "#212529";
      });
    document.getElementById("home").addEventListener("click", function () {
      document.getElementById("nav-container").style.background = "";
    });
  }, []);
  useEffect(() => {
    if (!inView) {
      navbar.current.style.background = "";
      return;
    }
    if (inView || recipePageInView || recipePageInView) {
      navbar.current.style.background = "#212529";
      return;
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
