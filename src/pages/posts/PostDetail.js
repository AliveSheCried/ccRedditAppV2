import React, { useState, Fragment } from "react";
import { Card } from "../../assets/ui/card/Card";
import { convertUTCTimeToRelative } from "../../utils/convertTime/convert-time";
import PostMeta from "./PostMeta";
import Modal from "../../components/modal/Modal";
import { Comments } from "./comments/Comments";

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
  const [isOpen, setIsOpen] = useState(false);

  //check if post has image or not
  const postImage =
    image.includes("jpg") || image.includes("gif") || image.includes("png") ? (
      <div className="post__img">
        <img src={image} alt="post photograph" />
      </div>
    ) : null;

  //convert received utc time to relative time
  const postRelativeTime = convertUTCTimeToRelative(createdDate);

  return (
    <Fragment>
      <Card>
        <article onClick={() => setIsOpen(true)}>
          <div className="post-meta">
            <div className="post-meta__author">
              Posted by
              <span className="post-meta__author--pink">{author}</span>
            </div>
            <div className="post-meta__time">{postRelativeTime} ago</div>
          </div>
          <div className="post-title">{title}</div>

          {postImage && postImage}
          <PostMeta score={score} comments={comments} />
        </article>
      </Card>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          author={author}
          postRelativeTime={postRelativeTime}
          title={title}
          postImage={postImage}
          score={score}
          comments={comments}
        />
      )}
    </Fragment>
  );
};
