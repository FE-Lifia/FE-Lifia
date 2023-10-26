import React from "react";
import styled from "styled-components";
import { createNoticeApi } from "../../api/createNoticeApi";

const ButtonContainer = ({ noticeOtion, titleText, noticeText }) => {
  const handleApiButton = () => {
    console.log(noticeOtion, titleText, noticeText);
    const accessToken = localStorage.getItem("accessToken");
    if (noticeOtion === "자유게시판") noticeOtion = "freeBoards";
    if (noticeOtion === "공구해요") noticeOtion = "coBuying";
    if (noticeOtion === "배달해요") noticeOtion = "delivery";
    if (noticeOtion === "조심해요") noticeOtion = "caution";
    if (noticeOtion === "투표해요") noticeOtion = "";
    if (noticeOtion === "육아해요") noticeOtion = "childcare";
    const response = createNoticeApi(
      accessToken,
      noticeOtion,
      titleText,
      noticeText
    );
    if (response === 200) {
      window.alert("글 작성이 완료 되었습니다");
      window.location.href = "/";
    }
  };

  return (
    <Wrapper>
      <NewBtn onClick={handleApiButton}>글 등록</NewBtn>
      <CancleBtn>취소</CancleBtn>
    </Wrapper>
  );
};

const CancleBtn = styled.button`
  color: #ffffff;
  background-color: #757677;
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-family: "Segoe UI";
  border-radius: 15px;
`;

const NewBtn = styled.button`
  color: #ffffff;
  background-color: #6c81d5;
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-family: "Segoe UI";
  border-radius: 15px;
  margin-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 10px 20px;
  flex-direction: row-reverse;
`;

export default ButtonContainer;
