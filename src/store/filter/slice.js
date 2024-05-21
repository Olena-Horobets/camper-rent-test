import { createSlice } from '@reduxjs/toolkit';

const initialState = { location: '', details: [], type: [], transmission: [] };

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
    toggleDetailsFilterAction: (state, { payload }) => {
      const idx = state.details.findIndex(el => el === payload);

      idx >= 0 ? state.details.splice(idx, 1) : state.details.push(payload);
    },
  },
});

export const {
  setLocationFilterAction,
  resetLocationFilterAction,
  toggleTypeFilterAction,
  toggleDetailsFilterAction,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
