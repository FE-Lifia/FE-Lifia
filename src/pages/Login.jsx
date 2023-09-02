import React from "react";
import styled from "styled-components";
import LoginButton from "../Components/Button/LoginButton"
import LogininputBox from "../Components/Input Box/LoginInputBox"
//로그인 페이지

const Login = ({ onChangeId, onChangePassword, onClickLoginButton, onClickFindAccount, onClickSignUp }) => {
    return (
        <>
            <LoginVeiwLayout style={{ display: "flex", backgroundColor: "white" }}>
                <LoginContainer style={{ flex: 1 }}>
                    <InputBoxContainer style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "10px" }}>
                        <LogininputBox placeholder="ID" onChange={onChangeId} />
                        <LogininputBox type="password" placeholder="PASSWORD" onChange={onChangePassword} />
                    </InputBoxContainer>
                    <LoginButton onClick={onClickLoginButton} title="LOGIN"></LoginButton>
                </LoginContainer>
            </LoginVeiwLayout>
        </>
    );
};

const LoginVeiwLayout = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    flex-direction: row;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;

const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin: left;
    background: linear-gradient(180deg, #93C5EA 50%, #99BEEB 0%);

    @media (max-width: 760px) {
        width: 100%;
        margin: 0;
    }
`;

const InputBoxContainer = styled.div`
    margin-top: 100px;
    width: 100%;
    font-family: nexon-regular;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #b6b6b6;

    @media (max-width: 760px) {
        margin-top: 50px;
    }
`;

export default Login;
