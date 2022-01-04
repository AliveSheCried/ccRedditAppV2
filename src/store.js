import { configureStore } from "@reduxjs/toolkit";
import subRedditSlice from "./store/subReddit-slice";

export default configureStore({
  reducer: {
    subReddits: subRedditSlice.reducer,
  },
});
