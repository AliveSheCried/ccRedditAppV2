import { configureStore } from "@reduxjs/toolkit";
import subRedditSlice from "./store/subReddit-slice";
import postSlice from "./store/posts-slice";

export default configureStore({
  reducer: {
    subReddits: subRedditSlice.reducer,
    posts: postSlice.reducer,
  },
});
