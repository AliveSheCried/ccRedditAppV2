import React, { useEffect, Fragment } from "react";
import { PostDetail } from "./PostDetail";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonPost } from "../../assets/ui/skeleton/SkeletonPost";
import {
  getPostSelector,
  getPosts,
  getSubredditSelector,
  getSearchSelector,
  clearSearch,
  getPostLoadingSelector,
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
  const isLoading = useSelector(getPostLoadingSelector);

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
        commentCount={post.num_comments}
        image={post.url}
        key={post.id}
        id={post.id}
        permaLink={post.permalink}
      />
    ));

  return (
    <Fragment>
      {isLoading && (
        <ul className="skeleton-post">
          {Array(8)
            .fill()
            .map((post, index) => (
              <li key={index} className="skeleton-post__item">
                <SkeletonPost />
              </li>
            ))}
        </ul>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {allPosts}
      </Masonry>
    </Fragment>
  );
};
