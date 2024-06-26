export const selectLocationFilter = state => state.filter.location;

export const selectTypeFilter = state => state.filter.type;

export const selectDetailsFilter = state => state.filter.details;

export const selectIsSetFilter = state => {
  return (
    state.filter.location ||
    state.filter.type.length ||
    state.filter.details.length
  );
};
