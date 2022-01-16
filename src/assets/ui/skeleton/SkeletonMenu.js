import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useWindowDimensions from "../../../utils/windowDimensions/useWindowDimensions";

export const SkeletonMenu = () => {
  const { width } = useWindowDimensions();
  if (width >= 685) {
    return (
      <ul className="menu-full">
        {Array(10)
          .fill()
          .map((sub, index) => (
            <li className="menu-full__item" key={index}>
              <button type="button" className="menu-full__item--button">
                <Skeleton width={250} height={20} />
              </button>
            </li>
          ))}
      </ul>
    );
  } else {
    return (
      <div class="menu-collapsed">
        <Skeleton width={250} height={40} />
      </div>
    );
  }
};
