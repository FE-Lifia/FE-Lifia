import React from "react";
import styled from "styled-components";
import TopContainer from "./TopContainer";
import ListContainer from "./ListContainer";

const NoticeContainer1 = () => {
  return (
    <Wrapper>
      <Container>
        <TopContainer />
        <ListContainer />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1020px;
  height: 100%;
  margin-top: 20px;
`;

const Container = styled.div``;

export default NoticeContainer1;
