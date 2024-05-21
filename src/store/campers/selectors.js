import { createSelector } from '@reduxjs/toolkit';
import {
  selectDetailsFilter,
  selectIsSetFilter,
  selectLocationFilter,
  selectTypeFilter,
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
  [
    selectAllCampers,
    selectLocationFilter,
    selectTypeFilter,
    selectDetailsFilter,
    selectVisibleCampers,
  ],
  (campers, location, type, details, visible) => {
    let filtered = campers;

    if (!location && !type.length && !details.length) {
      return visible;
    }

    if (location) {
      filtered = filtered.filter(el => {
        return el.location.toLowerCase().includes(location.toLocaleLowerCase());
      });
    }

    if (type.length) {
      filtered = filtered.filter(camper => type.includes(camper.form));
    }

    if (details.length) {
      // filtered = filtered.filter(camper => type.includes(camper.details));
    }

    return filtered;
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
