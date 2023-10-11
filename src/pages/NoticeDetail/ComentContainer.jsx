import React from "react";
import styled from "styled-components";
import SecondContainer from "./SecondContainer";

const ComentContainer = () => {
  return (
    <Wrapper>
      <TotalComentWrapper>
        <TotalComent>댓글 2개</TotalComent>
      </TotalComentWrapper>
      <ComentWrapper>
        <ComentName>바다</ComentName>
        <ComentText>어 저도 그거 궁금했어요</ComentText>
        <RightBoxWrapper>
          <RightBox>
            <ReplyNotifyWrapper>
              <ReplyWrapper>
                <Reply>대댓글</Reply>
              </ReplyWrapper>
              <NotifyWrapper>
                <Notify>신고</Notify>
              </NotifyWrapper>
            </ReplyNotifyWrapper>
            <TimeWrapper>
              <TimeText>2023-08-10 01:38</TimeText>
            </TimeWrapper>
          </RightBox>
        </RightBoxWrapper>
      </ComentWrapper>
      <ComentWrapper>
        <ComentName>포로리</ComentName>
        <ComentText>아 그거 별거 아니래요!</ComentText>
        <RightBoxWrapper>
          <RightBox>
            <ReplyNotifyWrapper>
              <ReplyWrapper>
                <Reply>대댓글</Reply>
              </ReplyWrapper>
              <NotifyWrapper>
                <Notify>신고</Notify>
              </NotifyWrapper>
            </ReplyNotifyWrapper>
            <TimeWrapper>
              <TimeText>2023-08-10 01:38</TimeText>
            </TimeWrapper>
          </RightBox>
        </RightBoxWrapper>
      </ComentWrapper>
      <SecondContainer />
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
  width: 15%;
`;

const ComentText = styled.div`
  color: #393939;
  font-size: 19px;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  width: 60%;
`;

const RightBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 13%;
`;

const RightBox = styled.div`
  width: 100%;
`;

const ReplyNotifyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TimeText = styled.div`
  color: #7b7c7d;
  font-size: 14px;
  font-family: "Segoe UI", sans-serif;
`;

export default ComentContainer;
