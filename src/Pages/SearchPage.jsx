import React from "react";
import SearchBar from "../Components/Search";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="pageContainer">
      <div className="searchOuter">
        <SearchBar />
      </div>
    </div>
  );
};
export default SearchPage;
