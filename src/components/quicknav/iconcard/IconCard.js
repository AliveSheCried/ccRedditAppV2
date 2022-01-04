import React from "react";
import { svgHot, svgNew, svgRising, svgTop } from "../../../assets/images/svg";

export const IconCard = ({ svg, label, endpoint }) => {
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
    console.log(selectedEndpoint);
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
