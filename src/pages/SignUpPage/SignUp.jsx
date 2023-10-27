import React, { useState, useRef } from "react";
import SignUpView from "./SignUpView";
import { signUpSite } from "../../api/signupSite";

const Signup = () => {
  const [apartment, setApartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // cursor 활성화용 ref
  const apartmentInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const nicknameInputRef = useRef(null);

  const checkEmailRegExp = () => {
    // 이메일 형식
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  };

  const checkPasswordExp = () => {
    //Ex) qwer1234! (숫자,문자 필수, 특수문자 허용, 8~16자리)
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,16}$/.test(
      password
    );
  };

  const onClickSignupButton = () => {
    let invalidField = null;

    if (apartment === "") {
      alert("아파트 정보를 입력해주세요.");
      invalidField = apartmentInputRef;
    } else if (checkEmailRegExp() === false) {
      alert("이메일 형식을 확인해주세요.");
      invalidField = emailInputRef;
    } else if (checkPasswordExp() === false) {
      alert("비밀번호 형식을 확인해주세요.");
      invalidField = passwordInputRef;
    } else if (nickname === "") {
      alert("닉네임을 입력해주세요.");
      invalidField = nicknameInputRef;
    } else {
      signUpSite(email, password, name, nickname, apartment).then(
        (response) => {
          if (response) {
            window.location.href = "/login";
          } else {
            alert("네트워크 문제! 잠시후에 다시 시도해주세요! ");
          }
        }
      );
    }
    // 형식 안맞는 input으로 cursor 활성화
    if (invalidField) {
      invalidField.current.focus();
    }
  };

  return (
    <SignUpView
      onChangeApartment={setApartment}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      onChangeName={setName}
      onChangeNickname={setNickname}
      onClickSignupButton={onClickSignupButton}
      apartmentInputRef={apartmentInputRef}
      emailInputRef={emailInputRef}
      passwordInputRef={passwordInputRef}
      nameInputRef={nameInputRef}
      nicknameInputRef={nicknameInputRef}
    />
  );
};

export default Signup;
