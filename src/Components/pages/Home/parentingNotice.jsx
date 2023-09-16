import styled from "styled-components";
import ParentingItems from "./parentingItems";

const ParentingNotice = () => {
  return (
    <MainNoticeWrapper>
      <Container>
        <NoticeWrapper>
          <NoticeTitle>함께 육아해요!</NoticeTitle>
          <ParentingList>
            <ParentingItems />
          </ParentingList>
        </NoticeWrapper>
      </Container>
    </MainNoticeWrapper>
  );
};

const MainNoticeWrapper = styled.section`
  background-color: #f5f5f5;
  margin-top: 0;
  padding: 0;
`;

const Container = styled.div`
  margin: 0 250px 0 250px;
  background-color: #ffffff;
`;

const NoticeWrapper = styled.div`
  padding: 30px;
`;

const NoticeTitle = styled.div`
  padding: 10px;
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

const ParentingList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ParentingNotice;
