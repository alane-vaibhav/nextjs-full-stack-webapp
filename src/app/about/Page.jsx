import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Pexel from "../../../public/pexel.jpg";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgConatiner}>
        <Image
          src={Pexel}
          alt=""
          className={styles.img}
          width={1200}
          height={300}
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.imgDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores
            sunt aspernatur voluptatum ut corporis, neque ea temporibus nobis
            perspiciatis corrupti impedit dicta voluptatibus eaque deleniti
            consequuntur libero. Impedit, saepe?
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            repudiandae consequatur earum officia tempore incidunt placeat,
            accusamus consectetur, aspernatur enim iste sit, iure quasi quo quod
            sequi. Fuga, corrupti perferendis.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.imgDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolores
            sunt aspernatur voluptatum ut corporis, neque ea temporibus nobis
            perspiciatis corrupti impedit dicta voluptatibus eaque deleniti
            consequuntur libero. Impedit, saepe?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            mollitia et dolorum suscipit sint ad voluptatibus debitis modi
            distinctio, natus iusto dolorem enim eveniet voluptatem odit placeat
            nulla. Voluptates, officiis.
            <br />
            <br />
            Lorem ipsum dolor sit
            <br />
            <br />
            Lorem ipsum dolor sit
          </p>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
