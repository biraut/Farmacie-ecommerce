import {
  SearchBarContainer,
  Input,
  ButtonS,
  SuggestionsList,
  SuggestionItem,
  SuggestionImage,
} from "./Navbar.style";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim() !== "") {
        const response = await fetch(
          `http://localhost:3001/prods?q=${searchTerm.toLowerCase()}`
        );
        const data = await response.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const resetSearch = () => {
    setSearchTerm("");
    setSuggestions([]);
  };

  const handleSearch = () => {
    if (suggestions.length > 0) {
      navigate(`/produs/${suggestions[0].id}`);
      resetSearch();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/produs/${id}`);
    resetSearch();
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <ButtonS onClick={handleSearch}>Search</ButtonS>
      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((product) => (
            <SuggestionItem
              key={product.id}
              onClick={() => handleSuggestionClick(product.id)}
            >
              <SuggestionImage src={product.img} alt={product.name} />
              {product.name}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
