import React, { useEffect, Fragment } from "react";

import { PostDetail } from "./PostDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostSelector,
  getPosts,
  getSubredditSelector,
} from "../../store/posts-slice";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostSelector);
  const subreddit = useSelector(getSubredditSelector);

  useEffect(() => {
    dispatch(getPosts(subreddit));
  }, [dispatch, subreddit]);

  const allPosts = posts.map((post) => (
    <PostDetail
      author={post.author}
      title={post.title}
      score={post.score}
      createdDate={post.created_utc}
      comments={post.num_comments}
      image={post.url}
      key={post.id}
      id={post.id}
      permaLink={post.permalink}
    />
  ));

  return <Fragment>{allPosts}</Fragment>;
};
