import React from "react";
import styles from "./Home.module.css";
import Features from "./Features";
import Recipes from "./Recipes";
import Testimonials from "./Testimonials";
import { useOutletContext } from "react-router-dom";
import Footer from "./Footer";

function Main() {
  const ref = useOutletContext();

  return (
    <div ref={ref[0]}>
      <main className={styles.main}>
        <Features />
        <Recipes />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
