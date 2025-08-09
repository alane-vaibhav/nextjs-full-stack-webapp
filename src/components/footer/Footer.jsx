import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <div className={styles.imageContainer}>
          <Image
            src="/1.png"
            fill={true}
            alt="facebook"
            className={styles.icon}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/2.png"
            fill={true}
            alt="instagram"
            className={styles.icon}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/3.png"
            fill={true}
            alt="twitter"
            className={styles.icon}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/4.png"
            fill={true}
            alt="youtube"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
