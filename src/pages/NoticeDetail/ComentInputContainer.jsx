import React from "react";
import styled from "styled-components";

const ComentInputContainer = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input placeholder="댓글을 입력하세요."></Input>
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
  padding: 0 20px;
`;

const Input = styled.input``;

export default ComentInputContainer;
