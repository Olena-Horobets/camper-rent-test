import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAllCampers } from 'api/campersAPI';
import {
  handleFetcFulfilled,
  handleFetcRejected,
  handleFetchPending,
} from 'store/helpers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const getAllCampersAction = createAsyncThunk(
  'get/campers',
  getAllCampers
);

export const campersSlice = createSlice({
  name: 'campers',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getAllCampersAction.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handleFetchPending)
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        handleFetcFulfilled
      )
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleFetcRejected);
  },
});

export const campersReducer = campersSlice.reducer;
