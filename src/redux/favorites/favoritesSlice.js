import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = () => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToStorage = (favorites) => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch {
    return;
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: loadFromStorage(),
  },
  reducers: {
    toggleFavorite(state, action) {
      const camper = action.payload;
      const exists = state.items.find((item) => item.id === camper.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }
      saveToStorage(state.items);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
