import React, { useState } from "react";
import styled from "styled-components";
import commentButton from "../../assets/Comment_Button/paper-plane.png";

const SecondInputContainer = ({ setComments, commentId }) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleInputClick = () => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          const newReply = {
            id: comment.reply.length + 1,
            name: "바다",
            text: inputText,
            time: new Date().toLocaleString(),
          };
          return {
            ...comment,
            reply: [...comment.reply, newReply],
          };
        }
        return comment;
      });
    });
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
          <ButtonBox onClick={handleInputClick}>
            <Button />
          </ButtonBox>
        </ButtonWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f3f3f3;
  height: 70px;
`;

const InputWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Input = styled.input`
  background-color: #f3f3f3;
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
  width: 70px;
  height: 70px;
  background-color: #a1a1a1;
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

export default SecondInputContainer;
