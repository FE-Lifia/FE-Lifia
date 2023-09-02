import React from "react";
import styled from "styled-components";
import LoginButton from "../components/Button/LoginButton";
import InputBox from "../components/Input Box/InputBox";
// 로그인 페이지

    const Login = ({
    onChangeId,
    onChangePassword,
    onClickLoginButton, //로그인
    onClickFindAccount, //비밀번호 찾기
    onClickSignUp,
    }) => {
    return (
        <>
            <LoginViewLayout style={{ display: "flex", flexDirection: "column" }}>
                <LogoImage src={"../img/mainlogo.png"} />
                <LoginContainer>
                <InputBoxContainer style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
                    <InputBox placeholder="ID" onChange={onChangeId} />
                    <InputBox type="password" placeholder="PASSWORD" onChange={onChangePassword} />
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
  background: linear-gradient(to right, #44BAD8, #5CA1E4, #6F96E1);
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
  background: linear-gradient(to right, #8FC7EA, #94C4E9, #99C1E8, #9CBEE8, #9FBCEA);

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

const LogoImage = styled.img`
  width: 15%;
  margin: 0 auto;
  margin-bottom: 10px;
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

export default Login;
