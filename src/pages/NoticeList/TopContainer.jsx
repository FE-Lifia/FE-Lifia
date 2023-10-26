import React from "react";
import styled from "styled-components";
import { SearchIcon } from "./IconSelection";

const TopContainer = () => {
  return (
    <Wrapper>
      <NoticeTitleBox>
        <Title>배달해요 게시판</Title>
      </NoticeTitleBox>
      <RightBox>
        <NewNoticeWrapper>
          <NewNoticeButton>새 글 쓰기</NewNoticeButton>
        </NewNoticeWrapper>
        <SearchWrapper>
          <SearchInputStyle placeholder="검색어를 입력해주세요" type="text" />
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
        </SearchWrapper>
      </RightBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #9b9a9a;
  padding: 0 20px;
`;

const NoticeTitleBox = styled.div``;

const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewNoticeWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

const NewNoticeButton = styled.button`
  color: #757677;
  font-size: 25px;
  font-family: "Cafe24Ssurround";
  @font-face {
    font-family: "Cafe24Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
  }
`;

const Title = styled.div`
  color: #757677;
  font-size: 30px;
  font-family: "Cafe24Ssurround";
  @font-face {
    font-family: "Cafe24Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
  }
`;

const SearchInputStyle = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #96989b;
    font-size: 20px;
    font-family: "Segoe UI";
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #8d8e8e;
  border-radius: 20px;
  padding: 5px;
  width: 300px;
  height: 56px;
  &:focus {
    outline: none;
    border: 2px solid #3b5eae;
  }
`;

const IconWrapper = styled.div`
  margin-right: 15px;
`;

export default TopContainer;
