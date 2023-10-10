import React from "react";
import styled from "styled-components";
import Bord from "./Bord";
import MainContainer from "./MainContainer";

const NoticeDetail = () => {
  return (
    <Wrapper>
      <Container>
        <Bord />
        <MainContainer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgba(141, 155, 226, 0.2);
`;

const Container = styled.div`
  margin: 0 12%;
`;

export default NoticeDetail;
