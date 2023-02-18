import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.landing}>
        <div className={styles.info}>
          <h1 className={styles.h1}>Recipe search</h1>
          <p className={styles.p}>
            Indulge in a culinary journey with our recipe website
          </p>
          <button className={styles.headerBtn}>Learn more</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
