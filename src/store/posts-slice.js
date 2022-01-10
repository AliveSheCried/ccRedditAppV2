import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/api/fetchData";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  subreddit: "r/earthporn",
  search: "",
};

const postSlice = createSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostStart(state) {
      state.isLoading = true;
    },
    getPostError(state) {
      state.isLoading = false;
      state.isError = true;
    },
    setSubreddit(state, action) {
      const url = action.payload.replace(/\/$/, "");
      state.subreddit = url;
    },
    setSearch(state, action) {
      const term = action.payload.toLowerCase();
      state.search = term;
    },
    clearSearch(state) {
      state.search = "";
    },
  },
});

/////////////// Exports
//slice
export default postSlice;

//actions
export const {
  getPostError,
  getPostStart,
  getPostSuccess,
  setSubreddit,
  setSearch,
  clearSearch,
} = postSlice.actions;

//selectors
export const getPostSelector = (state) => state.posts.posts;
export const getPostErrorSelector = (state) => state.posts.isError;
export const getPostLoadingSelector = (state) => state.posts.isLoading;
export const getSubredditSelector = (state) => state.posts.subreddit;
export const getSearchSelector = (state) => state.posts.search;

/////////////// Thunk
export const getPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(getPostStart());
    const posts = await fetchData(subreddit);
    dispatch(getPostSuccess(posts));
  } catch (error) {
    dispatch(getPostError());
  }
};
