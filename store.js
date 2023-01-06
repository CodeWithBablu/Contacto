import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlices";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  }
});