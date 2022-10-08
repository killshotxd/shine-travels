import React from "react";
import styles from "./Body.module.css";
import CarLogo from "../../assets/carLogo.svg";
import CarLogo2 from "../../assets/carLogo2.svg";
import SimpleImageSlider from "react-simple-image-slider";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import About from "../About/About";

const images = [
  {
    url: "https://i.ytimg.com/vi/uqH3eKXsRXY/maxresdefault.jpg",
  },
  {
    url: "https://samacharnama.com/static/c1e/client/79965/uploaded_original/2aece479ff50322b2ce142572a6ab50e.jpg",
  },
  {
    url: "https://carmonkey.in/wp-content/uploads/2021/03/maruti-swift-dzire-vdi-side-part-scaled.jpg",
  },
];
const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book");
  };

  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.slider}>
          <h1>Shine Tours and Travels</h1>
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>

        {/* <div className={styles.left}>
          <h1>Book Your Dream Car Now!</h1>
          <h3>Shine Tours and Travels provide you with Luxurious cars</h3>
          <Button onClick={handleClick} colorScheme="red" variant="outline">
            Book Now
          </Button>
        </div> */}
        {/* <div className={styles.right}>
          <img src={CarLogo} alt="IMG" />
        </div> */}
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
          <Button onClick={handleClick} colorScheme="red" variant="outline">
            Book Now
          </Button>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Body;
