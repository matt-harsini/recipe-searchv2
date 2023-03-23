import React, { useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";
import Loading from "../loading/Loading";

function NavbarOutlet() {
  const navbar = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.05,
  });
  const [recipePage, recipePageInView] = useInView();
  const [recipeInfoPage, recipeInfoPageInView] = useInView();
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
      return;
    }
    if (inView) {
      navbar.current.style.background = "#212529";
      return;
    }
  }, [inView]);
  useEffect(() => {
    if (!recipePageInView) {
      navbar.current.style.background = "";
      return;
    }
    if (recipePageInView) {
      navbar.current.style.background = "#212529";
      return;
    }
  }, [recipePageInView]);
  useEffect(() => {
    console.log("here");
    if (!recipeInfoPageInView) {
      navbar.current.style.background = "";
      return;
    }
    if (recipeInfoPageInView) {
      navbar.current.style.background = "#212529";
      return;
    }
  }, [recipeInfoPageInView]);
  return (
    <div>
      <Navbar innerRef={navbar} />
      <Suspense fallback={<Loading />}>
        <Outlet context={[ref, navbar, recipePage, recipeInfoPage]} />
      </Suspense>
    </div>
  );
}

export default NavbarOutlet;
