import React, { Fragment } from "react";
import { Comments } from "./comments/Comments";

export const PostDetail = ({
  author = "The King",
  time = "18 hours ago",
  title = "He slashed them",
  //   img = "../../../assets/images/fly-d--N1Z-PJebZ0-unsplash.jpg",
}) => {
  return (
    <Fragment>
      <div className="post-meta">
        <div className="post-meta__author">
          Posted by <span className="post-meta__author--blue">{author}</span>
        </div>
        <div className="post-meta__time">{time}</div>
      </div>
      <div className="post-title">{title}</div>

      <div className="post-img">
        <img
          src={require("../../assets/images/fly-d--N1Z-PJebZ0-unsplash.jpg")}
          alt="some autumnal leaves"
        />
      </div>
      <Comments />
    </Fragment>
  );
};
