import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Book.module.css";
const Book = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={styles.main}>
        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://images.jdmagicbox.com/quickquotes/images_main/maruti_suzuki_swift_dzire_vdi_pearl_arctic_white_82690415_32.jpg"
            alt="IMG"
          />
          <p>Swift Dzire</p>
        </div>

        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220830061918_Innova_Crysta.jpeg"
            alt="IMG"
          />
          <p>Innova Crysta</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Fortuner-110120211829.jpg"
            alt="IMG"
          />
          <p>Toyota Fortuner</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20190510054021_Audi-A6-2019-1.jpg&w=872&h=578&q=75&c=1"
            alt="IMG"
          />
          <p>Audi A6</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://imgd.aeplcdn.com/0x0/n/cw/ec/52639/3-series-gran-limousine-exterior-right-front-three-quarter-2.jpeg"
            alt="IMG"
          />
          <p>BMW</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://images.carandbike.com/car-images/colors/honda/amaze/honda-amaze-platinum-white-pearl.png?v=1629271719"
            alt="IMG"
          />
          <p>Honda Amaze</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://imgd-ct.aeplcdn.com/0x0/n/i3q06ua_1556121.jpg?q=75"
            alt="IMG"
          />
          <p>Honda City</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg?q=75"
            alt="IMG"
          />
          <p>Suzuki Ertiga</p>
        </div>
        {/* End */}

        {/* Start */}
        <div className={styles.container}>
          <img
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Verna-300320201643.jpg&w=730&h=484&q=75&c=1"
            alt="IMG"
          />
          <p>Hyundai Verna</p>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default Book;
