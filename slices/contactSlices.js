import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
}


export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setContactData } = contactSlice.actions;

//Selectors
export const selectContactData = (state) => state.contact.data;

export default contactSlice.reducer;