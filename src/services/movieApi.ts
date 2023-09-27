import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { basicUrlSnips, requestsList } from "../utils/env-exporter";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${basicUrlSnips.baseUrl}` }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ query }) => {
        return {
          url: `${requestsList.fetchBySearchURL}${query}${requestsList.endingBySearchURL}`,
          method: "get",
        };
      },
    }),
    getMoviesById: builder.mutation({
      query: ({ query }) => {
        return {
          url: `/movie/${query}?api_key=${basicUrlSnips.apiKey}`,
          method: "get",
        };
      },
    }),
    getTrendingMovies: builder.mutation({
      query: () => {
        return {
          url: `${requestsList.fetchTrending}`,
          method: "get",
        };
      },
    }),
    getHorrorMovies: builder.mutation({
      query: () => {
        return {
          url: `${requestsList.fetchHorrorMovies}`,
          method: "get",
        };
      },
    }),
    getActionMovies: builder.mutation({
      query: () => {
        return {
          url: `${requestsList.fetchActionMovies}`,
          method: "get",
        };
      },
    }),
    getComedyMovies: builder.mutation({
      query: () => {
        return {
          url: `${requestsList.fetchComedyMovies}`,
          method: "get",
        };
      },
    }),
  }),
});

export const {
  useGetMoviesMutation,
  useGetHorrorMoviesMutation,
  useGetActionMoviesMutation,
  useGetComedyMoviesMutation,
  useGetTrendingMoviesMutation,
  useGetMoviesByIdMutation,
} = movieApi;
