import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchInput from "./searchInput";

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
      <Li>
        <SearchInput />
      </Li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;

const Li = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link)`
  color: #3b5eae;
  text-decoration: none;
  font-size: 25px;
  font-family: "Cafe24 Ssurround", sans-serif;
  /* @font-face 규칙을 사용하여 Cafe24 Ssurround 폰트를 로드합니다. */
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export default ul;
