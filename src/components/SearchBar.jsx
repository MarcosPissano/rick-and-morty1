import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  return (
    <SearchBarContainer className="search-bar">
      <SearchInput
        type="text"
        placeholder="Buscar personaje"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Agregar</SearchButton>
    </SearchBarContainer>
  );
}
