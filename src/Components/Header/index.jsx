import React from "react";
import styled from "styled-components";
import SearchInput from "./searchInput";
import Ul from "./ul";

const header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Nav>
          <Logo src={"../img/mainlogo_color.png"} />
          <Ul />
        </Nav>
      </Wrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: ##ffffff;
  color: #fff;
  text-align: center;
  height: 115px;
`;

const Wrapper = styled.div`
  margin: 0 8%;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 50px;
`;

export default header;
