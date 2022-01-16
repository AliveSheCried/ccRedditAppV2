import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/api/fetchData";

// If this is added to the initial state as per convention it works as expected.
// But, if a loading skeleton is introduced it causes a problem because it loads before the data is return from the API
// So isLoading is true but there is all data so you have 5 menu options loaded at the same time as the skeleton
// Taking it out and merging with spread after action.payload solves this.

const FIXED_ENDPOINTS = [
  { id: 1, url: "r/designporn/" },
  { id: 2, url: "r/dataisbeautiful/" },
  { id: 3, url: "r/earthporn/" },
  { id: 4, url: "r/itookapicture/" },
  { id: 5, url: "r/imaginarymonsters/" },
];

const initialState = {
  subReddits: [],
  isLoading: false,
  isError: false,
};

const subRedditSlice = createSlice({
  name: "subReddits",
  initialState: initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.subReddits = [...action.payload, ...FIXED_ENDPOINTS];
      state.isLoading = false;
    },
    getDataStart(state) {
      state.isLoading = true;
    },
    getDataError(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

////////////// exports
//slice
export default subRedditSlice;

//actions
export const { getDataError, getDataStart, getDataSuccess } =
  subRedditSlice.actions;

///////////// thunk to get subReddits
export const getSubRedditData = () => async (dispatch) => {
  try {
    dispatch(getDataStart());
    const subReddits = await fetchData("subreddits");
    dispatch(getDataSuccess(subReddits));
  } catch (error) {
    dispatch(getDataError());
  }
};

//selectors
export const subRedditSelector = (state) => state.subReddits.subReddits;
export const subRedditLoadingSelector = (state) => state.subReddits.isLoading;
export const subRedditErrorSelector = (state) => state.subReddits.isError;
