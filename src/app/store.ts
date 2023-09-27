import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieApi";
import searcherReducer from "./searchParamSlice";

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        searcher: searcherReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});