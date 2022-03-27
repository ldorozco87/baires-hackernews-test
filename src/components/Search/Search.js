import React from "react";
import { SearchWrapper } from "./styles";

export const Search = ({ onSubmit, placeholder, value, onChange }) => {
  return (
    <SearchWrapper>
      <form className="search-form d-flex justify-center" onSubmit={onSubmit}>
        <input placeholder={placeholder} value={value} onChange={onChange} />
        <button type="submit" className="d-none">
          Search
        </button>
      </form>

      {value && (
        <p className="results-label">
          Results for: <em>{value}</em>
        </p>
      )}
    </SearchWrapper>
  );
};
