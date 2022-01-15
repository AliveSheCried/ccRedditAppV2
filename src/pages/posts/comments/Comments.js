import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPermaLinkSelector,
  getCommentsSuccessSelector,
  getComments,
} from "../../../store/comments-slice";

export const Comments = () => {
  const dispatch = useDispatch();
  const permaLink = useSelector(getPermaLinkSelector);
  const comments = useSelector(getCommentsSuccessSelector);

  useEffect(() => {
    dispatch(getComments(permaLink));
  }, [dispatch, permaLink]);

  const commentList = comments.map((comment) => (
    <div className="comments__detail">
      <span className="comments__detail-user">{comment.author}</span>
      <span className="comments__detail-time">{comment.created_utc}</span>
      <p className="comments__detail-text">{comment.body}</p>
    </div>
  ));

  return (
    <div className="comments">
      <p className="comments__title">Comments</p>
      {commentList}
    </div>
  );
};
