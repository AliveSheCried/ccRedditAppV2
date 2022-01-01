import React from "react";

export const Menu = () => {
  return (
    <ul className="menu-full">
      <li className="menu-full__item">
        <button type="button" className="menu-full__item--button">
          menu a
        </button>
      </li>
      <li className="menu-full__item">
        <button type="button" className="menu-full__item--button">
          menu b
        </button>
      </li>
      <li className="menu-full__item">
        <button type="button" className="menu-full__item--button">
          menu c
        </button>
      </li>
      <li className="menu-full__item">
        <button type="button" className="menu-full__item--button">
          menu d
        </button>
      </li>
    </ul>
  );
};
