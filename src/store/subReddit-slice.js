import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/api/fetchData";

const initialState = {
  subReddits: [
    { id: 1, url: "r/designporn/" },
    { id: 2, url: "r/dataisbeautiful/" },
    { id: 3, url: "r/earthporn/" },
    { id: 4, url: "r/itookapicture/" },
    { id: 5, url: "r/imaginarymonsters/" },
  ],
  isLoading: false,
  isError: false,
};

const subRedditSlice = createSlice({
  name: "subReddits",
  initialState: initialState,
  reducers: {
    getDataSuccess(state, action) {
      state.subReddits = [...state.subReddits, ...action.payload];
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
export const {
  getDataError,
  getDataStart,
  getDataSuccess,
} = subRedditSlice.actions;

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
