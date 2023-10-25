import styled from "styled-components";

const LinkTextGroup = () => {
  return (
    <LinkTextContainer>
      <LinkText href="#" first>
        회사 소개
      </LinkText>
      <FooterBar />
      <LinkText href="#">개인 정보 처리 방침</LinkText>
      <FooterBar />
      <LinkText href="#">제휴 문의</LinkText>
      <FooterBar />
      <LinkText href="#">이용 약관</LinkText>
    </LinkTextContainer>
  );
};

const LinkTextContainer = styled.div`
  display: flex;
  color: #fff;
  margin-bottom: 13px;
`;

const LinkText = styled.a`
  color: #fffffff;
  font-size: 19px;
  ${({ first }) => !first && "margin-left: 20px;"}
  font-family: "Segoe UI", sans-serif;
`;

const FooterBar = styled.div`
  margin-left: 20px;
  width: 2px;
  height: 15px;
  background: #ffffff;
`;

export default LinkTextGroup;
