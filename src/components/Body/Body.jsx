import React from "react";
import styles from "./Body.module.css";
import CarLogo from "../../assets/carLogo.svg";
import CarLogo2 from "../../assets/carLogo2.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import nepal from "../../assets/nepal.jpg";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Fade from "react-reveal/Fade";
import Audi from "../../assets/AudiUp.jpeg";
import jaguar from "../../assets/jaguar.jpg";
import Services from "../Services/Services";
import Dzire from "../../assets/Dzire.jpeg";
import Ertiga from "../../assets/Ertiga.jpg";
import Brezza from "../../assets/Brezza.jpg";

const Body = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book");
  };

  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.slider}>
          <div className={styles.centerSlider}>
            <Carousel autoPlay={true} infiniteLoop={true}>
              <div>
                <img src={Audi} />
                <p className="legend">Audi</p>
              </div>
              <div>
                <img src={Dzire} />
                <p className="legend">Swift Dzire</p>
              </div>
              {/* <div>
                <img src={Ertiga} />
                <p className="legend">Ertiga</p>
              </div> */}
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
      <Fade left>
        <div className={styles.container2}>
          <div className={styles.left2}>
            <img src={nepal} alt="IMG" />
          </div>
          <div className={styles.right2}>
            <h2>
              Want to go on a <span>Tour?</span>{" "}
            </h2>
            <h3>Pick your desired car from wide range and enjoy your ride.</h3>
            <p>Booking a car process never this easier</p>
            <p>Get your desired car on your doorsteps in one click</p>
            <div className={styles.btn}>
              <Button onClick={handleClick} colorScheme="red" variant="outline">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Fade>

      <div>
        <Services />
      </div>

      <Fade up>
        <div>
          <About />
        </div>
      </Fade>
    </div>
  );
};

export default Body;
