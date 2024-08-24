import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (category) => {
    const res = await axios.get(
      `https://openlibrary.org/subjects/${category}.json`
    );
    return res.data.works;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: {
      fiction: [],
      fantasy: [],
      horror: [],
      romance: [],
      computers: [],
    },
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books[action.meta.arg] = action.payload;
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
