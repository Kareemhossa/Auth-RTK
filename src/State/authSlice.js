import { createSlice } from "@reduxjs/toolkit";

export const authUser = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    signIn: (state, action) => {
      const { user, acssesToken } = action.payload;
      state.user = user;
      state.token = acssesToken;
    },
    signOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { signIn, signOut } = authUser.actions;
