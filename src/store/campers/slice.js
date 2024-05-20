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
  page: 1,
  isLastPage: false,
  visibleItems: [],
  favorites: [],
};

export const getAllCampersAction = createAsyncThunk(
  'get/campers',
  getAllCampers
);

export const campersSlice = createSlice({
  name: 'campers',
  initialState,

  reducers: {
    getNextPageAction(state) {
      state.page += 1;
      if (state.visibleItems.length + 4 >= state.items.length) {
        state.isLastPage = true;
      }

      const start = state.visibleItems.length;
      state.visibleItems.push(...state.items.slice(start, start + 4));
    },
    addToFavoriteAction(state, { payload }) {
      const index = state.favorites.findIndex(el => el === payload);

      index >= 0
        ? state.favorites.splice(index, 1)
        : state.favorites.push(payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllCampersAction.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.page = 1;
        state.isLastPage = false;
        state.visibleItems = payload.slice(0, 4);
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
export const { getNextPageAction, addToFavoriteAction } = campersSlice.actions;
