import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    setFilters(state, action) {
      return action.payload;
    },
    resetFilters() {
      return {};
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
