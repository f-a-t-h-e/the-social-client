import { configureStore } from "@reduxjs/toolkit";

// redux-persist imports
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import rootReducer from "./rootReducer";

const persistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
