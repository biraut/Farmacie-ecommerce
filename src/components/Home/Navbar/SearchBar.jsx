import { SearchBarContainer, Input, ButtonS } from "./navbar.style";
import React, {useState} from "react";

const SearchBar=({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearch = () => {
      onSearch(searchTerm);
    };

    return(
        <SearchBarContainer>
            <Input type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ButtonS onClick={handleSearch}>
        
      </ButtonS>

        </SearchBarContainer>
        
    );
};

export default SearchBar;