import React from "react";
import { svgComments, svgHeart } from "../../assets/images/svg";

const PostMeta = ({ score, comments }) => {
  return (
    <div className="post-activity">
      <div className="post__item-ticks">
        {svgHeart}
        <span className="post__count">{score}</span>
      </div>
      <div className="post__item-ticks">
        {svgComments}
        <span className="post__count">{comments}</span>
      </div>
    </div>
  );
};

export default PostMeta;
