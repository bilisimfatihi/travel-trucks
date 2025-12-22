import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Campers All
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload.items;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get Camper By ID
      .addCase(getCamperById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default campersSlice.reducer;
