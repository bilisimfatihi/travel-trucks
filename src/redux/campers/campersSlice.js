import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCamperById } from "./campersOps";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    selectedCamper: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
  },
  reducers: {
    resetCampers(state) {
      state.campers = [];
      state.page = 1;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Campers All
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        if (state.page === 1) {
          state.campers = action.payload.items;
          state.total = action.payload.total;
        } else {
          state.campers.push(...action.payload.items);
          state.total = action.payload.total;
        }
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
        state.selectedCamper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { resetCampers, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;
