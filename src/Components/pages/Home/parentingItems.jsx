import styled from "styled-components";
import kids_cafe1 from "../../../assets/mainpage/1440/kids_cafe1.png";

const ParentingItems = () => {
  return (
    <>
      <ParentingItem>
        <ParentingImg src={kids_cafe1} alt="kids_cafe1" />
        <StatusContainer>
          <StatusText>진행 중</StatusText>
        </StatusContainer>
        <InfoContainer>
          <InfoItem>
            <InfoTitle>장소</InfoTitle>
            <InfoContent>(사)오랑이 키즈카페</InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoTitle>시간</InfoTitle>
            <InfoContent>매주 화요일 14~18시</InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoTitle>인원</InfoTitle>
            <InfoContent>5~10명</InfoContent>
          </InfoItem>
          <InfoItem>
            <InfoTitle>관리자</InfoTitle>
            <InfoContent>채용 완료</InfoContent>
          </InfoItem>
        </InfoContainer>
      </ParentingItem>
      <ParentingItem />
      <ParentingItem />
      <ParentingItem />
    </>
  );
};

// const ParentingItem = styled.article`
//   width: 23%;
//   height: 294px;
//   margin-bottom: 20px;
//   background-color: #eaedfc;
// `;

const ParentingItem = styled.article`
  display: flex;
  flex-direction: column;
  width: 23%;
  height: 294px;
  margin-bottom: 20px;
  background-color: #eaedfc;
  position: relative;
  border-radius: 8px;
  @media screen and (min-width: 1600px) {
    height: 392px;
  }
`;

const StatusContainer = styled.div`
  position: absolute;
  top: 10px;
  width: 76px;
  height: 30px;
  background-color: #4061b7;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const StatusText = styled.div`
  font-size: 13px;
  color: #ffffff;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

const ParentingImg = styled.img`
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 1600px) {
    padding: 15px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 1600px) {
    padding: 15px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const InfoTitle = styled.div`
  width: 30%;
  font-size: 13px;
  font-weight: 300;
  font-family: "Segoe UI", sans-serif;
  color: #a1a1a1;
  margin-right: 5px;
  @media screen and (min-width: 1700px) {
    font-size: 18px;
  }
`;

const InfoContent = styled.div`
  flex: 1;
  font-family: "Segoe UI", sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: #070707;
  @media screen and (min-width: 1600px) {
    font-size: 18px;
  }
`;

export default ParentingItems;
