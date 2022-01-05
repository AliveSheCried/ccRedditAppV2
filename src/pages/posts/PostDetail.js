import React from "react";
import { Card } from "../../assets/ui/card/Card";
//import { Comments } from "./comments/Comments";

export const PostDetail = ({
  author,
  title,
  score,
  createdDate,
  comments,
  image,
  id,
  permalink,
}) => {
  return (
    <Card>
      <article>
        <div className="post-meta">
          <div className="post-meta__author">
            Posted by <span className="post-meta__author--blue">{author}</span>
          </div>
          <div className="post-meta__time">{createdDate}</div>
        </div>
        <div className="post-title">{title}</div>

        <div className="post-img">
          <img src={image} alt="post photograph" />
        </div>
        {/* <Comments /> */}
      </article>
    </Card>
  );
};
