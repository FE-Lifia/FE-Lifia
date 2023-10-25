import React from "react";
import styled from "styled-components";
import NoticeContainer1 from "./NoticeContainer1";

const NoticeList = () => {
  return (
    <Wrapper>
      <Container>
        <Container2>
          <NoticeContainer1 />
        </Container2>
        <NavContainer></NavContainer>
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
  margin: 0 10%;
  padding: 20px 0;
  display: flex;
`;

const Container2 = styled.div`
  height: 100%;
`;

const NavContainer = styled.div`
  margin-left: 3%;
`;

export default NoticeList;
