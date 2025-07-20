import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authors: [],
  publications: [],
  bookGenre: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setAuthors: (state, action) => {
      const index = state.authors.indexOf(action.payload);
      if (index === -1) {
        state.authors.push(action.payload);
      } else {
        state.authors.splice(index, 1);
      }
    },
    setPublications: (state, action) => {
      const index = state.publications.indexOf(action.payload);
      if (index === -1) {
        state.publications.push(action.payload);
      } else {
        state.publications.splice(index, 1);
      }
    },
    setGenre: (state, action) => {
      state.bookGenre = action.payload;
      state.authors = [];
      state.publications = [];
    },
  },
});
export const { setAuthors, setPublications, setGenre } = bookSlice.actions;
export default bookSlice.reducer;
