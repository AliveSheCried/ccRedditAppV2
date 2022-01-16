import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonComments } from "../../../assets/ui/skeleton/SkeletonComments";
import {
  getPermaLinkSelector,
  getCommentsSuccessSelector,
  getComments,
  getCommentsIsLoadingSelector,
} from "../../../store/comments-slice";
import { convertUTCTimeToRelative } from "../../../utils/convertTime/convert-time";

export const Comments = () => {
  const dispatch = useDispatch();
  const permaLink = useSelector(getPermaLinkSelector);
  const comments = useSelector(getCommentsSuccessSelector);
  const isLoading = useSelector(getCommentsIsLoadingSelector);

  useEffect(() => {
    dispatch(getComments(permaLink));
  }, [dispatch, permaLink]);

  const commentList = comments.map((comment) => (
    <div className="comments__detail">
      <span className="comments__detail-user">{comment.author}</span>
      <span className="comments__detail-time">
        {convertUTCTimeToRelative(comment.created_utc)}
      </span>
      <p className="comments__detail-text">{comment.body}</p>
    </div>
  ));

  return (
    <Fragment>
      {isLoading && <SkeletonComments />}
      <div className="comments">
        <p className="comments__title">Comments</p>
        {commentList}
      </div>
    </Fragment>
  );
};
