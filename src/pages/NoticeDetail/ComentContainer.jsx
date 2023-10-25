import React, { useState } from "react";
import styled from "styled-components";
import SecondContainer from "./SecondContainer";

const ComentContainer = ({ coments, setComents }) => {
  const [showInput, setShowInput] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const handleShowInput = (id) => {
    setShowInput(!showInput);
    setSelectId(id);
  };
  return (
    <Wrapper>
      <TotalComentWrapper>
        <TotalComent>댓글 2개</TotalComent>
      </TotalComentWrapper>
      {coments.map((coment) => (
        <React.Fragment key={coment.id}>
          <ComentWrapper>
            <ComentName>{coment.name}</ComentName>
            <ComentText>{coment.text}</ComentText>
            <RightBoxWrapper>
              <RightBox>
                <ReplyNotifyWrapper>
                  <ReplyWrapper>
                    <Reply onClick={() => handleShowInput(coment.id)}>
                      대댓글
                    </Reply>
                  </ReplyWrapper>
                  <NotifyWrapper>
                    <Notify>신고</Notify>
                  </NotifyWrapper>
                </ReplyNotifyWrapper>
                <TimeWrapper>
                  <TimeText>{coment.time}</TimeText>
                </TimeWrapper>
              </RightBox>
            </RightBoxWrapper>
          </ComentWrapper>
          <SecondContainer
            replies={coment.replies}
            showInput={showInput}
            handleInput={coment.id}
            selectId={selectId}
            coments={coments}
            setComents={setComents}
          />
        </React.Fragment>
      ))}
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
`;

const ReplyWrapper = styled.div`
  width: 50%;
`;

const Reply = styled.button`
  color: #545454;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
`;

const NotifyWrapper = styled.div`
  width: 50%;
`;

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
