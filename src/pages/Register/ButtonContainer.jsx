import React from "react";
import styled from "styled-components";

const ButtonContainer = () => {
  return (
    <Wrapper>
      <NewBtn>글 등록</NewBtn>
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
