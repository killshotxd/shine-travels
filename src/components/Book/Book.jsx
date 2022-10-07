import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Book.module.css";
const Book = () => {
  return (
    <div>
      <Navbar />
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
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220830061918_Innova_Crysta.jpeg"
            alt="IMG"
          />
          <p>Innova Crysta</p>
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
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220830061918_Innova_Crysta.jpeg"
            alt="IMG"
          />
          <p>Innova Crysta</p>
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
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220830061918_Innova_Crysta.jpeg"
            alt="IMG"
          />
          <p>Innova Crysta</p>
        </div>
        {/* End */}
      </div>

      <Footer />
    </div>
  );
};

export default Book;
