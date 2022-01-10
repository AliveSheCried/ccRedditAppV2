import React, { useEffect } from "react";
import { PostDetail } from "./PostDetail";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostSelector,
  getPosts,
  getSubredditSelector,
  getSearchSelector,
  clearSearch,
} from "../../store/posts-slice";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostSelector);
  const subreddit = useSelector(getSubredditSelector);
  const search = useSelector(getSearchSelector);

  useEffect(() => {
    dispatch(getPosts(subreddit));
    dispatch(clearSearch());
  }, [dispatch, subreddit]);

  const allPosts = posts
    .filter((post) => post.title.toLowerCase().includes(search))
    .map((post) => (
      <PostDetail
        author={post.author}
        title={post.title}
        score={post.score}
        createdDate={post.created_utc}
        comments={post.num_comments}
        image={post.url}
        c1
        key={post.id}
        id={post.id}
        permaLink={post.permalink}
      />
    ));

  // return <Fragment>{allPosts}</Fragment>;
  //  return <div className="posts__wrapper">{allPosts}</div>;
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {allPosts}
    </Masonry>
  );
};
