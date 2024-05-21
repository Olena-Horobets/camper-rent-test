import { createSlice } from '@reduxjs/toolkit';

const initialState = { location: '', details: [], type: [] };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocationFilterAction: (state, { payload }) => {
      state.location = payload;
    },
    resetLocationFilterAction: state => {
      state.location = '';
    },
  },
});

export const { setLocationFilterAction, resetLocationFilterAction } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
