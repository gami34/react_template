import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../chessiti/authentication/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoreState: false,
        ignoreActions: true
      }
    }).concat(thunk)
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
