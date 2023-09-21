import styled from "styled-components";

const DropdownMenu = (props) => {
  return (
    <>
      {props.isDropdownOpen && (
        <DropdownMenuContainer>
          <DropdownMenuUl>
            <DropdownMenuLi>Menu Item 1</DropdownMenuLi>
            <DropdownMenuLi>Menu Item 2</DropdownMenuLi>
            <DropdownMenuLi>Menu Item 3</DropdownMenuLi>
          </DropdownMenuUl>
        </DropdownMenuContainer>
      )}
    </>
  );
};

const DropdownMenuContainer = styled.ul`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
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
