import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampersApi, fetchCampersByIdApi } from "../../api/campersApi";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (params, thunkAPI) => {
    try {
      const response = await fetchCampersApi(params);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await fetchCampersByIdApi(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
