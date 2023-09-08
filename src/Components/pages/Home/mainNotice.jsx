import styled from "styled-components";

const MainNotice = () => {
  const HotBordItems = () => {
    const boardItems = [];
    for (let i = 0; i < 10; i++) {
      boardItems.push(
        <BoardItem key={i}>
          <BordNum>{i + 1}</BordNum>
          <BoardCategory>자유게시판</BoardCategory>
          <BoardItemTitle>층간소음 해결방ㅇㅇㅇㅇㅇ</BoardItemTitle>
        </BoardItem>
      );
    }
    return boardItems;
  };

  return (
    <MainNoticeWrapper>
      <Container>
        <NoticeWrapper>
          <NoticeTitle>HOT 게시판</NoticeTitle>
          <BoardList>{HotBordItems()}</BoardList>
        </NoticeWrapper>
        <NoticeWrapper>
          <NoticeTitle>최신 게시판</NoticeTitle>
          <BoardList>
            <BoardItem>
              <BoardItemTitle>게시글 제목</BoardItemTitle>
            </BoardItem>
          </BoardList>
        </NoticeWrapper>
      </Container>
    </MainNoticeWrapper>
  );
};

const MainNoticeWrapper = styled.div`
  background-color: #f5f5f5;
  margin-top: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 220px 0 220px;
  background-color: #ffffff;
`;

const NoticeWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const NoticeTitle = styled.div`
  padding: 10px;
  border-bottom: 2px solid #3b5eae;
  font-family: "Cafe24 Ssurround", sans-serif;
  font-size: 20px;
  color: #3b5eae;
  font-weight: bold;
  /* @font-face 규칙을 사용하여 Cafe24 Ssurround 폰트를 로드합니다. */
  @font-face {
    font-family: "Cafe24 Ssurround";
    src: url("/fonts/Cafe24Ssurround.ttf") format("truetype");
    font-style: normal;
  }
`;

const BoardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BoardItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const BordNum = styled.div`
  padding-right: 60px;
  width: 20px;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  font-family: "Segoe UI", sans-serif;
`;

const BoardItemTitle = styled.div`
  font-size: 14px;
  color: #070707;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoardCategory = styled.div`
  padding-right: 60px;
  width: 130px;
  font-size: 14px;
  font-weight: semi-bold;
  color: #b7b7b8;
`;

export default MainNotice;
