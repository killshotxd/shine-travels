import React from "react";
import Body from "./components/Body/Body";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const Home = () => {
  return (
    <>
      <FloatingWhatsApp buttonClassName="Wa" />
      <Body />
    </>
  );
};

export default Home;
