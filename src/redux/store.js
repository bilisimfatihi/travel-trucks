import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/campersSlice.js";
import favoritesReducer from "./favorites/favoritesSlice.js";
import filtersReducer from "./filters/filtersSlice.js";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
