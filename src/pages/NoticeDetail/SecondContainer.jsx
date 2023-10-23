import React from "react";
import styled from "styled-components";
import SecondInputContainer from "./SecondInputContainer";

const SecondContainer = ({
  commentReply,
  showInput,
  sendId,
  commentId,
  setComments,
}) => {
  return (
    <>
      <Wrapper>
        <SecondContainerWrapper>
          {commentReply.map((reply) => (
            <SecondContainerBox key={reply.id}>
              <SecondContainerName>{reply.name}</SecondContainerName>
              <SecondContainerText>{reply.text}</SecondContainerText>
              <RightBoxWrapper>
                <RightBox>
                  <NotifyWrapper>
                    <Notify>신고</Notify>
                  </NotifyWrapper>
                  <TimeWrapper>
                    <TimeText>{reply.time}</TimeText>
                  </TimeWrapper>
                </RightBox>
              </RightBoxWrapper>
            </SecondContainerBox>
          ))}
          {sendId === commentId && showInput && (
            <SecondInputContainer
              setComments={setComments}
              commentId={commentId}
            />
          )}
        </SecondContainerWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SecondContainerWrapper = styled.div`
  width: 93%;
`;

const SecondContainerBox = styled.div`
  display: flex;
  height: 70px;
  padding: 0 20px;
  background-color: #e5e9eb;
  justify-content: space-between;
`;

const SecondContainerName = styled.div`
  color: #393939;
  font-size: 20px;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
`;

const SecondContainerText = styled.div`
  color: #393939;
  font-size: 20px;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  width: 50%;
`;

const RightBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightBox = styled.div``;

const NotifyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Notify = styled.div`
  color: #393939;
font-size: 17px;
font-family: 'Segoe UI', sans-serif;'
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TimeText = styled.div`
  color: #7B7C7D; 
font-size: 15px;
font-family: 'Segoe UI', sans-serif;'
`;

export default SecondContainer;
