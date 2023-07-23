import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authors: [],
  pageCount: 0,
  isLoading: false,
};

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async (currentPage) => {
    const itemsPerPage = 9;
    const response = await axios.get(
      `https://api.quotable.io/authors?limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }`
    );
    return {
      authors: response.data.results,
      pageCount: Math.ceil(response.data.totalCount / itemsPerPage),
    };
  }
);

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.authors = action.payload.authors;
        state.pageCount = action.payload.pageCount;
        state.isLoading = false;
      });
  },
});

export default authorsSlice.reducer;
