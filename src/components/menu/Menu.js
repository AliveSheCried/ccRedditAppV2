import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonMenu } from "../../assets/ui/skeleton/SkeletonMenu";
import { setSubreddit } from "../../store/posts-slice";
import {
  getSubRedditData,
  subRedditLoadingSelector,
  subRedditSelector,
} from "../../store/subReddit-slice";
import useWindowDimensions from "../../utils/windowDimensions/useWindowDimensions";

export const Menu = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(subRedditSelector);
  const isLoading = useSelector(subRedditLoadingSelector);
  //console.log(subReddits);

  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getSubRedditData());
  }, [dispatch]);

  if (width >= 685) {
    return (
      <>
        {isLoading && <SkeletonMenu />}
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
      </>
    );
  } else {
    return (
      <>
        {isLoading && <SkeletonMenu />}
        {!isLoading && (
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
        )}
      </>
    );
  }
};
