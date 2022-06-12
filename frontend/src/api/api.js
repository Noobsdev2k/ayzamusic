import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_SERVER_URL } = process.env;
console.log(REACT_APP_SERVER_URL + "/api");
const API = axios.create({
  baseURL: `${devEnv && REACT_APP_SERVER_URL}`,
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
