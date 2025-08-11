"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkmodeToggle from "../darkmode/DarkmodeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        lamamia
      </Link>
      <div className={styles.links}>
        <DarkmodeToggle />
        {links.map((i) => {
          return (
            <Link key={i.id} href={i.url} className={styles.link}>
              {i.title}
            </Link>
          );
        })}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("hello, logout");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
