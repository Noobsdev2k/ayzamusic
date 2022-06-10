import API from "./api";

export const getProfile = () => API.post("/account/profile");
export const signIn = (formData) => API.post("/account/login", formData);
export const signUp = (formData) => API.post("/account/register", formData);
export const googleSignIn = (result) =>
  API.post("/account/googleSignIn", result);
