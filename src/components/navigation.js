import React from "react";
import { Link } from "gatsby";
import styles from "./navigation.module.css";

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link activeClassName={styles.navigationItemActive} to="/">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link activeClassName={styles.navigationItemActive} to="/blog/">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link activeClassName={styles.navigationItemActive} to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);
