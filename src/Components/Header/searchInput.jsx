import styled from "styled-components";

const searchInput = () => {
  return (
    <SearchWrapper>
      <SearchInputStyle type="text" />
    </SearchWrapper>
  );
};

const SearchInputStyle = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 0 5px;
  &:focus {
    outline: none;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #495b87;
  border-radius: 20px;
  padding: 5px;
  width: 165px;
  height: 40px;
  &:focus {
    outline: none;
    border: 2px solid #3b5eae;
  }
`;

export default searchInput;
