import React, { useEffect, useState } from "react";
import {
  getSubRedditData,
  subRedditSelector,
  subRedditErrorSelector,
  subRedditLoadingSelector,
} from "../../store/subReddit-slice";
import { setSubreddit } from "../../store/posts-slice";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../utils/windowDimensions/useWindowDimensions";

export const Menu = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(subRedditSelector);
  //console.log(subReddits);

  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getSubRedditData());
  }, [dispatch]);

  if (width >= 685) {
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
  } else {
    return (
      <div class="menu-collapsed">
        <select
          name="subreddit"
          id="subreddit"
          className="menu-collapsed__select"
        >
          {subReddits.map((sub) => (
            <option
              value="menu a"
              class="menu-collapsed__item"
              key={sub.id}
              onClick={() => dispatch(setSubreddit(sub.url))}
            >
              {sub.url}
            </option>
          ))}
        </select>
      </div>
    );
  }
};
