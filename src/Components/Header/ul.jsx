import { Link } from "react-router-dom";
import styled from "styled-components";

const ul = () => {
  return (
    <Ul>
      <Li>
        <StyledLink to={"/"}>자유게시판</StyledLink>
      </Li>
      <Li>
        <StyledLink to={"/login"}>같이해요</StyledLink>
      </Li>
      <Li>
        <StyledLink to={"/"}>고객센터</StyledLink>
      </Li>
      <Li>
        <StyledLink to={"/login"}>마이페이지</StyledLink>
      </Li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

const Li = styled.li`
  ${"" /* margin: 0 30px; */}
  padding: 10px 30px 0 30px;
  @media (max-width: 1280px) {
    margin: 0 20px;
  }
  @media screen and (min-width: 1700px) {
    padding: 10px 50px 0 50px;
  }
`;

const StyledLink = styled(Link)`
  color: #3b5eae;
  text-decoration: none;
  font-size: 25px;
  font-family: "Cafe24 Ssurround", sans-serif;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

export default ul;
