import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import axios from "axios";
import "./index.css";
import DropDown from "../DropDown";
import DetailsPage from "../DetailsPage";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsObj, setDetailsObj] = useState({});
  const [query, setQuery] = useState("");

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(
        `http://13.233.158.50:5000/search?q=${encodeURIComponent(query)}`
      );
      setSearchResults(response?.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const debouncedSearch = useCallback(debounce(fetchSearchResults, 500), []);

  const handleSearchInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    setSearchResults([]);
    if (searchTerm.length >= 3) {
      debouncedSearch(searchTerm);
    }
  };

  const handleSearchButtonClick = () => {
    if (query.length > 0) {
      fetchSearchResults(query);
    }
  };
  const handleViewDetails = (data) => {
    setSearchResults([]);
    setDetailsObj(data);
    setShowDetails(true);
  };

  return (
    <div>
      <div className="flex gap-8 w-full positionRelative searchWrapper">
        <input
          id="searchInput"
          type="text"
          value={query}
          onChange={handleSearchInputChange}
          placeholder="Search by name, roll number or class..."
          className="grow-1 rounded-10 pX-10 pY-2 searchInput"
        />
        <button
          className="pX-10 rounded-10 textHero bgCoral"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
        {searchResults && (
          <div className="searchDropDown w-full">
            <DropDown
              data={searchResults}
              onClickFunction={handleViewDetails}
            />
          </div>
        )}
      </div>
      {showDetails && <DetailsPage data={detailsObj} />}
    </div>
  );
};

export default Search;
