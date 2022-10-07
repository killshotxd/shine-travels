import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Book.module.css";
const Book = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}></div>
      <Footer />
    </div>
  );
};

export default Book;
