import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import styles from "./Services.module.css";
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import nepal from "../../assets/nepal.jpg";
import lko from "../../assets/lkojpg.jpg";
import varanasi from "../../assets/varanasi.jpg";
import { Fade } from "react-reveal";
const Services = () => {
  return (
    <div className={styles.container}>
      <div>
        <CCard className={styles.hvGrow} style={{ width: "19rem" }}>
          <CCardImage orientation="top" src={nepal} />
          <CCardBody>
            <CCardTitle>Nepal</CCardTitle>
            <CCardText>
              Want to go on a vacation? Book a tour to Nepal with Shine Travels
              and Enjoy every beautiful location of Nepal with Family and
              friends.
            </CCardText>
            {/* <CButton href="#">Go somewhere</CButton> */}
          </CCardBody>
        </CCard>
      </div>

      <div>
        <CCard className={styles.hvGrow} style={{ width: "19rem" }}>
          <CCardImage orientation="top" src={lko} />
          <CCardBody>
            <CCardTitle>Lucknow</CCardTitle>
            <CCardText>
              Want to Travel? Book a car to Lucknow with Shine Travels and Enjoy
              a beautiful, calm and friendly ride to Lucknow with Family and
              friends.
            </CCardText>
            {/* <CButton href="#">Go somewhere</CButton> */}
          </CCardBody>
        </CCard>
      </div>

      <div>
        <CCard className={styles.hvGrow} style={{ width: "19rem" }}>
          <CCardImage orientation="top" src={varanasi} />
          <CCardBody>
            <CCardTitle>Varanasi</CCardTitle>
            <CCardText>
              Want to Travel? Book a car to Varanasi with Shine Travels and
              Enjoy a beautiful, calm and friendly ride to Varanasi with Family
              and friends.
            </CCardText>
            {/* <CButton href="#">Go somewhere</CButton> */}
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
};

export default Services;
