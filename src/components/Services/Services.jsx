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
              nepal Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nemo blanditiis nesciunt provident magni ut! Cumque eos, aut
              impedit perspiciatis dicta vero ratione?
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
              nepal Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nemo blanditiis nesciunt provident magni ut! Cumque eos, aut
              impedit perspiciatis dicta vero ratione?
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
              nepal Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nemo blanditiis nesciunt provident magni ut! Cumque eos, aut
              impedit perspiciatis dicta vero ratione?
            </CCardText>
            {/* <CButton href="#">Go somewhere</CButton> */}
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
};

export default Services;
