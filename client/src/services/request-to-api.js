import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);
export const requestToApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // backend URL
  withCredentials: true, // allow cookies
  cors: true,
});
