import { createSlice } from "@reduxjs/toolkit";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {},
});

export default campersSlice.reducer;
