import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Image2 from "../../../../public/pexels2.jpg";

const Category = ({ params }) => {
  console.log("params", params?.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params?.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>First Card</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo
            laudantium, quaerat voluptate eum harum dolorem eaque atque sunt
            eligendi enim ipsa aspernatur repellat ad magnam officiis nam
            nesciunt aliquam.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContent}>
          <Image className={styles.img} fill={true} src={Image2} alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Second card</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eaque
            corporis, quam quas iusto qui vitae facere temporibus nobis, id
            fugit natus officia odio repellendus, cum eligendi consequatur
            deleniti similique.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContent}>
          <Image className={styles.img} fill={true} src={Image2} alt="" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Third card</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A eaque
            corporis, quam quas iusto qui vitae facere temporibus nobis, id
            fugit natus officia odio repellendus, cum eligendi consequatur
            deleniti similique.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContent}>
          <Image className={styles.img} fill={true} src={Image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
