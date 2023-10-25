import styled from "styled-components";

const Bord = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>자유게시판</Title>
      </TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 994px;
  height: 96px;
  background-color: #ffffff;
`;

const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  color: #757677;
  font-family: "Cafe24 Ssurround", sans-serif;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

export default Bord;
