import { createSelector } from '@reduxjs/toolkit';
import {
  selectIsSetFilter,
  selectLocationFilter,
} from 'store/filter/selectors';

// list selectors
export const selectAllCampers = state => state.campers.items;

export const selectVisibleCampers = state => state.campers.visibleItems;

export const selectFavoritesCampersIds = state => state.campers.favorites;

export const selectFavoritesCampers = createSelector(
  [selectAllCampers, selectFavoritesCampersIds],
  (campers, ids) => {
    return ids.map(el => campers.find(camper => camper._id === el));
  }
);

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectLocationFilter, selectVisibleCampers],
  (campers, location, visible) => {
    if (location) {
      return campers.filter(el => {
        return el.location.toLowerCase().includes(location.toLocaleLowerCase());
      });
    } else {
      return visible;
    }
  }
);

// utils selectors
export const selectIsLoading = state => state.campers.isLoading;

export const selectIsLastPage = state => state.campers.isLastPage;

export const isLoadMoreShown = createSelector(
  [selectIsLastPage, selectIsSetFilter],
  (isLastPage, isFilter) => {
    return !isLastPage && !isFilter;
  }
);
