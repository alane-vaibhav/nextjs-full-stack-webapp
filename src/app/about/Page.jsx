import React from "react";
import { styles } from "./page.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgConatiner}>
        <Image
          src="https://www.pexels.com/video/sunset-over-sea-shore-12374612/"
          fill={true}
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default About;
