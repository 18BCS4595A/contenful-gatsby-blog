import React from "react";
import Img from "gatsby-image";

import styles from "./hero.module.css";

export default ({ data: { name, heroImage, shortBio, title } }) => {
  return (
    <div className={styles.hero}>
      <Img className={styles.heroImage} alt={name} fluid={heroImage.fluid} />
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{name}</h3>
        <p className={styles.heroTitle}>{title}</p>
        <p>{shortBio.shortBio}</p>
      </div>
    </div>
  );
};
