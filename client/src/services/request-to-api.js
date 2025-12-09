import axios from "axios";

export const requestToApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // backend URL
  withCredentials: true,
  cors: true, // allow cookies,
});
