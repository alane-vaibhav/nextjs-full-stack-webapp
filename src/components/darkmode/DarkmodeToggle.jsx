import React, { useState } from "react";
import styles from "./darkmodetoggle.module.css";
import Moon from "../../../public/moon.png";
import Sun from "../../../public/sun.png";
import Image from "next/image";

const DarkmodeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={styles.container}>
      <div>
        <div>
          <Image src={Moon} alt="moon" className={styles.icon} />
        </div>
        <div>
          <Image src={Sun} alt="sun" className={styles.icon} />
        </div>
        <div className={styles.ball}></div>
      </div>
      <div></div>
    </div>
  );
};

export default DarkmodeToggle;
