import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useInView } from "react-intersection-observer";

function Navigation() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const navBar = useRef(null);

  useEffect(() => {
    const navigationHeight = navBar.current.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
  }, []);

  useEffect(() => {
    if (!inView) {
      navBar.current.style.backgroundColor = "";
      return;
    }
    navBar.current.style.backgroundColor = "#212529";
    return;
  }, [inView]);

  return (
    <div>
      <NavBar navBar={navBar} />
      <Outlet context={ref} />
    </div>
  );
}

export default Navigation;
