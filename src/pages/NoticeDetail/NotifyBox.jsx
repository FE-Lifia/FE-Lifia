import React, { useState } from "react";
import styled from "styled-components";

const NotifyBox = ({ setShowWindow }) => {
  const [notify, setNotify] = useState("");

  const handleGenderChange = (event) => {
    setNotify(event.target.value);
  };

  const handleNotifyButtonClick = () => {
    setShowWindow(false);
    console.log(notify);
    window.alert("신고가 접수되었습니다.");
  };

  const handleCancelClick = () => {
    setShowWindow(false);
  };

  return (
    <Wrapper>
      <NotifyBoxWrapper>
        <RadioWrapper>
          <Label>
            <Input
              type="radio"
              name="gender"
              value="포르노 또는 음란물"
              checked={notify === "포르노 또는 음란물"}
              onChange={handleGenderChange}
            />
            <InputText>포르노 또는 음란물</InputText>
          </Label>
          <Label>
            <Input
              type="radio"
              name="gender"
              value="아동학대"
              checked={notify === "아동학대"}
              onChange={handleGenderChange}
            />
            <InputText>아동학대</InputText>
          </Label>
          <Label>
            <Input
              type="radio"
              name="gender"
              value="괴롭힘 또는 폭력"
              checked={notify === "괴롭힘 또는 폭력"}
              onChange={handleGenderChange}
            />
            <InputText>포르노 또는 음란물</InputText>
          </Label>
          <Label>
            <Input
              type="radio"
              name="gender"
              value="테러 조장"
              checked={notify === "테러 조장"}
              onChange={handleGenderChange}
            />
            <InputText>테러 조장</InputText>
          </Label>
          <Label>
            <Input
              type="radio"
              name="gender"
              value="자살 또는 자해"
              checked={notify === "자살 또는 자해"}
              onChange={handleGenderChange}
            />
            <InputText>자살 또는 자해</InputText>
          </Label>
          <Label>
            <Input
              type="radio"
              name="gender"
              value="잘못된 정보"
              checked={notify === "잘못된 정보"}
              onChange={handleGenderChange}
            />
            <InputText>잘못된 정보</InputText>
          </Label>
        </RadioWrapper>
        <ButtonWrapper>
          <ButtonBox>
            <Button onClick={handleNotifyButtonClick}>신고</Button>
            <Button onClick={handleCancelClick}>취소</Button>
          </ButtonBox>
        </ButtonWrapper>
      </NotifyBoxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const NotifyBoxWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  width: 240px;
  height: 320px;
  padding: 0 20px;
  background-color: #f6f6f6;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  padding: 10px 0;
`;

const InputText = styled.div`
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
`;

const Input = styled.input``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonBox = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  color: #818080;
  font-size: 19px;
  font-family: "Segoe UI", sans-serif;
`;

export default NotifyBox;
