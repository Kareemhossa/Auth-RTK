import { apiSlice } from "./apiSlice";
//if user different URL don't mise add a new url: "/{blabalbal}",
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = userApiSlice;
