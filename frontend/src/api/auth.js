import API from "./api";

const authAPI = {
  loginGoogle(token) {
    const url = "account/google-login";
    return API.post(url, { token });
  },
  getProfile() {
    const url = "account/profile";
    return API.get(url);
  },
  signIn(data) {
    const url = "account/login";
    return API.post(url, data);
  },
  signUp(data) {
    const url = "account/register";
    return API.post(url, data);
  },
};
export default authAPI;
