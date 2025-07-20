import { baseApi } from "../../api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/products/add-product",
        method: "POST",
        body: bookData,
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddBookMutation, useGetBooksQuery, useGetSingleBookQuery } =
  bookApi;
