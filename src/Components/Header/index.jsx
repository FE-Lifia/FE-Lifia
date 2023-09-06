import React from "react";
import styled from "styled-components";
import SearchInput from "./searchInput";
import Ul from "./ul";
import mainlogo_color2 from "../../assets/Logo/mainlogo_color2.png";

const header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <Nav>
          <Logo src={mainlogo_color2} />
          <Ul />
          <SearchInput />
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
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

export default header;
