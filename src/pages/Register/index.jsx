import React, { useState } from "react";
import styled from "styled-components";
import InputLinkContainer from "./InputLinkContainer";
import TitleTextContainer from "./TitleTextContainer";
import ButtonContainer from "./ButtonContainer";

const Register = () => {
  const [linkText, setLinkText] = useState("");
  const [noticeOtion, setNoticeOption] = useState("선택하세요");
  const [titleText, setTitleText] = useState("");
  const [noticeText, setNoticeText] = useState("");

  return (
    <Wrapper>
      <Container>
        <Container1>
          <InputLinkContainer
            linkText={linkText}
            setLinkText={setLinkText}
            noticeOtion={noticeOtion}
            setNoticeOption={setNoticeOption}
          />
          <TitleTextContainer
            titleText={titleText}
            setTitleText={setTitleText}
            noticeText={noticeText}
            setNoticeText={setNoticeText}
          />
          <ButtonContainer
            noticeOtion={noticeOtion}
            titleText={titleText}
            noticeText={noticeText}
          />
        </Container1>
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
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

const Container1 = styled.div`
  height: 100%;
`;

export default Register;
