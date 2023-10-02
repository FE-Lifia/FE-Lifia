import styled from "styled-components";

const DropdownMenu = () => {
  return <DropdownMenuContainer></DropdownMenuContainer>;
};

const DropdownMenuContainer = styled.div`
  overflow: hidden;
  height: 370px;
  background-color: #fff;
  position: absolute;
  top: 99px;
  left: 0;
  width: 100%;
  z-index: 90;
`;

// const DropdownMenuUl = styled.ul`
//   flex-direction: column;
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const DropdownMenuLi = styled.li`
//   font-size: 16px;
//   color: #333;
//   padding: 10px;
//   cursor: pointer;
// `;

export default DropdownMenu;
