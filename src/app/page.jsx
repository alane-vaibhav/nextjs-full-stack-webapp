import Image from "next/image";
import styles from "./page.module.css";
import img from "../../public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>

        <h2 className={styles.description}>
          Turing your idea into reality. We bring together the teams from the
          globaltech industry
        </h2>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src={img} alt="" className={styles.img} />
      </div>
    </div>
  );
}
