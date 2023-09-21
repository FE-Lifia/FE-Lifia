import styled from "styled-components";
import footer_logo from "../../assets/Logo/footer_logo.png";
import LinkTextGroup from "./linkTextGroup";
import CompanyInfoGroup from "./companyInfoGroup";

const footer = () => {
  return (
    <FooterWrapper>
      <Logo src={footer_logo} alt="logo" />
      <FooterTextContainer>
        <LinkTextGroup />
        <CompanyInfoGroup />
      </FooterTextContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  height: 187px;
  background-color: #707070;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTextContainer = styled.div`
  display: block;
`;

const Logo = styled.img``;

export default footer;
