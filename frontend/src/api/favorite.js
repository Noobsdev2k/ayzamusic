import API from "./api";

const favoriteAPI = {
  getFavorite(params) {
    const url = "/music/favorite";
    return API.get(url, { params });
  },
  postCreate(data) {
    const url = "/favorite/create";
    return API.post(url, data);
  },
  getFavoriteAccount(params) {
    const url = "/favorite/get-authorization-token";
    return API.get(url, { params });
  },
};
export default favoriteAPI;
