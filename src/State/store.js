import { configureStore } from "@reduxjs/toolkit";
//import Reducer
import authReducer from "./authSlice";
// import fetch api Reducer
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
