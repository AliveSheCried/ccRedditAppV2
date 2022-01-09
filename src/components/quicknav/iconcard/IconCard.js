import React from "react";
import { svgHot, svgNew, svgRising, svgTop } from "../../../assets/images/svg";
import { useDispatch } from "react-redux";
import { setSubreddit } from "../../../store/posts-slice";

export const IconCard = ({ svg, label, endpoint }) => {
  const dispatch = useDispatch();
  let selectedSvg;
  if (svg === "svgHot") {
    selectedSvg = svgHot;
  } else if (svg === "svgNew") {
    selectedSvg = svgNew;
  } else if (svg === "svgTop") {
    selectedSvg = svgTop;
  } else if (svg === "svgRising") {
    selectedSvg = svgRising;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let selectedEndpoint = event.currentTarget.dataset.endpoint;
    dispatch(setSubreddit(selectedEndpoint));
  };

  return (
    <button
      className="icons__btn"
      type="submit"
      onClick={handleSubmit}
      data-endpoint={endpoint}
    >
      {selectedSvg}
      <span className="icons__btn-label">{label}</span>
    </button>
  );
};
