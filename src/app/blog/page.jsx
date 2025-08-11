import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Img from "../../../public/pexels2.jpg";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className="imageContainer">
          <Image
            src={Img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut a
            autem delectus aliquam earum doloremque et, nesciunt esse voluptates
            provident veritatis facere inventore odio veniam deserunt labore
            praesentium rem saepe.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className="imageContainer">
          <Image
            src={Img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut a
            autem delectus aliquam earum doloremque et, nesciunt esse voluptates
            provident veritatis facere inventore odio veniam deserunt labore
            praesentium rem saepe.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className="imageContainer">
          <Image
            src={Img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut a
            autem delectus aliquam earum doloremque et, nesciunt esse voluptates
            provident veritatis facere inventore odio veniam deserunt labore
            praesentium rem saepe.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className="imageContainer">
          <Image
            src={Img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut a
            autem delectus aliquam earum doloremque et, nesciunt esse voluptates
            provident veritatis facere inventore odio veniam deserunt labore
            praesentium rem saepe.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
