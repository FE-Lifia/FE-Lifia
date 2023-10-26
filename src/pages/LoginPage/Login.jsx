import React, { useState } from "react";
import LoginView from "./LoginView";
import { loginSite } from "../../api/loginSite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 회원가입
  const onClickSignUp = () => {
    window.location.href = "/signup";
  };

  const setUserTokenInLocalStorage = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const onClickLoginButton = () => {
    loginSite(email, password).then((response) => {
      if (response.accessToken) {
        const { accessToken, refreshToken } = response;
        console.log(response.accessToken);
        setUserTokenInLocalStorage(accessToken, refreshToken);
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
