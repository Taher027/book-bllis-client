import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import bookReducer from "./features/book/bookSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
