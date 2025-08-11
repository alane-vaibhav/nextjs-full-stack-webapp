import React from "react";
import styles from "./page.module.css";
import Img from "../../../../public/pexels2.jpg";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa
            excepturi ullam nam consequatur.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            totam, officia ullam veritatis fugiat nemo deleniti similique
            quibusdam ipsam accusamus iure illo magnam saepe molestias
            provident. Temporibus cupiditate magnam iste.
          </p>
          <div className={styles.author}>
            <Image
              src={Img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Vaibhav alane</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={Img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          dolores error magni adipisci amet facere tempore, deleniti velit saepe
          et culpa reprehenderit dignissimos autem fugit suscipit sint quod
          eveniet eos.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
