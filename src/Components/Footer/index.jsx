import styled from "styled-components";
import footer_logo from "../../assets/Logo/footer_logo.png";

const footer = () => {
  return (
    <FooterContainer>
      <Logo src={footer_logo} alt="logo" />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: 187px;
  background-color: #707070;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
`;

export default footer;
