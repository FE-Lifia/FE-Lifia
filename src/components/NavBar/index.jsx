import React from "react";
import styled, { css } from "styled-components";

const NavBar = () => {
  const TenBoradItems = () => {
    const tenBorad = [];
    for (let i = 0; i < 10; i++) {
      tenBorad.push(
        <NoticeWrapper key={i} isLast={i === 9}>
          <NoticeNum>{i + 1}</NoticeNum>
          <NoticeTitle>자유게시판</NoticeTitle>
          <NoticeText>공지사항입니다.dddddddddd</NoticeText>
        </NoticeWrapper>
      );
    }
    return tenBorad;
  };
  return (
    <Wrapper>
      <TopTitleWrapper>
        <TopTitle>HOT 게시글</TopTitle>
      </TopTitleWrapper>
      <TenNoticeWrapper>{TenBoradItems()}</TenNoticeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 335px;
`;

const TopTitleWrapper = styled.div`
  background-color: #6c81d5;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopTitle = styled.div`
  color: #ffffff;
  font-size: 20px;
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
  justify-content: space-between;
  padding: 20px 10px;
  ${(props) =>
    !props.isLast &&
    css`
      border-bottom: 1px solid #e5e5e5;
    `}
`;

const NoticeNum = styled.div`
  color: #000000;
  font-size: 23px;
  font-family: "Segoe UI", sans-serif;
  width: 5%;
`;

const NoticeTitle = styled.div`
  color: #b7b7b8;
  font-size: 20px;
  font-family: "Segoe UI", sans-serif;
  width: 30%;
`;

const NoticeText = styled.div`
  color: #070707;
  font-size: 20px;
  font-family: "Segoe UI", sans-serif;
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default NavBar;
