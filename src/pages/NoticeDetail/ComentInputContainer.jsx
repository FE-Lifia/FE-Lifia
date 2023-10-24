import React from "react";
import styled from "styled-components";
import commentButton from "../../assets/Comment_Button/paper-plane.png";

const ComentInputContainer = ({ inputText, setInputText, handleAddComent }) => {
  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleButtonClick = () => {
    handleAddComent(inputText, "보노보노");
    setInputText("");
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="댓글을 입력하세요."
          value={inputText}
          onChange={handleInputText}
        ></Input>
        <ButtonWrapper>
          <ButtonBox onClick={handleButtonClick}>
            <Button />
          </ButtonBox>
        </ButtonWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 994px;
  height: 85px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-family: "Segoe UI", sans-serif;
  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div``;

const ButtonBox = styled.button`
  width: 85px;
  height: 85px;
  background-color: #477b9a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  background-image: url(${commentButton});
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

export default ComentInputContainer;
