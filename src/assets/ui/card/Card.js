import React from "react";

export const Card = (props) => {
  return (
    <div className={props.modal ? props.modal : "card"}>{props.children}</div>
  );
};
