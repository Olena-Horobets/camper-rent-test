import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { campersReducer } from './campers/slice';
import { filterReducer } from './filter/slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['campers', 'favorites'],
};

const reducer = combineReducers({
  campers: campersReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
