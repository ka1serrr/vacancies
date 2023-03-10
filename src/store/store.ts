import { favSlice } from '@/slices/favSlice/favSlice';
import { paginationSlice } from '@/slices/paginationSlice/paginationSlice';
import { userSlice } from '@/slices/userSlice/userSlice';
import { vacanciesApiSlice } from '@/api/vacanciesApiSlice';
import { recommendedApiSlice } from '@/api/recommendedApiSlice';
import { vacancyApiSlice } from '@/api/cardItemApiSlice';
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
  whitelist: ['fav', 'user'],
};

const rootReducer = combineReducers({
  fav: favSlice.reducer,
  pagination: paginationSlice.reducer,
  user: userSlice.reducer,
  [vacanciesApiSlice.reducerPath]: vacanciesApiSlice.reducer,
  [recommendedApiSlice.reducerPath]: recommendedApiSlice.reducer,
  [vacancyApiSlice.reducerPath]: vacancyApiSlice.reducer,
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
    })
      .concat(vacanciesApiSlice.middleware)
      .concat(recommendedApiSlice.middleware)
      .concat(vacancyApiSlice.middleware),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
