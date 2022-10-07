import React from "react";
import styles from "./Body.module.css";
import CarLogo from "../../assets/carLogo.svg";
import CarLogo2 from "../../assets/carLogo2.svg";

import { Button } from "@chakra-ui/react";
const Body = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.left}>
          <h1>Book Your Dream Car Now!</h1>
          <h3>Shine Tours and Travels provide you with Luxurious cars</h3>
          <Button colorScheme="red" variant="outline">
            Book Now
          </Button>
        </div>
        <div className={styles.right}>
          <img src={CarLogo} alt="IMG" />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.left2}>
          <img src={CarLogo2} alt="IMG" />
        </div>
        <div className={styles.right2}>
          <h2>
            Want to go on a <span>Tour?</span>{" "}
          </h2>
          <h3>Pick your desired car from wide range and enjoy your ride.</h3>
          <p>Booking a car process never this easier</p>
          <p>Get your desired car on your doorsteps in one click</p>
          <Button colorScheme="red" variant="outline">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
