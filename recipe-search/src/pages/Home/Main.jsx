import React from "react";
import styles from "./Home.module.css";
import Features from "./Features";
import Recipes from "./Recipes";
import Testimonials from "./Testimonials";
import { useOutletContext } from "react-router-dom";

function Main() {
  const ref = useOutletContext();
  return (
    <main className={styles.main} ref={ref}>
      <Features />
      <Recipes />
      <Testimonials />
    </main>
  );
}

export default Main;
