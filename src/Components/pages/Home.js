import React from "react";
import Header from "../Header";
import maingpageIMG from "../../../public/img/mainpage/mainpage_img.svg";

const Home = () => {
  return (
    <>
      <Header />
      <img src={maingpageImg} alt="Main Page" />
    </>
  );
};

export default Home;
