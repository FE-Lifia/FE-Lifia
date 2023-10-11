import React from "react";
import styled from "styled-components";

const SecondContainer = () => {
  return (
    <Wrapper>
      <SecondContainerWrapper>
        <SecondContainerBox>
          <SecondContainerName>바다</SecondContainerName>
          <SecondContainerText>어 저도 그거 궁금했어요</SecondContainerText>
          <RightBoxWrapper>
            <RightBox>
              <NotifyWrapper>
                <Notify>신고</Notify>
              </NotifyWrapper>
              <TimeWrapper>
                <TimeText>2023-08-10 01:38</TimeText>
              </TimeWrapper>
            </RightBox>
          </RightBoxWrapper>
        </SecondContainerBox>
      </SecondContainerWrapper>
    </Wrapper>
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
