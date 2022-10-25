import React from "react";
import Body from "./components/Body/Body";
import { FloatingWhatsApp } from "react-floating-whatsapp";
const Home = () => {
  return (
    <>
      <FloatingWhatsApp
        buttonClassName="Wa"
        phoneNumber="+918173923599"
        accountName="Yashpal Saini"
        avatar="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1666696577~exp=1666697177~hmac=60d3d360a68aaf9072fd68b4bf8e3dbdd2faba211bedea74c9be7b8a0ce0f217"
      />
      <Body />
    </>
  );
};

export default Home;
