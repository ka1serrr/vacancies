import {favSlice} from "./slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    PersistConfig,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    whitelist: ['fav']
}

const rootReducer = combineReducers({
    fav: favSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>