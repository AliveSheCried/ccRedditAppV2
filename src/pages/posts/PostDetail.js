import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { getPermaLink, clearComments } from "../../store/comments-slice";
import { Card } from "../../assets/ui/card/Card";
import { convertUTCTimeToRelative } from "../../utils/convertTime/convert-time";
import PostMeta from "./PostMeta";
import Modal from "../../components/modal/Modal";

export const PostDetail = ({
  author,
  title,
  score,
  createdDate,
  commentCount,
  image,
  permaLink,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  //console.log(author, permaLink);

  //check if post has image or not
  const postImage =
    image.includes("jpg") || image.includes("gif") || image.includes("png") ? (
      <div className="post__img">
        <img src={image} alt="post photograph" />
      </div>
    ) : null;

  //convert received utc time to relative time
  const postRelativeTime = convertUTCTimeToRelative(createdDate);

  const handleOpen = () => {
    setIsOpen(true);
    dispatch(getPermaLink(permaLink));
  };

  const handleClose = () => {
    setIsOpen(false);
    dispatch(clearComments());
  };

  return (
    <Fragment>
      <Card>
        <article onClick={handleOpen}>
          <div className="post-meta">
            <div className="post-meta__author">
              Posted by
              <span className="post-meta__author--pink">{author}</span>
            </div>
            <div className="post-meta__time">{postRelativeTime} ago</div>
          </div>
          <div className="post-title">{title}</div>

          {postImage && postImage}
          <PostMeta score={score} comments={commentCount} />
        </article>
      </Card>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          author={author}
          postRelativeTime={postRelativeTime}
          title={title}
          postImage={postImage}
          score={score}
          commentCount={commentCount}
        />
      )}
    </Fragment>
  );
};
