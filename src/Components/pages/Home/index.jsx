import React from "react";
import styled from "styled-components";
import MainPageImg from "./mainPageImg";
import MainNotice from "./mainNotice";

const Home = () => {
  return (
    <Wrapper>
      <MainPageImg />
      <MainNotice />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export default Home;
