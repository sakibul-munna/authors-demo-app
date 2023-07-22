import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authors: [],
  isLoading: false,
};

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async () => {
    const response = await axios.get(`https://api.quotable.io/authors`);
    return {
      authors: response.data.results,
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
        state.isLoading = false;
      });
  },
});

export default authorsSlice.reducer;
