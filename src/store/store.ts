import { favSlice } from '@/favSlice/favSlice';
import { vacanciesApi } from '@/api/vacanciesApiSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['fav'],
};

const rootReducer = combineReducers({
  fav: favSlice.reducer,
  [vacanciesApi.reducerPath]: vacanciesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(vacanciesApi.middleware),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;