import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const RegisterInputContainer = ({ noticeOtion, setNoticeOption }) => {
  const options = ["공구해요", "배달해요", "조심해요", "투표해요", "육아해요"];
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (option) => {
    setNoticeOption(option);
    setIsOpen(false);
  };

  const handleDrop = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <DropContainer>
        <NoticeTitle>게시판</NoticeTitle>
        <InputContainer>
          <InputBox>
            <Input>{noticeOtion}</Input>
          </InputBox>
          <SelectButtonBox onClick={handleDrop}>
            {isOpen ? (
              <FaAngleUp size={20} color="#919395" />
            ) : (
              <FaAngleDown size={20} color="#919395" />
            )}
          </SelectButtonBox>
        </InputContainer>
        {isOpen ? (
          <DropdownContent>
            {options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => handleItemClick(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownContent>
        ) : (
          ""
        )}
      </DropContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DropContainer = styled.div``;

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
  border-radius: 10px 0 0 10px;
  padding: 5px;
  width: 400px;
  height: 56px;
  &:focus {
    outline: none;
    border: 2px solid #3b5eae;
  }
`;

const Input = styled.div`
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

const SelectButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #8d8e8e;
  border-left: none;
  border-radius: 0 10px 10px 0;
  padding: 5px;
  width: 56px;
  height: 56px;
  &:focus {
    outline: none;
    border: 2px solid #3b5eae;
  }
`;

const DropdownContent = styled.div`
  display: "block";
  position: absolute;
  min-width: 450px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  background-color: #ffffff;
  &:hover {
    background-color: #ddd;
  }
`;

export default RegisterInputContainer;
