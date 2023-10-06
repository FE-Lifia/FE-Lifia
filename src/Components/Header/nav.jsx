import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ isDropdownOpen }) => {
  return (
    <NavContainer1>
      <NavContainer2>
        <Ul>
          <Li>
            <StyledLink to={"/"}>자유게시판</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/login"}>같이해요</StyledLink>
            {isDropdownOpen && (
              <Container1>
                <Container2>
                  <SubUl>
                    <SubLi>
                      <SubA>
                        <SubSpan>공구해요</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>배달해요</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>조심해요</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>투표해요</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>육아해요</SubSpan>
                      </SubA>
                    </SubLi>
                  </SubUl>
                </Container2>
              </Container1>
            )}
          </Li>
          <Li>
            <StyledLink to={"/"}>고객센터</StyledLink>
            {isDropdownOpen && (
              <Container1>
                <Container2>
                  <SubUl>
                    <SubLi>
                      <SubA>
                        <SubSpan>공지사항</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>자주묻는질문</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>유저신고</SubSpan>
                      </SubA>
                    </SubLi>
                  </SubUl>
                </Container2>
              </Container1>
            )}
          </Li>
          <Li>
            <StyledLink to={"/login"}>마이페이지</StyledLink>
            {isDropdownOpen && (
              <Container1>
                <Container2>
                  <SubUl>
                    <SubLi>
                      <SubA>
                        <SubSpan>내가쓴글</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>댓글단글</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>좋아요</SubSpan>
                      </SubA>
                    </SubLi>
                    <SubLi>
                      <SubA>
                        <SubSpan>설정</SubSpan>
                      </SubA>
                    </SubLi>
                  </SubUl>
                </Container2>
              </Container1>
            )}
          </Li>
        </Ul>
        {isDropdownOpen && <DropdownBackground />}
      </NavContainer2>
    </NavContainer1>
  );
};

const NavContainer1 = styled.div`
  padding: 0;
  height: 100%;
`;

const NavContainer2 = styled.nav`
  display: block;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  height: 100%;
`;

const DropdownBackground = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  top: 91px;
  left: 0;
  z-index: 95;
  height: 200px;
  width: 100%;
`;

const Li = styled.li`
  @media (max-width: 1280px) {
    margin: 0 20px;
  }
  @media screen and (min-width: 1700px) {
    padding: 0 50px 0 50px;
  }
`;

const StyledLink = styled(Link)`
  padding: 0 30px 0 30px;
  display: flex;
  align-items: center;
  height: 100%;
  color: #3b5eae;
  font-size: 25px;
  font-family: "Cafe24 Ssurround", sans-serif;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

const Container1 = styled.div`
  padding: 0 30px 0 30px;
  position: absolute;
  top: 91px;
  z-index: 99;
  overflow: hidden;
`;

const Container2 = styled.div`
  width: 96px;
`;

const SubUl = styled.ul`
  padding: 0px;
`;

const SubLi = styled.li`
  padding: 0;
  vertical-align: middle;
  box-sizing: border-box;
`;

const SubSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
`;

const SubA = styled.a`
  display: block;
  padding: 5px 0;
  text-align: center;
  font-size: 18px;
  color: #7e87b1;
  font-family: "Cafe24 Ssurround", sans-serif;
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

export default Nav;
