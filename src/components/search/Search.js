import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { svgSearch } from "../../assets/images/svg";
import { setSearch } from "../../store/posts-slice";

export const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = searchTerm.current.value.toLowerCase();
    searchTerm.current.value = "";

    dispatch(setSearch(search));
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
          ref={searchTerm}
        />
      </form>
    </div>
  );
};
