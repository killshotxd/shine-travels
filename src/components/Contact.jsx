import React from "react";
import styles from "./Contact.module.css";
import { HiMail, HiPhone } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../assets/logo-no-background.svg";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className="common-heading">
        Feel Free To <span>Contact</span>
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.5092786272076!2d83.36385068945309!3d26.743177742993357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145543f77e5d3%3A0xcdb1e73a2997952b!2sShine%20Travels!5e0!3m2!1sen!2sin!4v1660015222694!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.icon}>
        <a href="">
          <HiPhone fontSize={30} />
        </a>
        <a href="">
          <HiMail fontSize={30} />
        </a>
        <a href="">
          <IoLogoWhatsapp fontSize={30} />
        </a>
      </div>

      <div className={styles.logo}>
        <img src={logo} alt="LOGO" />
      </div>
    </div>
  );
};

export default Contact;
