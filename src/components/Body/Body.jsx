import React from "react";
import styles from "./Body.module.css";
import CarLogo from "../../assets/carLogo.svg";
import { Button } from "@chakra-ui/react";
const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Book Your Dream Car Now!</h1>
        <h3>Shine Tours and Travels provide you with Luxurious cars</h3>
        <Button colorScheme="red" variant="ghost">
          Button
        </Button>
      </div>
      <div className={styles.right}>
        <img src={CarLogo} alt="IMG" />
      </div>
    </div>
  );
};

export default Body;
