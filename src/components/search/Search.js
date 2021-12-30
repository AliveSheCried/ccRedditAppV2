import React from "react";
import { svgSearch } from "../../assets/images/svg";

export const Search = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <button className="search__form-btn" type="submit">
          {svgSearch}
        </button>
        <input
          type="text"
          placeholder="Search post titles"
          className="search__form-input"
          aria-label="Search posts"
          //ref={searchTerm}
        />
      </form>
    </div>
  );
};
