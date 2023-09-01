import React from "react";
import styled from "styled-components";
import LoginButton from "../Components/Button/LoginButton"


const Login = ({ onChangeId, onChangePassword, onClickLoginButton, onClickFindAccount, onClickSignUp }) => {
    return (
        <>
            <LoginVeiwLayout style={{ display: "flex", backgroundColor: "white" }}>
                <LoginContainer style={{ flex: 1 }}>
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

    @media (max-width: 760px) {
        width: 100%;
        margin: 0;
    }
`;


export default Login;
