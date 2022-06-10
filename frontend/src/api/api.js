import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { SERVER_URL } = process.env;

const API = axios.create({
  baseURL: `${devEnv && SERVER_URL}`,
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export default API;
