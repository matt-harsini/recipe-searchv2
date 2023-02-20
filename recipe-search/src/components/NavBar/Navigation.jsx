import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useInView } from "react-intersection-observer";

function Navigation() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const navBar = useRef(null);
  const icon = useRef(null);
  useEffect(() => {
    if (!inView) {
      navBar.current.style.backgroundColor = "";
      icon.current.style.color = "white";
      return;
    }
    navBar.current.style.backgroundColor = "#f8f9fa";
    icon.current.style.color = "#212529";
    return;
  }, [inView]);
  return (
    <div>
      <NavBar navBar={navBar} icon={icon} />
      <Outlet context={ref} />
    </div>
  );
}

export default Navigation;
