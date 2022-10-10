import React from "react";
import styles from "./Body.module.css";
import CarLogo from "../../assets/carLogo.svg";
import CarLogo2 from "../../assets/carLogo2.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import logo from "../../assets/logo-no-background.svg";
import audi from "../../assets/audi.jpg";
import bmw from "../../assets/bmw.jpg";
import jaguar from "../../assets/jaguar.jpg";

const slideImages = [
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
    navigate("/book", { replace: true });
  };

  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.slider}>
          <h1>
            <img src={logo} alt="LOGO" width={300} />
          </h1>
          <div className={styles.centerSlider}>
            <Carousel autoPlay={true} infiniteLoop={true}>
              <div>
                <img src={audi} />
                <p className="legend">Audi</p>
              </div>
              <div>
                <img src={bmw} />
                <p className="legend">BMW</p>
              </div>
              <div>
                <img src={jaguar} />
                <p className="legend">Jaguar</p>
              </div>
            </Carousel>
          </div>
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
