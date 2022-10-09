import React from "react";
import styles from "./Navbar.module.css";
import { AiFillCar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.svg";
const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <ul onClick={handleClick}>Home</ul>
      <ul>About</ul>
      <ul>Contact</ul>
    </div>
  );
};

export default Navbar;
