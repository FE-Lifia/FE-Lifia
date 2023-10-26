import React from "react";
import styled from "styled-components";

const TextBox = ({ noticeText, setNoticeText }) => {
  const handleInput = (e) => {
    setNoticeText(e.target.value);
  };

  return (
    <Wrapper>
      <NoticeTitle>내용</NoticeTitle>
      <InputContainer>
        <InputBox>
          <Input
            value={noticeText}
            placeholder="모임에 대해 설명해주세요"
            onChange={handleInput}
          />
        </InputBox>
      </InputContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NoticeTitle = styled.div`
  color: #000000;
  font-size: 20px;
  font-family: "Segoe UI";
`;

const InputContainer = styled.div`
  display: flex;
  padding-top: 10px;
`;

const InputBox = styled.div`
  border: 2px solid #8d8e8e;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  height: 300px;
  &:focus {
    outline: none;
    border: 2px solid #3b5eae;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #96989b;
    font-size: 20px;
    font-family: "Segoe UI";
  }
`;

export default TextBox;
