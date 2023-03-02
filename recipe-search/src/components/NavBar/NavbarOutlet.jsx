import React, { useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";

function NavbarOutlet() {
  // const [ref, inView] = useInView({
  //   threshold: 0.05,
  // });
  // const navbar = useRef(null);
  // useEffect(() => {
  //   const navigationHeight = navbar.current.getBoundingClientRect().height;
  //   document.documentElement.style.setProperty(
  //     "--scroll-padding",
  //     navigationHeight + "px"
  //   );
  // }, []);
  // useEffect(() => {
  //   if (!inView) {
  //     navbar.current.style.background = "";
  //     return;
  //   }
  //   navbar.current.style.background = "#212529";
  //   return;
  // }, [inView]);
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default NavbarOutlet;
