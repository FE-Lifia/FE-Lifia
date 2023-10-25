import React from "react";
import styled from "styled-components";
import { ViewIcon, HeartIcon, MessageIcon } from "./IconSelection";
import kids_cafe1 from "../../assets/mainpage/1440/kids_cafe1.png";

const ListContainer = () => {
  return (
    <Wrapper>
      <ListBox>
        <TiltleNumWrapper>
          <TitmeNum>2081</TitmeNum>
        </TiltleNumWrapper>
        <TitleInfoWrapper>
          <TitleInfoBox>
            <TitleInfo1>날시도 더운데 얼음팩 공구해요!</TitleInfo1>
            <TitleInfo2>
              <TitleText>포로리</TitleText>
              <TitleText>2023-08-09</TitleText>
            </TitleInfo2>
          </TitleInfoBox>
        </TitleInfoWrapper>
        <IconWrapper>
          <ViewIcon />
          <IconCount>300</IconCount>
          <HeartIcon />
          <IconCount>20</IconCount>
          <MessageIcon />
          <IconCount>3</IconCount>
        </IconWrapper>
        <ImgBox>
          <Img src={kids_cafe1} />
        </ImgBox>
      </ListBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  border-bottom: 1px solid #c3c3c4;
  padding: 0 20px;
`;

const TiltleNumWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

const TitmeNum = styled.div`
  color: #909194;
  font-size: 20px;
  font-family: "Segoe UI";
`;

const TitleInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const TitleInfoBox = styled.div``;

const TitleInfo1 = styled.div`
  color: #000000;
  font-size: 23px;
  font-family: "Segoe UI";
`;

const TitleText = styled.div`
  color: #a4a6a8;
  font-size: 18px;
  font-family: "Segoe UI";
  padding-right: 40px;
`;

const TitleInfo2 = styled.div`
  display: flex;
  margin-top: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;

const IconCount = styled.div`
  color: #858181;
  font-size: 19px;
  font-family: "Segoe UI";
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
`;

const Img = styled.img`
  with: 110px;
  height: 110px;
`;

export default ListContainer;
