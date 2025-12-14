import requestToApi from "./request-to-api";

export const loginRequest = (email, password) =>
  requestToApi.post("/auth/login", { email, password });
