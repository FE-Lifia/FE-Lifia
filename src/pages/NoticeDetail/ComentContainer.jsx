import React from "react";
import styled from "styled-components";

const ComentContainer = () => {
  return (
    <Wrapper>
      <TotalComentWrapper>
        <TotalComent>댓글 2개</TotalComent>
      </TotalComentWrapper>
      <ComentWrapper>
        <ComentName>바다</ComentName>
        <ComentText>댓글입니다.</ComentText>
        <RightBoxWrapper>
          <RightBox>
            <ReplyNotifyWrapper>
              <ReplyWrapper>
                <Reply>답글</Reply>
              </ReplyWrapper>
              <NotifyWrapper>
                <Notify>신고</Notify>
              </NotifyWrapper>
            </ReplyNotifyWrapper>
            <TimeWrapper>
              <TimeText>2021.06.11</TimeText>
            </TimeWrapper>
          </RightBox>
        </RightBoxWrapper>
      </ComentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;

const TotalComentWrapper = styled.div`
  padding: 0 10px 10px 0;
`;

const TotalComent = styled.div`
  color: #7b7c7d;
  font-size: 21px;
  font-family: "Segoe UI", sans-serif;
`;

const ComentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 70px;
  border-top: 1px solid #c1bdbd;
`;

const ComentName = styled.div`
  color: #393939;
  font-size: 19px;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
`;

const ComentText = styled.div`
  color: #393939;
  font-size: 19px;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
`;

const RightBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightBox = styled.div``;

const ReplyNotifyWrapper = styled.div`
  display: flex;
`;

const ReplyWrapper = styled.div``;

const Reply = styled.div`
  color: #545454;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
`;

const NotifyWrapper = styled.div``;

const Notify = styled.div`
  color: #545454;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
`;

const TimeWrapper = styled.div``;

const TimeText = styled.div`
  color: #7b7c7d;
  font-size: 14px;
  font-family: "Segoe UI", sans-serif;
`;

export default ComentContainer;
