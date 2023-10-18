import React, { useState } from "react";
import styled from "styled-components";
import Bord from "./Bord";
import MainContainer from "./MainContainer";
import ComentInputContainer from "./ComentInputContainer";
import NavBar from "../../components/NavBar";

const NoticeDetail = () => {
  const [inputText, setInputText] = useState("");
  const [coments, setComents] = useState([
    {
      id: 1,
      name: "바다",
      text: "어 저도 그거 궁금했어요",
      time: "2023-08-10 01:38",
    },
    {
      id: 2,
      name: "포로리",
      text: "아 그거 별거 아니래요!",
      time: "2023-08-10 01:38",
    },
  ]);

  const handleAddComent = (inputText, userId) => {
    const newComent = {
      id: coments.length + 1,
      name: userId,
      text: inputText,
      time: new Date().toLocaleString(),
    };
    setComents([...coments, newComent]);
  };

  return (
    <Wrapper>
      <Container>
        <Container2>
          <Bord />
          <MainContainer inputText={inputText} coments={coments} />
          <ComentInputContainer
            inputText={inputText}
            setInputText={setInputText}
            handleAddComent={handleAddComent}
          />
        </Container2>
        <NavContainer>
          <NavBar />
        </NavContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: rgba(141, 155, 226, 0.2);
`;

const Container = styled.div`
  margin: 0 10%;
  padding: 20px 0;
  display: flex;
`;

const Container2 = styled.div`
  height: 100%;
`;

const NavContainer = styled.div`
  margin-left: 3%;
`;

export default NoticeDetail;
