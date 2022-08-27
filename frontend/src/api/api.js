import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_SERVER_URL } = process.env;

const API = axios.create({
  baseURL: `${devEnv && REACT_APP_SERVER_URL}`,
});

API.interceptors.request.use((req) => {
  const accessToken = localStorage.accessToken;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

export default API;
