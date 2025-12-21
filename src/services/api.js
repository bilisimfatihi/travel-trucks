import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCampersApi = async (params) => {
  const response = await api.get("/campers", { params });
  return response.data;
};

export const fetchCamperByIdApi = async (id) => {
  const response = await api.get(`/campers/${id}`);
  return response.data;
};
