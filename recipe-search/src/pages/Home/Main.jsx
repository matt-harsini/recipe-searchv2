import React from "react";
import styles from "./Home.module.css";
import Features from "./Features";
import Recipes from "./Recipes";
import Testimonials from "./Testimonials";
function Main() {
  // Track intersection of Features and Navbar to turn background color to black
  return (
    <main className={styles.main}>
      <Features />
      <Recipes />
      <Testimonials />
    </main>
  );
}

export default Main;
