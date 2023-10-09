import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchInput from "./searchInput";
import Nav from "./nav";
import mainlogo_color2 from "../../assets/Logo/mainlogo_color2.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Wrapper1>
        <Wrapper2
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <LogoWrapper to={"/main"}>
            <Logo src={mainlogo_color2} />
          </LogoWrapper>
          <Nav isDropdownOpen={isDropdownOpen} />
          <SearchInput />
        </Wrapper2>
      </Wrapper1>
      {/* <DropdownMenu /> */}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #ffffff;
`;

const Wrapper1 = styled.div`
  margin: 0 12%;
  height: 100%;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
`;

const LogoWrapper = styled(Link)``;

const Logo = styled.img`
  height: 50px;
`;

export default Header;
