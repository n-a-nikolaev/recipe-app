import axios from "axios";

const requestToApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // backend URL
  withCredentials: true,
  cors: true, // allow cookies,
});

export default requestToApi;
