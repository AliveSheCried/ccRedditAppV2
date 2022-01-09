import React from "react";
import { Card } from "../../assets/ui/card/Card";
import { convertUTCTimeToRelative } from "../../utils/convertTime/convert-time";

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
  //check if post has image or not
  console.log(image);
  const postImage =
    image.includes("jpg") || image.includes("gif") ? (
      <div className="post__img">
        <img src={image} alt="post photograph" />
      </div>
    ) : null;

  //convert received utc time to relative time
  const postRelativeTime = convertUTCTimeToRelative(createdDate);

  return (
    <Card>
      <article>
        <div className="post-meta">
          <div className="post-meta__author">
            Posted by <span className="post-meta__author--pink">{author}</span>
          </div>
          <div className="post-meta__time">{postRelativeTime} ago</div>
        </div>
        <div className="post-title">{title}</div>

        {postImage && postImage}
        {/* <Comments /> */}
      </article>
    </Card>
  );
};
