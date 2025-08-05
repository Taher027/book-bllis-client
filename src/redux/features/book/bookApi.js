import { baseApi } from "../../api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/books/add-book",
        method: "POST",
        body: bookData,
      }),
    }),
    getBooks: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params?.searchTerm) {
          queryParams.append("searchTerm", params.searchTerm);
          return `/books?${queryParams.toString()}`;
        } else {
          return `/books`;
        }
      },
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddBookMutation, useGetBooksQuery, useGetSingleBookQuery } =
  bookApi;
