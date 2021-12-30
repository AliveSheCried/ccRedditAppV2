import React from "react";
import { IconCard } from "./iconcard/IconCard";
import { svgTop, svgNew, svgRising, svgHot } from "../../assets/images/svg";

export const QuickNav = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="icons">
      <IconCard
        svg={svgHot}
        label="hot"
        endpoint="r/test"
        handleSubmit={handleSubmit}
      />
      <IconCard
        svg={svgNew}
        label="new"
        endpoint="r/test"
        handleSubmit={handleSubmit}
      />
      <IconCard
        svg={svgTop}
        label="Top"
        endpoint="r/test"
        handleSubmit={handleSubmit}
      />
      <IconCard
        svg={svgRising}
        label="rising"
        endpoint="r/test"
        handleSubmit={handleSubmit}
      />
    </form>
  );
};
