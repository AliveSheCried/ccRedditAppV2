import { configureStore } from "@reduxjs/toolkit";
import subRedditSlice from "./store/subReddit-slice";
import postSlice from "./store/posts-slice";
import commentsSlice from "./store/comments-slice";

export default configureStore({
  reducer: {
    subReddits: subRedditSlice.reducer,
    posts: postSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
