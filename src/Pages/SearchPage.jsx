import React, { useState } from "react";
import SearchBar from "../Components/Search";
import DataTable from "../Components/DataTable";
import "./SearchPage.css";

const SearchPage = () => {
  const [SearchResults, setSearchResults] = useState([]);
  return (
    <div className="pageContainer">
      <div className="w-40 h40">
        <SearchBar setSearchResults={setSearchResults} />
      </div>
      {SearchResults && <DataTable data={SearchResults} />}
    </div>
  );
};
export default SearchPage;
