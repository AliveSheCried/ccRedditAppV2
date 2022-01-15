import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Card } from "../../assets/ui/card/Card";
import { Comments } from "../../pages/posts/comments/Comments";
import PostMeta from "../../pages/posts/PostMeta";

export default function Modal({
  isOpen,
  onClose,
  author,
  postRelativeTime,
  title,
  postImage,
  score,
  commentCount,
}) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Fragment>
      <div className="overlay"></div>
      <div className="modal">
        <Card modal="card_modal">
          <article onClick={onClose}>
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
            {isOpen && <Comments />}
          </article>
        </Card>
      </div>
    </Fragment>,

    document.getElementById("portal")
  );
}
