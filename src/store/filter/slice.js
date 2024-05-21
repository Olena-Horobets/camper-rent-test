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
    toggleTypeFilterAction: (state, { payload }) => {
      const idx = state.type.findIndex(el => el === payload);

      idx >= 0 ? state.type.splice(idx, 1) : state.type.push(payload);
    },
  },
});

export const {
  setLocationFilterAction,
  resetLocationFilterAction,
  toggleTypeFilterAction,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
