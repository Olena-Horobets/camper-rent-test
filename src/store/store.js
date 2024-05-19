import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { campersReducer } from './campers/slice';
import { filterReducer } from './filter/slice';

const reducer = combineReducers({
  campers: campersReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
