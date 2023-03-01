import React, { useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";

function NavbarOutlet() {
  const [ref, inView] = useInView({
    threshold: 0.05,
  });
  const navbar = useRef(null);
  useEffect(() => {
    const navigationHeight = navbar.current.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
  }, []);
  useEffect(() => {
    if (!inView) {
      navbar.current.style.backgroundColor = "";
      return;
    }
    navbar.current.style.backgroundColor = "#212529";
    return;
  }, [inView]);
  return (
    <div>
      <Navbar navbar={navbar} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet context={ref} />
      </Suspense>
    </div>
  );
}

export default NavbarOutlet;
