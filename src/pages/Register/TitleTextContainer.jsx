import React from "react";
import styled from "styled-components";
import TitleBox from "./TitleBox";
import TextBox from "./TextBox";

const InputLinkContainer = ({
  titleText,
  setTitleText,
  noticeText,
  setNoticeText,
}) => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopTitle>모임에 대해서 설명해주세요</TopTitle>
        <InputWrapper>
          <TitleBox titleText={titleText} setTitleText={setTitleText} />
        </InputWrapper>
        <InputWrapper>
          <TextBox noticeText={noticeText} setNoticeText={setNoticeText} />
        </InputWrapper>
      </TopWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1020px;
  height: 100%;
`;

const TopWrapper = styled.div`
  padding: 10px 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
`;

const TopTitle = styled.div`
  color: #757677;
  font-size: 22px;
  padding: 20px 20px 10px 0;
  font-family: "Cafe24Ssurround";
  @font-face {
    font-family: "Cafe24Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
  }
  border-bottom: 3px solid #f2f2f2;
`;

export default InputLinkContainer;
