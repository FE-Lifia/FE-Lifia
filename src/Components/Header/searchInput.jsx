import styled from "styled-components";

const searchInput = () => {
  return (
    <SearchWrapper>
      <SearchInputStyle type="text" placeholder="Search" />
      <button>Search</button>
    </SearchWrapper>
  );
};

const SearchInputStyle = styled.input`
  border: none;
  font-size: 16px;
  padding: 5px;
  margin-left: 10px;
  width: 200px;
  &:focus {
    outline: none;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #495b87;
  border-radius: 5px;
  padding: 5px;
  &:focus {
    outline: none;
    border: 1px solid #3b5eae;
  }
`;

export default searchInput;
