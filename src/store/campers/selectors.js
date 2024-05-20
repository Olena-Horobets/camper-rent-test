import { createSelector } from '@reduxjs/toolkit';

export const selectAllCampers = state => state.campers.items;

export const selectCampers = state => state.campers.visibleItems;

export const selectFavoritesCampersIds = state => state.campers.favorites;

export const selectIsLoading = state => state.campers.isLoading;

export const selectIsLastPage = state => state.campers.isLastPage;

export const selectFavoritesCampers = createSelector(
  [selectAllCampers, selectFavoritesCampersIds],
  (campers, ids) => {
    return ids.map(el => campers.find(camper => camper._id === el));
  }
);
