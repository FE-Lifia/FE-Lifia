import styled from "styled-components";

const CompanyInfoGroup = () => {
  return (
    <CompanyInfotContainer>
      <Container first>
        <InfoText first>(주)성동오랑이어금지</InfoText>
        <InfoText>대표장 명 : 오랑이</InfoText>
        <InfoText>주소 : 서울시 성동구 라이피아로 319-17 45층</InfoText>
      </Container>
      <Container>
        <InfoText first>사업자 등록번호 : 000-0000-0000</InfoText>
        <InfoText>TEL : 0000-0000</InfoText>
        <InfoText>FAX : 02-0000-0000</InfoText>
        <InfoText>E-MAIL : lifia@lifia.com</InfoText>
      </Container>
    </CompanyInfotContainer>
  );
};

const CompanyInfotContainer = styled.div`
  display: block;
`;

const Container = styled.div`
  display: flex;
  ${({ first }) => first && "margin-bottom: 10px;"}
`;

const InfoText = styled.div`
  color: #b8b6b6;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
  ${({ first }) => !first && "margin-left: 20px;"}
`;

export default CompanyInfoGroup;
