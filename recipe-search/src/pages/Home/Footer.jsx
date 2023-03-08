import React from "react";
import styles from "./Home.module.css";
import { socials } from "../../data/socials_data";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <a href="#" className={styles.footerLogo}>
            Recipe Search
          </a>
          <ul className={styles.footerLinks}>
            {socials.map((socials) => {
              return (
                <li key={socials.id}>
                  <a href={socials.url} className={styles.footerLink}>
                    <div>{socials.icon}</div>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className={styles.copyright}>
            Copyright © 2023 by Recipe Search, Inc. All rights reserved.
          </p>
        </div>
        <div className={styles.footerCol}>
          <p className={styles.footerHeading}>Contact us</p>
          <address className={styles.contacts}>
            623 Harrison St., 2nd Floor, <br />
            San Francisco, CA 94107
          </address>
          <p className={styles.contacts}>
            123-123-1234 <br />
            recipesearchsupport@gmail.com
          </p>
        </div>
        <nav className={`${styles.footerCol}`}>
          <p className={styles.footerHeading}>Account</p>
          <ul className={styles.navCol}>
            <li>
              <a className={styles.footerLink} href="#">
                Create account
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className={`${styles.footerCol}`}>
          <p className={styles.footerHeading}>Company</p>
          <ul className={styles.navCol}>
            <li>
              <a className={styles.footerLink} href="#">
                About
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                For Business
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className={`${styles.footerCol}`}>
          <p className={styles.footerHeading}>Resources</p>
          <ul className={styles.navCol}>
            <li>
              <a className={styles.footerLink} href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Help center
              </a>
            </li>
            <li>
              <a className={styles.footerLink} href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
