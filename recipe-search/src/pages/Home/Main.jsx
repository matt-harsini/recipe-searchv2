import React from "react";
import styles from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import Features from "./Features";
import Recipes from "./Recipes";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
function Main() {
  const ref = useOutletContext();
  return (
    <>
      <main className={styles.main} ref={ref}>
        <Features />
        <Recipes />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default Main;
