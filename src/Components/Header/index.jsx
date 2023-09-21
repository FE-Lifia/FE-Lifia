import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "./searchInput";
import Ul from "./ul";
import mainlogo_color2 from "../../assets/Logo/mainlogo_color2.png";
import DropdownMenu from "./dropdownMenu";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <HeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Wrapper>
        <Nav>
          <Logo src={mainlogo_color2} />
          <Ul />
          <SearchInput />
        </Nav>
      </Wrapper>
      <DropdownMenu props={isDropdownOpen} />
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
  margin: 0 70px;
  padding-top: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

export default Header;
