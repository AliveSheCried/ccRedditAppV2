import React, { useEffect } from "react";
import {
  getSubRedditData,
  subRedditSelector,
  subRedditErrorSelector,
  subRedditLoadingSelector,
} from "../../store/subReddit-slice";
import { setSubreddit } from "../../store/posts-slice";
import { useDispatch, useSelector } from "react-redux";

export const Menu = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(subRedditSelector);
  //console.log(subReddits);

  useEffect(() => {
    dispatch(getSubRedditData());
  }, [dispatch]);

  return (
    <ul className="menu-full">
      {subReddits.map((sub) => (
        <li className="menu-full__item" key={sub.id}>
          <button
            type="button"
            className="menu-full__item--button"
            onClick={() => dispatch(setSubreddit(sub.url))}
          >
            {sub.url}
          </button>
        </li>
      ))}
    </ul>
  );
};
