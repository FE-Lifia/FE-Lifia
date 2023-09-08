// import mainpage_img_1440 from "../../../assets/mainpage/1440/mainpage_img_1440.svg";
// import mainpage_img_1920 from "../../../assets/mainpage/1920/mainpage_img_1920.svg";
// import styled from "styled-components";

// const mainPageImg = () => {
//   const screenWidth = window.innerWidth;
//   const imgSrc = screenWidth <= 1440 ? mainpage_img_1440 : mainpage_img_1920;
//   console.log(screenWidth, imgSrc);
//   return <MainPageImg src={imgSrc} alt="mainpage" />;
// };

// const MainPageImg = styled.img`
//   display: inline;
// `;

// export default mainPageImg;

import mainpage_img_1440 from "../../../assets/mainpage/1440/mainpage_img_1440.svg";
import mainpage_img_1920 from "../../../assets/mainpage/1920/mainpage_img_1920.svg";
import styled from "styled-components";
import { useState, useEffect } from "react";

const MainpageImg = () => {
  const [imgSrc, setImgSrc] = useState(mainpage_img_1440);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newImgSrc =
        screenWidth <= 1440 ? mainpage_img_1440 : mainpage_img_1920;
      setImgSrc(newImgSrc);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <MainPageImg src={imgSrc} alt="mainpage" />;
};

const MainPageImg = styled.img`
  display: inline;
`;

export default MainpageImg;
