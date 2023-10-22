import React, { useState } from "react";
import styled from "styled-components";
import LoginView from "./LoginView";
import { loginSite } from "../../api/loginSite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 회원가입
  const onClickSignUp = () => {
    window.location.href = "/signup";
  };

  const setUserTokenInLocalStorage = (userEmail, accessToken, refreshToken) => {
    localStorage.setItem("user_email", userEmail); // TODO: 수정필요
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const onClickLoginButton = () => {
    loginSite(email, password).then((response) => {
      if (response.accessToken) {
        const { accessToken, refreshToken, user_email } = response;
        setUserTokenInLocalStorage(user_email, accessToken, refreshToken);
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <LoginView
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onClickSignUp={onClickSignUp}
        onClickLoginButton={onClickLoginButton}
      />
    </>
  );
};

export default Login;
