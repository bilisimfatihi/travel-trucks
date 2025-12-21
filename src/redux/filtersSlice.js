import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {},
  },
  reducers: {},
});

export default filtersSlice.reducer;
