import requestToApi from "./request-to-api";

export const logoutRequest = () => requestToApi.post("/auth/logout");
