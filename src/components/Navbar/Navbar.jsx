import React from "react";
import styles from "./Navbar.module.css";
import { AiFillCar } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>
          Shine Travels <AiFillCar fontSize={40} />
        </h2>
      </div>
      <div className={styles.right}>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </div>
    </div>
  );
};

export default Navbar;
