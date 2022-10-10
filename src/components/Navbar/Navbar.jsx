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

  const handleAbout = () => {
    navigate("/about");
  };

  const handleContact = () => {
    navigate("/contacts");
  };

  const handleLogo = () => {
    navigate("/");
  };

  const handleBooking = () => {
    navigate("/book");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src={logo}
          alt="LOGO"
          style={{ cursor: "pointer" }}
          onClick={handleLogo}
          width={250}
        />
      </div>
      <div className={styles.right}>
        <ul onClick={handleClick}>Home</ul>
        <ul onClick={handleAbout}>About</ul>
        <ul onClick={handleContact}>Contact</ul>
        <ul onClick={handleBooking}>Our Cars</ul>
      </div>
    </div>
  );
};

export default Navbar;
