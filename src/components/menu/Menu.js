import React, { useEffect } from "react";
import {
  getSubRedditData,
  subRedditSelector,
  subRedditErrorSelector,
  subRedditLoadingSelector,
} from "../../store/subReddit-slice";
import { useDispatch, useSelector } from "react-redux";

export const Menu = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(subRedditSelector);
  console.log(subReddits);

  useEffect(() => {
    dispatch(getSubRedditData());
  }, [dispatch]);

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
