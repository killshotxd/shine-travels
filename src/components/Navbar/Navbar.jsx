import React from "react";
import styles from "./Navbar.module.css";
import { AiFillCar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-no-background.svg";
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="LOGO" width={300} />
      </div>
      <div className={styles.right}>
        <ul onClick={handleClick}>Home</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </div>
    </div>
  );
};

export default Navbar;
