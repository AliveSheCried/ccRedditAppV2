import React from "react";

export const IconCard = ({
  svg = "test",
  label = "hot",
  endpoint = "xyz",
  handleSubmit = "abc",
}) => {
  return (
    <button className="icons__btn" type="submit" onClick={handleSubmit}>
      {svg}
      <span className="icons__btn-label">{label}</span>
    </button>
  );
};
