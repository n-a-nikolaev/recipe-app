import { requestToApi } from "./request-to-api";

export const registerRequest = (username, email, password) =>
  requestToApi.post("/auth/register", { username, email, password });
