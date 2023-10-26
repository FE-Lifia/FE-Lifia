import React from "react";
import styled from "styled-components";
import RegisterInputContainer from "./RegisterInputContainer";
import OpenLinkContainer from "./OpenLInkContainer";

const InputLinkContainer = ({
  noticeOtion,
  setNoticeOption,
  linkText,
  setLinkText,
}) => {
  return (
    <Wrapper>
      <TopWrapper>
        <TopTitle>작성할 게시판을 선택해주세요.</TopTitle>
        <InputWrapper>
          <RegisterInputContainer
            noticeOtion={noticeOtion}
            setNoticeOption={setNoticeOption}
          ></RegisterInputContainer>
          <OpenLinkContainer
            linkText={linkText}
            setLinkText={setLinkText}
          ></OpenLinkContainer>
        </InputWrapper>
      </TopWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1020px;
  height: 100%;
  margin-top: 20px;
`;

const TopWrapper = styled.div`
  padding: 10px 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
