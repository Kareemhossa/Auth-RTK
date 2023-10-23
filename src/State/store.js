// store.js
import { configureStore } from "@reduxjs/toolkit";
import authApi from "./authApiSlice";
import authReducer from "./authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
