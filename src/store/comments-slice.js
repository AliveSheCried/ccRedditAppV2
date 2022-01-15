import { createSlice } from "@reduxjs/toolkit";

import { fetchData } from "../utils/api/fetchData";
const initialState = {
  comments: [],
  isLoading: false,
  isError: false,
  permalink: "",
};

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState: initialState,
  reducers: {
    getCommentsStart(state) {
      state.isLoading = true;
    },
    getCommentsError(state) {
      state.isError = true;
    },
    getCommentsSuccess(state, action) {
      state.isLoading = false;
      state.comments = action.payload;
    },
    clearComments(state) {
      state.comments = [];
    },
    getPermaLink(state, action) {
      state.permalink = action.payload;
    },
  },
});

///////// Exports
//slice
export default commentsSlice;

//actions
export const {
  getCommentsStart,
  getCommentsError,
  getCommentsSuccess,
  getPermaLink,
  clearComments,
} = commentsSlice.actions;

//selectors
export const getCommentsSuccessSelector = (state) => state.comments.comments;
export const getCommentsStartSelector = (state) => state.comments.isLoading;
export const getCommentsErrorSelector = (state) => state.comments.isError;
export const getPermaLinkSelector = (state) => state.comments.permalink;

///////// Thunk to get comments
export const getComments = (permaLink) => async (dispatch) => {
  try {
    dispatch(getCommentsStart());
    const comments = await fetchData(permaLink);
    dispatch(getCommentsSuccess(comments));
  } catch (error) {
    dispatch(getCommentsError());
  }
};
