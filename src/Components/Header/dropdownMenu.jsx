import styled from "styled-components";

const DropdownMenu = () => {
  return (
    <DropdownMenuContainer>
      <DropdownMenuUl>
        <DropdownMenuLi>Menu Item 1</DropdownMenuLi>
        <DropdownMenuLi>Menu Item 2</DropdownMenuLi>
        <DropdownMenuLi>Menu Item 3</DropdownMenuLi>
      </DropdownMenuUl>
    </DropdownMenuContainer>
  );
};

const DropdownMenuContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: translateY(0);
  }
`;

const DropdownMenuUl = styled.ul`
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownMenuLi = styled.li`
  font-size: 16px;
  color: #333;
  padding: 10px;
  cursor: pointer;
`;

export default DropdownMenu;
