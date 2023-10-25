import React, { useState } from "react";
import styled from "styled-components";
import commentButton from "../../assets/Comment_Button/paper-plane.png";

const SecondContainer = ({ selectId, coments, setComents, replies }) => {
  const [inputText, setInputText] = useState("");
  const handleInputText = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  const handleAddComment = (inputText, selectId) => {
    const updatedComments = coments.map((comment) => {
      if (comment.id === selectId) {
        const reply = Array.isArray(comment.replies) ? comment.replies : [];
        const newComment = {
          id: 14,
          name: "뚱이",
          text: inputText,
          time: new Date().toLocaleString(),
        };
        return {
          ...comment,
          replies: [...reply, newComment],
        };
      }
      return comment;
    });
    setComents(updatedComments);
    setInputText("");
    console.log(coments);
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
          <ButtonBox onClick={() => handleAddComment(inputText, selectId)}>
            <Button />
          </ButtonBox>
        </ButtonWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 70px;
`;

const InputWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #f3f3f3;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 20px;
  background-color: #f3f3f3;
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

export default SecondContainer;
