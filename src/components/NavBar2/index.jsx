import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <TopTitleWrapper>
        <TopTitle>같이해요</TopTitle>
      </TopTitleWrapper>
      <TenNoticeWrapper>
        <NoticeWrapper>
          <NoticeText>공구해요</NoticeText>
        </NoticeWrapper>
        <NoticeWrapper>
          <NoticeText>배달해요</NoticeText>
        </NoticeWrapper>
        <NoticeWrapper>
          <NoticeText>조심해요</NoticeText>
        </NoticeWrapper>
        <NoticeWrapper>
          <NoticeText>투표해요</NoticeText>
        </NoticeWrapper>
        <NoticeWrapper>
          <NoticeText>육아해요</NoticeText>
        </NoticeWrapper>
      </TenNoticeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 250px;
  margin-top: 20px;
`;

const TopTitleWrapper = styled.div`
  background-color: #6c81d5;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopTitle = styled.div`
  color: #ffffff;
  font-size: 27px;
  font-family: "Cafe24 Ssurround", sans-serif;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

const TenNoticeWrapper = styled.div``;

const NoticeWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  padding: 20px 10px;
  border-top: 1px solid #c4c3c3;
`;

const NoticeText = styled.div`
  color: #757677;
  font-size: 22px;
  font-family: "Segoe UI", sans-serif;
  font-family: "Cafe24 Ssurround", sans-serif;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

export default NavBar;
