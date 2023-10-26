import React from "react";
import styled from "styled-components";

const OpenLinkContainer = ({ linkText, setLinkText }) => {
  const handleInput = (e) => {
    setLinkText(e.target.value);
  };

  return (
    <Wrapper>
      <NoticeTitle>카카오톡 오픈링크 주소</NoticeTitle>
      <InputContainer>
        <InputBox>
          <Input value={linkText} placeholder="링크" onChange={handleInput} />
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
  display: flex;
  align-items: center;
  border: 2px solid #8d8e8e;
  border-radius: 10px;
  padding: 5px;
  width: 450px;
  height: 56px;
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

export default OpenLinkContainer;
