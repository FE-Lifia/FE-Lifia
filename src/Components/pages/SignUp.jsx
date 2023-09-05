import React from "react";
import styled from "styled-components";
import ColoredInputBox from "../Input_Box/ColoredInputBox";
import InputBoxwithIcon from "../Input_Box/InputBoxWithIcon";
import UploadFileInputBox from "../Input_Box/UploadFileInputBox";
import Button from "../Button/LoginButton";

const SignUp = ({
  onChangeApartment,
  onChangeIDcardnumber,
  onChangeID,
  onChangePassword,
  onChangeEmail,
  onClickSignupButton,
  onChangeRealname,
  onChangeNickname,
}) => {
  return (
    <>
      <SignupViewLayout style={{ display: "flex", flexDirection: "column" }}>
        <SignUpContainer>
          {/* 아파트입력 */}
          <InputBoxContainer
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <LogoImage src={"../img/leftlogo.png"} />
            <InputBoxwithIcon
              placeholder="아파트명 검색"
              onChange={onChangeApartment}
            />
            <UploadFileInputBox
              placeholder="주민등록증 사진"
              onChange={onChangeIDcardnumber}
            />

            <Title2 style={{ fontSize: "0.3rem" }}>
              {" "}
              * 사진은 인증 외의 용도로 활용되지 않습니다.{" "}
            </Title2>
          </InputBoxContainer>

          {/* 비번 입력 */}
          <InputBoxContainer
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <ColoredInputBox placeholder="ID" onChange={onChangeID} />
            <ColoredInputBox
              placeholder="PASSWORD"
              onChange={onChangePassword}
              type="password"
            />
            <ColoredInputBox placeholder="EMAIL" onChange={onChangeEmail} />
          </InputBoxContainer>

          {/* 3번째 */}

          <InputBoxContainer
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <ColoredInputBox
              placeholder="이름 (성명)"
              onChange={onChangeRealname}
            />
            <ColoredInputBox placeholder="닉네임" onChange={onChangeNickname} />
            <div style={{ width: "inherit", margin: "10px 0 10px" }}>
              <Button
                title="회원가입"
                onClick={onClickSignupButton}
                style={{ width: "inherit" }}
              />
            </div>
          </InputBoxContainer>
        </SignUpContainer>
      </SignupViewLayout>
    </>
  );
};

const Title2 = styled.p`
  margin-top: 10px;
  color: #747474;

  @media (max-width: 760px) {
    font-size: 13px;
  }
`;

const SignupViewLayout = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: row;
  background: linear-gradient(to right, #44bad8, #5ca1e4, #6f96e1);

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const SignUpContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 0 auto;

  @media (max-width: 760px) {
    width: 100%;
    margin: 0;
  }
`;

const InputBoxContainer = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 18px;
  color: #b6b6b6;
  margin-top: 30px;

  @media (max-width: 760px) {
    margin-top: 1px;
  }
`;

const LogoImage = styled.img`
  width: 50%;
  margin-right: auto;
`;
export default SignUp;
