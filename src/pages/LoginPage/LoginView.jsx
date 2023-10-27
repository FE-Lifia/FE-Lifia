import React from "react";
import styled from "styled-components";
import LoginButton from "../../components/Button/LoginButton";
import InputBox from "../../components/Input_Box/InputBox";

// 로그인 페이지

const LoginView = ({
  onChangeEmail,
  onChangePassword,
  onClickLoginButton, //로그인
}) => {
  //회원가입으로
  const onClickSignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <>
      <LoginViewLayout style={{ display: "flex", flexDirection: "column" }}>
        <LoginContainer>
          <InputBoxContainer
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "30px",
            }}
          >
            <InputBox placeholder="email" onChange={onChangeEmail} />
            <InputBox
              type="password"
              placeholder="PASSWORD"
              onChange={onChangePassword}
            />
          </InputBoxContainer>
          <LoginButton onClick={onClickLoginButton} title="LOGIN"></LoginButton>
        </LoginContainer>
        <SignUpButton onClick={onClickSignUp}>
          아직 아이디가 없다면? &nbsp;회원가입
        </SignUpButton>
      </LoginViewLayout>
    </>
  );
};

const LoginViewLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(to right, #44bad8, #5ca1e4, #6f96e1);
  flex-direction: column;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const LoginContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  background: linear-gradient(
    to right,
    #8fc7ea,
    #94c4e9,
    #99c1e8,
    #9cbee8,
    #9fbcea
  );

  @media (max-width: 760px) {
    width: 100%;
    margin: 0;
  }
`;

const InputBoxContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  font-style: normal;
  font-size: 18px;
  color: #b6b6b6;
  border-radius: 10px;

  @media (max-width: 760px) {
    margin-top: 10px;
  }
`;

const SignUpButton = styled.button`
  height: 50px;
  margin-top: 10px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin: 0 auto;

  &:hover {
    color: #4169e1;
  }
`;

export default LoginView;
