import styled from "styled-components";

const ParentingItems = () => {
  return (
    <>
      <ParentingItem />
      <ParentingItem />
      <ParentingItem />
      <ParentingItem />
    </>
  );
};

const ParentingItem = styled.article`
  width: 23%;
  height: 294px;
  margin-bottom: 20px;
  background-color: #eaedfc;
`;

export default ParentingItems;
