import { configureStore } from "@reduxjs/toolkit";
import authorsReducer from "../features/authors/authorSlice.js";

const store = configureStore({
  reducer: {
    authors: authorsReducer,
  },
});

export default store;
